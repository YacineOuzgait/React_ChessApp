import './App.css';
import HomeScreen from './screens/HomeScreen';
import PlayScreen from './screens/PlayScreen';
import BaseScreen from './screens/BaseScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundScreen from './screens/NotFoundScreen';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseScreen />}>
          <Route index element={<HomeScreen/>} />
          <Route path="/play" element={<PlayScreen/>} />
          <Route path="*" element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
