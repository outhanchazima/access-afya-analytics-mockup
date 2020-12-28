import React, { Component } from 'react'

export class Dashboard extends Component {
    render() {
        return (
            <div className="container">
                <aside className="card">
                    <h5>VISITS</h5>
                </aside>
                <div className="">
                    <div className="card row">
                        <h5>KEY ISSUES</h5>
                    </div>
                    <div className="card row">
                        <h5>MONITORING PERIOD</h5>
                    </div>
                    <div className="row">
                        <div className="card col">
                            <h5>Foot fall</h5>
                        </div>
                        <div className="card col">
                            <h5>Patient Satisfaction</h5>
                        </div>
                        <div className="card col">
                            <h5>Revenue</h5>
                        </div>
                    </div>
                    <div className="card row">
                        <h5>table</h5>
                    </div>

                </div>

            </div>
        )
    }
}

export default Dashboard
