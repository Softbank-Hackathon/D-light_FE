/**
 * @file HomePage.tsx
 * @description 서비스의 메인 랜딩 페이지입니다.
 * 사용자에게 서비스를 소개하고, 로그인 페이지로 안내하는 '시작하기' 버튼을 제공합니다.
 */
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>D-Light: One-Click Deployment</h2>
      <p>Instantly deploy your web projects from GitHub to AWS with a single click.</p>
      <Link to="/login">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default HomePage;
