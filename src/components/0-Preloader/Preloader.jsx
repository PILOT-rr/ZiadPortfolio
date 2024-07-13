import React from 'react';
import './Preloader.css'; // Import your CSS file

class Preloader extends React.Component {
    render() {
        return (
            <div className="preloader-container">
                <div className="page-bg"></div>
                <div className="preloader">
                    <div className="preloader-box">
                        {['M', 'A', 'B', 'R', 'O', 'K', 'I'].map((letter, index) => (
                            <div key={index}>{letter}</div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Preloader;
