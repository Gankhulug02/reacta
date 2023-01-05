import style from "../../../all.module.css/main.module.css";

const menu = [
  "All",
  "UI Design",
  "UX Design",
  "Product Design",
  "Articles",
  "Tutorials",
  "News",
];

const Button = () => {
  return (
    <ul className={style.ul}>
      {menu.map((i) => (
        <li>
          <button className={style.button}>{i}</button>
        </li>
      ))}
    </ul>
  );
};

export default Button;
