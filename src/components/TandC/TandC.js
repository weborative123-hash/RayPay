const TandC = () => {
    return (
        <>
            <div className="appHeader bg-primary text-light">
                <div className="left">
                    <a href="/" className="headerButton goBack">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </a>
                </div>
                <div className="pageTitle">Terms and Condition</div>
                <div className="right"></div>
            </div>
            <div id="appCapsule">
                <div class="card">

                    <p>
                        Welcome to RayPay. By accessing or using our application, you agree to the following terms and
                        conditions.
                        Please read them carefully before proceeding.
                    </p>

                    <h3>1. Acceptance of Terms</h3>
                    <p>
                        By using this application, you confirm that you accept these Terms & Conditions and agree to comply with
                        them.
                        If you do not agree, you must not use our services.
                    </p>

                    <h3>2. Use of Services</h3>
                    <p>
                        You agree to use our services only for lawful purposes and in accordance with applicable laws.
                        Misuse of the application for fraudulent or illegal activities is strictly prohibited.
                    </p>

                    <h3>3. User Responsibilities</h3>
                    <ul>
                        <li>You are responsible for maintaining the confidentiality of your account and login details.</li>
                        <li>You must provide accurate and up-to-date information when using our services.</li>
                        <li>You agree not to attempt to hack, disrupt, or misuse the application in any way.</li>
                    </ul>

                    <h3>4. Limitation of Liability</h3>
                    <p>
                        RayPay will not be held liable for any direct, indirect, or incidental damages resulting from
                        the use or inability to use the application or services.
                    </p>
                </div>
            </div>
        </>
    )
}

export default TandC;