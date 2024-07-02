import React from "react";
import { FaMicrosoft, FaApple, FaAmazon, FaAtlassian } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Noida, India",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Amazon",
      location: "Bengaluru, India",
      openPositions: 5,
      icon: <FaAmazon />,
    },
    {
      id: 3,
      title: "Atlassian",
      location: "Hyderabad, India",
      openPositions: 20,
      icon: <FaAtlassian />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
