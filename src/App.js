import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import List from './components/list/List'
import NavBar from './components/navbar/NavBar';
import { Route, Routes } from 'react-router-dom';
import Item from './components/item/Item';
import Charts from './components/charts/Charts';

function App() {

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    try {
      axios.get('http://localhost:3000/heroes')
        .then(res => {
          setInterval(() => {
            setLoading(false)
          }, 2000)
          setList(res.data);
        })
    } catch (error) {
      console.log(error);
    }
  }, [])

  return (

    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/heroes" element={<List list={list} loading={loading} />}></Route>
        <Route path="/heroes/:id" element={<Item />}></Route>
        <Route path="/heroes/statistics" element={<Charts list={list}/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
