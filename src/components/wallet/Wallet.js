import { ethers } from "ethers";
import React, { useState } from "react";

const Wallet = () => {
    const [account, setAccount] = useState(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                setAccount(accounts[0]); // set first account

                // Optional: provider & signer
                const provider = new ethers.BrowserProvider(window.ethereum);
                const signer = await provider.getSigner();
                console.log("Connected:", await signer.getAddress());
            } catch (err) {
                console.error("Connection error:", err);
            }
        } else {
            alert("MetaMask not installed!");
        }
    };
    return (

        <>
            <div className="appHeader bg-primary text-light">
                <div className="left">
                    <a href="/" className="headerButton goBack">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </a>
                </div>
                <div className="pageTitle">Wallet</div>
                <div className="right"></div>
            </div>

            <div id="appCapsule">
                <div class="section full gradientSection">
                    <div class="in">
                        <h5 class="title mb-2">Current Balance</h5>
                        <h1 class="total">$ 2,562.50</h1>
                        <div class="wallet-inline-button mt-5">
                            <a href="#" class="item" data-bs-toggle="modal" data-bs-target="#depositActionSheet">
                                <div class="iconbox">
                                    <ion-icon name="arrow-up-outline"></ion-icon>
                                </div>
                                <strong>Deposit</strong>
                            </a>
                            <a href="#" class="item" data-bs-toggle="modal" data-bs-target="#withdrawActionSheet">
                                <div class="iconbox">
                                    <ion-icon name="arrow-down-outline"></ion-icon>
                                </div>
                                <strong>Withdraw</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade action-sheet " id="depositActionSheet" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Deposit</h5>
                        </div>
                        <div className="modal-body mb-4">
                            <div className="action-sheet-content">
                                <form>
                                    <div className="form-group basic">
                                        <div className="input-wrapper">
                                            <label className="label" for="depositAmount">Enter Amount</label>
                                            <div className="exchange-group small">
                                                <div className="input-col">
                                                    <input type="text" className="form-control form-control-lg pe-0"
                                                        id="depositAmount" placeholder="0" value="380" maxlength="14" />
                                                </div>
                                                <div className="select-col">
                                                    <select className="form-select form-select-lg currency">
                                                        <option value="USD" selected>USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-2">
                                        <button type="button" className="btn btn-primary btn-lg btn-block"
                                            data-bs-dismiss="modal">Deposit</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade action-sheet" id="withdrawActionSheet" tabindex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Withdraw</h5>
                        </div>
                        <div className="modal-body mb-4">
                            <div className="action-sheet-content">
                                <form>
                                    <div className="form-group basic mb-2">
                                        <div className="input-wrapper">
                                            <label className="label" for="iban1">IBAN</label>
                                            <input type="email" className="form-control" id="iban1" placeholder="Enter your IBAN" />
                                            <i className="clear-input">
                                                <ion-icon name="close-circle"></ion-icon>
                                            </i>
                                        </div>
                                    </div>
                                    <div className="form-group basic">
                                        <div className="input-wrapper">
                                            <label className="label" for="withdrawAmount">Enter Amount</label>
                                            <div className="exchange-group small">
                                                <div className="input-col">
                                                    <input type="text" className="form-control form-control-lg pe-0"
                                                        id="withdrawAmount" placeholder="0" value="380" maxlength="14" />
                                                </div>
                                                <div className="select-col">
                                                    <select className="form-select form-select-lg currency">
                                                        <option value="USD" selected>USD</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <button type="button" className="btn btn-primary btn-lg btn-block"
                                            data-bs-dismiss="modal">Withdraw</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section ">
                <div class="section-heading">
                    <h2 class="title">Transactions</h2>
                    <a href="history.html" class="link">View All</a>
                </div>
                <div class="card">
                    <ul class="listview flush transparent no-line image-listview detailed-list mt-1 mb-1">
                        <li>
                            <a href="#" class="item">
                                <div class="icon-box bg-success">
                                    <ion-icon name="arrow-up-outline"></ion-icon>
                                </div>
                                <div class="in">
                                    <div>
                                        <strong>Tether</strong>
                                        <div class="text-small text-success">Win</div>
                                    </div>
                                    <div class="text-end text-success">
                                        <strong>+$855,24</strong>
                                        <div class="text-small ">
                                            Today 11:38 AM
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="item">
                                <div class="icon-box bg-danger">
                                    <ion-icon name="arrow-down-outline"></ion-icon>
                                </div>
                                <div class="in">
                                    <div>
                                        <strong>Tether</strong>
                                        <div class="text-small text-danger">Loss</div>
                                    </div>
                                    <div class="text-end">
                                        <strong class="text-danger">-$40,68</strong>
                                        <div class="text-small">
                                            March 8, 2021
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="item">
                                <div class="icon-box bg-danger">
                                    <ion-icon name="arrow-down-outline"></ion-icon>
                                </div>
                                <div class="in">
                                    <div>
                                        <strong>Tether</strong>
                                        <div class="text-small text-danger">Loss</div>
                                    </div>
                                    <div class="text-end text-danger">
                                        <strong>-$100,00</strong>
                                        <div class="text-small">
                                            March 4, 2021
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="item">
                                <div class="icon-box bg-success">
                                    <ion-icon name="arrow-up-outline"></ion-icon>
                                </div>
                                <div class="in">
                                    <div>
                                        <strong>Tether</strong>
                                        <div class="text-small text-success">Win</div>
                                    </div>
                                    <div class="text-end text-success">
                                        <strong>+$2.405,48</strong>
                                        <div class="text-small">
                                            February 24, 2021
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="section mt-4 mb-4">
                <div class="card card-with-icon">
                    <div class="card-body pt-3 pb-3 text-center">
                        <div class="card-icon bg-success mb-2">
                            <ion-icon name="link"></ion-icon>
                        </div>
                        <h3 class="card-titlde mb-1">Refer a Friend</h3>

                        <p>Invite your friends and earn prizes!</p>
                        <div class="row">
                            <div class="col">
                                <a href="/refer" class="btn btn-secondary">
                                    <ion-icon name="copy-outline"></ion-icon>
                                    Invite now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ padding: "20px", marginBottom: "40px" }}>
                <h2>MetaMask Connect Demo</h2>

                {account ? (
                    <p>✅ Connected: {account}</p>
                ) : (
                    <button
                        onClick={connectWallet}
                        style={{
                            padding: "10px 20px",
                            background: "blue",
                            color: "white",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer",
                        }}
                    >
                        Connect MetaMask
                    </button>
                )}
            </div>
        </>
    )

}

export default Wallet;