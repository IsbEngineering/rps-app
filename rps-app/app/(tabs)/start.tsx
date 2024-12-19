import React, { useState } from 'react';

const App: React.FC = () => {
  const [page, setPage] = useState(1);

  // Function to go to the next screen
  const nextPage = () => {
    if (page < 4) {
      setPage(page + 1);
    }
  };

  return (
    <div style={{ position: 'relative', width: '834px', height: '1194px', backgroundColor: '#FFFFFF' }}>
      {/* Ellipse 7 */}
      <div
        style={{
          position: 'absolute',
          width: '153px',
          height: '144px',
          left: '43px',
          top: '79px',
          backgroundColor: '#FFFFFF',
          borderRadius: '50%',
        }}
      />

      {/* Ellipse 8 */}
      <div
        style={{
          position: 'absolute',
          width: '153px',
          height: '144px',
          left: '637px',
          top: '922px',
          backgroundColor: '#FFFFFF',
          borderRadius: '50%',
        }}
      />

      {/* Rectangle 37 */}
      <div
        style={{
          position: 'absolute',
          width: '213px',
          height: '203px',
          left: '78px',
          top: '283px',
          backgroundColor: '#FFFFFF',
          borderRadius: '33px',
        }}
      />

      {/* Rectangle 38 */}
      <div
        style={{
          position: 'absolute',
          width: '213px',
          height: '203px',
          left: '308px',
          top: '283px',
          backgroundColor: '#FFFFFF',
          borderRadius: '33px',
        }}
      />

      {/* 467591872_590470140056201_3372977869798231582_n 1 */}
      <div
        style={{
          position: 'absolute',
          width: '179px',
          height: '197px',
          left: '329px',
          top: '283px',
          backgroundImage: 'url(467591872_590470140056201_3372977869798231582_n.png)',
          backgroundSize: 'cover',
        }}
      />

      {/* 467591872_590470140056201_3372977869798231582_n 2 */}
      <div
        style={{
          position: 'absolute',
          width: '179px',
          height: '197px',
          left: '329px',
          top: '672px',
          backgroundImage: 'url(467591872_590470140056201_3372977869798231582_n.png)',
          backgroundSize: 'cover',
        }}
      />

      {/* Rectangle 39 */}
      <div
        style={{
          position: 'absolute',
          width: '213px',
          height: '203px',
          left: '538px',
          top: '283px',
          backgroundColor: '#FFFFFF',
          borderRadius: '33px',
        }}
      />

      {/* Rectangle 40 */}
      <div
        style={{
          position: 'absolute',
          width: '213px',
          height: '203px',
          left: '78px',
          top: '672px',
          backgroundColor: '#FFFFFF',
          borderRadius: '33px',
        }}
      />

      {/* Rectangle 41 */}
      <div
        style={{
          position: 'absolute',
          width: '213px',
          height: '203px',
          left: '308px',
          top: '672px',
          backgroundColor: '#FFFFFF',
          borderRadius: '33px',
        }}
      />

      {/* Rectangle 42 */}
      <div
        style={{
          position: 'absolute',
          width: '213px',
          height: '203px',
          left: '538px',
          top: '672px',
          backgroundColor: '#FFFFFF',
          borderRadius: '33px',
        }}
      />

      {/* AI */}
      <div
        style={{
          position: 'absolute',
          width: '308px',
          height: '114px',
          left: '107px',
          top: '125px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '66px',
          lineHeight: '80px',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        AI
      </div>

      {/* HUMAN */}
      <div
        style={{
          position: 'absolute',
          width: '308px',
          height: '114px',
          left: '329px',
          top: '965px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '66px',
          lineHeight: '80px',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        HUMAN
      </div>

      {/* 467426548_599554485882546_7552284364583835418_n 1 */}
      <div
        style={{
          position: 'absolute',
          width: '170px',
          height: '185px',
          left: '100px',
          top: '301px',
          backgroundImage: 'url(467426548_599554485882546_7552284364583835418_n.png)',
          backgroundSize: 'cover',
        }}
      />

      {/* 467426548_599554485882546_7552284364583835418_n 2 */}
      <div
        style={{
          position: 'absolute',
          width: '170px',
          height: '185px',
          left: '100px',
          top: '690px',
          backgroundImage: 'url(467426548_599554485882546_7552284364583835418_n.png)',
          backgroundSize: 'cover',
        }}
      />

      {/* 467591872_590470140056201_3372977869798231582_n 3 */}
      <div
        style={{
          position: 'absolute',
          width: '179px',
          height: '197px',
          left: '329px',
          top: '672px',
          backgroundImage: 'url(467591872_590470140056201_3372977869798231582_n.png)',
          backgroundSize: 'cover',
        }}
      />

      {/* 462558833_572625495635186_3850747669413404827_n 1 */}
      <div
        style={{
          position: 'absolute',
          width: '180px',
          height: '195px',
          left: '555px',
          top: '291px',
          backgroundImage: 'url(462558833_572625495635186_3850747669413404827_n.png)',
          backgroundSize: 'cover',
        }}
      />

      {/* 462558833_572625495635186_3850747669413404827_n 2 */}
      <div
        style={{
          position: 'absolute',
          width: '180px',
          height: '195px',
          left: '555px',
          top: '673px',
          backgroundImage: 'url(462558833_572625495635186_3850747669413404827_n.png)',
          backgroundSize: 'cover',
        }}
      />

      {/* manage_accounts_24dp_5985E1_FILL0_wght400_GRAD0_opsz24 2 */}
      <div
        style={{
          position: 'absolute',
          width: '96px',
          height: '96px',
          left: '72px',
          top: '103px',
          backgroundImage: 'url(manage_accounts_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.png)',
          backgroundSize: 'cover',
        }}
      />

      {/* person_24dp_5985E1_FILL0_wght400_GRAD0_opsz24 2 */}
      <div
        style={{
          position: 'absolute',
          width: '96px',
          height: '96px',
          left: '666px',
          top: '946px',
          backgroundImage: 'url(person_24dp_5985E1_FILL0_wght400_GRAD0_opsz24.png)',
          backgroundSize: 'cover',
        }}
      />

      {/* New image and text */}
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

      {/* Additional added section */}
      {/* 462571088_2054086888394993_5176116181788994981_n 1 */}
      <div
        style={{
          position: 'absolute',
          width: '711px',
          height: '658px',
          left: '61px',
          top: '186px',
          backgroundImage: 'url(462571088_2054086888394993_5176116181788994981_n.png)',
          backgroundSize: 'cover',
        }}
      />

      {/* 5점 */}
      <div
        style={{
          position: 'absolute',
          width: '212px',
          height: '152px',
          left: '308px',
          top: '422px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '88px',
          lineHeight: '106px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        5점
      </div>

      {/* 공학동아리 rps-app이었습니다. */}
      <div
        style={{
          position: 'absolute',
          width: '514px',
          height: '72px',
          left: '173px',
          top: '772px',
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
        공학동아리 rps-app이었습니다.
      </div>

      {/* @isb._.engineering */}
      <div
        style={{
          position: 'absolute',
          width: '342px',
          height: '81px',
          left: '259px',
          top: '1101px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '33px',
          lineHeight: '40px',
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        @isb._.engineering
      </div>

      {/* Button to move to the next screen */}
      {page === 1 && (
        <>
          <div
            onClick={nextPage}
            style={{
              position: 'absolute',
              width: '162px',
              height: '65px',
              fontFamily: 'Abel',
              fontSize: '33px',
              lineHeight: '44px',
              top: '900px',
              left: '336px',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              letterSpacing: '-0.025em',
              color: '#FFFFFF',
              backgroundColor: '#92ADFF',
              borderRadius: '33px',
              cursor: 'pointer',
            }}
          >
          
          </div>
        </>
      )}
    </div>
  );
};

export default App;
