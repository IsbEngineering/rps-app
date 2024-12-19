import React from 'react';

const MyComponent: React.FC = () => {
  return (
    <div style={{
      position: 'relative',
      width: '834px',
      height: '1194px',
      backgroundColor: '#FFFFFF'
    }}>

      {/* Rectangle 20 */}
      <div style={{
        position: 'absolute',
        width: '834px',
        height: '1194px',
        backgroundColor: '#181420'
      }} />

      {/* 6836871 1 */}
      <div style={{
        position: 'absolute',
        width: '324px',
        height: '282px',
        
        backgroundImage: 'url(6836871.png)',
        backgroundSize: 'cover'
      }} />

      {/* 안녕하세요. 공학동아리입니다. */}
      <div style={{
        position: 'absolute',
        width: '514px',
        height: '82px',
        fontFamily: 'Passion One',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '33px',
        lineHeight: '44px',
        textAlign: 'center',
        top: '450px',
        left: '130px',
        letterSpacing: '-0.025em',
        color: '#FFFFFF'
      }}>
        안녕하세요 공학동아리입니다.
      </div>

      {/* 어릴적 즐겨왔던 가위바위보 게임 기억하시나요? */}
      <div style={{
        position: 'absolute',
        width: '423px',
        height: '81px',
        fontFamily: 'Palanquin Dark',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '22px',
        lineHeight: '44px',
        textAlign: 'center',
        top: '500px',
        left: '176px',
        letterSpacing: '-0.025em',
        color: '#FFFFFF'
      }}>
        어릴적 즐겨왔던 가위바위보 게임 기억하시나요?
      </div>

      {/* Rectangle 23 */}
      <div style={{
        position: 'absolute',
        width: '56px',
        height: '31px',
        top: '560px',
        left: '340px',
        backgroundColor: '#92ADFF',
        borderRadius: '22px'
      }} />

      {/* Rectangle 24 */}
      <div style={{
        position: 'absolute',
        width: '40px',
        height: '31px',
        top: '560px',
        left: '410px',
        backgroundColor: '#FFFAFA',
        borderRadius: '22px'
      }} />

      {/* Rectangle 25 */}
      <div style={{
        position: 'absolute',
        width: '40px',
        height: '31px',
        top: '560px',
        left: '460px',
        backgroundColor: '#FFFAFA',
        borderRadius: '22px'
      }} />
    </div>
  );
};

export default MyComponent;