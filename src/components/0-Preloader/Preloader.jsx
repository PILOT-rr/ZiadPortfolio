import React from 'react';
import './Preloader.css'; // Import your CSS file

class Preloader extends React.Component {
    render() {
        return (
            <div>
                <div className="page-bg"></div>
                <div className="preloader">
                    <div className="preloader-box">
                        <div>M</div>
                        <div>A</div>
                        <div>B</div>
                        <div>R</div>
                        <div>O</div>
                        <div>K</div>
                        <div>I</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Preloader;
