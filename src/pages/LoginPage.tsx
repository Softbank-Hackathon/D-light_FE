/**
 * @file LoginPage.tsx
 * @description 사용자 인증을 처리하는 페이지입니다.
 * GitHub 계정을 통해 로그인하는 기능을 제공합니다.
 */
import React from 'react';

const LoginPage: React.FC = () => {
  return (
    <div>
      <h2>Welcome to D-Light</h2>
      <p>One-click deployment for your web projects.</p>
      <button>Login with GitHub</button>
    </div>
  );
};

export default LoginPage;
