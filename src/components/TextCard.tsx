//import imageBig from "../assets/image_2.jpg";
import imageSmall from "../assets/image_1.jpg";

const TextCard = () => {
  const listImages = [1, 2, 3];
  return (
    <div>
      <h2>This is a text card with images:</h2>
      {listImages.map((_item, index) => (
        <>
          <h3>{index}, Image</h3> <img src={imageSmall} />
        </>
      ))}
    </div>
  );
};

export default TextCard;
