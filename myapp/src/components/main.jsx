import style from "../all.module.css/main.module.css";
import Btn from "./main/button/index";
import Cards from "./main/cards/index";
import { useState } from "react";

const menus = [
  { name: "All", category: "" },
  { name: "UI Design", category: "UI" },
  { name: "UX Design", category: "UX" },
  { name: "DEV Design", category: "DEV" },
  { name: "Articles", category: "" },
  { name: "Tutorials", category: "" },
  { name: "News", category: "" },
];

const content = [
  {
    category: "UI",
    imageUrl: "/images/zurag1.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    category: "UI",
    imageUrl: "/images/zurag2.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    category: "UX",
    imageUrl: "/images/zurag1.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UX Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    category: "UX",
    imageUrl: "/images/zurag2.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UX Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    category: "UI",
    imageUrl: "/images/zurag1.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    category: "UI",
    imageUrl: "/images/zurag2.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    category: "UX",
    imageUrl: "/images/zurag1.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UX Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    category: "UX",
    imageUrl: "/images/zurag2.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UX Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    category: "DEV",
    imageUrl: "/images/zurag1.png",
    date: "NOV 23 2020",
    title: "This way is wrong about Dev Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    category: "DEV",
    imageUrl: "/images/zurag2.png",
    date: "NOV 23 2020",
    title: "This way is wrong about Dev Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    category: "DEV",
    imageUrl: "/images/zurag2.png",
    date: "NOV 23 2020",
    title: "This way is wrong about Dev Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
];

const Main = () => {
  const [news, setNews] = useState(content);

  const handleChange = (category) => {
    console.log("Cat", category);
    console.log(news);
    const All = content;
    if (category == "") {
      setNews(All);
      console.log(All);
    } else {
      const filtered = content.filter((item) => item.category === category);
      setNews(filtered);
    }
  };
  return (
    <div className="container">
      <div>
        {menus.map((menu) => {
          return <Btn menu={menu} handleChange={handleChange} />;
        })}
      </div>

      <div className={style.content}>
        {news.map((blog) => {
          return <Cards card={blog} />;
        })}
      </div>
    </div>
  );
};

export default Main;
