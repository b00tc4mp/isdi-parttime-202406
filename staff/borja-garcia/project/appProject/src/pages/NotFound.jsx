import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-900 via-gray-700 to-gray-800 text-white">
      {/* Main Content */}
      <div className="max-w-lg bg-gray-900 rounded-lg p-6 shadow-2xl text-center">
        <h1 className="text-6xl font-bold animate-buzzing">404</h1>
        <p className="mt-4 text-lg animate-bounce">Parece que alguien anda algo perdido...</p>
        <div className="mt-8">
          <Link
            to="/login"
            className="btn bg-blue-500 text-white font-semibold rounded-full px-6 py-3 shadow-md hover:bg-blue-600 transition-all duration-200 animate-wiggle"
          >
           Volver a la página principal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
