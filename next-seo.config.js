const title = "Holistic Women's Health – Community, care, love, and growth.";
const description =
  'Health, diet, and relationship advice.';

const SEO = {
  title,
  description,
  canonical: 'https://holistichealthwomen.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://holistichealthwomen.com',
    title,
    description,
    images: [
      {
        url: 'https://holistichealthwomen.com/static/images/og.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
};

export default SEO;
