const History = () => {
    return (
        <>
            <div className="appHeader bg-primary text-light">
                <div className="left">
                    <a href="/" className="headerButton goBack">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </a>
                </div>
                <div className="pageTitle">History</div>
                <div className="right"></div>
            </div>

            <div id="appCapsule">
                {/* Today */}
                <div className="section mt-2">
                    <div className="section-title">Today</div>
                    <div className="card">
                        <ul className="listview flush transparent no-line image-listview detailed-list mt-1 mb-1">
                            {/* item */}
                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-success">
                                        <ion-icon name="arrow-up-outline"></ion-icon>
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Tether</strong>
                                            <div className="text-small text-success">Win</div>
                                        </div>
                                        <div className="text-end text-success">
                                            <strong>+$855,24</strong>
                                            <div className="text-small">Today 11:38 AM</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* This Week */}
                <div className="section mt-2">
                    <div className="section-title">This Week</div>
                    <div className="card">
                        <ul className="listview flush transparent no-line image-listview detailed-list mt-1 mb-1">
                            {/* item */}
                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-danger">
                                        <ion-icon name="arrow-down-outline"></ion-icon>
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Tether</strong>
                                            <div className="text-small text-danger">Loss</div>
                                        </div>
                                        <div className="text-end">
                                            <strong className="text-danger">-$40,68</strong>
                                            <div className="text-small">March 8, 2021</div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-danger">
                                        <ion-icon name="arrow-down-outline"></ion-icon>
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Tether</strong>
                                            <div className="text-small text-danger">Loss</div>
                                        </div>
                                        <div className="text-end text-danger">
                                            <strong>-$100,00</strong>
                                            <div className="text-small">March 4, 2021</div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-success">
                                        <ion-icon name="arrow-up-outline"></ion-icon>
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Tether</strong>
                                            <div className="text-small text-success">Win</div>
                                        </div>
                                        <div className="text-end text-success">
                                            <strong>+$2.405,48</strong>
                                            <div className="text-small">February 24, 2021</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* December */}
                <div className="section mt-2">
                    <div className="section-title">December, 2021</div>
                    <div className="card">
                        <ul className="listview flush transparent no-line image-listview detailed-list mt-1 mb-1">
                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-success">
                                        <ion-icon name="arrow-up-outline"></ion-icon>
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Tether</strong>
                                            <div className="text-small text-success">Win</div>
                                        </div>
                                        <div className="text-end text-success">
                                            <strong>+$40,68</strong>
                                            <div className="text-small">December 22, 2021</div>
                                        </div>
                                    </div>
                                </a>
                            </li>

                            <li>
                                <a href="#" className="item">
                                    <div className="icon-box bg-success">
                                        <ion-icon name="arrow-up-outline"></ion-icon>
                                    </div>
                                    <div className="in">
                                        <div>
                                            <strong>Tether</strong>
                                            <div className="text-small text-success">Win</div>
                                        </div>
                                        <div className="text-end text-success">
                                            <strong>+$100,00</strong>
                                            <div className="text-small">December 16, 2021</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="section mt-3 mb-3">
                        <a href="#" className="btn btn-lg btn-block btn-primary">
                            Load More
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default History;