"use client"

import styles from "./page.module.css";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h1 className={styles.headerStyling}>Insert your name here:</h1>
        </div>
        <div className={styles.section}>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={handleInputChange}
            className={styles.inputbox}
          />
        </div>
        <div className={styles.section}>
          <Link href={{pathname:"/todolist", query: {username: username}}}>
            {" "}
            <button
              className={`${styles.buttonStyling} ${
                username.trim() === "" ? styles.disabledButton : ""
              }`}
              disabled={username.trim() === ""}
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  //`/todolist?username=${encodeURIComponent(username)}`,
}
