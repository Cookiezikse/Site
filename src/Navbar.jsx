import React from "react";
import {Link} from "react-router-dom";

function Navbar() {
    return (

        <div>
            <div className="category">
                <ul>
                    <li>
                        <Link to="/"><li>Acceuil</li></Link>
                    </li>
                    <li>Nouveauté</li>
                    <li>Catégorie</li>
                    <li>
                        <Link to="/Sign_in"><li>Sign in</li></Link>
                    </li>
                    <li>
                        <Link to="/liste"><li>Ma liste</li></Link>
                    </li>


                </ul>
                
            </div>
        </div>


        
    );
}

export default Navbar;