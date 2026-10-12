"use client";

import { usePathname } from "next/navigation";
import App from "../../src/App";
import Dashboard from "../../src/Views/dashboard/Dashboard";
import Team from "../../src/Views/team/Team";
import Contacts from "../../src/Views/contacts/Contacts";
import Invoices from "../../src/Views/invoices/Invoices";
import Form from "../../src/Views/form/Form";
import Calendar from "../../src/Views/calendar/Calendar";
import Faq from "../../src/Views/faq/Faq";
import Bar from "../../src/Views/bar/Bar";
import Pie from "../../src/Views/pie/Pie";
import Line from "../../src/Views/line/Line";
import MyCharts from "../../src/Views/mycharts/MyCharts";

const pages = {
  "/": <Dashboard />,
  "/dashboard": <Dashboard />,
  "/team": <Team />,
  "/contacts": <Contacts />,
  "/invoices": <Invoices />,
  "/form": <Form />,
  "/calendar": <Calendar />,
  "/faq": <Faq />,
  "/bar": <Bar />,
  "/pie": <Pie />,
  "/line": <Line />,
  "/mycharts": <MyCharts />,
};

export default function Home() {
  const pathname = usePathname();
  return <App>{pages[pathname as keyof typeof pages] ?? <Dashboard />}</App>;
}
