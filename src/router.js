import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import About from './pages/About';
import Works from './pages/Works';
import Contacts from './pages/Contacts';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={HomePage} />
      <Route path="/about-me" exact component={About} />
      <Route path="/works" exact component={Works} />
      <Route path="/contacts" exact component={Contacts} />

    </BrowserRouter>
  );
};
