


function List(){

    const fruits = [ { id: 1, name:   "apple" , calories: 95}, 
        {id: 2, name: "orange", calories: 43}, 
        {id: 3, name: "banana", calories: 50}, 
        {id: 4, name:"pineApple", calories: 11}]

    const listItems = fruits.map((fruit) => <li key={fruit.id}>
        {fruit.name}: &nbsp; { fruit.calories}calories</li>)

    return ( <ol>{listItems}</ol>
    )
} 

export default List;