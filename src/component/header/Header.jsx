import { Outlet, useNavigation } from "react-router-dom";
import Navber from "../navber/Navber";
import Footer from "../about/footer/Footer";
import Spinner from "./Spinner";


const Header = () => {

    const navigation=useNavigation();
    console.log(navigation.state);
    const isLoading=navigation.state ==="loading";
    return (
        <div>
           <Navber></Navber>

           {
            isLoading ? (<Spinner></Spinner>) : (
                <div className="min-h-screen mt-5">
                <Outlet></Outlet>
                </div>
            )
           }
          
          
          <Footer></Footer>
          
        </div>
    );
};

export default Header;