import style from "../../../all.module.css/main.module.css";

const cardData = [
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

const CardItem = (props) => {
  return (
    <div className={style.items}>
      <img src={props.img} alt="zurag" />
      <p>{props.date}</p>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <button className={style.btn}>{props.btn}</button>
    </div>
  );
};

const Card = () => {
  return cardData.map((card) => {
    return (
      <CardItem
        img={card.imageUrl}
        date={card.date}
        title={card.title}
        description={card.paragraph}
        btn={card.button}
      />
    );
  });
};

export default Card;
