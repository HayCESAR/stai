import { IconProps, List, ListItem, Text } from "@chakra-ui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineShoppingBag,
  MdMailOutline,
  MdOutlineFlag,
  MdCalendarToday,
  MdOutlineSupervisorAccount,
  MdOutlineSettingsInputComposite,
  MdOutlineChatBubbleOutline,
  MdOutlineNotificationsActive,
} from "react-icons/md";
import { NavItem } from "./NavItem";

const items = [
  {
    type: "link",
    label: "Dashboard",
    icon: MdOutlineSpaceDashboard,
    path: "/",
  },
  {
    type: "link",
    label: "Products",
    icon: MdOutlineShoppingBag,
    path: "/",
  },
  {
    type: "link",
    label: "Mail",
    icon: MdMailOutline,
    path: "/",
  },
];

export const Navigation = () => (
  <List w="full" my={8}>
    {items.map((item, index) => (
      <ListItem key={index}>
        <NavItem item={item} isActive={index === 0} />
      </ListItem>
    ))}
  </List>
);