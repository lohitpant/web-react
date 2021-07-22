import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import QuizComp from './components/QuizComponent/QuizComp';
import Calculator from './components/calculatorComponent/Calculator';
import RecipeMain from './components/RecipeComponent/RecipeMain';
import Weather from './components/Weather/Weather';
import MyWork from './components/MyWork'

function App() {
  return (
    
      <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/mywork" exact component={MyWork}/>
          <Route path="/calculator" exact component={Calculator}/>
          <Route path="/quiz" exact component={QuizComp}/>
          <Route path="/recipes" exact component={RecipeMain}/>
          <Route path="/weather" exact component={Weather}/>          
        </Switch>
      
      </Router>
      
    </>
  );
}

export default App;
