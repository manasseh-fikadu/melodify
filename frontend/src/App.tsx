import React from "react";
import store from "./redux/store";
import { Provider } from "react-redux";
import SongList from "./components/SongList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Melodify</h1>
        <SongList />
      </div>
    </Provider>
  );
};

export default App;
