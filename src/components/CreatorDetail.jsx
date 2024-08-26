import { Link } from "react-router-dom";
import youtube from "../assets/youtube.svg";

const CreatorDetail = ({ creator, handleDelete}) => {
  const { description, imageURL, name, url, id } = creator;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to={`/edit/${id}`}
          className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Edit Creator
        </Link>

        <button
          onClick={handleDelete}
          className="absolute top-4 right-4 sm:top-8 sm:right-8 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Delete Creator
        </button>

        <div className="mt-16 sm:mt-24 flex flex-col lg:flex-row items-center lg:items-start lg:justify-center space-y-8 lg:space-y-0 lg:space-x-12">
          <div className="flex-shrink-0">
            <img
              src={imageURL}
              alt={name}
              className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-2xl shadow-2xl ring-4 ring-indigo-400 ring-opacity-50"
            />
          </div>

          <div className="flex flex-col max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">{name}</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">{description}</p>
            
            {url && (
              <Link
                to={url}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300 ease-in-out transform hover:scale-105"
              >
                <img src={youtube} alt="YouTube icon" className="h-6 w-6 mr-2" />
                Watch on YouTube
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorDetail;