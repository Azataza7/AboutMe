import NavBar from '../NavBar/NavBar';
import {Routes, Route} from 'react-router-dom';
import Main from '../Containers/Main/Main';
import Education from '../Containers/Education/Education';
import Achievements from '../Containers/Achievements/Achievements';
import GameSquare from '../Containers/GameSquare/GameSquare';

const App = () => {

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main className="main container-fluid">
        <Routes>
          <Route path="/" element={(
            <Main/>
          )}/>
          <Route path="/education" element={(
            <Education/>
          )}/>
          <Route path="/achieves" element={(
            <Achievements/>
          )}/>
          <Route path="/game" element={(
            <GameSquare/>
          )}/>
          <Route
            path="*" element={(<span>Not found</span>)}
          >
          </Route>
        </Routes>
      </main>
    </>
  );
};

export default App;
