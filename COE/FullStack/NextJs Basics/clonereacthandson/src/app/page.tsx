"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToForm = (str : String) => {
    router.push("/form"); // navigate to /form
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={goToForm("/form")}>
        Go to Form Page
      </button>

      <br />
      <button onClick={goToForm("/dummy")}>
        Go to Form Page
      </button>
    </div>
  );
}
