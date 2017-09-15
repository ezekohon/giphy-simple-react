import React, { Component } from 'react';
import GiphySearch from './GiphySearch/GiphySearch';
import SpinLoad from './SpinLoad';
import './App.css';

const App = () => (
  <div>
    <h1>Giphy Search</h1>
    <GiphySearch  initialQuery="dog" RenderLoading={SpinLoad} />
  </div>
);

export default App;
