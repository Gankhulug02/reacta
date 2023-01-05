import style from "../all.module.css/main.module.css";
import Button from "./main/button/index";
import Cards from "./main/cards/index";

const content = [
  {
    imageUrl: "/images/zurag1.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    imageUrl: "/images/zurag2.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    imageUrl: "/images/zurag1.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    imageUrl: "/images/zurag2.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    imageUrl: "/images/zurag1.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
  {
    imageUrl: "/images/zurag2.png",
    date: "NOV 23 2020",
    title: "This way is wrong about UI Design.",
    paragraph:
      "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    button: "READ MORE",
  },
];
// const CardItem = (props) => {
//   return (
//     <div>
//       <img src={props.img} alt="zurag" />
//       <p>{props.date}</p>
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//       <h4>{props.btn}</h4>
//     </div>
//   );
// };
// const Card = () => {
//   return cardData.map((card) => {
//     return (
//       <CardItem
//         img={card.img}
//         date={card.date}
//         title={card.title}
//         description={card.description}
//         btn={card.btn}
//       />
//     );
//   });
// };

const Main = () => {
  return (
    <div className="container">
      <Button />
      <div className={style.content}>
        <Cards />
      </div>
    </div>
  );
};

export default Main;
