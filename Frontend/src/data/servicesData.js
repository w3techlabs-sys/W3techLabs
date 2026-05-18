// import webImg from "../assets/web.webp";
// import ecommerceImg from "../assets/ecommerce.webp";
// import marketingImg from "../assets/marketing.webp";
import websiteimg from "../assets/WebsiteDevelopment.jfif";
import ecommerceimg from "../assets/Ecommerce.jfif";
import marketingimg from "../assets/DigitalMarketing.jfif";
const servicesData = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Modern, scalable, high-performance websites and web apps.",
    image: websiteimg,
    icon: "💻",
    points: [
      "Fully Responsive",
      "Modern UI Design",
      "SEO Friendly",
    ],
    buttonText: "Discover More",
  },
  {
    id: 2,
    title: "E-Commerce",
    description:
      "Professional online stores built for conversion and growth.",
    image: ecommerceimg,
    icon: "🛒",
    points: [
      "Payment Gateway",
      "Inventory Management",
      "Fast Checkout",
    ],
    buttonText: "Discover More",
  },
  {
    id: 3,
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that increase reach and sales.",
    image: marketingimg,
    icon: "📈",
    points: [
      "Social Campaigns",
      "Paid Ads",
      "Lead Generation",
    ],
    buttonText: "Discover More",
  },
];

export default servicesData;