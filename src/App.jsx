import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import About from './Pages/About'
import Navbar from './component/Navbar'

function App() {
  const [data, setData] = useState(null); // 불러올 데이터

  const API_KEY = 'sXxYjidiN3t6GurP%2FlL532W8cmmt4qCl%2F%2BFF72uNIWACqGGmumk6enycmK39NmiGxpmGhhxqFXvWYu4zH8f3zg%3D%3D';
  const API_URL = `https://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?serviceKey=${API_KEY}&returnType=json&numOfRows=10&pageNo=1&year=2023`;

  const fetData = async () => {
    await fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
  }  

  // 시작할 때만 실행됨
  useEffect(() => {
    fetData();
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      {/* <button onClick={fetData}>요청</button> */}
      <Routes>
        <Route path='/' element={<Home data={data} />} />
        <Route path='/detail/:id' element={<Detail data={data} />} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
