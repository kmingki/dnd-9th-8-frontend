export const shareKakao = (route, title) => { // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
    if (window.Kakao) {
      const kakao = window.Kakao;
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_SHARE_KAKAO_LINK_KEY); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
      }
  
      kakao.Link.sendDefault({
        objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
        content: {
          title: title, // 인자값으로 받은 title
          description: "빈틈없는 여행을 위한 준비, Pack it", // 인자값으로 받은 title
          imageUrl: "https://dnd--pack-it.s3.ap-northeast-2.amazonaws.com/share-thumbnail-images/share-thumbnail-images.png",
          link: {
            mobileWebUrl: route, // 인자값으로 받은 route(uri 형태)
            webUrl: route
          }
        },
        buttons: [
          {
            title: "여행 준비 하기",
            link: {
              mobileWebUrl: route,
              webUrl: route
            }
          }
        ]
      });
    }
  };