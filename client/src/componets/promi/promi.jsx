import styles from "./promi.module.css";

const Promi = () => {
  return (
    <div className={styles.rl}>
      <div className={styles.rtl}>
        <h2 className={styles.h2}>Sua 1° compra online com <h2>20% OFF</h2> pelo app</h2>
      </div>
      <div className={styles.rtl2}>
        <h1>Aplique o cupom no carrinho de compras SENAI</h1>
      </div>
    </div>
  );
};

export default Promi;
