import React from "react";

const Chat = () => {
    return (
        <>
            <div className="appHeader bg-primary text-light">
                <div className="left">
                    <a href="/" className="headerButton goBack">
                        <ion-icon name="chevron-back-outline"></ion-icon>
                    </a>
                </div>
                <div className="pageTitle">Chat</div>
                <div className="right"></div>
            </div>

            <div id="appCapsule" className="mb-5">

                {/* Messages */}
                <div className="message-divider">Friday, Sep 20, 10:40 AM</div>

                <div className="message-item">
                    <img
                        src="/img/sample/avatar/avatar1.jpg"
                        alt="avatar"
                        className="avatar"
                    />
                    <div className="content">
                        <div className="title">John</div>
                        <div className="bubble">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </div>
                        <div className="footer">10:44 AM</div>
                    </div>
                </div>

                <div className="message-item user">
                    <div className="content">
                        <div className="bubble">Aenean volutpat.</div>
                        <div className="footer">10:46 AM</div>
                    </div>
                </div>

                <div className="message-divider">Friday, Sep 21, 7:40 PM</div>

                <div className="message-item">
                    <img
                        src="/img/sample/avatar/avatar1.jpg"
                        alt="avatar"
                        className="avatar"
                    />
                    <div className="content">
                        <div className="title">John</div>
                        <div className="bubble">
                            Aenean hendrerit porttitor dolor id elementum. Mauris nec purus
                            pulvinar, fringilla ex eget, ultrices urna.
                        </div>
                        <div className="footer">10:40 AM</div>
                    </div>
                </div>

                <div className="message-item user">
                    <div className="content">
                        <div className="bubble">
                            <img
                                src="/img/sample/photo/2.jpg"
                                alt="photo"
                                className="imaged w160"
                            />
                        </div>
                        <div className="footer">10:46 AM</div>
                    </div>
                </div>

                <div className="message-item user">
                    <div className="content">
                        <div className="bubble">
                            Maecenas sollicitudin justo vel posuere eleifend. In eget iaculis
                            mi, vitae suscipit dui. Phasellus a facilisis magna, eget aliquam
                            turpis. Nullam eros neque, varius vitae commodo blandit, placerat
                            quis est.
                        </div>
                        <div className="footer">10:40 AM</div>
                    </div>
                </div>

                <div className="message-item">
                    <img
                        src="/img/sample/avatar/avatar1.jpg"
                        alt="avatar"
                        className="avatar"
                    />
                    <div className="content">
                        <div className="title">John</div>
                        <div className="bubble">
                            <img
                                src="/img/sample/photo/5.jpg"
                                alt="photo"
                                className="imaged w160"
                            />
                        </div>
                        <div className="footer">10:40 AM</div>
                    </div>
                </div>

                <div className="message-item">
                    <img
                        src="/img/sample/avatar/avatar1.jpg"
                        alt="avatar"
                        className="avatar"
                    />
                    <div className="content">
                        <div className="title">John</div>
                        <div className="bubble">
                            Aenean hendrerit porttitor dolor id elementum. Mauris nec purus
                            pulvinar, fringilla ex eget, ultrices urna.
                        </div>
                        <div className="footer">10:40 AM</div>
                    </div>
                </div>

                {/* Chat Footer */}
                <div className="chatFooter mb-5">
                    <form>
                        <a href="#" className="btn btn-icon btn-text-secondary rounded">
                            <ion-icon name="camera"></ion-icon>
                        </a>
                        <div className="form-group basic">
                            <div className="input-wrapper">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Type a message..."
                                />
                                <i className="clear-input">
                                    <ion-icon name="close-circle"></ion-icon>
                                </i>
                            </div>
                        </div>
                        <button type="button" className="btn btn-icon btn-primary rounded">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Chat;