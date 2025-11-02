/**
 * @file DashboardPage.tsx
 * @description 로그인한 사용자를 위한 메인 대시보드입니다.
 * 사용자의 프로젝트 목록을 보여주고, 새 프로젝트를 생성하는 링크를 제공합니다.
 */
import React from 'react';

const DashboardPage: React.FC = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Your projects will be listed here.</p>
      {/* Link to create a new project */}
    </div>
  );
};

export default DashboardPage;
