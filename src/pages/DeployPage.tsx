/**
 * @file DeployPage.tsx
 * @description 새 프로젝트 배포를 시작하기 위한 페이지입니다.
 * Git 리포지토리 URL을 입력받습니다.
 */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";

const NewProjectPage: React.FC = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const navigate = useNavigate();

  const handleContinue = () => {
    if (repoUrl.trim() === "") {
      alert("Please provide the Git Repository URL.");
      return;
    }

    console.log(`Starting deployment for repo: ${repoUrl}`);

    navigate("/connect");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center", // Center the Paper horizontally
        alignItems: "center", // Center the Paper vertically
        p: 4,
      }}
    >
      <Paper
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "960px", // Control the width
          height: "50vh", // Set height to 1/2 of the viewport height
        }}
      >
        {/* This Box will grow to push the button Box to the bottom */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Deploy a New Project
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Provide the Git repository URL to get started. The repository must
            be public.
          </Typography>

          <Box component="form" noValidate sx={{ mt: 3 }}>
            <TextField
              required
              fullWidth
              autoFocus
              id="repoUrl"
              label="Git Repository URL"
              name="repoUrl"
              placeholder="https://github.com/user/repo.git"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              sx={{ mb: 3 }}
            />
          </Box>
        </Box>

        {/* This Box contains the button and stays at the bottom */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleContinue}
          >
            Continue to AWS Setup
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default NewProjectPage;
