import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Postpage from './pages/Postpage';
import QuizTakingPage from './pages/QuizTakingPage';
import TestingPage from './pages/TestingPage';
import QuizCard from './pages/QuizCard';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Switch>
          {/* <Route exact path={['/']}>
            <LoginPage />
          </Route> */}
          <Route exact path={['/']}>
            <Homepage />
          </Route>

          <Route path='/post'>
            <Postpage />
          </Route>

          <Route path='/quiztaking'>
            <QuizTakingPage />
          </Route>

          <Route path='/testingpage'>
            <TestingPage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
