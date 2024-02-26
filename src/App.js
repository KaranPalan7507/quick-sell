//components
import Header from "./components/header";
import Board from "./components/board";
//hooks
import useApi from "./hooks/useApi";
//provider
import { LocalStorageProvider } from "./provider/localStorage";
//css
import "./App.css";

function App() {
  const { data } = useApi(
    "https://api.quicksell.co/v1/internal/frontend-assignment"
  );

  return (
    <LocalStorageProvider
      keys={[
        { key: "groupBy", defaultValue: "status" },
        { key: "orderBy", defaultValue: "priority" },
      ]}
    >
      <div className="App">
        <Header />
        <div className="app-body">{data && <Board data={data} />}</div>
      </div>
    </LocalStorageProvider>
  );
}

export default App;
