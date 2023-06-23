import React from 'react'

function Home({data}) {
  console.log('home: ', data);
  const totalCount = data?.response.body.totalCount;
  const name = data?.response.body.items;

  return (
    <div className="home">
        <h1>home</h1>
        <h2>Total: { data && totalCount }</h2>
        {
          data && data.response.body.items.map((item, i)=>{
            return (
              <p key={i}>
                {item.districtName + item.moveName}
                <a href={`detail/${i}`}>자세히 보기</a>
              </p>
            )
          })
        }
   
    </div>
  )
}

export default Home