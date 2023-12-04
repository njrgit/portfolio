import "./Card.css";

interface Props {
  header: string;
  text: string;
}

const Card = ({ header, text }: Props) => {
  return (
    <div className="card-item">
      <h1 className="card-header">{header}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Card;
