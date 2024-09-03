

const Layout = ({ children, aboutme, cv }) => {
  return (
    <div>
        {children}
        {aboutme}
        {cv}
    </div>
  )
}

export default Layout