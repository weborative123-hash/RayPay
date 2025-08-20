const Refer = () => {

    const referralCode = "RAY12345";
    const referralLink = `https://raypay.com/signup?ref=${referralCode}`;

    const copyCode = () => {
        navigator.clipboard.writeText(referralCode);
        alert(`Referral Code Copied: ${referralCode}`);
    };

    const copyLink = () => {
        navigator.clipboard.writeText(referralLink);
        alert("Referral Link Copied!");
    };

    return (


        <>
            <div className="appHeader bg-primary text-light">
                <div className="left">
                    <a href="/" className="headerButton goBack">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </a>
                </div>
                <div className="pageTitle">Refer</div>
                <div className="right"></div>
            </div>

            <div id="appCapsule">
                <div className="section mt-3 p-3 text-center">
                    {/* <img src="assets/img/refer.png" alt="Refer" style={{ maxWidth: "150px", marginBottom: "15px" }} /> */}
                    <h2>Invite Your Friends!</h2>
                    <p>Share your referral link and earn rewards when your friends join.</p>

                    {/* Referral Code */}
                    <div className="card p-3 mt-3">
                        <p>Your Referral Code:</p>
                        <h3 id="refCode" className="text-primary">{referralCode}</h3>
                        <button className="btn btn-outline-primary btn-sm mt-2" onClick={copyCode}>
                            <ion-icon name="copy-outline"></ion-icon> Copy Code
                        </button>
                    </div>

                    {/* Referral Link */}
                    <div className="card p-3 mt-3">
                        <p>Share Referral Link:</p>
                        <input
                            type="text"
                            id="refLink"
                            className="form-control mb-2"
                            readOnly
                            value={referralLink}
                        />
                        <button className="btn btn-primary btn-sm" onClick={copyLink}>
                            <ion-icon name="link-outline"></ion-icon>Copy Link
                        </button>
                    </div>

                    {/* Share Buttons */}
                    <div className="mt-4">
                        <p>Share via</p>
                        <a
                            href={`https://wa.me/?text=Join%20RayPay%20using%20my%20referral%20link%20${encodeURIComponent(referralLink)}`}
                            className="btn btn-success m-1"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ion-icon name="logo-whatsapp"></ion-icon> WhatsApp
                        </a>
                        <a
                            href={`sms:?body=Join%20RayPay%20using%20my%20referral%20link%20${encodeURIComponent(referralLink)}`}
                            className="btn btn-secondary m-1"
                        >
                            <ion-icon name="chatbubble-outline"></ion-icon> SMS
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Refer;