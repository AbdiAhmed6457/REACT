
import Card from "./Card";
import Student from "./intro/Student";
import UserGreeting from "./intro/UserGreeting";
function App() {

  return(
    <>
    {/* <Student name="Abdi" age={30} isStudent={true} />

    <Student/>

    <Card/>
    <Card/> */}
      <UserGreeting isLoggedIn = "whaat" username = {29}/>
      <UserGreeting isLoggedIn = {true}/>
    </>
  );
}

export default App
