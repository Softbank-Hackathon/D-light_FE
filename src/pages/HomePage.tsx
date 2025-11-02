import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, Typography } from "@mui/material";

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/new"); // Navigate to the NewProjectPage
  };

  return (
    <Container maxWidth="md" sx={{ mt: 8, textAlign: "center" }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to D-Light!
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Your ultimate solution for seamless and automated deployments.
      </Typography>
      <Box sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleStart}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
