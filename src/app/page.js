"use client"

import styles from "./page.module.css"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState("");
  const router = useRouter()

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = () => {
    if (username.trim() !== "") {
      router.push(`/todolist?username=${encodeURIComponent(username)}`)
    }
  };

  return (
      <main className={styles.main}>
      <h1>Welcome to the Name App!</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit} disabled={username.trim() === ""}>
        Submit
      </button>
      </main>
  );
}
