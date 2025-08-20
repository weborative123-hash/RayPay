import AppHeader from "../appHeader/AppHeader";
import Sidebar from "../sidebar/Sidebar";
import "../../App.css"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React, { useState, useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

const Dashboard = () => {
    const slides = [
        { title: "ELON/TRUMP", vol: "50M VOL", price: "99.89", gain: "10% GAIN" },
        { title: "IRAN/ISRAEL", vol: "47M VOL", price: "87.32", gain: "8% GAIN" },
        { title: "US/CHINA", vol: "35M VOL", price: "85.30", gain: "5% GAIN" },
    ];

    const [selectedSlide, setSelectedSlide] = useState(slides[0]);
    const [activeTab, setActiveTab] = useState("chat");

    const chartRef = useRef(null);
    const apexChartRef = useRef(null);

    // Initialize ApexCharts
    useEffect(() => {
        if (!chartRef.current) return;

        const startDate = new Date("2023-01-01").getTime();
        const dates = Array.from({ length: 10 }, (_, i) => ({
            x: startDate + i * 100,
            y: 100 + Math.floor(Math.random() * 100),
        }));

        const options = {
            series: [{ name: "XYZ MOTORS", data: dates }],
            chart: {
                type: "area",
                stacked: false,
                height: 350,
                zoom: { type: "x", enabled: true, autoScaleYaxis: true },
                toolbar: { show: false },
            },
            dataLabels: { enabled: false },
            markers: { size: 0 },
            title: {
                text: `${selectedSlide.title} ${selectedSlide.price}`,
                align: "left",
                style: { fontSize: "16px", fontWeight: 900 },
            },
            subtitle: {
                text: `${selectedSlide.vol} ${selectedSlide.gain}`,
                align: "left",
                style: { fontSize: "16px", fontWeight: 900 },
            },
            fill: {
                type: "gradient",
                gradient: { shadeIntensity: 1, inverseColors: false, opacityFrom: 0.5, opacityTo: 0, stops: [0, 90, 100] },
            },
            xaxis: { labels: { show: false }, axisBorder: { show: false }, axisTicks: { show: false } },
            yaxis: { opposite: true, labels: { formatter: (val) => (val / 100).toFixed(2) } },
            tooltip: { shared: false, y: { formatter: (val) => (val / 100).toFixed(2) } },
        };

        const chart = new ApexCharts(chartRef.current, options);
        chart.render();
        apexChartRef.current = chart;

        return () => chart.destroy();
    }, []);

    // Update chart when slide changes
    useEffect(() => {
        if (apexChartRef.current) {
            apexChartRef.current.updateOptions({
                title: { text: `${selectedSlide.title} ${selectedSlide.price}` },
                subtitle: { text: `${selectedSlide.vol} ${selectedSlide.gain}` },
            });
        }
    }, [selectedSlide]);

    // Placeholder AddtoHome function
    useEffect(() => {
        const AddtoHome = (param1, param2) => {
            console.log("AddToHome called with", param1, param2);
        };
        AddtoHome("2000", "once");
    }, []);
    const slidesForLoop = [...slides, ...slides, ...slides];

    return (
        <>
            <Sidebar />
            <AppHeader />

            <div id="appCapsule" className="vh-100">

                {/* Slides Section */}
                <div className="section wallet-card-section pt-1 ">
                    <Splide
                        options={{
                            perPage: 4,
                            rewind: true,
                            // type: "loop",

                            gap: 16,
                            padding: 16,
                            arrows: false,
                            pagination: false,
                            breakpoints: {
                                768: {
                                    perPage: 2
                                },
                                991: {
                                    perPage: 3
                                }
                            }
                        }}
                    >
                        {slides.map((slide, idx) => (
                            <SplideSlide key={idx}>
                                <div
                                    className="card"
                                    onClick={() => setSelectedSlide(slide)}
                                    style={{ cursor: "pointer" }}

                                >
                                    <div className="card-body">
                                        <h5 className="card-title">{slide.title}</h5>
                                        <p className="card-text">{slide.vol}</p>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>

                {/* Chart Section */}
                <div className="section mt-4">
                    <div className="transactions">
                        <div ref={chartRef}></div> {/* attach chart ref */}
                    </div>
                </div>

                {/* Balance & Buttons Section */}
                <div className="section full mt-4">
                    <div className="balance-section">
                        <div className="balance-top">
                            <label htmlFor="balance">Bal: 10000000.00</label>
                            <input type="number" id="balance" placeholder="Enter value" />
                        </div>

                        <div className="row-buttons">
                            <div className="radio-group">
                                <input type="radio" name="pump" id="pump2" value="2x" />
                                <label htmlFor="pump2">2X</label>
                                <input type="radio" name="pump" id="pump5" value="5x" />
                                <label htmlFor="pump5">5X</label>
                                <input type="radio" name="pump" id="pump10" value="10x" />
                                <label htmlFor="pump10">10X</label>
                                <input type="radio" name="pump" id="pump50" value="50x" />
                                <label htmlFor="pump50">50X</label>
                                <input type="radio" name="pump" id="pump100" value="100x" />
                                <label htmlFor="pump100">100X</label>
                            </div>
                            <button className="pump-btn">PUMP</button>
                        </div>

                        <div className="row-buttons mt-2">
                            <div className="radio-group">
                                <input type="radio" name="dump" id="dump1" value="1:1" />
                                <label htmlFor="dump1">1:1</label>
                                <input type="radio" name="dump" id="dump10" value="1:10" />
                                <label htmlFor="dump10">1:10</label>
                                <input type="radio" name="dump" id="dump100" value="1:100" />
                                <label htmlFor="dump100">1:100</label>
                                <input type="radio" name="dump" id="dump1000" value="1:1000" />
                                <label htmlFor="dump1000">1:1000</label>
                            </div>
                            <button className="dump-btn">DUMP</button>
                        </div>
                    </div>
                </div>

                {/* Chat / History / Log Section */}
                <div className="section full mt-4 mb-3" style={{ display: "flex" }}>
                    <div className="vertical-nav mb-3">
                        <button
                            className={`nav-btn ${activeTab === "chat" ? "active" : ""}`}
                            onClick={() => setActiveTab("chat")}
                        >CHAT</button>
                        <button
                            className={`nav-btn ${activeTab === "history" ? "active" : ""}`}
                            onClick={() => setActiveTab("history")}
                        >HISTORY</button>
                        <button
                            className={`nav-btn ${activeTab === "log" ? "active" : ""}`}
                            onClick={() => setActiveTab("log")}
                        >LOG</button>
                    </div>

                    <div style={{ flex: 1, marginLeft: "10px", height: "350px" }} className="mb-3">
                        {activeTab === "chat" && (
                            <div style={{ display: "flex", flexDirection: "column", height: "100%", background: "#f5f5f5", padding: "10px", borderRadius: "5px" }}>
                                <div className="message-divider">Friday, Sep 20, 10:40 AM</div>
                                <div style={{ flex: 1, overflowY: "auto", marginBottom: "10px" }}>
                                    <div className="message-item">
                                        <img src="img/sample/avatar/avatar1.jpg" alt="avatar" className="avatar" />
                                        <div className="content">
                                            <div className="title">John</div>
                                            <div className="bubble">Hello! How are you?</div>
                                            <div className="footer">10:44 AM</div>
                                        </div>
                                    </div>
                                    <div className="message-item">
                                        <img src="img/sample/avatar/avatar1.jpg" alt="avatar" className="avatar" />
                                        <div className="content">
                                            <div className="title">John</div>
                                            <div className="bubble">Hello! How are you?</div>
                                            <div className="footer">10:44 AM</div>
                                        </div>
                                    </div>
                                    <div className="message-item">
                                        <img src="img/sample/avatar/avatar1.jpg" alt="avatar" className="avatar" />
                                        <div className="content">
                                            <div className="title">John</div>
                                            <div className="bubble">Hello! How are you?</div>
                                            <div className="footer">10:44 AM</div>
                                        </div>
                                    </div>
                                    <div className="message-item user">
                                        <div className="content">
                                            <div className="bubble">I'm good, thanks! What about you?</div>
                                            <div className="footer">10:45 AM</div>
                                        </div>
                                    </div>
                                </div>
                                <form>
                                    <div style={{ display: "flex", gap: "5px" }} className="chat-input-wrapper">
                                        <div style={{ flex: 1 }} className="form-group basic mt-3">
                                            <div className="input-wrapper">
                                                <input type="text" className="form-control" placeholder="Type a message..." />
                                                <i className="clear-input">
                                                    <ion-icon name="close-circle"></ion-icon>
                                                </i>
                                            </div>
                                        </div>
                                        <button type="button" className="btn btn-icon btn-primary">
                                            <ion-icon name="arrow-forward-outline"></ion-icon>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {activeTab === "history" && (
                            <div style={{ background: "#f5f5f5", padding: "10px", borderRadius: "5px" }}>
                                <h4>Transaction History</h4>
                                <p>No history available yet.</p>
                            </div>
                        )}

                        {activeTab === "log" && (
                            <div style={{ background: "#f5f5f5", padding: "10px", borderRadius: "5px" }}>
                                <h4>System Log</h4>
                                <p>No logs available.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
