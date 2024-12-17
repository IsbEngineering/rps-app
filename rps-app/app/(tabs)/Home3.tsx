import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ position: 'relative', width: '834px', height: '1194px', backgroundColor: '#FFFFFF' }}>
     
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

      {/* 다시 이겨볼까요? */}
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
        다시 이겨볼까요?
      </div>

    </div>
  );
};

export default App;