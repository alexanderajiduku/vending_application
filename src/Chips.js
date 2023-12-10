import React from "react";
import { Link } from "react-router-dom";
import './Chips.css';


const Chips = () => {
    return (
        <div>
            <h1>Chips</h1>
            <iframe src="https://giphy.com/embed/WpToCsBQuIopU4L4Ij" width="480" height="480" title="Chips Giphy" allowFullScreen></iframe>
            <Link to="/">Go Back</Link>
        </div>
    );
}
export default Chips;