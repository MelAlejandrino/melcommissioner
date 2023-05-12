import { useState } from "react";
import React from "react";

function Content() {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  };
  return (
    <>
      <h1 className="titleContent">WHAT I DID AS A SERVER</h1>
      {data.map((item) => (
        <div className="worksItem" onClick={() => toggle(item)}>
          <div className="worksHeading">
            <h1>{item.title}</h1>
            <img
              src="./assets/triangle.png"
              alt=""
              className={`arrow ${clicked === item ? "active" : ""}`}
            />
          </div>
          <div
            className={clicked === item ? "work-content show" : "work-content"}
          >
            <p>{item.content}</p>
            <img src={item.src} alt="" />
          </div>
        </div>
      ))}
    </>
  );
}

const data = [
  {
    title: "CRUD Enrollment System",
    content: "This small-scale enrollment system, developed using PHP, focuses on the essential CRUD operations: create, read, update, and delete. It incorporates a database to store and manage enrollment-related information.",
    src: "",
  },
  {
    title: "Character Directory",
    content:
      "Character Directory is a Python-based application featuring a user-friendly graphical interface powered by tkinter. With this tool, you can effortlessly input values, such as character details, into the application. It conveniently saves all the provided information directly to your local storage, ensuring easy access and retrieval whenever needed.",
    src: "./src/assets/me.jpg",
  },
  {
    title: "Math Tutor",
    content: "I also tutor about Math from kinder - grade 12 <3",
    src: "",
  },
  {
    title: "Client-Server Communication",
    content:
      "This Java application facilitates real-time communication between a client and server using a terminal interface. It allows clients to connect to the server and exchange information instantly. Ideal for applications requiring quick and efficient data transfer and collaboration.",
    src: "",
  },
  {
    title: "Virtual Finger Mouse",
    content:
      "This Python-based application combines the power of OpenCV and MediaPipe to create a virtual finger mouse. By analyzing your hand gestures captured through a camera, it detects and interprets your movements in real-time. When a specific gesture condition is met, it triggers a corresponding command or action.",
    src: "",
  },
  {
    title: "Visual Basic with Database",
    content: "",
    src: "",
  },
  {
    title: "Portfolio app using Android Studio",
    content: "",
    src: "",
  },
  {
    title: "Conversion of the four number Systems",
    content: "",
    src: "",
  },
];

export default Content;
