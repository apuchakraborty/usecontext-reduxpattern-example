import "./styles.css";
import Store from "./store";
import Posts from "./components/Posts";

export default function App() {
  return (
    <Store>
      <div className="App">
        <Posts />
      </div>
    </Store>
  );
}
