
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import BookingPage from './components/BookingPage';
import { useReducer } from 'react';
import ConfirmedBookings from './components/ConfirmedBookings';

function App() {

  const seedRandom = function(seed){
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function(){
      return (s = s * a % m) /m;
    }
  }
  const fetchAPI = function(date){
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <=23; i++){
      if (random() < 0.5){
        result.push(i + ":00");
      }
      if (random() > 0.5){
        result.push(i + ":30");
      }
    }
    return result;
  }

  const submitAPI = function(formData){
    return true;
  }

  const initialState = {availableTimes: fetchAPI(new Date())};
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date){
    return {availableTimes: fetchAPI(new Date())}
  }

  const navigate = useNavigate();
  function submitForm (formData){
    if (submitAPI(formData)){
      navigate('/confirmed'); 
    }
  }
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/confirmed' element={<ConfirmedBookings />} />
      <Route path='/booking' element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>} />
    </Routes>
    
    <Footer />
    </>
  );
}

export default App;
