import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Vite React daisyUI App</a>
            </div>
            <div className="flex-none">
                <Link to="about">
                    <button className="btn btn-square btn-ghost">
                        About
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default Navbar;
