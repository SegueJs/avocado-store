import styles from "@styles/components/Loader.module.css"

const Loader: React.FC = () => {
    return(
        <div className={styles.container}>
            <span className={styles.loader} />
        </div>
    )
}

export default Loader