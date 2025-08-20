import { Link } from "react-router-dom";
import "../../App.css";

function Sidebar() {
    return (
        <>
            {/* Sidebar Panel */}
            <div
                className="modal fade panelbox panelbox-left"
                id="sidebarPanel"
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body p-0">
                            {/* Profile Box */}
                            <div className="profileBox pt-2 pb-2">
                                <div className="image-wrapper">
                                    <img
                                        src="/img/sample/avatar/avatar1.jpg"
                                        alt="profile"
                                        className="imaged w36"
                                    />
                                </div>
                                <div className="in">
                                    <strong>Sebastian Doe</strong>
                                </div>
                                <button
                                    className="btn btn-link btn-icon sidebar-close"
                                    data-bs-dismiss="modal"
                                >
                                    <ion-icon name="close-outline"></ion-icon>
                                </button>
                            </div>

                            {/* Balance */}
                            <div className="sidebar-balance">
                                <div className="listview-title">Balance</div>
                                <div className="in">
                                    <h1 className="amount">$ 2,562.50</h1>
                                </div>
                            </div>

                            {/* Action Group */}
                            <div className="action-group">
                                <Link
                                    className="action-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#withdrawActionSheet"
                                >
                                    <div className="in">
                                        <div className="iconbox">
                                            <ion-icon name="arrow-down-outline"></ion-icon>
                                        </div>
                                        Withdraw
                                    </div>
                                </Link>

                                <Link
                                    className="action-button"
                                    data-bs-toggle="modal"
                                    data-bs-target="#depositActionSheet"
                                >
                                    <div className="in">
                                        <div className="iconbox">
                                            <ion-icon name="wallet-outline"></ion-icon>
                                        </div>
                                        Wallet
                                    </div>
                                </Link>

                                <Link to="/chat" className="action-button">
                                    <div className="in">
                                        <div className="iconbox">
                                            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                                        </div>
                                        Chat
                                    </div>
                                </Link>
                            </div>

                            {/* Menu */}
                            <div className="listview-title mt-1">Menu</div>
                            <ul className="listview flush transparent no-line image-listview">
                                <li>
                                    <Link to="/" className="item">
                                        <div className="icon-box bg-primary">
                                            <ion-icon name="home-outline"></ion-icon>
                                        </div>
                                        <div className="in">Home</div>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        className="item"
                                        data-bs-toggle="modal"
                                        data-bs-target="#withdrawActionSheet"
                                    >
                                        <div className="icon-box bg-primary">
                                            <ion-icon name="card-outline"></ion-icon>
                                        </div>
                                        <div className="in">Withdraw</div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/chat" className="item">
                                        <div className="icon-box bg-primary">
                                            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                                        </div>
                                        <div className="in">Chat</div>
                                    </Link>
                                </li>
                            </ul>

                            <ul className="listview flush transparent no-line image-listview">
                                <li>
                                    <Link to="/history" className="item">
                                        <div className="icon-box bg-primary">
                                            <ion-icon name="time-outline"></ion-icon>
                                        </div>
                                        <div className="in">History</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/logs" className="item">
                                        <div className="icon-box bg-primary">
                                            <ion-icon name="git-branch-outline"></ion-icon>
                                        </div>
                                        <div className="in">Logs</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/tutorial" className="item">
                                        <div className="icon-box bg-primary">
                                            <ion-icon name="git-branch-outline"></ion-icon>
                                        </div>
                                        <div className="in">Tutorial</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/privacy-policy" className="item">
                                        <div className="icon-box bg-primary">
                                            <ion-icon name="lock-closed-outline"></ion-icon>
                                        </div>
                                        <div className="in">Privacy Policy</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms" className="item">
                                        <div className="icon-box bg-primary">
                                            <ion-icon name="document-text-outline"></ion-icon>
                                        </div>
                                        <div className="in">Terms & Conditions</div>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/refer" className="item">
                                        <div className="icon-box bg-primary">
                                            <ion-icon name="link-outline"></ion-icon>
                                        </div>
                                        <div className="in">Refer</div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Withdraw Modal */}
            <div
                className="modal fade action-sheet"
                id="withdrawActionSheet"
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Withdraw Money</h5>
                        </div>
                        <div className="modal-body">
                            <div className="action-sheet-content">
                                <form>
                                    <div className="form-group basic">
                                        <label className="label">Balance</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addonb1">
                                                $
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                disabled
                                                placeholder="Enter an amount"
                                                value="3000"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <div className="input-wrapper">
                                            <label className="label" htmlFor="text11d">
                                                To
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="text11d"
                                                placeholder="Enter IBAN"
                                            />
                                            <i className="clear-input">
                                                <ion-icon name="close-circle"></ion-icon>
                                            </i>
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <label className="label">Enter Amount</label>
                                        <div className="input-group mb-2">
                                            <span className="input-group-text" id="basic-addonb1">
                                                $
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter an amount"
                                                value="100"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-block btn-lg"
                                            data-bs-dismiss="modal"
                                        >
                                            Withdraw
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Deposit Modal */}
            <div
                className="modal fade action-sheet"
                id="depositActionSheet"
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add Balance</h5>
                        </div>
                        <div className="modal-body">
                            <div className="action-sheet-content">
                                <form>
                                    <div className="form-group basic">
                                        <label className="label">Balance</label>
                                        <div className="input-group">
                                            <span className="input-group-text" id="basic-addonb1">
                                                $
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                disabled
                                                placeholder="Enter an amount"
                                                value="3000"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <label className="label">Enter Amount</label>
                                        <div className="input-group mb-2">
                                            <span className="input-group-text" id="basic-addona1">
                                                $
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter an amount"
                                                value="100"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group basic">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-block btn-lg"
                                            data-bs-dismiss="modal"
                                        >
                                            Deposit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
