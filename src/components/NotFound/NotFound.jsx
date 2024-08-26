import React from "react";
import { Link as RouterLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <div>
        <h1>404 | Page Not Found</h1>
        <p>You just hit a route that doesn't exist...</p>
        <button>
          <RouterLink to="/">Back to Home</RouterLink>
        </button>
      </div>
    </section>
  );
};

export default NotFound;
