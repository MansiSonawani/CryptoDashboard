import React from "react"



const ExchangeRate = (props)  => {

  
  
  

    return (<div className='exchange-rate'>
      <h1>
        Exchange Rate
         
      </h1>
      <h2>
      {props.exchangerate}
        
      </h2>
     <p>
     {props.chosenCurrency1} to {props.chosenCurrency2}
 
     </p>
      
    </div>
    )
}

 
  
  export default  ExchangeRate