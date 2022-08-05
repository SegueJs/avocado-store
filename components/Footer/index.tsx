import styles from "@styles/components/Footer.module.css"

const Footer: React.FC = () => {
    return(
        <footer className={styles.footer}>
            <div className={styles.info}>
                <div className={styles.section}>
                    <h2>Services</h2>
                    <a href="#">Web development</a>
                    <a href="#">App development</a>
                    <a href="#">Deployment</a>
                </div>
                <div className={styles.section}>
                    <h2>About</h2>
                    <a href="#">Company</a>
                    <a href="#">Team</a>
                    <a href="#">Careers</a>
                </div>
                <div className={styles.section}>
                    <h2>Company Name</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem esse quia et autem exercitationem, sit omnis aut doloribus optio quibusdam!</p>
                </div>
            </div>
            <div className={styles.social}>

            </div>
            <p>
                Company Name &copy; 2018
            </p>
        </footer>
    )
}

export default Footer