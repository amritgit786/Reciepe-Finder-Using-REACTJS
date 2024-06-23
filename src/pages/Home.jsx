import React from "react";
import Header from "../Components/commom/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <Header title="Our Reciepes" bgClass="bg-image">
          <Link to="/reciepe">
            <button className="btn btn-info btn-lg">Search Reciepe</button>
          </Link>
        </Header>
      </div>
    </>
  );
};

export default Home;
