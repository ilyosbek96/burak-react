import React from "react";
// @ts-ignore: allow importing CSS without type declarations
import "../css/index.css";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";

function App() {
  return (
    <Container maxWidth="sm">
      <Stack direction={"column"}>
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component={"h4"}>
            Create Reaact App on TypeScript with REDUX
          </Typography>
        </Box>
        <Box>
          <RippleBadge badgeContent={4}>
            <Button variant="contained">Container</Button>
          </RippleBadge>
        </Box>
      </Stack>
    </Container>
  );
}

export default App;
