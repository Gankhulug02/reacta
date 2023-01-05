import "../../../all.module.css/header.css";

const menu = [
  "portfolia",
  "BLOG",
  "CV",
  "store",
  "freelance",
  "about me",
  "contract",
];

const Nav = () => {
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
                <button>{i}</button>{" "}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Nav;
