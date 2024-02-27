import styles from "./ButtonPink.module.css";

interface button {
  text: string;
  grande?: boolean;
  medio?: boolean;
  funciton?: void;
}

export default function ButtonPink(props: button) {
  const grandeOuPequeno = props.grande
    ? styles.grande
    : props.medio
    ? styles.medio
    : styles.pink;

  // Uma boa abordagem seria fazer uma função auxiliar que faz o tratamento desse ternario. Nesse caso como ele já passou de apenas uma verificação ai no caso de ser feito uma função auxiliar. Tipo essa:

  /*

      const getSizeClass = (props: ButtonProps) => {
  const sizeMap = {
    grande: styles.grande,
    medio: styles.medio,
    default: styles.pink,
  };

  const sizeKey = Object.keys(props).find(key => sizeMap[key]);

  return sizeMap[sizeKey] || styles.pink;
};
    
  */

  // Ai vc passaria para o grandeOuPequeno dessa forma: const grandeOuPequeno = getSizeClass(props);

  return (
    <div className={styles.moveButton}>
      <button className={grandeOuPequeno}>{props.text}</button>
    </div>
  );
}
/*button sendo compartilhado em diferentes partes da aplicações com parametros para dizer se ele
vai ser grande, medio ou pequeno*/
