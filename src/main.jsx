import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.jsx";
import Dashboard from "./Pages/dashboard/Dashboard.jsx";
import Team from "./Pages/team/Team.jsx";
import Contacts from "./Pages/contacts/Contacts.jsx";
import Invoices from "./Pages/invoices/Invoices.jsx";
import Form from "./Pages/form/Form.jsx";
import Calendar from "./Pages/calendar/Calendar.jsx";
import Faq from "./Pages/faq/Faq.jsx";
import Bar from "./Pages/bar/Bar.jsx";
import Pie from "./Pages/pie/Pie.jsx";
import MyLineChart from "./Pages/line/Line.jsx";
import MyMapCharts from "./Pages/mycharts/MyCharts.jsx";
import NotFound from "./Pages/notfound/NotFound.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<MyLineChart />} />
      <Route path="mycharts" element={<MyMapCharts />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
