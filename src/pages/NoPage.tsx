import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <h1 className="font-mono">404! Page Not Found...</h1>
      <Link to="/" className="t1">
        Go to home
      </Link>
    </div>
  );
}

export default NoPage;
