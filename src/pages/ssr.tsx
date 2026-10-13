import type { GetServerSideProps } from 'next';

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

interface SSRPageProps {
  joke: Joke;
}

// This function runs on the server before rendering the page
export const getServerSideProps: GetServerSideProps<SSRPageProps> = async () => {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await res.json();
  
    return {
      props: {
        joke, // Pass joke as a prop to the component
      },
    };
  }
  
  export default function SSRPage({ joke }:SSRPageProps) {
    return (
      <div>
        <h1>Server-Side Rendering (SSR)</h1>
        <p>{joke.setup}</p>
        <p><strong>{joke.punchline}</strong></p>
      </div>
    );
  }
  