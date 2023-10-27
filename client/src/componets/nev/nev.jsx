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
               
            </ul>
                ))}
    </div>
  )
}

export default Nev
