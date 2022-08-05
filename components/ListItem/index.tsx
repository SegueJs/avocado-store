import styles from "@styles/components/ListItem.module.css"
import { motion } from "framer-motion"

const ListItem: React.FC<{ item: TProduct, onClick: Function }> = ({ item, onClick }) => {

  return (
    <motion.div

    onClick={()=>onClick(item.id)}
    className={styles.listItem}
    whileHover={{scale: 1.05}}
    whileTap={{scale: 0.95}}

    initial={{x: "-30%"}}
    animate={{x: 0}}

    >
      <div className={styles.img}>
        <img src={item.image} alt={item.name} />
      </div>
      <div className={styles.content}>
        <h2>{item.name}</h2>
        <h3><span>$</span>{item.price}</h3>
        <h4><span>Taste: </span>{item.attributes.taste}</h4>

      </div>
    </motion.div>
  );
};

export default ListItem