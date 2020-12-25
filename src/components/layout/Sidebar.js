import React, { Component } from 'react'

export class Sidebar extends Component {
    render() {
        return (
            <div className="side-bar">
                <nav>
                    <div className="nav-brand" >
                        <i className="bx bx-layer nav-toggle" id="nav-toggle"></i>
                        <span className="nav-logo-name">AccessAfya</span>
                    </div>
                    <div className="nav-list">
                        <a href="##" className="nav-link">
                            <box-icon type='solid' name='dashboard'></box-icon>
                            <span className="nav-name" >Dashboard</span>
                        </a>
                        <a href="##" className="nav-link">
                            <box-icon name='folder' ></box-icon>
                            <span className="nav-name" >Documents</span>
                        </a>
                        <a href="##" className="nav-link">
                            <box-icon name='info-circle' ></box-icon>
                            <span className="nav-name" >Patients</span>
                        </a>
                        <a href="##" className="nav-link">
                            <box-icon name='message-detail' ></box-icon>
                            <span className="nav-name" >Messages</span>
                        </a>
                    </div>
                    <a href="##" className="nav-link">
                        <box-icon type='solid' name='cookie'></box-icon>
                        <span className="nav-name" >Settings</span>
                    </a>
                </nav>
                
            </div>
        )
    }
}

export default Sidebar
