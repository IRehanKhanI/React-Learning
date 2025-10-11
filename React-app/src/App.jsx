import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import Button from "./Button.jsx";
import ProfilePic from "./ProfilePic.jsx";
import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";
import MyComponent2 from "./MyComponent2.jsx";
import ColorPicker from "./ColorPick.jsx";


function App() {
  const fruits = [
    { id: 1, name: "apples", cal: 95 },
    { id: 2, name: "orange", cal: 85 },
    { id: 3, name: "banana", cal: 56 },
    { id: 4, name: "carror", cal: 78 }]
  const vege = [
    { id: 6, name: "Onion", cal: 95 },
    { id: 7, name: "Potato", cal: 85 },
    { id: 8, name: "Cauliflower", cal: 56 },
    { id: 9, name: "brinjle", cal: 78 }]
  return (<>
    <Counter />
    {/* <ColorPicker />
    <MyComponent2 />
   <MyComponent />
  
    <ProfilePic />
    <Button />
    {fruits.length > 0 && <List items={fruits} />}

    {vege.length > 0 ? <List items={vege} category="Vgetables" /> : null}

    <Header></Header>
    <UserGreeting isLoggedin={true} username="rehankhan" />
    <Food />
    <Card></Card>
    <Student name='Rehan khan' age={18} isStudent={true} />
    <Student name='Rehan khan' age={19} isStudent={true} />
    <Student name='Rehan khan' age={19} isStudent={true} />
    <Student name='John' age={33} isStudent={false} />
    <Student name="Larry" />
    <Footer /> */}
  </>
  );
}

export default App;
