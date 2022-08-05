import styles from "@styles/components/AvocadoInfo.module.css"

const AvocadoInfo:React.FC<{ product: TProduct}> = ({ product }) => {

    return(
        <div className={styles.productInfo}>
            <h3>About this avocado</h3>
            <p>{product?.attributes?.description}</p>
            <span className={styles.line} />
            <div className={styles.table}>
                <div className={styles.head}>
                    <h2>Attributes</h2>
                </div>
                <div>
                    <h3>Shape</h3>
                </div>
                <div>
                    <p>{product.attributes.shape}</p>
                </div>
                <div>
                    <h3>Hardiness</h3>
                </div>
                <div>
                    <p>{product.attributes.hardiness}</p>
                </div>
                <div>
                    <h3>Taste</h3>
                </div>
                <div>
                    <p>{product.attributes.taste}</p>
                </div>
            </div>
        </div>
    )
}

export default AvocadoInfo