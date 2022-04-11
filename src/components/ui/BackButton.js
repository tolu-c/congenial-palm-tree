import { Link } from "react-router-dom";

function BackButton() {
  return (
    <Link
      to="/"
      className="h-10 w-10 rounded-full bg-gray-100/25 backdrop-blur-lg shadow-lg flex items-center justify-center text-purple-600 absolute top-4 left-4"
    >
      <svg className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}

export default BackButton;
