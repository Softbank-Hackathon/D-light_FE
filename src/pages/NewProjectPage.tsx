/**
 * @file NewProjectPage.tsx
 * @description 새 프로젝트 배포를 시작하기 위한 페이지입니다.
 * Git 리포지토리 URL을 입력받습니다.
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper
} from '@mui/material';

const NewProjectPage: React.FC = () => {
  const [repoUrl, setRepoUrl] = useState('');
  const navigate = useNavigate();

  const handleContinue = () => {
    if (repoUrl.trim() === '') {
      alert('Please provide the Git Repository URL.');
      return;
    }
    
    // In a real app, you would make an API call here to register the repoUrl.
    console.log(`Starting deployment for repo: ${repoUrl}`);
    
    // Navigate to the AWS connection page.
    navigate('/projects/new/connect-aws');
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Deploy a New Project
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Provide the Git repository URL to get started.
        </Typography>
        
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <TextField
            required
            fullWidth
            autoFocus // Focus this field on page load
            id="repoUrl"
            label="Git Repository URL"
            name="repoUrl"
            placeholder="https://github.com/user/repo.git"
            value={repoUrl}
            onChange={(e) => setRepoUrl(e.target.value)}
            sx={{ mb: 3 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={handleContinue}
            >
              Continue to AWS Setup
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default NewProjectPage;