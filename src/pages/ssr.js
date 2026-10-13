// This function runs on the server before rendering the page
export async function getServerSideProps() {
    const res = await fetch('https://official-joke-api.appspot.com/random_joke');
    const joke = await res.json();
  
    return {
      props: {
        joke, // Pass joke as a prop to the component
      },
    };
  }
  
  export default function SSRPage({ joke }) {
    return (
      <div>
        <h1>Server-Side Rendering (SSR)</h1>
        <p>{joke.setup}</p>
        <p><strong>{joke.punchline}</strong></p>
      </div>
    );
  }
  