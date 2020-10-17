import React from "react";
import People from "../People/People";
import "./style.css";

const Main = ({ people }) => {
  return (
    <div className="main-block">
      {people.map((people, index) => {
        return <People people={people} key={index} />;
      })}
    </div>
  );
};
export default Main;
