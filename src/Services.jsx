import React from "react";

function Services() {
  return (
    <>
      <h1 className="titleContent">SERVICES OFFERED:</h1>
      <ul role="list" className="servList">
        {servs.map((item) => (
          <li className="servItem">{item.title}</li>
        ))}
      </ul>
    </>
  );
}

const servs = [
  {
    title: "HTML",
  },
  {
    title: "CSS",
  },
  {
    title: "JAVASCRIPT",
  },
  {
    title: "REACTJS",
  },
  {
    title: "PHP",
  },
  {
    title: "MYSQL",
  },
  {
    title: "JAVA",
  },
  {
    title: "PYTHON",
  },
  {
    title: "VISUAL BASIC",
  },
];

export default Services;
