import SaleCard from '../../componets/saleCard/saleCard'
import Subtitle from '../../componets/subtitle/subtitle'
import sprecialG from "../../assets/sprecialdoggrande.png"
import sprecialP from "../../assets/sprecialdogpequena.png"
import sprecialM from "../../assets/specialdogmedia.png"
import racaoGato from "../../assets/racaomaggat.png"
import racaoorigens from "../../assets/racaoorigens.png"


import "../../App.css"

const Loja = () => {
  return (
    <div>
     <div className="cont"> <Subtitle>Itens da nossa loja</Subtitle></div>
  <div className="conte"> 
  <SaleCard fullPreto={94} title={racaoorigens}>Ração adulto Origens</SaleCard>
    <SaleCard fullPreto={34} title={racaoGato}>Ração adulto Origens</SaleCard>
    <SaleCard fullPreto={44} title={sprecialP}>Ração adulto Origens</SaleCard>
    <SaleCard fullPreto={94} title={sprecialdoggrande}>Ração adulto Origens</SaleCard>
     </div>
     <div className="conte"> 

    <SaleCard fullPreto={24} title={sprecialM}>Ração adulto Origens</SaleCard>
    <SaleCard fullPreto={34} title={sprecialG}>Ração adulto Origens</SaleCard>
     <SaleCard fullPreto={84} title={racaoorigens}>Ração adulto Origens</SaleCard>
    <SaleCard fullPreto={74} title={racaoGato}>Ração adulto Origens</SaleCard>

   </div>  <div className="conte"> 

    <SaleCard fullPreto={534} title={sprecialP}>Ração adulto Origens</SaleCard>
   <SaleCard fullPreto={74} title={racaoorigens}>Ração adulto Origens</SaleCard>
    <SaleCard fullPreto={64} title={sprecialG}>Ração adulto Origens</SaleCard>

    <SaleCard fullPreto={44} title={sprecialM}>Ração adulto Origens</SaleCard>
   </div>
     </div>
  )
}

export default Loja
