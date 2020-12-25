import React, { Component } from 'react'

export class Sidebar extends Component {
    render() {
        return (
            <div className="side-bar">
                <nav className="side-nav">
                    <div className="nav-brand" >
                        <i className="bx bx-folder"></i>
                        <span className="nav-logo-name">AccessAfya</span>
                    </div>
                    <div className="nav-list">
                        <a href="##" className="nav-link">
                            <i className="bx bxs-dashboard nav-icon"></i>
                            <span className="nav-name" >Dashboard</span>
                        </a>
                        <a href="##" className="nav-link">
                            <i className="bx bx-folder nav-icon"></i>
                            <span className="nav-name" >Documents</span>
                        </a>
                        <a href="##" className="nav-link">
                            <i className="bx bx-info-circle nav-icon" ></i>
                            <span className="nav-name" >Patients</span>
                        </a>
                        <a href="##" className="nav-link">
                            <i className= "bx bx-message-detail nav-icon"></i>
                            <span className="nav-name" >Messages</span>
                        </a>
                    </div>
                    <a href="##" className="nav-link">
                        <i className="bx bx-cookie nav-icon"></i>
                        <span className="nav-name" >Settings</span>
                    </a>
                </nav>
            </div>
        )
    }
}

export default Sidebar
