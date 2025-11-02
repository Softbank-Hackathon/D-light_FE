/**
 * @file DashboardPage.tsx
 * @description 로그인한 사용자를 위한 메인 대시보드입니다.
 * 사용자의 프로젝트 목록을 보여주고, 새 프로젝트를 생성하는 링크를 제공합니다.
 */
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DashboardPage: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleCreateNewProject = () => {
    navigate('/new'); // Navigate to the NewProjectPage
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Your projects will be listed here.</p>
      
      <button 
        onClick={handleCreateNewProject} 
        style={{ 
          marginTop: '20px', 
          padding: '10px 20px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        Create New Project
      </button>
      {/* Project list will go here */}
    </div>
  );
};

export default DashboardPage;