import { Link } from "react-router-dom";
import youtube from '../assets/youtube.svg';

const Card = ({ creator, handleDelete }) => {
  const { id, description, imageURL, name } = creator;

  return (
    <div className="bg-[#151030] p-4 rounded-lg relative">
      {/* Image and Title */}
      <div className="flex flex-col">
        <img
          src={imageURL}
          alt={name}
          className="h-[250px] w-[280px] rounded-2xl object-cover"
        />
        <Link to={`/creator/${id}`} className="mt-2">
          <h3 className="text-white font-bold text-[24px] hover:underline">{name}</h3>
        </Link>
        <p className="text-secondary text-[14px] mt-1">{description}</p>
      </div>

      {/* YouTube Icon */}
      <div className="flex items-center mt-4">
        <img src={youtube} alt="YouTube icon" className="h-10 w-10" />
      </div>

      {/* Edit and Delete Buttons */}
      <div className="absolute top-4 right-4 flex space-x-2">
        <Link 
          to={`/edit/${id}`} 
          className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded text-sm font-bold transition-colors duration-300"
        >
          Edit
        </Link>
        <button 
          onClick={(e) => handleDelete(id)}
          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-sm font-bold transition-colors duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
