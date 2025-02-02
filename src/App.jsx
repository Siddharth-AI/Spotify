import { Player } from "./component/Player";
import { Sidebar } from "./component/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex">
          <Sidebar />
        </div>
        <Player />
      </div>
    </>
  );
}

export default App;
