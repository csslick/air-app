import React from 'react'

function Home({data}) {
  console.log('home: ', data);
  const totalCount = data?.response?.body?.totalCount;
  // console.log('totalCount= ', totalCount);

  return (
    <div className="home">
        <h1>home</h1>
        {data && <p>{totalCount}</p>}
   
    </div>
  )
}

export default Home