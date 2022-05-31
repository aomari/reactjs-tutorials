import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Firestore from './pages/firestore/Firestore';
import Error from './pages/Error';
import Home from './pages/home/Home';
import Authentication from './pages/authentication/Authentication';
import { GoogleAuth } from './pages/googleAuth/GoogleAuth';
import { UploadImages } from './pages/uploadImages/UploadImages';

function App() {
  return (
    <Router>
      {/* <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/profile/Amjad"}>Profile</Link>
      </nav> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Firestore' element={<Firestore />} />
        <Route path='/Authentication' element={<Authentication />} />
        <Route path='/GoogleAuth' element={<GoogleAuth />} />
        <Route path='/UploadImages' element={<UploadImages />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
