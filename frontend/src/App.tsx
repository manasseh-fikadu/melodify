// App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './features/rootReducer';
import rootSaga from './sagas/rootSaga';
import SongList from './components/SongList';
import Statistics from './components/Statistics';
import SongForm from './components/SongForm';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<SongList />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/add-song" element={<SongForm />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;

