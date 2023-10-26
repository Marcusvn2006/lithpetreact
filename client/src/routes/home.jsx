import SaleCard from "../componets/saleCard/saleCard"
import Subtitle from "../componets/subtitle/subtitle"
import { cartState } from "../atoms/cart";
import sprecialG from "../assets/sprecialdoggrande.png"
import sprecialP from "../assets/sprecialdogpequena.png"
import sprecialM from "../assets/specialdogmedia.png"
import racaoGato from "../assets/racaomaggat.png"
import { useRecoilState } from "recoil";
import vet from "../assets/veterinario.svg"
import ades from "../assets/adestramento.svg"
import wal from "../assets/dogwalker.svg"



import racaoorigens from "../assets/racaoorigens.png"
import te from "../assets/telafun.jpg"
import banho from "../assets/banhoetosalogo.svg"
import Btns from "../componets/btns/btns";
import Promi from "../componets/promi/promi";
import { Link } from "react-router-dom";
const Homes = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const handleAddProduct = (info) => {
    setCart([...cart, info]);
  };


  return (
    <div>
          < img className='imgfund' src={te} alt="" />
   <div className="subt">
    <Subtitle>Produtos para você:</Subtitle>
    
    </div>
   <div className='container'>
    <SaleCard fullPreto={54} title={racaoorigens}
    
    >Ração adulto Origens</SaleCard>
    <SaleCard fullPreto={64} title={sprecialG}
    onAdd={() =>
      handleAddProduct({
        name: "sla",
        price: 99.95,
        img: "sprecialG",
      })}>Ração adulto Origens</SaleCard>
    <SaleCard fullPreto={94} title={sprecialP}>Ração adulto Origens</SaleCard>
    <SaleCard fullPreto={34} title={sprecialM}>Ração adulto Origens</SaleCard>
    <SaleCard fullPreto={74} title={racaoGato}>Ração adulto Origens</SaleCard>
    
   </div>
   <div className='containeres'>

<Btns link={"/"} img={banho}>banho & tosa</Btns>
<Btns link={"/"} img={vet}>Veterinario</Btns>
<Btns link={"/"} img={ades}>Adestramento</Btns>
<Btns link={"/"} img={wal} >Dog walker</Btns>
   </div>
   <div className='conta'>

<Promi/>
   </div>
   
    </div>
  )
}

export default Homes
