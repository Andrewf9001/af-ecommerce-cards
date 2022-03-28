import CardsContainer from "./components/cards/CardsContainer";
import FooterContainer from "./components/footer/FooterContainer";
import NavigationContainer from "./components/navigation/NavigationContainer";

function App() {
  return (
    <div className="App">
      <NavigationContainer />
      <CardsContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
