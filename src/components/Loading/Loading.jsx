import React ,{useContext} from 'react';
import { themeContext } from '../../App';
const Loading = () => {
  const {  toggleTheme } = useContext(themeContext);

  return (
    <div style={{paddingTop:'100px' , fontSize:'20px' , color: `${toggleTheme ? 'black':'white'  }`}}>
      <h1>Loading .....</h1>
    </div>
  );
}

export default Loading;
