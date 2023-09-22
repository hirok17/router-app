import { NavLink } from "react-router-dom";

const Navber = () => {
    return (
        <section className=" bg-pink-200 py-4 sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <div>
                    <h2 className="text-2xl font-bold">Amajhon</h2>
                </div>
                <div>
                    <ul className="flex gap-5 text-lg">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/products">Products</NavLink></li>
                        <li><NavLink to="/about">About Us</NavLink></li>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Navber;