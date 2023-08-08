interface Props {
  title?: string;
  description?: string;
  imageUrl?: string;
}

export const setMetaTags = ({
  title = '이번 여름에 바다 어때?',
  description = '#바다여행 #바다추천 #성향테스트',
  imageUrl = '/background.jpg',
}: Props) => {
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);

  document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);

  document.querySelector('meta[property="og:image"]')?.setAttribute('content', imageUrl);

  document.querySelector('meta[property="og:url"]')?.setAttribute('content', window.location.href);
};
