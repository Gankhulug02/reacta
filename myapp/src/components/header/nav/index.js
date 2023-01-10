import "../../../all.module.css/header.css";

const menu = [
  { name: "PORTFOLIO", category: "Portfolio" },
  { name: "BLOG", category: "Blog" },
  { name: "CV", category: "UX" },
  { name: "STORE", category: "DEV" },
  { name: "FREELANCE", category: "" },
  { name: "ABOUT ME", category: "" },
  { name: "CONTRACT", category: "" },
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
              <li>
                {" "}
                <button
                  onClick={() => {
                    props.handleChange(i.category);
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
