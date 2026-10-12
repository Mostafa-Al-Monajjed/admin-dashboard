// @ts-check
import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
// @ts-ignore
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Header from "../../Component/Header";

const regEmail =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const roles = [
  { value: "Admin", label: "Admin" },
  { value: "Manager", label: "Manager" },
  { value: "User", label: "User" },
];

const Form = () => {
  const getInitialValues = () => {
    if (typeof window === "undefined") {
      return {
        firstname: "",
        lastname: "",
        email: "",
        contactNumber: "",
        address1: "",
        address2: "",
        role: "User",
      };
    }

    const savedData = window.localStorage.getItem("formData");
    return savedData
      ? JSON.parse(savedData)
      : {
          firstname: "",
          lastname: "",
          email: "",
          contactNumber: "",
          address1: "",
          address2: "",
          role: "User",
        };
  };

  const {
    register,
    handleSubmit,
    watch,
    // @ts-ignore
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: getInitialValues(),
  });

  const allValues = watch();

  useEffect(() => {
    window.localStorage.setItem("formData", JSON.stringify(allValues));
  }, [allValues]);

  // @ts-ignore
  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    alert("User Created Successfully!");

    // localStorage.removeItem("formData");
    // reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: "100%",
        p: 2,
      }}
      noValidate
    >
      <Header
        isDashboard={false}
        title={"CREATE USER"}
        subtitle={"Create a new user account here"}
      />
      <Stack direction={"row"} sx={{ gap: 2 }}>
        <TextField
          sx={{ flex: 1 }}
          label="First Name"
          variant="filled"
          {...register("firstname", {
            required: "First name is required",
            minLength: {
              value: 2,
              message: "First name must be at least 2 characters",
            },
          })}
          error={!!errors.firstname}
          // @ts-ignore
          helperText={errors.firstname?.message}
        />
        <TextField
          sx={{ flex: 1 }}
          label="Last Name"
          variant="filled"
          {...register("lastname", {
            required: "Last name is required",
            minLength: {
              value: 2,
              message: "Last name must be at least 2 characters",
            },
          })}
          error={!!errors.lastname}
          // @ts-ignore
          helperText={errors.lastname?.message}
        />
      </Stack>

      <TextField
        label="Email"
        variant="filled"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: regEmail,
            message: "Invalid email address",
          },
        })}
        error={!!errors.email}
        // @ts-ignore
        helperText={errors.email?.message}
      />

      <TextField
        label="Contact Number"
        variant="filled"
        {...register("contactNumber", {
          pattern: {
            value: phoneRegExp,
            message: "Contact number must be a valid phone number",
          },
        })}
        error={!!errors.contactNumber}
        // @ts-ignore
        helperText={errors.contactNumber?.message}
      />

      <TextField label="Address 1" variant="filled" {...register("address1")} />

      <TextField label="Address 2" variant="filled" {...register("address2")} />

      <TextField
        select
        label="Role"
        variant="filled"
        defaultValue={getInitialValues().role}
        {...register("role")}
      >
        {roles.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          sx={{ textTransform: "capitalize" }}
          variant="contained"
          size="large"
        >
          Create New User
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
