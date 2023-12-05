import "./ImageCard.css";

interface Props {
  header: string;
  text: string;
  imgSrc: string;
}

const ImageCard = () => {
  return (
    <div className="card-item">
      <img src="NR.png" alt="img" className="image-card-pic" />
      <div className="text-section">
        <h1 className="image-card-header">Test Header</h1>
        <p className="image-card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A inventore,
          consequuntur perferendis molestias nemo rerum voluptatem, voluptatibus
          suscipit nostrum ut iste ipsa fugiat explicabo assumenda. Doloremque
          nostrum alias tempore autem?
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
