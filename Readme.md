# Tutorial: Customizing MUI Components and Adding Custom Fonts

This tutorial will guide you through customizing Material-UI (MUI) components and adding custom fonts to your React application. We'll use examples from a movie application to illustrate these concepts.

## 1. Setting Up the Project Structure

First, let's look at the basic structure of our app:

```jsx
// App.js
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
```

This setup creates a layout with an AppBar, a permanent drawer, and a main content area.

## 2. Customizing the AppBar

Let's look at how we've customized the AppBar:

```jsx
// AppBar.js
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
        {/* Logo */}
        <Box
          component="img"
          sx={{
            height: 60,
            width: "auto",
            maxHeight: { xs: 50, sm: 60, md: 70 },
            maxWidth: { xs: 160, sm: 200, md: 240 },
            marginLeft: 2,
            marginY: 1,
          }}
          alt="Filmpire logo"
          src="/images/Academix-logo.png"
        />

        {/* Search Box */}
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

        {/* Login Button */}
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
```

Key customization points:
- Using `sx` prop for custom styling
- Responsive design for the logo using breakpoints
- Custom styling for the search box and login button

## 3. Creating a Custom Drawer

The PermanentDrawerLeft component showcases more advanced customization:

```jsx
// PermanentDrawer.js
import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
// ... (import icons)

const drawerWidth = 240;
const drawerBg = "#0d253f";
const textColor = "#01b4e4";
const hoverBg = "#01b4e4";
const hoverText = "#ffffff";
const dividerColor = "#01b4e4";

// ... (categories and genres arrays)

export default function PermanentDrawerLeft() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: drawerBg,
          color: textColor,
          top: 64,
          height: "calc(100% - 64px)",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Drawer content */}
    </Drawer>
  );
}
```

Key customization points:
- Custom color scheme
- Styling the Drawer paper
- Custom list items with hover effects

## 4. Adding Custom Fonts

To add a custom font:

1. Place your font file in the `public/fonts` directory.

2. Add the font-face declaration in your CSS (e.g., in `index.css`):

```css
@font-face {
  font-family: "Playwrite MX";
  src: url("/public/fonts/PlaywriteMX-VariableFont_wght.ttf")
    format("truetype-variations");
  font-weight: 100 900;
  font-style: normal;
}
```

3. Use the font in your components:

```jsx
<Typography
  variant="subtitle1"
  sx={{
    fontFamily: '"Playwrite MX", Arial, sans-serif',
    fontWeight: 600,
    fontSize: "20px",
  }}
>
  Categories
</Typography>
```

## 5. Responsive Design

MUI makes it easy to create responsive designs:

```jsx
sx={{
  maxHeight: { xs: 50, sm: 60, md: 70 },
  maxWidth: { xs: 160, sm: 200, md: 240 },
}}
```

This sets different values for extra-small (xs), small (sm), and medium (md) screen sizes.

## Conclusion

By leveraging MUI's `sx` prop, custom components, and CSS techniques, you can create highly customized and responsive React applications. Remember to:
- Use the `sx` prop for component-specific styling
- Create custom color schemes for consistency
- Implement responsive designs using breakpoints
- Add custom fonts to enhance your app's typography

With these techniques, you can build unique and visually appealing interfaces while benefiting from MUI's component library and theming system.
