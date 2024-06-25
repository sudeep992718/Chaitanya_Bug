import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

export default function ButtonAppBar() {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          component="img"
          sx={{
            height: 60, // Increased from 64
            width: "auto",
            maxHeight: { xs: 50, sm: 60, md: 70 }, // Adjusted for different screen sizes
            maxWidth: { xs: 160, sm: 200, md: 240 }, // Adjusted for different screen sizes
            marginLeft: 2,
            marginY: 1, // Added vertical margin
          }}
          alt="Filmpire logo"
          src="/images/Academix-logo.png"
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: "4px",
            padding: "2px 8px",
            width: "40%",
          }}
        >
          <SearchIcon sx={{ color: "white", mr: 1 }} />
          <InputBase
            placeholder="Search for a Movie..."
            sx={{
              color: "white",
              "& ::placeholder": { color: "white", opacity: 0.7 },
              flexGrow: 1,
            }}
          />
        </Box>

        <Button
          color="inherit"
          startIcon={<PersonIcon />}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.2)" },
          }}
        >
          LOGIN
        </Button>
      </Toolbar>
    </AppBar>
  );
}
