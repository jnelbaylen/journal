import MyButton from "../components/Button/MyButton";
import AboutPage from "./About/AboutPage";
import MyProfile from "../components/Profile/MyProfile";
import ShoppingList from "./Shop/ShoppingList";

function Greeting({ name }) {
  return <h1>Hello, {name}</h1>
}

export default function Root() {
  return (
    <>
      <h1>Welcome to app</h1>
      <MyButton />
      <AboutPage />
      <Greeting name="World" />
      <MyProfile />
      <ShoppingList />
    </>
  )
}
