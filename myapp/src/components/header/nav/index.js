import "../../../all.module.css/header.css";

const menu = [
  { name: "Portfolio", category: "Portfolio" },
  { name: "Blog", category: "Blog" },
  { name: "CV", category: "UX" },
  { name: "Store", category: "DEV" },
  { name: "Freelance", category: "" },
  { name: "About Me", category: "" },
  { name: "Contract", category: "" },
];

const Nav = (props) => {
  return (
    <div className="container">
      <nav>
        <div className="image">
          <img src="/images/Leaplogo.svg" alt="" />
          <img src="/images/Hire-Me.svg" alt="" />
        </div>
        <div className="navR">
          <ul>
            {menu.map((i) => (
              <li key={i.name}>
                {" "}
                <button
                  onClick={() => {
                    props.handleChange(i.name);
                  }}
                >
                  {i.name}
                </button>{" "}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
