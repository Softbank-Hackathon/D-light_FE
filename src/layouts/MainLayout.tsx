/**
 * @file MainLayout.tsx
 * @description 애플리케이션의 주요 페이지들이 공유하는 레이아웃입니다.
 * 공통 헤더를 포함하며, 현재 페이지의 컨텐츠를 렌더링합니다.
 * 인증이 필요하고 일관된 UI를 유지해야 하는 페이지들이 이 레이아웃을 사용합니다.
 */
import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div>
      <header>
        <h1>D-Light</h1>
        {/* Navigation links can go here */}
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
