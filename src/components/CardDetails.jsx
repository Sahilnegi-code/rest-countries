import React from 'react';
import './cardDetails.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const CardDetails = () => {

    const  cardItem = ['Native Name'
, 'Population' ,'Region' , 'Sub Region','Capital',
'Top Level Domain' , 'Currencies' , 'Languages' 
]
  return (
    <div className='card' >
      <div className='btn-left' >
        <button className='btn'>
        <FontAwesomeIcon icon={faArrowLeft} className='arrowLeft' />
           Back
         </button>

      </div>
      <div className='card-details'>
        <div className='card-details-img'>
<img src="https://media.istockphoto.com/id/1363385264/photo/telecommunication-tower-for-2g-3g-4g-5g-network-during-sunset-antenna-bts-microwave-repeater.jpg?s=2048x2048&w=is&k=20&c=ilAPwva2Qgb2vqmWL3DJHVoerl8rnaHtoWlkvlhcd9I=" alt="" />

        </div>
        <div className='card-details-container' >
<h3 className='country-heading' >Belgium</h3>
<div className='card-details-body' >

<ul>
{
    cardItem.map((item)=> 
    <li className='card-data' > {item}  <span className='card-value' > Western Europe  </span> </li>)
}
    
    
 

</ul>

</div>
<div className="border-countries">
  <span className='card-data'  >
    Border Countries :
  </span>
  <button className='btn'>France</button>
  <button className='btn' > Germany </button>
  <button className='btn' >Netherlands</button>
  <button className='btn' >Netherlands</button>
  <button className='btn' >Netherlands</button>
</div>


        </div>
      </div>
    </div>
  );
}

export default CardDetails;
