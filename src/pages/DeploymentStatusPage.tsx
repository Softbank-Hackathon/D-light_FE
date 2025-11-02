import React, { useState, useEffect, useRef } from 'react';
import { Box, Container, Paper, Typography, Chip } from '@mui/material';

const mockLogs = [
  'Cloning repository...',
  'Repository cloned successfully.',
  'Starting build process...',
  'Installing dependencies... (npm install)',
  'Dependencies installed.',
  'Running build script... (npm run build)',
  'Build completed.',
  'Preparing for deployment to S3...',
  'Uploading files...',
  '[1/10] Uploaded index.html',
  '[2/10] Uploaded main.css',
  '[3/10] Uploaded bundle.js',
  '[4/10] Uploaded logo.svg',
  '[5/10] Uploaded asset1.png',
  'Files uploaded successfully.',
  'Configuring CloudFront distribution...',
  'Invalidating cache...',
  'Cache invalidation complete.',
  'Deployment successful!',
];

type DeploymentStatus = 'In Progress' | 'Success' | 'Failed';

const DeploymentStatusPage: React.FC = () => {
  const [logs, setLogs] = useState<string[]>([]);
  const [status, setStatus] = useState<DeploymentStatus>('In Progress');
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let logIndex = 0;
    const intervalId = setInterval(() => {
      if (logIndex < mockLogs.length) {
        setLogs(prevLogs => [...prevLogs, mockLogs[logIndex]]);
        if (mockLogs[logIndex].includes('successful')) {
          setStatus('Success');
          clearInterval(intervalId);
        }
        logIndex++;
      } else {
        // Fallback in case the success message isn't the last one
        setStatus('Success');
        clearInterval(intervalId);
      }
    }, 1000); // Add a new log every second

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Auto-scroll to the bottom of the log container
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const getStatusChipColor = (status: DeploymentStatus) => {
    switch (status) {
      case 'Success': return 'success';
      case 'Failed': return 'error';
      case 'In Progress': return 'info';
      default: return 'default';
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" component="h1" sx={{ mr: 2 }}>
          Deployment Status
        </Typography>
        <Chip label={status} color={getStatusChipColor(status)} />
      </Box>
      <Paper 
        ref={logContainerRef}
        sx={{ 
          p: 2, 
          backgroundColor: '#1e1e1e', 
          color: '#d4d4d4', 
          fontFamily: 'monospace',
          height: '60vh',
          overflowY: 'auto',
          whiteSpace: 'pre-wrap'
        }}
      >
        {logs.map((log, index) => (
          <div key={index}>{`> ${log}`}</div>
        ))}
      </Paper>
    </Container>
  );
};

export default DeploymentStatusPage;
