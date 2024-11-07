import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




import Home from './Home'; 
import CrudApp from './CrudApp';
import NavigationBar from './Navbar';






const MainApp = () => {
    return (
        <Router>
            <div>
                <NavigationBar />
                <div className="container">
                    {/* <h1 className="my-4">CRUD App with React and MySQL</h1> */}
                    

                    
                    <Routes>
                        
                        <Route path="/" element={<Home />} />
                        
                        <Route path="/cruds" element={<CrudApp />} />
                
                    
                
                    
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default MainApp;