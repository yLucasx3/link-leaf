export interface Option {
  name: string;
  label: string;
  location: string;
  subOptions?: Option[];
}

const options: Option[] = [
  {
    name: "templates",
    label: "Templates",
    location: "/templates",
  },
  {
    name: "marketplace",
    label: "Marketplace",
    location: "/marketplace",
  },
  {
    name: "discover",
    label: "Discover",
    location: "/discover",
    subOptions: [
      {
        name: "linkleaf-for-instagram",
        label: "Linkleaf for Instagram",
        location: "/discover/instagram",
      },
      {
        name: "linkleaf-for-tiktok",
        label: "Linkleaf for Tiktok",
        location: "/discover/tiktok",
      },
      {
        name: "linkleaf-for-twitter",
        label: "Linkleaf for Twitter",
        location: "/discover/twitter",
        subOptions: [
          {
            name: "linkleaf-for-twitter2",
            label: "Linkleaf for Twitter2",
            location: "/discover/twitter2",
            subOptions: [
              {
                name: "linkleaf-for-twitter3",
                label: "Linkleaf for Twitter3",
                location: "/discover/twitter3",
                subOptions: [
                  {
                    name: "linkleaf-for-twitter4",
                    label: "Linkleaf for Twitter4",
                    location: "/discover/twitter4",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "linkleaf-for-linkedin",
        label: "Linkleaf for Linkedin",
        location: "/discover/linkedin",
      },
    ],
  },
  {
    name: "pricing",
    label: "Pricing",
    location: "/pricing",
  },
  {
    name: "learn",
    label: "Learn",
    location: "/learn",
    subOptions: [
      {
        name: "all-articles",
        label: "All Articles",
        location: "/learn/all-articles",
      },
      {
        name: "creators",
        label: "Creators",
        location: "/learn/creators",
      },
      {
        name: "trends",
        label: "Trends",
        location: "/learn/trends",
      },
      {
        name: "best-pratices",
        label: "Best Pratices",
        location: "/learn/best-pratices",
      },
      {
        name: "company",
        label: "Company",
        location: "/learn/company",
      },
      {
        name: "product-news",
        label: "Product News",
        location: "/learn/product-news",
      },
      {
        name: "help",
        label: "Help",
        location: "/learn/help",
      },
    ],
  },
];

export default options;