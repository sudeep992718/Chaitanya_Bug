import React from "react";
import { Box } from "@mui/material";
import ButtonAppBar from "./AppBar";
import PermanentDrawerLeft from "./PermanentDrawer";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <ButtonAppBar />
      <PermanentDrawerLeft />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8, ml: 30 }}>
        {/* Main content goes here */}
      </Box>
    </Box>
  );
}

export default App;
