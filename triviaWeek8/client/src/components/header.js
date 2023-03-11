const Header = (props) => {

  let message;
  if (props.user) {
    message = `Enjoy The Quiz ${props.user}`;
  } else {
    message = `Enter Your Name... Take This Quiz... If You Dare`;
  }
  
  return (
    <div className={"textHeader"}>
      <h3>{message}</h3>
    </div>
  );
};

export default Header;