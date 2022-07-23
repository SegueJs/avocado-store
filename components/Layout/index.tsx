const Layout: React.FC <{children: React.ReactNode}> = ({children}) => {
    return(
        <>
            <h1>Header</h1>
            {children}
            <h1>Footer</h1>
        </>
    )
}

export default Layout