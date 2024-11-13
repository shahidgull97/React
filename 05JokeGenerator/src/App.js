import "./styles.css";
// import the custom hook to use in this document
import useFetch from "./useFetch";
export default function App() {
  const url = "https://v2.jokeapi.dev/joke/Programming?type=single";
  // Use the custom hook here
  const [data, loading, error, getJoke] = useFetch(url);

  // Display loading text here
  if (loading) {
    return <h1>Loading...</h1>;
  }

  // Display something went wrong here
  if (error) {
    return <h1>Something wernt wron</h1>;
  }

  return (
    <div className="App">
      <h1>Joke Generator</h1>
      {/* Do not modify the below code */}
      <h2>{data.joke}</h2>
      <button className="btn" onClick={getJoke}>
        New Joke
      </button>
    </div>
  );
}
