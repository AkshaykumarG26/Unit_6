
import './App.css';
import Child from './Components/Child';

function App() {

  const counter = 100

  const callSum = () => {
    alert(10+23)
  }

  const callIt = (data) => {
    alert(data)
  }
  
  return (
    <div className="App">
      <Child count = {counter} callSum = {callSum} callIt= {callIt} />
      
    </div>
  );
}

export default App;
