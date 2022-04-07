import { Link } from "react-router-dom";

const NotFoundPage = () => { 

    return (
      <>
        <p>
          This page doesn't exist. Go <Link to='/'>Home</Link>
        </p>
      </>
    );
};
 export default NotFoundPage;