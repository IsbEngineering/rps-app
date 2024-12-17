import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '834px', height: '1194px', backgroundColor: '#181420' }}>
     
      {/* 462575009_590660623367157_6897003249557465748_n 1 */}
      <div
        style={{
          position: 'absolute',
          width: '582px',
          height: '360px',
          left: '126px',
          top: '335px',
          backgroundImage: 'url(462575009_590660623367157_6897003249557465748_n.png)',
          backgroundSize: 'cover',
        }}
      />

      {/* 좋아요! */}
      <div
        style={{
          position: 'absolute',
          width: '292px',
          height: '77px',
          left: '271px',
          top: '734px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '66px',
          lineHeight: '80px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        좋아요!
      </div>

      {/* 수고 많으셨습니다 */}
      <div
        style={{
          position: 'absolute',
          width: '531px',
          height: '91px',
          left: '156px',
          top: '807px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '44px',
          lineHeight: '53px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        수고 많으셨습니다
      </div>

      {/* Rectangle 46 */}
      <div
        style={{
          position: 'absolute',
          width: '410px',
          height: '96px',
          left: '212px',
          top: '894px',
          backgroundColor: '#92ADFF',
          borderRadius: '33px',
        }}
      />

      {/* 점수 보러가기 */}
      <div
        style={{
          position: 'absolute',
          width: '327px',
          height: '92px',
          left: '251px',
          top: '898px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '55px',
          lineHeight: '67px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        점수 보러가기
      </div>

    </div>
  );
};

export default App;