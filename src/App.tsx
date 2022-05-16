import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import CountriesList from './pages/countriesList/CountriesList';
import CountryDetail from './pages/countryDetail/CountryDetail';

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path='/' element={<CountriesList />}></Route>
          <Route path='/countrydetail/:code' element={<CountryDetail />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
