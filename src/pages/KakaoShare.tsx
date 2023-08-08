// Kakao 함수를 전역에서 사용할 수 있도록 선언
declare global {
  interface Window {
    Kakao: any;
  }
}

export default function KakaoShare() {
  return (
    <div>
      <button
        type='button'
        onClick={() =>
          window.Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
              title: '제 바다를 소개할게요. 당신도 나와 같은 바다라면 같이 갈래요?',
              description: '#바다여행 #바다추천 #성향테스트',
              imageUrl: 'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
              link: {
                mobileWebUrl: 'http://localhost:3000',
                webUrl: 'http://localhost:3000',
              },
            },
            buttons: [
              {
                title: '바다 테스트 하러가기',
                link: {
                  mobileWebUrl: 'https://gibal.net/',
                  webUrl: 'https://gibal.net/',
                },
              },
            ],
          })
        }
      >
        Kakao Share
      </button>
    </div>
  );
}
