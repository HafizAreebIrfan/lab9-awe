import { GetServerSideProps } from "next";

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

interface SSRPageProps {
  joke: Joke;
}

export const getServerSideProps: GetServerSideProps<SSRPageProps> = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await res.json();
  
    return {
      props: {
        joke,
      },
      revalidate: 10, // Optional: Regenerate page every 10 seconds
    };
  }
  
  export default function SSGPage({ joke }:SSRPageProps) {
    return (
      <div>
        <h1>Static Site Generation (SSG)</h1>
        <p>{joke.setup}</p>
        <p><strong>{joke.punchline}</strong></p>
      </div>
    );
  }
  