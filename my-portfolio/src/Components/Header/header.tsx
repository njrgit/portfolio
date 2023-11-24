import "./header.css";

interface HeaderProps {
  welcomeMessage: string;
}

const Header = ({ welcomeMessage }: HeaderProps) => {
  return (
    <div className="appHeaderContainer">
      <h1 className="welcomeMessage">{welcomeMessage}</h1>
      <img className="profilePic" src="Niro_Ravi.jpg" alt="profilePicture"/>
      <button className="welcomButton">
        Enter <span>&#128073;&#127999;</span>
      </button>
    </div>
  );
};

export default Header;
