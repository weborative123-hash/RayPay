const Logs = () => {
    return (
        <>
            <div className="appHeader bg-primary text-light">
                <div className="left">
                    <a href="/" className="headerButton goBack">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </a>
                </div>
                <div className="pageTitle">Logs</div>
                <div className="right"></div>
            </div>
            <div id="appCapsule">
                <div className="section mt-2 mb-2">
                    <div className="card">
                        {/* timeline */}
                        <div className="timeline timed ms-1 me-2">
                            <div className="item">
                                <span className="time">02:40 PM</span>
                                <div className="dot bg-primary"></div>
                                <div className="content">
                                    <h4 className="title">Balance Added</h4>
                                    <div className="text">You sent $50 to Wallet</div>
                                </div>
                            </div>

                            <div className="item">
                                <span className="time">02:40 AM</span>
                                <div className="dot bg-info"></div>
                                <div className="content">
                                    <h4 className="title">Your card has been added</h4>
                                    <div className="text">*** 5039</div>
                                </div>
                            </div>

                            <div className="item">
                                <span className="time">09:00 PM</span>
                                <div className="dot"></div>
                                <div className="content">
                                    <h4 className="title">KYC Documents</h4>
                                    <div className="text">Your ID has been approved.</div>
                                </div>
                            </div>

                            <div className="item">
                                <span className="time">03:30 PM</span>
                                <div className="dot bg-success"></div>
                                <div className="content">
                                    <h4 className="title">Login</h4>
                                    <div className="text">You Logged in</div>
                                </div>
                            </div>
                        </div>
                        {/* * timeline */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Logs;