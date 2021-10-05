import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import QuizTakingPage from './pages/QuizTakingPage';
import TestingPage from './pages/TestingPage';
import UserForm from './pages/UserForm';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          <Route exact path='/' component={UserForm} />
          <Route path='/homepage' component={Homepage} />
          <Route path='/quiztaking' component={QuizTakingPage} />
          <Route path='/testingpage' component={TestingPage} />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
