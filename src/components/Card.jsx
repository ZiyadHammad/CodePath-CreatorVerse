import { Link } from "react-router-dom";
import youtube from '../assets/youtube.svg'

const Card = ({ creator }) => {
  const { id, description, imageURL, name, url } = creator;
  return (
    <Link to={`/creator/${id}`} className="bg-[#151030] p-4">
      <img
        src={imageURL}
        alt={name}
        className="h-[250px] w-[280px] rounded-2xl"
      />

      <div className="mt-2">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="text-secondary text-[14px]">{description}</p>
      </div>

      <div className="flex items-center">
        <img src={youtube} alt="youtube icon" className="h-10 w-10" />
      </div>

    </Link>
  );
};

export default Card;
