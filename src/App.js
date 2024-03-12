import Conversations from "./components/Conversations";
import Navbar from "./components/navBar";
import conversations from "./data/conversations";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        <Conversations conversations={conversations} />
      </div>
    </div>
  );
}

export default App;
