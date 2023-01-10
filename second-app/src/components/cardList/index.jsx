import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import CardItem from "../cardItem/index";

const Cardlist = ({ users }) => {
  return (
    <div className="row gap-4">
      {users.map((user) => (
        <CardItem user={user} />
      ))}
    </div>
  );
};

export default Cardlist;
