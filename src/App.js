import React from 'react';
import './App.css';
import Todo from './components/todo/Todo';
import { Routes, Route } from "react-router-dom";
import LearnFetch from './components/fetch/LearnFetch';
import LoginFetch from './components/fetch/LoginFetch';
import LimitFetch from './components/fetch/LimitFetch';
import QuranFetch from './components/fetch/QuranFetch';
import DetailSurah from './components/fetch/DetailSurah';
import QuranFetchA from './components/fetch/QuranFetch copy';
import UserFetch from './components/fetch/UserFetch';

const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Todo />} />
        <Route path='/fetch' element={<LearnFetch />} />
        <Route path='/login' element={<LoginFetch />} />
        <Route path='/covid' element={<LimitFetch />} />
        <Route path='/quran' element={<QuranFetchA />} />
        {/* <Route path='/qurana' element={<QuranFetchA />} /> */}
        <Route path='/detail' element={<DetailSurah />} />
        <Route path="/quran/detail/:nomor" element={<DetailSurah />}/>
        <Route path="/user" element={<UserFetch />}/>

        {/* <Route path='/fetch' component={LearnFetch} /> */}
      </Routes>
    </div>
  );
}

export default App;
