import "./App.css";
import Card from "./components/Card";
function App() {
  // let myObject={
  //   username: "ankit" ,
  //   password :"fgsfgdsfgdsa",
  // }
  // let arr =[1,23,23,3];
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4" >TailWind test</h1>
      <h2 className="bg-blue-400"> second header</h2>
      <Card username="ankit singh"  btn="view"/>
      <Card username="ankit" />
    </>
  );
}

export default App;
