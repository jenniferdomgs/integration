import {getFunction} from "../services/APIService";

function App() {
  function btnGETFunctionClick() {
    getFunction()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <button onClick={btnGETFunctionClick}>GET Function</button>
    </div>
  );
}

export default App;
