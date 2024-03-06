import './card.css'

function farenheitToCelcius(val){
   if(!isNaN(val)){
      return Math.round((val-32)/1.8*100)/100;
   }
}

function Card(props) {
   return (
      <div className="card">
         <div className="card-header">
            <h5 className="card-title">{props.itemName ?? "Cidade"}</h5>
         </div>
         <div className="card-body">
            <table className="table">

               <tbody>
                  <tr>
                     <td className="text-start">Temperatura</td>
                     <td className="text-end">{farenheitToCelcius(props.itemTemperature) ?? "-"}°C</td>
                  </tr> 
                  <tr>
                     <td className="text-start">Umidade do Ar</td>
                     <td className="text-end">{props.itemHumidity ?? "-"} %</td>
                  </tr>
                  <tr>
                     <td className="text-start">Velocidade Vento</td>
                     <td className="text-end">{props.itemWindspeed ?? "-"} km/h</td>
                  </tr>
                  <tr>
                     <td className="text-start">Nascer do Sol</td>
                     <td className="text-end">{props.itemSunrise ?? "-"}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default Card;