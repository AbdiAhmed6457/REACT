
import Card from "./Card";
import List from "./List";

function App() {


  const fruits = [ { id: 1, name:   "apple" , calories: 95}, 
    {id: 2, name: "orange", calories: 43}, 
    {id: 3, name: "banana", calories: 50}, 
    {id: 4, name:"pineApple", calories: 11}]

    const vagetable = [ { id: 1, name:   "potato" , calories: 115}, 
      {id: 2, name: "corn", calories: 59}, 
      {id: 3, name: "carrot", calories: 70}, 
      {id: 4, name:"broccoli", calories: 101}]

  return(
    <>
     <List items={fruits} catagory = "Fruits"/>
     <List items={vagetable} catagory = "vagetable"/>
     {/* <List/> */}
  </>
  );
}

export default App
