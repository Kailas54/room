import React from "react";
import { Link } from "react-router";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <h1>Page Not Found</h1>
      <p>Oops Sorry! Wrong Page</p>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default NotFoundPage;
