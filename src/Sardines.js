import React from "react";
import { Link } from "react-router-dom";
import './Sardines.css';

const Sardines = () => {
    return (
        <div>
            <h1>Sardines</h1>
            <iframe src="https://giphy.com/embed/PDJDOB9IQsqkw" width="480" height="366" title="Sardines Giphy" allowFullScreen></iframe>
            <Link to="/">Go Back</Link>
        </div>
    );
}
export default Sardines;
