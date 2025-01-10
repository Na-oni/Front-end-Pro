import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Hotels from './pages/hotels/Hotels';
import Page from './pages/page/Page';

import './App.css';

class NotFound extends Component {
  render() {
    return <div>404 - Page Not Found</div>;
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
    };
  }

  render() {
    const { isAuthenticated } = this.state;

    return (
        <Router>
          <Header isAuthenticated={this.state.language} />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/hotels" element={<Hotels/>}/>
            <Route path="/page/:id" element={<Page/>}/>

            {isAuthenticated && <Route path="/profile" element={<div>sss</div>}/>}
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </Router>
    );
  }
}

export default App;
