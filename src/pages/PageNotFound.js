import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='flex flex-col'>
        <h2>Sorry, we couldn't find this page</h2>
        <p>
          But, wetin you dey find for here??
          <span>
            Oya go <Link to="/">back</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
