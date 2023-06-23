import React from 'react'
import { Link } from 'react-router-dom'

function Home({data}) {
  console.log('home: ', data);
  const totalCount = data?.response.body.totalCount;
  const name = data?.response.body.items;

  return (
    <div className="home">
        <h1>home</h1>
        <h2>Total: { data && totalCount }</h2>
        <ul className='item-list'>
          {
            data && data.response.body.items.map((item, i)=>{
              return (
                <li key={i}>
                  <h4>{item.districtName + ' ' + item.moveName}</h4>
                  <Link className='btn' to={`detail/${i}`}>자세히 보기</Link>
                </li>
              )
            })
          }
        </ul>
   
    </div>
  )
}

export default Home