import PopOver from '../PopOver';
import { forwardRef, useState, useEffect } from 'react';
import { ModalPortal } from '../Portal';
import Toast from '../Toast';
import * as S from './SharePopOverStyled';

const { Kakao } = window;

const SharePopOver = forwardRef(({ isOpen, style, handleClose }, ref) => {
  const [showToast, setShowToast] = useState(false);

  const handleUrlShare = () => {
    try {
      const copiedText = `${window.location.href}`;
      navigator.clipboard.writeText(copiedText);
      setShowToast(true);
    } catch (error) {
      alert('클립보드 복사에 실패하였습니다.');
    }
    handleClose();
  };

  const kakaoShare = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Rolling',
        description: '추억의 롤링페이퍼가 웹 속으로!',
        imageUrl: 'https://main--stirring-youtiao-0163ec.netlify.app/mobile_preview.png',
        link: {
          mobileWebUrl: 'https://main--stirring-youtiao-0163ec.netlify.app/',
        },
      },
      buttons: [
        {
          title: '보러가기',
          link: {
            mobileWebUrl: 'https://main--stirring-youtiao-0163ec.netlify.app/',
          },
        },
      ],
    });
  };

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.REACT_APP_KAKAO_KEY);
  }, []);

  return (
    <>
      {showToast && (
        <ModalPortal>
          <Toast setShowToast={setShowToast} />
        </ModalPortal>
      )}
      <PopOver popOverRef={ref} isOpen={isOpen} style={style}>
        <S.Container>
          <S.Btn onClick={kakaoShare}>카카오톡 공유</S.Btn>
          <S.Btn onClick={handleUrlShare}>URL 공유</S.Btn>
        </S.Container>
      </PopOver>
    </>
  );
});

export default SharePopOver;
