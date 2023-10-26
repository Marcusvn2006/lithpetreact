import styles from "./cartOption.module.css";

const CartOption = ({ img, title, price, onRemove }) => {
  return (
    <div className={styles.option}>
      <img
        src={`https://placehold.co/600x400`}
        alt=""
        width={62}
        height={74}
      />
      <div className={styles.info}>
        <h3>{title}</h3>
        <h3>R${price.toFixed(2).replace(".",",")}</h3>
        <p onClick={onRemove}>remover</p>
      </div>
    </div>
  );
};

// CartOption.defaultProps={
//         img:"gameOver",
//         price:90.90,
//         title:"cs-go",
        
//     }

export default CartOption;
