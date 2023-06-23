import { useParams } from "react-router-dom"
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

function Detail({data}) {
  const params = useParams();
  const item = data?.response?.body?.items[params.id];
  console.log(params);
  console.log('item =', item)
  const title = item?.districtName + item?.moveName;
  // 시리얼번호
  const sn = item?.sn;
  // 주의보 개시
  const issueDate = item?.issueDate;
  const issueGbn = item?.issueGbn;
  
  // 주의보 해제
  const clearDate = item?.clearDate;
  const clearTime = item?.clearTime;

  return (
    <div className="detail container">
      {
        item ? (
          <div>
            <h1>{title}</h1> 
            <p><b>id:</b> {sn}</p>
            <p><b>발생시기:</b>: {issueDate}: {issueGbn}</p>
            <p><b>해제시간:</b> {clearDate}, {clearTime}</p>
          </div>
        ) : <AiOutlineLoading3Quarters className='spin' style={{fontSize: '3em'}} />
      }
    </div>
  )
}

export default Detail