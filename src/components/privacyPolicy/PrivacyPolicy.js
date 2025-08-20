import "../../App.css";
const PrivacyPolicy = () => {
    return (
        <>
            <div className="appHeader bg-primary text-light">
                <div className="left">
                    <a href="/" className="headerButton goBack">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </a>
                </div>
                <div className="pageTitle">Privacy Policy</div>
                <div className="right"></div>
            </div>

            <div id="appCapsule">
                <div class="card" style={{ padding: "20px" }}>
                    <p>
                        At <strong>RayPay</strong>, we value your privacy and are committed to protecting your personal
                        information.
                        This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
                    </p>

                    <h4>1. Information We Collect</h4>
                    <p>
                        We may collect personal information such as your name, email address, phone number, payment details,
                        and transaction history when you use our app or website.
                    </p>

                    <h4>2. How We Use Your Information</h4>
                    <ul>
                        <li>To provide and improve our services</li>
                        <li>To process transactions securely</li>
                        <li>To send important updates and notifications</li>
                        <li>To comply with legal and regulatory requirements</li>
                    </ul>

                    <h4>3. Data Security</h4>
                    <p>
                        We implement strict security measures to protect your personal information. However, no method of
                        transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                    </p>

                    <h4>4. Sharing of Information</h4>
                    <p>
                        We do not sell or trade your personal data. We may share your information with trusted partners
                        only for the purpose of providing our services or when required by law.
                    </p>

                    <h4>5. Your Rights</h4>
                    <p>
                        You have the right to access, update, or delete your personal data. You may also opt-out of
                        receiving promotional messages at any time.
                    </p>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;