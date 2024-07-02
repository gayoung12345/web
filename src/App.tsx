import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import ArtFair1Page from "./page/ArtFair1Page";
import ArtFair2Page from "./page/ArtFair2Page";
import ArtFairListPage from "./page/ArtFairListPage";
import ContactUsPage from "./page/ContactUsPage";
import RegisterPage from "./page/RegisterPage";
import Layout from "./Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/diaf1" element={<ArtFair1Page />} />
        <Route path="/diaf2" element={<ArtFair2Page />} />
        <Route path="/diaflist" element={<ArtFairListPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
