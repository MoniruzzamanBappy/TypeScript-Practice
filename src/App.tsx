import React from 'react';
import './App.css';
import Counter from './components/Counter';
import User from './components/User';


interface Person {
  name: string,
  job: string, 
  job1: string | boolean, 
  age: number
}

const person:Person = {
  name: "Bappy",
  job: "student",
  job1: true,
  age: 27
}

interface User {
  name: string,
  job?: string, 
  age: number
}

const user:User = {
  name: "Aman",
  age: 27
}

const handleUser = (firstName: string, age: number, address: string):string=>{
  const number: number = 5;
  address = 'abc street'
  console.log(address, number);
  return address;
}

function App() {
  return (
    <div className="App">

      <Counter/>
      <User/>
     
    </div>
  );
}

export default App;
