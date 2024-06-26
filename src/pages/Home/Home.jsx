import React from "react";
import { LuListTodo } from "react-icons/lu";
import { TiWeatherSunny } from "react-icons/ti";
import { FaChevronRight } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa6";
import { RiEnglishInput } from "react-icons/ri";
import { FaReadme } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaShoppingCart } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaReact } from "react-icons/fa";
import styles from "./Home.module.css";

const apps = [
  {
    name: "Todo App",
    path: "todo-app",
    status : "completed",
    icon: <LuListTodo />,
    description: "A simple application for managing tasks and to-do lists."
  },
  {
    name: "Weather App",
    path: "weather-app",
    status : "completed",
    icon: <TiWeatherSunny />,
    description: "An application for checking the weather forecast in different locations."
  },
  {
    name: "Auth App",
    path: "auth-app",  
    status : "completed",
    icon: <FaUserLock />,
    description: "An authentication application for user login and registration."
  },
  {
    name: "Formic App",
    path: "formic-form",
    status : "completed",
    icon: <FaWpforms />,
    description: "A form management application for creating and handling forms."
  },
  {
    name: "Dictionary App",
    path: "dictionary",
    status : "completed",
    icon: <RiEnglishInput />,
    description: "An app for looking up word meanings and definitions."
  },
  {
    name: "Readme App",
    path: "readme",
    status : "completed",
    icon: <FaReadme />,
    description: "An application for reading practice."
  },
  {
    name: "Number Login",
    path: "login",
    status : "wip",
    icon: <FaRegMoneyBillAlt />,
    description: "OTP inputs implementation"
  },
  {
    name: "React Challenges",
    path: "challenges",
    icon: <FaReact />,
    description: "An app for solving React challenges."
  },
];

const Main = () => {
  return (
    <div className={styles.card}>
      <ToastContainer/>
      <h3 className={styles.title}>My React Apps</h3>
      <div className={styles.appList}>
        {apps.map((app, index) => (
          <Link to={app.path} key={index} className={styles.appItem}>
            <div className={styles.appInfo}>
              <span className={styles.appIcon}>{app.icon}</span>
              <div className={styles.appData}>
                <span className={styles.appName}>{app.name}</span>
                <span className={styles.appDescription}>{app.description}</span>
              </div>
            </div>
            <FaChevronRight />
          </Link>
        ))}
      </div>
    </div>
  );
};



export default Main;
