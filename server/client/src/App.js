import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SignIn from './components/signInSide';
import SignUp from './components/signUpSide';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/SignIn" element={<SignIn />}/>
          <Route path="/SignUp" element={<SignUp />}/>
          <Route exact path="/" element={<SignIn />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
