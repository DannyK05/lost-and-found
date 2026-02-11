import Bell from "../../assets/images/bell.webp";
import MagnifyingGlass from "../../assets/images/magnifying-glass.png";
import Megaphone from "../../assets/images/megaphone.webp";
import Statistics from "../../assets/images/statistics.webp";

export const actions = [
  {
    title: "Report an Item",
    to: "/lost-items",
    icon: Megaphone,
    alt: "Report an item icon",
  },
  {
    title: "Found Item",
    to: "/found-items",
    icon: MagnifyingGlass,
    alt: "Found item icon",
  },
  {
    title: "Notify owner",
    to: "/records",
    icon: Bell,
    alt: "Notify owner icon",
  },
  {
    title: "Manage Reports",
    to: "/records",
    icon: Statistics,
    alt: "Manage reports icon",
  },
];

export const stats = [
  {
    value: "100+",
    description: "Items that were found using this service",
  },
  {
    value: "150+",
    description: "New ads on the site every day",
  },
  {
    value: "110+",
    description: "Items that were returned to the owners",
  },
];
