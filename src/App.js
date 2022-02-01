import "./App.css";
import { Header, SectionOne, SectionTwo, SectionThree, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <Footer/>
      </main>
    </div>
  );
}

export default App;
