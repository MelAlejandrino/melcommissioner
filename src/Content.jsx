import { useState } from "react";
import React from "react";
import triangleImage from './assets/triangle.png';

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
              src={triangleImage}
              alt=""
              className={`arrow ${clicked === item ? "active" : ""}`}
            />
          </div>
          <div
            className={clicked === item ? "work-content show" : "work-content"}
          >
            <p>{item.content}</p>
            <a href={item.src} className="twitButton" target="_blank">twitter link</a>
          </div>
        </div>
      ))}
    </>
  );
}

const data = [
  {
    title: "LIBRARY INFORMATION SYSTEM",
    content: "Simple CRUD library system",
    src: "https://twitter.com/MelKun8/status/1660600620192088065",
  },
  {
    title: "CRUD Enrollment System",
    content: "This small-scale enrollment system, developed using PHP, focuses on the essential CRUD operations: create, read, update, and delete. It incorporates a database to store and manage enrollment-related information.",
    src: "https://twitter.com/MelKun8/status/1646423225352740864",
  },
  {
    title: "Character Directory",
    content:
      "Character Directory is a Python-based application featuring a user-friendly graphical interface powered by tkinter. With this tool, you can effortlessly input values, such as character details, into the application. It conveniently saves all the provided information directly to your local storage, ensuring easy access and retrieval whenever needed.",
    src: `https://twitter.com/MelKun8/status/1611562102136909825`,
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
    src: "https://twitter.com/MelKun8/status/1612410904024584194",
  },
  {
    title: "Virtual Finger Mouse",
    content:
      "This Python-based application combines the power of OpenCV and MediaPipe to create a virtual finger mouse. By analyzing your hand gestures captured through a camera, it detects and interprets your movements in real-time. When a specific gesture condition is met, it triggers a corresponding command or action.",
    src: "https://twitter.com/MelKun8/status/1612412770640875521",
  },
  {
    title: "Visual Basic with Database",
    content: "",
    src: "https://twitter.com/MelKun8/status/1614628879263748102",
  },
  {
    title: "Take turns Game using PYTHON",
    content: "",
    src: "https://twitter.com/MelKun8/status/1614193555920289793",
  },
  {
    title: "Portfolio app using Android Studio",
    content: "",
    src: "https://twitter.com/MelKun8/status/1614629884671975424",
  },
  {
    title: "Conversion of the four number Systems",
    content: "",
    src: "https://twitter.com/MelKun8/status/1620737077582368769",
  },
];

export default Content;
