import DisplayEmployee from './components/DisplayEmployee';
import './App.css'
import axios from 'axios';
import { useState } from 'react';

const sampleEmployee = {
  gender: 'male',
  name: {
    first: 'Charlie',
    last: 'Thompson',
  },
  location: {
    street: {
      number: 761,
      name: 'Tay Street',
    },
    city: 'Timaru',
    postcode: 76111,
  },
  email: 'charlie.thompson@example.com',
  picture: {
    medium: 'https://randomuser.me/api/portraits/med/men/40.jpg',
  },
};



function App() {
  const [employee, setEmployee] = useState(sampleEmployee);
  
  const getEmployee = () => {
  axios
    .get('https://randomuser.me/api?nat=en')
    .then((response) => {
      console.log(response.data);
      setEmployee(response.data.results[0]);
    });
};
  return (
    <>
      <DisplayEmployee employee = {employee} />
      <button type="button" onClick={getEmployee}>Get employee</button>
    </>
  )
}

export default App
