import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <header className="header" id="header">
                <button className="btn">Add Assesment <span><i className='bx bx-plus'></i></span></button>
                <div className="span-left">
                    <div className="progress-bar">
                        <progress className="p-bar" max="100" value="80"></progress>
                        <p className="text progress-bar-text"> 
                            <span>24k</span> / <span>24k patients seen</span>
                        </p>
                    </div>
                    <div className="user-details">
                        <p>Sandra Mamai</p>
                        <p className="text">smamai@accessafya.com</p>
                    </div>
                    <div className="header-img">
                        <img src="https://cdn1.iconfinder.com/data/icons/avatar-2-2/512/Programmer-512.png" alt="avatar"></img>
                    </div>
                </div>
                
            </header>
        )
    }
}

export default Navbar
