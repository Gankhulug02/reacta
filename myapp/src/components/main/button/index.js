import style from "../../../all.module.css/main.module.css";

// const menu = [
//   "All",
//   "UI Design",
//   "UX Design",
//   "Product Design",
//   "Articles",
//   "Tutorials",
//   "News",
// ];

const Btn = (props) => {
  return (
    <button
      className={style.button}
      // variant="danger"
      onClick={() => {
        props.handleChange(props.menu.category);
      }}
    >
      {props.menu.name}
    </button>
  );
};
export default Btn;
