import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CardItem from "../cardItem/index";

const Cardlist = ({ users }) => {
  let empty = "";
  if (users.length == 0) {
    empty =
      "https://www.meme-arsenal.com/memes/6db9949e601ea8d2e4db2e75fa775dc4.jpg";
  }

  return (
    <div className="row gap-4">
      {users.map((user) => (
        <CardItem user={user} key={user.first} />
      ))}
      <img src={empty} alt="" className="w-50 m-auto mt-5" />
    </div>
  );
};

export default Cardlist;
