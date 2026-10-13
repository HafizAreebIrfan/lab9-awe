import { useEffect, useState } from "react";

export default function CSRPage() {
  const [joke, setJoke] = useState(null);

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => setJoke(data));
  }, []);

  return (
    <div>
      <h1>Client-Side Rendering (CSR)</h1>
      {joke ? (
        <>
          <p>{joke.setup}</p>
          <p><strong>{joke.punchline}</strong></p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
