import "./App.css";
import { Cards } from "./ui/Cards/Cards";

function App() {

  return (
    <>
      <Cards 
      title="Title"
      img="..."
      >
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </Cards>
    </>
  );
}

export default App;
