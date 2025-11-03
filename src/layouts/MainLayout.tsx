/**
 * @file MainLayout.tsx
 * @description 애플리케이션의 주요 페이지들이 공유하는 레이아웃입니다.
 * 공통 헤더를 포함하며, 현재 페이지의 컨텐츠를 렌더링합니다.
 */
import React from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

const MainLayout: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#1e1e1e' }}>
        <Toolbar>
          <Typography variant="h6" component="div">
            D-Light
          </Typography>
        </Toolbar>
      </AppBar>
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column' 
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;