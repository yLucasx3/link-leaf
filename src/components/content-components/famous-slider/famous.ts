interface Famous {
  image: string;
  linkleaf_id: string;
  borderRadius: string;
}

export const famousTypes = [
  "monetizers",
  "influencers",
  "retailers",
  "products",
  "musicians",
  "DJs",
  "culture creators",
  "writers",
  "small business",
  "models",
  "health educators",
  "vloggers",
  "ecommerce sellers",
  "wellness leaders",
  "fitness coaches",
  "streamers",
  "bands",
  "podcasters",
  "fashion designers",
  "merch sellers",
  "creators",
  "athletes",
  "models",
];

const flipCardColors = [
  "rgb(210, 232, 35)",
  "rgb(37, 79, 26)",
  "rgb(80, 34, 116)",
  "rgb(233, 192, 233)",
  "rgb(120, 0, 22)",
];

export const getRandomFlipCardColor = () =>
  flipCardColors[Math.floor(Math.random() * flipCardColors.length)];

const famous: Famous[] = [
  {
    image: "/famous-cards/comedy-central.avif",
    linkleaf_id: "comedycentral",
    borderRadius: "60px",
  },
  {
    image: "/famous-cards/funkynutmeg.avif",
    linkleaf_id: "funknutmeg",
    borderRadius: "40px",
  },
  {
    image: "/famous-cards/hbo.avif",
    linkleaf_id: "hbo",
    borderRadius: "20px",
  },
  {
    image: "/famous-cards/laclippers.avif",
    linkleaf_id: "laclippers",
    borderRadius: "150px",
  },
  {
    image: "/famous-cards/pharrell.avif",
    linkleaf_id: "pharrell",
    borderRadius: "70px",
  },
  {
    image: "/famous-cards/selena-gomez.avif",
    linkleaf_id: "selenagomez",
    borderRadius: "10px",
  },
  {
    image: "/famous-cards/tonyhawk.avif",
    linkleaf_id: "tonyhawk",
    borderRadius: "120px",
  },
];

export default famous;
