import React, { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <Paper
      elevation={3}
      sx={{
        width: 300,
        height: 300,
        p: 3,
        backgroundColor: "#0d253f",
        color: "#01b4e4",
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: '"Playwrite MX", Arial, sans-serif',
          fontWeight: 600,
          textAlign: "center",
        }}
      >
        Counter
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontFamily: '"Playwrite MX", Arial, sans-serif',
          fontWeight: 700,
          color: "#90cea1",
          textAlign: "center",
        }}
      >
        {count}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
        <Button
          variant="contained"
          startIcon={<RemoveIcon />}
          onClick={() => setCount(count - 1)}
          sx={{
            backgroundColor: "#01b4e4",
            "&:hover": { backgroundColor: "#0d253f" },
          }}
        >
          Decrease
        </Button>
        <Button
          variant="contained"
          endIcon={<AddIcon />}
          onClick={() => setCount(count + 1)}
          sx={{
            backgroundColor: "#90cea1",
            color: "#0d253f",
            "&:hover": { backgroundColor: "#01b4e4", color: "#ffffff" },
          }}
        >
          Increase
        </Button>
      </Box>
    </Paper>
  );
}

export default Counter;
