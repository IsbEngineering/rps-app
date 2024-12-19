import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div style={{
      position: 'relative',
      width: '834px',
      height: '1194px',
      backgroundColor: '#FFFFFF'
    }}>
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

      {/* Rectangle 20 */}
      <div style={{
        position: 'absolute',
        width: '834px',
        height: '1194px',
        backgroundColor: '#181420'
      }} />

      {/* manage_accounts_24dp_5985E1_FILL0_wght400_GRAD0_opsz24 */}
      <div style={{
        position: 'absolute',
        width: '339px',
        height: '282px',
        backgroundImage: 'url(manage_accounts_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} />

      {/* 그럼 인공지능과 대결하러 가볼까요? */}
      <div style={{
        position: 'absolute',
        width: '514px',
        height: '82px',
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '33px',
        lineHeight: '44px',
        textAlign: 'center',
        top: '480px',
        left: '140px',
        letterSpacing: '-0.025em',
        color: '#FFFFFF'
      }}>
        그럼 인공지능과 대결하러 가볼까요?
      </div>

      {/* Rectangle 23 */}
      <div style={{
        position: 'absolute',
        width: '56px',
        height: '31px',
        top: '540px',
        left: '280px',
        backgroundColor: '#92ADFF',
        borderRadius: '22px'
      }} />

      {/* Rectangle 24 */}
      <div style={{
        position: 'absolute',
        width: '40px',
        height: '31px',
        top: '540px',
        left: '350px',
        backgroundColor: '#FFFAFA',
        borderRadius: '22px'
      }} />

      {/* Rectangle 25 */}
      <div style={{
        position: 'absolute',
        width: '40px',
        height: '31px',
        top: '540px',
        left: '405px',
        backgroundColor: '#FFFAFA',
        borderRadius: '22px'
      }} />

      {/* Rectangle 27 */}
      <div style={{
        position: 'absolute',
        width: '300px',
        height: '80px',
        top: '600px',
        left: '210px',
        backgroundColor: '#92ADFF',
        borderRadius: '33px'
      }} />

      {/* 시작하기 (Third Button) */}
      <div style={{
        position: 'absolute',
        width: '162px',
        height: '65px',
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '33px',
        lineHeight: '44px',
        top: '600px',
        left: '210px',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: '-0.025em',
        color: '#FFFFFF'
      }}>
        시작하기
      </div>
    </div>
  );
};

export default MyComponent;