import Footer from "@components/Footer"
import Navbar from "@components/Navbar"

const Layout: React.FC <{children: React.ReactNode}> = ({children}) => {
    return(
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

export default Layout