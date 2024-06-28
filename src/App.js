import React from "react";
import { Box } from "@mui/material";
import ButtonAppBar from "./AppBar";
import PermanentDrawerLeft from "./PermanentDrawer";

import { Provider } from "react-redux";
import { store } from "./store/store";
import Counter from "./components/usestatedemo";

function App() {
  return (
    <Provider store={store}>
      <Box sx={{ display: "flex" }}>
        <ButtonAppBar />
        <PermanentDrawerLeft />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "calc(100vh - 64px)", // Subtracting AppBar height
            marginTop: "64px", // AppBar height
            marginLeft: "240px", // Drawer width
          }}
        >
          <Counter />
        </Box>
      </Box>
    </Provider>
  );
}

export default App;
