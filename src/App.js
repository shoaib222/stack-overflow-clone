// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Header from './components/Header';
import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';
import AskQuestion from './components/AskQuestion';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" exact component={QuestionList} />
          <Route path="/question/:id" component={QuestionDetail} />
          <Route path="/ask" component={AskQuestion} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;