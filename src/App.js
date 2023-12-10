// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';

function App() {
    return (
        <Router>
            <NavBar /> {/* Site-wide NavBar */}
            <Routes>
                <Route path="/" element={<VendingMachine />} />
                <Route path="/soda" element={<Soda />} />
                <Route path="/chips" element={<Chips />} />
                <Route path="/sardines" element={<Sardines />} />
            </Routes>
        </Router>
    );
}

export default App;
