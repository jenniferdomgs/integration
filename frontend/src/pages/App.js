import { getFunction, postFunction } from "../services/APIService";

function App() {

  function btnGETFunctionClick() {
    getFunction()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  function btnPOSTFunctionClick() {
    getFunction()
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }

  return (
    <>
    <div>
      <button onClick={btnGETFunctionClick}>GET Function</button>
    </div>
    <div>
      <button onClick={btnPOSTFunctionClick}>POST Function</button>
    </div>
    </>
  );

}

export default App;
