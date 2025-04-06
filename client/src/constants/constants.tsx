import {
  BarChart3,
  Calendar,
  CalendarDays,
  ListTodo,
  User
} from "lucide-react";

export const menuItems = [
  { icon: BarChart3, label: "My Stats", active: true, link: "/" },
  { icon: ListTodo, label: "Create Quests", link: "/create-quest" },
  { icon: User, label: "Profile", link: "/user" },
];
export const TabsTriggerData = [
  {
    name: "Daily Quests",
    icon: ListTodo,
    value: "daily",
  },
  {
    name: "Weekly Goals",
    icon: Calendar,
    value: "weekly",
  },
  {
    name: "Monthly Goals",
    icon: CalendarDays,
    value: "monthly",
  },
];
const TabListData = [
  {
    name: "Daily Quests",
    icon: ListTodo,
    value: "daily",
  },
  {
    name: "Weekly Goals",
    icon: Calendar,
    value: "weekly",
  },
  {
    name: "Monthly Goals",
    icon: CalendarDays,
    value: "monthly",
  },
];
