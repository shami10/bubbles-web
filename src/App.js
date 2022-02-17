import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home'
import Policy from './Pages/Policy'

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" exact element={<Home /> }></Route>
          <Route path="/policy" exact element={<Policy /> }></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
