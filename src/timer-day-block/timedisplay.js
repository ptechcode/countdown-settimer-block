import {useState, useEffect} from '@wordpress/element'; //from 'react'

const Timeleft = ( props ) =>{

  const { date, item } = props;
  
  const second = 1000
  const minute =  second * 60
  const hour =  minute * 60
  const day = hour * 24  

  const now = new Date().getTime();
  const time = new Date( props.date ).getTime();

  const [theTime, setTheTime ]= useState()  

  useEffect(()=>{ 
   
    const interval = setInterval(()=> { 
      const now = new Date().getTime();
      const timeleft = time - now;   

      if ( timeleft < 0 ) {
        setTheTime( '' )
        clearInterval(interval)
      }     
      
      let display 

      if (item == 'days')    display = ( Math.floor( (timeleft ) / day ) ) 
      if (item == 'hours')   display = ( Math.floor( (timeleft % day) / hour ) ) 
      if (item == 'minutes') display = ( Math.floor( (timeleft % hour) / minute ) )
      if (item == 'seconds') display = ( Math.floor( (timeleft % minute) / second ))  
      
      display = ( display < 10 )?  '0' + display : display
      setTheTime( display )
    } , 1000 ) 

    return () => {
      // 👇️ clear timeout when the component unmounts
      clearInterval(interval)
    }
    
  },[props])

 return theTime
}

export default Timeleft