import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#products", label: "Products" },
  { href: "#about-us", label: "About Us" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    id: 1,
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
    description:
      "Experience unparalleled comfort with the Nike Air Jordan-01. Featuring the largest Air unit in the heel, these sneakers provide a super-soft ride perfect for all-day wear. The breathable mesh upper keeps your feet cool, while the bootie construction ensures a snug, sock-like fit. The rubber outsole offers durability and traction, making these sneakers ideal for both casual outings and athletic activities. Available in a range of striking colorways to suit your personal style.",
  },
  {
    id: 2,
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
    description: "Push your limits with the Nike Air Jordan-10. Engineered for stability and comfort, these running shoes feature a wonderful upper that combines breathability with a secure fit. The React foam midsole delivers a soft, responsive ride, helping to reduce the risk of injury. The wide platform and rubber outsole provide excellent grip and stability, perfect for long-distance runs. Choose from a variety of dynamic color combinations to match your running gear."
  },
  {
    id: 3,
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
    description: "Step into retro style with the Nike Air Jordan-100. These sneakers bring back the classic basketball silhouette with a modern twist. The leather and synthetic upper offers durability, while the vintage treatment on the midsole gives an authentic, worn-in look. The padded collar provides extra comfort, and the rubber outsole with a herringbone pattern ensures superior traction. Ideal for casual wear, these sneakers add a touch of old-school cool to any outfit. Available in timeless color options."
  },
  {
    id: 4,
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
    description: "Experience unparalleled comfort with the Nike Air Jordan-001. Featuring the largest Air unit in the heel, these sneakers provide a super-soft ride perfect for all-day wear. The breathable mesh upper keeps your feet cool, while the bootie construction ensures a snug, sock-like fit. The rubber outsole offers durability and traction, making these sneakers ideal.",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
