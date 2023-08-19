"use client"

import styles from "./page.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  const [username, setUsername] = useState("");
  // const router = useRouter();

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  // const handleSubmit = () => {
  //   if (username.trim() !== "") {
  //     router.push({
  //       pathname: `/todolist?username=${encodeURIComponent(username)}`,
  //       query: { username: "username"},
  //     });
  //   }
  // };

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
              // onClick={handleSubmit}
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
