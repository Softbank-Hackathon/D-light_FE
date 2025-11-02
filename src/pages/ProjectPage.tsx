/**
 * @file ProjectPage.tsx
 * @description 이미 생성된 단일 프로젝트의 허브 역할을 하는 페이지입니다.
 * 배포 이력을 보여주고, 빌드 설정/도메인/환경 변수 등의 관리를 지원하며,
 * 재배포나 롤백 같은 작업을 시작하는 기능을 제공합니다.
 */
import React from 'react';

const ProjectPage: React.FC = () => {
  return (
    <div>
      <h2>Project Details</h2>
      <p>Deployment history, settings, and other details for your project.</p>
    </div>
  );
};

export default ProjectPage;
