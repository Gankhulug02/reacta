const UserCard = (props) => {
    return (
      <div className='card'>
        <div>
          <img src={props.imageURL} alt=""/>
        </div>
        <div>
          <h2>Name: {props.name}</h2>
          <p>Age: {props.age}</p>
        </div>
      </div>
    );
  };

  export default UserCard;