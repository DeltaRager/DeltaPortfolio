import Footer from "./footer";
import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <div className="content">
      { children }
      <Footer></Footer>
    </div>
  );
}
 
export default Layout;