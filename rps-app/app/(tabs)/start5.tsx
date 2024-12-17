import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '834px', height: '1194px', background: '#FFFFFF' }}>
      {/* 시작하기 (First Button) */}
      <div style={{
        position: 'absolute',
        width: '382px',
        height: '79px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '44px',
        lineHeight: '53px',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        시작하기
      </div>

      {/* 시작하기 (Second Button) */}
      <div style={{
        position: 'absolute',
        width: '228px',
        height: '60px',
        fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '50px',
        lineHeight: '61px',
        textAlign: 'center',
        color: '#FFFFFF'
      }}>
        시작하기
      </div>

      {/* Rectangle 29 */}
      <div style={{
        position: 'absolute',
        width: '834px',
        height: '1194px',
        background: '#181420'
      }} />

      {/* 시작하기 전 학번과 이름을 알려주세요 */}
      <div style={{
        position: 'absolute',
        width: '740px',
        height: '82px',
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '44px',
        lineHeight: '44px',
        textAlign: 'center',
        letterSpacing: '-0.025em',
        color: '#FFFFFF'
      }}>
        시작하기 전 학번과 이름을 알려주세요
      </div>

      {/* Rectangle 33 */}
      <div style={{
        position: 'absolute',
        width: '341px',
        height: '93px',
        background: '#92ADFF',
        borderRadius: '33px'
      }} />

      {/* 로그인 Button */}
      <div style={{
        position: 'absolute',
        width: '162px',
        height: '65px',
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '33px',
        lineHeight: '44px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '-0.025em',
        color: '#FFFFFF'
      }}>
        로그인
      </div>

      {/* 점수 확인 및 상품 증정에 사용됩니다 */}
      <div style={{
        position: 'absolute',
        width: '508px',
        height: '78px',
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '33px',
        lineHeight: '44px',
        textAlign: 'center',
        letterSpacing: '-0.025em',
        color: '#FFFFFF'
      }}>
        점수 확인 및 상품 증정에 사용됩니다
      </div>

      {/* 학번 */}
      <div style={{
        position: 'absolute',
        width: '205px',
        height: '56px',
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '40px',
        lineHeight: '44px',
        textAlign: 'center',
        letterSpacing: '-0.025em',
        color: '#FFFFFF'
      }}>
        학번
      </div>

      {/* 이름 */}
      <div style={{
        position: 'absolute',
        width: '205px',
        height: '56px',
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '40px',
        lineHeight: '44px',
        textAlign: 'center',
        letterSpacing: '-0.025em',
        color: '#FFFFFF'
      }}>
        이름
      </div>

      {/* Rectangle 34 */}
      <div style={{
        position: 'absolute',
        width: '531px',
        height: '108px',
        background: 'rgba(249, 248, 248, 0.98)',
        borderRadius: '33px'
      }} />

      {/* Group Sections */}
      {[...Array(60)].map((_, index) => (
        <div key={index} style={{
          position: 'absolute',
          width: '531px',
          height: '108px'
        }} />
      ))}

      {/* Rectangle 35 */}
      <div style={{
        position: 'absolute',
        width: '531px',
        height: '108px',
        background: 'rgba(177, 174, 174, 0.54)',
        borderRadius: '33px'
      }} />

      {/* Rectangle 36 */}
      <div style={{
        position: 'absolute',
        width: '531px',
        height: '108px',
        background: 'rgba(249, 248, 248, 0.98)',
        borderRadius: '33px'
      }} />
    </div>
  );
};

export default MyComponent;