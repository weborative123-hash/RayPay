import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Chat from "./components/chat/Chat";
import History from "./components/history/History";
import Logs from "./components/logs/Logs";
import Tutorial from "./components/tutorial/Tutorial";
import PrivacyPolicy from "./components/privacyPolicy/PrivacyPolicy";
import TandC from "./components/TandC/TandC";
import Refer from "./components/refer/Refer";
import Wallet from "./components/wallet/Wallet";

import { useEffect } from "react";
import * as bootstrap from "bootstrap";

function App() {

  const location = useLocation();

  // your modal cleanup effect here
  useEffect(() => {
    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    document.querySelectorAll('.modal.show').forEach(modalEl => {
      const modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) modal.hide();
    });
  }, [location]);
  return (
    // <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/history" element={<History />} />
      <Route path="/logs" element={<Logs />} />
      <Route path="/tutorial" element={<Tutorial />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TandC />} />
      <Route path="/refer" element={<Refer />} />
      <Route path="/wallet" element={<Wallet />} />
    </Routes>
    // </BrowserRouter>
  );
}

export default App;
