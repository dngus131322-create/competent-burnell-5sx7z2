import React, { useEffect } from "react";

// CSS 스타일 (우아한 애니메이션과 유리 질감)
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');
  
  body {
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    /* 배경: 천천히 움직이는 오로라 그라데이션 */
    background: linear-gradient(45deg, #4facfe 0%, #00f2fe 50%, #f093fb 100%);
    background-size: 200% 200%;
    animation: gradientMove 10s ease infinite;
    overflow: hidden;
  }

  @keyframes gradientMove {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* 핵심 기술: 글래스모피즘 (반투명 유리 효과) */
  .glass-card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(20px); /* 배경을 흐리게 */
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.4); /* 얇은 흰색 테두리로 빛반사 표현 */
    border-radius: 24px;
    padding: 40px 30px;
    width: 320px;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    color: white;
    text-align: center;
    position: relative;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.4s ease;
    cursor: pointer;
  }

  /* 마우스를 올렸을 때 카드가 살짝 떠오르는 효과 */
  .glass-card:hover {
    transform: translateY(-15px) scale(1.02);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.3);
  }

  .profile-img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin: 0 auto 20px;
    /* 우주/판타지 느낌의 임의 배경 이미지 */
    background: url('https://images.unsplash.com/photo-1534447677768-be436bb09401?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80') center/cover;
    border: 3px solid rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
  }

  .badge {
    background: rgba(0, 0, 0, 0.3);
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    margin-bottom: 15px;
    display: inline-block;
    border: 1px solid rgba(255,255,255,0.2);
    backdrop-filter: blur(5px);
  }

  .name {
    font-size: 26px;
    font-weight: 600;
    margin: 0 0 5px 0;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
  }

  .title {
    font-size: 14px;
    opacity: 0.8;
    margin: 0 0 30px 0;
  }

  .stats {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 20px;
  }

  .stat-box {
    display: flex;
    flex-direction: column;
  }

  .stat-value {
    font-size: 22px;
    font-weight: 600;
  }

  .stat-label {
    font-size: 11px;
    text-transform: uppercase;
    opacity: 0.7;
    margin-top: 4px;
  }
`;

export default function App() {
  // 컴포넌트가 화면에 나타날 때 스타일을 적용합니다.
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  return (
    <div className="glass-card">
      <div className="badge">✨ HERO STATUS</div>
      <div className="profile-img"></div>
      <h2 className="name">Aria Dawnguard</h2>
      <p className="title">Grand Sorceress</p>

      <div className="stats">
        <div className="stat-box">
          <span className="stat-value">99</span>
          <span className="stat-label">Level</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">8.5K</span>
          <span className="stat-label">Mana</span>
        </div>
        <div className="stat-box">
          <span className="stat-value">S+</span>
          <span className="stat-label">Rank</span>
        </div>
      </div>
    </div>
  );
}
