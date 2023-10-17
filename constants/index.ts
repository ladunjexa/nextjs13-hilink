import type {
  NavLinkParams,
  FeatureParams,
  CommonLinkParams,
  FooterContactParams,
} from "@/types";

// NAVIGATION
export const navLinks: NavLinkParams[] = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "pricing ", label: "Pricing " },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

// CAMP SECTION
export const peopleUrl: string[] = [
  "/assets/images/person-1.png",
  "/assets/images/person-2.png",
  "/assets/images/person-3.png",
  "/assets/images/person-4.png",
];

// FEATURES SECTION
export const features: FeatureParams[] = [
  {
    title: "Real maps can be offline",
    icon: "/assets/icons/map.svg",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/assets/icons/calendar.svg",
    variant: "green",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/assets/icons/tech.svg",
    variant: "green",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/assets/icons/location.svg",
    variant: "orange",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];

// FOOTER SECTION
export const footerLinks: CommonLinkParams[] = [
  {
    title: "Learn More",
    links: [
      "About Hilink",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Climbing xixixi", "Hiking hilink", "Hilink kinthill"],
  },
];

export const footerContactInfo: FooterContactParams = {
  title: "Contact Us",
  links: [
    { label: "Admin Officer", value: "123-456-7890" },
    { label: "Email Officer", value: "hilink@akinthil.com" },
  ],
};

export const socials: CommonLinkParams = {
  title: "Social",
  links: [
    "/assets/icons/facebook.svg",
    "/assets/icons/instagram.svg",
    "/assets/icons/twitter.svg",
    "/assets/icons/youtube.svg",
    "/assets/icons/wordpress.svg",
  ],
};
