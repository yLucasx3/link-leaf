interface FooterOption {
  title: string;
  items: string[];
}

interface SocialOption {
  name: string;
  icon_path: string;
  location: string;
}

export const footerOptions: FooterOption[] = [
  {
    title: "Company",
    items: [
      "The Linkleaf Blog",
      "Engineering Blog",
      "Marketplace",
      "What's New",
      "About",
      "Press",
      "Careers",
      "Social Good",
      "Contact",
    ],
  },
  {
    title: "Community",
    items: [
      "Linkleaf Creator Services Program",
      "Linkleaf for Enterprise",
      "2022 Creator Report",
      "Charities",
      "Creator Profile Directory",
      "Explore Templates",
    ],
  },
  {
    title: "Support",
    items: [
      "Help Topics",
      "Getting Started",
      "Linkleaf Pro",
      "Features & How-Tos",
      "FAQs",
      "Report a Violation",
    ],
  },
  {
    title: "Trust & Legal",
    items: [
      "Terms & Conditions",
      "Privacy Notice",
      "Cookie Notice",
      "Trust Center",
      "Definições de cookies",
    ],
  },
];

export const socialOptions: SocialOption[] = [
  // { name: "App Store", icon_path: "/svgs/app-store.svg", location: "#" },
  // { name: "Google Play", icon_path: "/svgs/google-play.svg", location: "#" },
  { name: "Instagram", icon_path: "/svgs/instagram.svg", location: "#" },
  { name: "Tiktok", icon_path: "/svgs/tiktok.svg", location: "#" },
  { name: "Twitter", icon_path: "/svgs/twitter.svg", location: "#" },
];
