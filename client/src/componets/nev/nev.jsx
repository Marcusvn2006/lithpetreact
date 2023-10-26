import styles from './nev.module.css'
import dindin from "../../assets/dindin.png"

import banho from "../../assets/banho.svg"
import { Link } from 'react-router-dom'
const navigation = [
  {componente: "/", name: "home"},
  {componente: "/loja", name: "loja"},
]

const Nev = () => {
  return (
    <div>
      {navigation.map((item)=>(
        <ul class={styles.iconesdocabeçalho}>
        <Link key={item.name} to={item.componente}> <li> <img src={dindin} alt="" width={"20px"}/> Loja </li></Link>
                <li> <img src={banho} alt="" width={"20px"}/> Banho e Tosa</li>
                <li> <img src={""} alt="" width={"20px"}/> Contatos & Agendamentos </li>
                <li><img src={dindin} alt="" width={"20px"}/> Localização</li>
                <li> <img src={dindin} alt="" width={"20px"}/>Duvidas</li>
            </ul>
                ))}
    </div>
  )
}

export default Nev
