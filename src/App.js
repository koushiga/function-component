import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Tableclass from './Tableclass';
import List from './List'
import Greet from './Greet'
import Listclass from './Listclass';


function App() {
const userDetails=[
  {
    name:"Koushi",
    age:24,
    profession:"Developer"
  },
  {
    name:"Kannan",
    age:35,
    profession:"Tester"
  },
  {
    name:"Geetha",
    age:25,
    profession:"Tester"
  },
  {
    name:"Ram",
    age:26,
    profession:"Developer"
  }
]
const Fruit=[
  {
    fname:"Banana",
    price:"--------- Rs.20"
  },
  {
    fname:"Papaya",
    price:"----------- Rs.40"
  },
  {
    fname:"Apple",
    price:"------------ Rs.90"
  },
  {
    fname:"Orange",
    price:"------------ Rs.60"
  }
]
return(
  <div className="App">
    <h1>Function Component</h1>
    <Table userData={userDetails}/>
    <h1>Class Component</h1>
    <Tableclass userData={userDetails}/>
    <h1>Functional Component</h1>
    <List userFruit={Fruit}/>
    <h1>Class Component</h1>
    <Listclass userFruit={Fruit}/>
    <h1>State</h1>
    <Greet/>
  </div>
);
}

export default App;
