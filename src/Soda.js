import React from "react";
import { Link } from "react-router-dom";
import './Soda.css';

const Soda = () => {
    return (
        <div>
            <h1>Soda</h1>
            <iframe src="https://giphy.com/embed/3o7GUYpE8lv4omBMPK" width="480" height="360" title="Soda Gif"className="giphy-embed" allowFullScreen></iframe>
            <Link to="/">Go Back</Link>
        </div>
    );
}
export default Soda;