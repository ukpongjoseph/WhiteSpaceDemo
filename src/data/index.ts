import {
  type cardCommon,
  type footerType,
  type linkList,
  type planType,
  type testimonial,
} from "../types/index";
import LanguageIcon from "@mui/icons-material/Language";
import CopyrightIcon from "@mui/icons-material/Copyright";

export const navLinks: linkList[] = [
  { text: "Products" },
  { text: "Solutions" },
  { text: "Resources" },
  { text: "Pricing" },
];

export const hero: cardCommon = {
  title: "Get More Done with WhiteSpace",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. Quisquam, et.",
  actionLabel: "Try WhiteSpace free",
};

export const project: cardCommon = {
  title: "Project Co-Ordination",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. Quisquam, et.",
  actionLabel: "Get Started",
};

export const work: cardCommon = {
  title: "Let's work together",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. Quisquam, et.",
  actionLabel: "Try it now",
};

export const extension: cardCommon = {
  title: "Use WhiteSpace as your Extension",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. Quisquam, et.",
  actionLabel: "Let's Go",
};

export const customize: cardCommon = {
  title: "Customize WhiteSpace as you can",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. Quisquam, et.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  actionLabel: "Let's Go",
};

export const plan: cardCommon = {
  title: "Customize WhiteSpace as you can",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. Quisquam, et.Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
};

export const plans: planType[] = [
  {
    plan: "Free",
    price: 0,
    planDescription: "Capture ideas and find them quickly",
    planFeatures: [
      { text: "Sync unlimited devies" },
      { text: "10GB monthly uploads" },
      { text: "200MB max. note size" },
      { text: "Customize Home Dashboard and access several widgets" },
      { text: "Connect primary Google calender account" },
      { text: "Add due dates, reminders and notifications to your tab" },
    ],
    actionLabel: "Get Started",
  },
  {
    plan: "Personal",
    price: 11.99,
    planDescription: "Keep family and home on track",
    planFeatures: [
      { text: "Sync unlimited devies" },
      { text: "10GB monthly uploads" },
      { text: "200MB max. note size" },
      { text: "Customize Home Dashboard and access several widgets" },
      { text: "Connect primary Google calender account" },
      { text: "Add due dates, reminders and notifications to your tab" },
    ],
    actionLabel: "Get Started",
  },
  {
    plan: "Organization",
    price: 49.99,
    planDescription: "Capture ideas and find them quickly",
    planFeatures: [
      { text: "Sync unlimited devies" },
      { text: "10GB monthly uploads" },
      { text: "200MB max. note size" },
      { text: "Customize Home Dashboard and access several widgets" },
      { text: "Connect primary Google calender account" },
      { text: "Add due dates, reminders and notifications to your tab" },
    ],
    actionLabel: "Get Started",
  },
];

export const everywhere: cardCommon = {
  title: "Your work follows you everywhere you go",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. Quisquam, et.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. Quisquam, et.",
  actionLabel: "Try Blacktyga",
};

export const percent: cardCommon = {
  title: "Your data is 100% safe",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. Quisquam, et.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. Quisquam, et.",
  actionLabel: "Read More",
};

export const favorite: cardCommon = {
  title:
    "Make WhiteSpace your favorite App and revolve WhiteSpace around ypur favorite work",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. Quisquam, et.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. Quisquam, et.",
  actionLabel: "Read More",
};

export const client: testimonial[] = [
  {
    title: "Distinguished Engineer/Fellow",
    image: "",
    name: "Joseph Aniekan BCH",
    intro:
      "WhiteSpace is desgined to be a collaboration tool for individuals and teams across  product/project development",
  },
  {
    title: "Distinguished Engineer/Fellow",
    image: "",
    name: "Joseph Aniekan BCH",
    intro:
      "WhiteSpace is desgined to be a collaboration tool for individuals and teams across  product/project development",
  },
  {
    title: "Distinguished Engineer/Fellow",
    image: "",
    name: "Joseph Aniekan BCH",
    intro:
      "WhiteSpace is desgined to be a collaboration tool for individuals and teams across  product/project development",
  },
];

export const tryUs: cardCommon = {
  title: "Give us a try Today",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. ",
  actionLabel: "Try Blacktyga",
};

export const footerSeed: footerType[] = [
  {
    index: "Product",
    links: [
      { text: "Overview" },
      { text: "Pricing" },
      { text: "Customer stories" },
    ],
  },
  {
    index: "Resources",
    links: [
      { text: "Overview" },
      { text: "Pricing" },
      { text: "Customer stories" },
    ],
  },
  {
    index: "Company",
    links: [
      { text: "Overview" },
      { text: "Pricing" },
      { text: "Customer stories" },
    ],
  },
];

export const todayTry: cardCommon = {
  title: "Give us a try Today",
  subtitle:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio numquam quos odio nam vero alias soluta iure nostrum. ",
  actionLabel: "Start Today",
};

export const footerTandC: linkList[] = [
  {
    startIcon: LanguageIcon,
    text: "English",
  },
  {
    text: "Terms and Privacy",
  },
  {
    text: "Security",
  },
  {
    text: "Status",
  },
  {
    startIcon: CopyrightIcon,
    text: "2026 WhiteSpace Inc",
  },
];
