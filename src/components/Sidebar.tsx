import React from "react";
import { Box } from "@chakra-ui/react";
import { AvatarBox } from "./AvatarBox";
import { Logo } from "./Logo";

export const Sidebar = () => (
  <React.Fragment>
    <Box w="full">
      <Logo />
    </Box>
    <AvatarBox />
  </React.Fragment>
);