"use client"

import Avoid from "./components/Avoid";
import Digonode from "./components/Digonode";
import FooterSection from "./components/FooterSection";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import SupportOptions from "./components/SupportOptions";
import SupportPage from "./components/SupportPage";
import Wrapper from "./components/Wrapper";
import JivoChat from "./Jivochat";
import PrinterSetup from "./service/content/PrinterSetup";











function Home() {
  return (
    <>
      <Navbar/>
      <Header/>
      <PrinterSetup/>
      <SupportOptions/>
     
    
      <SupportPage/>
      <Digonode/>
      
  
     
      <Avoid/>
      <Wrapper/>
      <FooterSection/>
      <JivoChat/>


    </>

  )
}
export default Home;