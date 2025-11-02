/**
 * @file NewProjectPage.tsx
 * @description 새 프로젝트를 생성하기 위한 페이지입니다.
 * 프로젝트 이름을 입력하고, 생성 후 AWS 계정 연결 단계로 이동합니다.
 */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewProjectPage: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  const handleCreateProject = () => {
    // In a real app, you would make an API call here to create the project.
    // For now, we'll just simulate it and navigate to the next step.
    if (projectName.trim() === '') {
      alert('Please enter a project name.');
      return;
    }
    
    console.log(`Creating project: ${projectName}`);
    
    // After "creating" the project, navigate to the AWS connection page.
    navigate('/projects/new/connect-aws');
  };

  return (
    <div>
      <h2>Create a New Project</h2>
      <p>Enter a name for your new project to begin.</p>
      
      <div style={{ marginTop: '2rem' }}>
        <label htmlFor="projectName">Project Name</label>
        <input
          id="projectName"
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          placeholder="my-awesome-project"
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginTop: '0.5rem' }}
        />
      </div>

      <button onClick={handleCreateProject} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Create Project and Connect AWS
      </button>
    </div>
  );
};

export default NewProjectPage;