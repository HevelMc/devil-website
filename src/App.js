import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Projects} path='/projects' />
        <Route component={Services} path='/services' />
        <Route component={About} path='/about' />
        <Route component={Contact} path='/contact' />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
