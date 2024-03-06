import './card.css'

function Card(props) {
   return (
      <div className="card">
         <div className="card-header">
            <h5 className="card-title">Cidade</h5>
         </div>
         <div className="card-body">
            <table class="table">

               <tbody>
                  <tr>
                     <td className="text-start">Temperatura</td>
                     <td className="text-end">-</td>
                  </tr>
                  <tr>
                     <td className="text-start">Clima</td>
                     <td className="text-end">-</td>
                  </tr>
                  <tr>
                     <td className="text-start">Umidade do Ar</td>
                     <td className="text-end">-</td>
                  </tr>
                  <tr>
                     <td className="text-start">Velocidade Vento</td>
                     <td className="text-end">-</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default Card;