/**
 * @file NewProjectPage.tsx
 * @description 새 프로젝트를 생성하기 위한 단계별 마법사 페이지입니다.
 * GitHub 리포지토리 선택, AWS 계정 연결, 초기 빌드 설정 등의 과정을 안내합니다.
 */
import React from 'react';

const NewProjectPage: React.FC = () => {
  return (
    <div>
      <h2>Create a New Project</h2>
      <p>Select your GitHub repository to get started.</p>
      {/* Repository selection UI */}
    </div>
  );
};

export default NewProjectPage;
