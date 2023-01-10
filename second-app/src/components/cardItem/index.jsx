import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import style from "./style.module.css";

const Cardlist = (props) => {
  return (
    <Card style={{ width: "19rem" }}>
      <Card.Img variant="top" src={props.user.profileImg} />
      <Card.Body>
        <Card.Title>
          {props.user.first} {props.user.last}
        </Card.Title>
        <Card.Text>
          {props.user.address} - {props.user.balance}
        </Card.Text>
      </Card.Body>
    </Card>

    // <div className={style.cardList}>
    //   {props.users.map((user) => (
    //     <div key={user.first} className={style.card}>
    //       <div className={style.name}>
    //         <h3>{user.first}</h3>
    //         <h3>{user.last}</h3>
    //       </div>
    //       <h4>Killed: {user.first}</h4>
    //       <h4>{user.balance}</h4>
    //       <img src={user.profileImg} alt="" />
    //     </div>
    //   ))}
    // </div>
  );
};

export default Cardlist;
