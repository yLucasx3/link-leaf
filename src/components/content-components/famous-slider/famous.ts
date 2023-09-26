interface Famous {
  image: string;
  linkleaf_id: string;
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

const famous: Famous[] = [
  {
    image: "/famous-cards/comedy-central.avif",
    linkleaf_id: "comedycentral",
  },
  {
    image: "/famous-cards/funknutmeg.avif",
    linkleaf_id: "funknutmeg",
  },
  {
    image: "/famous-cards/hbo.avif",
    linkleaf_id: "hbo",
  },
  {
    image: "/famous-cards/laclippers.avif",
    linkleaf_id: "laclippers",
  },
  {
    image: "/famous-cards/pharrell.avif",
    linkleaf_id: "pharrell",
  },
  {
    image: "/famous-cards/selena-gomez.avif",
    linkleaf_id: "selenagomez",
  },
  {
    image: "/famous-cards/tonyhawk.avif",
    linkleaf_id: "tonyhawk",
  },
];

export default famous;
