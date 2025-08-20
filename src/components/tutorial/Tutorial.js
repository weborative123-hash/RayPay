const Tutorial = () => {
    return (
        <>
            <div className="appHeader bg-primary text-light">
                <div className="left">
                    <a href="/" className="headerButton goBack">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </a>
                </div>
                <div className="pageTitle">Tutorial</div>
                <div className="right"></div>
            </div>

            <div id="appCapsule">
                <div className="section mt-3 p-3">
                    <h2 className="mb-3">How to Add Money from XYZ Link</h2>

                    <ol className="list-group list-group-numbered">
                        <li className="list-group-item">
                            Open the <strong>XYZ Link</strong> provided to you.
                        </li>
                        <li className="list-group-item">
                            Login with your registered mobile number or email ID.
                        </li>
                        <li className="list-group-item">
                            Select the option <strong>"Add Money"</strong> from the main menu.
                        </li>
                        <li className="list-group-item">Enter the amount you want to add.</li>
                        <li className="list-group-item">
                            Choose your payment method (Debit Card, Credit Card, NetBanking).
                        </li>
                        <li className="list-group-item">Complete the payment securely.</li>
                        <li className="list-group-item">
                            After successful payment, the amount will be added to your wallet
                            instantly.
                        </li>
                    </ol>

                    <div className="alert alert-success mt-3">
                        <ion-icon name="information-circle-outline"></ion-icon>
                        Make sure you are using the official XYZ link for secure transactions.
                    </div>

                    <div className="text-center mt-4">
                        <a
                            href="https://xyz.com/addmoney"
                            className="btn btn-primary btn-lg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ion-icon name="link-outline"></ion-icon> Go to XYZ Link
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Tutorial;