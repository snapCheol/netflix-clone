import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import Header from './Components/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import TvShow from './pages/TvShow';
import Movie from './pages/Movie';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tv" component={TvShow} />
          <Route path="/movie" component={Movie} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
