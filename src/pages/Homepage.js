import React from "react";
import {
  Box,
  Typography
} from "@mui/material";


const wholePageStyle = {
 overflowX: 'hidden'
};

export default function Homepage(props) {
  return (
    <Box sx={wholePageStyle}>
        <Typography variant="h2">Welcome, User 1</Typography>
    </Box>
  );
}