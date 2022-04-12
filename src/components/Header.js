import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as CloseMenu } from "../assets/cancel.svg";
import { ReactComponent as MenuIcon } from "../assets/menu.svg";
import "../css/Header.css";
import Typed from "react-typed";
import Pdf from "../document/HeroCV.pdf"
import Twitter from "../images/twitter.png"
import LI from "../images/linkedin.png"
import GIT from "../images/git.png"
import Stack from "../images/stack_overflow.png"


const Header = () => {

  
  //mobile responsiveness

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //scroll into view

  const executeHome = () => {
    const id = document.getElementById("home");
    window.scrollTo({
      top: id.offsetTop,
      behavior: "smooth",
    });
  };

  const executeAbout = () => {
    const id = document.getElementById("about");
    window.scrollTo({
      top: id.offsetTop,
      behavior: "smooth",
    });
  };

  const executePortfolio = () => {
    const id = document.getElementById("portfolio");
    window.scrollTo({
      top: id.offsetTop,
      behavior: "smooth",
    });
  };

  const executeBlog = () => {
    const id = document.getElementById("testimonial");
    window.scrollTo({
      top: id.offsetTop,
      behavior: "smooth",
    });
  };

  const executeContact = () => {
    const id = document.getElementById("contact");
    window.scrollTo({
      top: id.offsetTop,
      behavior: "smooth",
    });
  };

  //sticky navbar

  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 15) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    
    <div id="home">
      <div className="bg">
        
        <div className={header ? "header active" : "header"}>
          
          <a href="#About" className="logo" alt="logo" >
          <svg width="100" height="120" viewBox="0 0 86 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_108_4)">
<path d="M21.4401 1.06003V22H17.2401V13.09H8.27012V22H4.07012V1.06003H8.27012V9.67003H17.2401V1.06003H21.4401ZM29.774 4.45003V9.70003H36.824V13.03H29.774V18.58H37.724V22H25.574V1.03003H37.724V4.45003H29.774ZM52.3408 22L47.7208 13.84H45.7408V22H41.5408V1.06003H49.4008C51.0208 1.06003 52.4008 1.35003 53.5408 1.93003C54.6808 2.49003 55.5308 3.26003 56.0908 4.24003C56.6708 5.20003 56.9608 6.28003 56.9608 7.48003C56.9608 8.86003 56.5608 10.11 55.7608 11.23C54.9608 12.33 53.7708 13.09 52.1908 13.51L57.2008 22H52.3408ZM45.7408 10.69H49.2508C50.3908 10.69 51.2408 10.42 51.8008 9.88003C52.3608 9.32003 52.6408 8.55003 52.6408 7.57003C52.6408 6.61003 52.3608 5.87003 51.8008 5.35003C51.2408 4.81003 50.3908 4.54003 49.2508 4.54003H45.7408V10.69ZM70.4796 22.21C68.5196 22.21 66.7196 21.75 65.0796 20.83C63.4396 19.91 62.1396 18.64 61.1796 17.02C60.2196 15.38 59.7396 13.53 59.7396 11.47C59.7396 9.43003 60.2196 7.60003 61.1796 5.98003C62.1396 4.34003 63.4396 3.06003 65.0796 2.14003C66.7196 1.22003 68.5196 0.76003 70.4796 0.76003C72.4596 0.76003 74.2596 1.22003 75.8796 2.14003C77.5196 3.06003 78.8096 4.34003 79.7496 5.98003C80.7096 7.60003 81.1896 9.43003 81.1896 11.47C81.1896 13.53 80.7096 15.38 79.7496 17.02C78.8096 18.64 77.5196 19.91 75.8796 20.83C74.2396 21.75 72.4396 22.21 70.4796 22.21ZM70.4796 18.46C71.7396 18.46 72.8496 18.18 73.8096 17.62C74.7696 17.04 75.5196 16.22 76.0596 15.16C76.5996 14.1 76.8696 12.87 76.8696 11.47C76.8696 10.07 76.5996 8.85003 76.0596 7.81003C75.5196 6.75003 74.7696 5.94003 73.8096 5.38003C72.8496 4.82003 71.7396 4.54003 70.4796 4.54003C69.2196 4.54003 68.0996 4.82003 67.1196 5.38003C66.1596 5.94003 65.4096 6.75003 64.8696 7.81003C64.3296 8.85003 64.0596 10.07 64.0596 11.47C64.0596 12.87 64.3296 14.1 64.8696 15.16C65.4096 16.22 66.1596 17.04 67.1196 17.62C68.0996 18.18 69.2196 18.46 70.4796 18.46Z" fill="#E5E5E5"/>
<path d="M21.4401 1.06003H22.4401V0.0600301H21.4401V1.06003ZM21.4401 22V23H22.4401V22H21.4401ZM17.2401 22H16.2401V23H17.2401V22ZM17.2401 13.09H18.2401V12.09H17.2401V13.09ZM8.27012 13.09V12.09H7.27012V13.09H8.27012ZM8.27012 22V23H9.27012V22H8.27012ZM4.07012 22H3.07012V23H4.07012V22ZM4.07012 1.06003V0.0600301H3.07012V1.06003H4.07012ZM8.27012 1.06003H9.27012V0.0600301H8.27012V1.06003ZM8.27012 9.67003H7.27012V10.67H8.27012V9.67003ZM17.2401 9.67003V10.67H18.2401V9.67003H17.2401ZM17.2401 1.06003V0.0600301H16.2401V1.06003H17.2401ZM20.4401 1.06003V22H22.4401V1.06003H20.4401ZM21.4401 21H17.2401V23H21.4401V21ZM18.2401 22V13.09H16.2401V22H18.2401ZM17.2401 12.09H8.27012V14.09H17.2401V12.09ZM7.27012 13.09V22H9.27012V13.09H7.27012ZM8.27012 21H4.07012V23H8.27012V21ZM5.07012 22V1.06003H3.07012V22H5.07012ZM4.07012 2.06003H8.27012V0.0600301H4.07012V2.06003ZM7.27012 1.06003V9.67003H9.27012V1.06003H7.27012ZM8.27012 10.67H17.2401V8.67003H8.27012V10.67ZM18.2401 9.67003V1.06003H16.2401V9.67003H18.2401ZM17.2401 2.06003H21.4401V0.0600301H17.2401V2.06003ZM29.774 4.45003V3.45003H28.774V4.45003H29.774ZM29.774 9.70003H28.774V10.7H29.774V9.70003ZM36.824 9.70003H37.824V8.70003H36.824V9.70003ZM36.824 13.03V14.03H37.824V13.03H36.824ZM29.774 13.03V12.03H28.774V13.03H29.774ZM29.774 18.58H28.774V19.58H29.774V18.58ZM37.724 18.58H38.724V17.58H37.724V18.58ZM37.724 22V23H38.724V22H37.724ZM25.574 22H24.574V23H25.574V22ZM25.574 1.03003V0.0300287H24.574V1.03003H25.574ZM37.724 1.03003H38.724V0.0300287H37.724V1.03003ZM37.724 4.45003V5.45003H38.724V4.45003H37.724ZM28.774 4.45003V9.70003H30.774V4.45003H28.774ZM29.774 10.7H36.824V8.70003H29.774V10.7ZM35.824 9.70003V13.03H37.824V9.70003H35.824ZM36.824 12.03H29.774V14.03H36.824V12.03ZM28.774 13.03V18.58H30.774V13.03H28.774ZM29.774 19.58H37.724V17.58H29.774V19.58ZM36.724 18.58V22H38.724V18.58H36.724ZM37.724 21H25.574V23H37.724V21ZM26.574 22V1.03003H24.574V22H26.574ZM25.574 2.03003H37.724V0.0300287H25.574V2.03003ZM36.724 1.03003V4.45003H38.724V1.03003H36.724ZM37.724 3.45003H29.774V5.45003H37.724V3.45003ZM52.3408 22L51.4706 22.4927L51.7578 23H52.3408V22ZM47.7208 13.84L48.591 13.3473L48.3038 12.84H47.7208V13.84ZM45.7408 13.84V12.84H44.7408V13.84H45.7408ZM45.7408 22V23H46.7408V22H45.7408ZM41.5408 22H40.5408V23H41.5408V22ZM41.5408 1.06003V0.0600301H40.5408V1.06003H41.5408ZM53.5408 1.93003L53.0873 2.8214L53.0999 2.82758L53.5408 1.93003ZM56.0908 4.24003L55.2226 4.73617L55.2286 4.74673L55.2349 4.75715L56.0908 4.24003ZM55.7608 11.23L56.5696 11.8182L56.5746 11.8113L55.7608 11.23ZM52.1908 13.51L51.9339 12.5436L50.6593 12.8824L51.3296 14.0182L52.1908 13.51ZM57.2008 22V23H58.9521L58.0621 21.4918L57.2008 22ZM45.7408 10.69H44.7408V11.69H45.7408V10.69ZM51.8008 9.88003L52.495 10.5999L52.5015 10.5936L52.5079 10.5871L51.8008 9.88003ZM51.8008 5.35003L51.1067 6.06987L51.1135 6.07641L51.1204 6.08282L51.8008 5.35003ZM45.7408 4.54003V3.54003H44.7408V4.54003H45.7408ZM53.211 21.5073L48.591 13.3473L46.8506 14.3327L51.4706 22.4927L53.211 21.5073ZM47.7208 12.84H45.7408V14.84H47.7208V12.84ZM44.7408 13.84V22H46.7408V13.84H44.7408ZM45.7408 21H41.5408V23H45.7408V21ZM42.5408 22V1.06003H40.5408V22H42.5408ZM41.5408 2.06003H49.4008V0.0600301H41.5408V2.06003ZM49.4008 2.06003C50.9041 2.06003 52.1203 2.32927 53.0874 2.82131L53.9943 1.03875C52.6814 0.370789 51.1375 0.0600301 49.4008 0.0600301V2.06003ZM53.0999 2.82758C54.0839 3.31092 54.7739 3.9509 55.2226 4.73617L56.9591 3.74389C56.2878 2.56916 55.2778 1.66914 53.9817 1.03248L53.0999 2.82758ZM55.2349 4.75715C55.714 5.55017 55.9608 6.44907 55.9608 7.48003H57.9608C57.9608 6.11099 57.6276 4.84989 56.9467 3.72291L55.2349 4.75715ZM55.9608 7.48003C55.9608 8.6522 55.6256 9.69887 54.9471 10.6488L56.5746 11.8113C57.496 10.5212 57.9608 9.06786 57.9608 7.48003H55.9608ZM54.9521 10.6419C54.313 11.5206 53.3385 12.1702 51.9339 12.5436L52.4477 14.4765C54.2031 14.0098 55.6087 13.1394 56.5696 11.8182L54.9521 10.6419ZM51.3296 14.0182L56.3396 22.5082L58.0621 21.4918L53.0521 13.0018L51.3296 14.0182ZM57.2008 21H52.3408V23H57.2008V21ZM45.7408 11.69H49.2508V9.69003H45.7408V11.69ZM49.2508 11.69C50.5302 11.69 51.6774 11.3883 52.495 10.5999L51.1067 9.16019C50.8043 9.45178 50.2514 9.69003 49.2508 9.69003V11.69ZM52.5079 10.5871C53.2979 9.79716 53.6408 8.74851 53.6408 7.57003H51.6408C51.6408 8.35155 51.4237 8.8429 51.0937 9.17292L52.5079 10.5871ZM53.6408 7.57003C53.6408 6.40799 53.2948 5.37262 52.4813 4.61724L51.1204 6.08282C51.4269 6.36743 51.6408 6.81207 51.6408 7.57003H53.6408ZM52.495 4.63019C51.6774 3.84178 50.5302 3.54003 49.2508 3.54003V5.54003C50.2514 5.54003 50.8043 5.77828 51.1067 6.06987L52.495 4.63019ZM49.2508 3.54003H45.7408V5.54003H49.2508V3.54003ZM44.7408 4.54003V10.69H46.7408V4.54003H44.7408ZM65.0796 20.83L65.5688 19.9579L65.0796 20.83ZM61.1796 17.02L60.3165 17.5252L60.3193 17.5298L61.1796 17.02ZM61.1796 5.98003L62.0399 6.48984L62.0426 6.48521L61.1796 5.98003ZM65.0796 2.14003L64.5903 1.26789L64.5903 1.26789L65.0796 2.14003ZM75.8796 2.14003L75.3857 3.0096L75.3903 3.01217L75.8796 2.14003ZM79.7496 5.98003L78.882 6.47731L78.8856 6.4836L78.8893 6.48983L79.7496 5.98003ZM79.7496 17.02L78.8866 16.5148L78.8846 16.5182L79.7496 17.02ZM75.8796 20.83L75.3903 19.9579L75.3903 19.9579L75.8796 20.83ZM73.8096 17.62L74.3134 18.4838L74.3201 18.4799L74.3267 18.4759L73.8096 17.62ZM76.0596 15.16L76.9506 15.614L76.9506 15.614L76.0596 15.16ZM76.0596 7.81003L75.1685 8.26397L75.1721 8.27084L76.0596 7.81003ZM73.8096 5.38003L73.3057 6.24381L73.3057 6.24381L73.8096 5.38003ZM67.1196 5.38003L66.6234 4.51175L66.6157 4.51625L67.1196 5.38003ZM64.8696 7.81003L65.7571 8.27086L65.7606 8.26396L64.8696 7.81003ZM64.8696 15.16L65.7606 14.7061L65.7606 14.7061L64.8696 15.16ZM67.1196 17.62L66.6025 18.4759L66.6129 18.4822L66.6234 18.4883L67.1196 17.62ZM70.4796 21.21C68.6834 21.21 67.0529 20.7904 65.5688 19.9579L64.5903 21.7022C66.3862 22.7096 68.3558 23.21 70.4796 23.21V21.21ZM65.5688 19.9579C64.0824 19.1241 62.9103 17.9791 62.0399 16.5102L60.3193 17.5298C61.3688 19.3009 62.7967 20.696 64.5903 21.7022L65.5688 19.9579ZM62.0426 16.5149C61.1798 15.0409 60.7396 13.3679 60.7396 11.47H58.7396C58.7396 13.6922 59.2594 15.7192 60.3166 17.5252L62.0426 16.5149ZM60.7396 11.47C60.7396 9.59396 61.1789 7.94273 62.0399 6.48983L60.3193 5.47023C59.2603 7.25733 58.7396 9.2661 58.7396 11.47H60.7396ZM62.0426 6.48521C62.9138 4.99686 64.0855 3.84427 65.5688 3.01217L64.5903 1.26789C62.7936 2.27579 61.3653 3.6832 60.3166 5.47485L62.0426 6.48521ZM65.5688 3.01217C67.0529 2.17962 68.6834 1.76003 70.4796 1.76003V-0.23997C68.3558 -0.23997 66.3862 0.260443 64.5903 1.26789L65.5688 3.01217ZM70.4796 1.76003C72.2977 1.76003 73.9258 2.18048 75.3858 3.00959L76.3734 1.27047C74.5934 0.259583 72.6214 -0.23997 70.4796 -0.23997V1.76003ZM75.3903 3.01217C76.8718 3.84323 78.0314 4.9933 78.882 6.47731L80.6172 5.48275C79.5878 3.68676 78.1674 2.27683 76.3688 1.26789L75.3903 3.01217ZM78.8893 6.48983C79.7503 7.94273 80.1896 9.59396 80.1896 11.47H82.1896C82.1896 9.2661 81.6689 7.25733 80.6099 5.47023L78.8893 6.48983ZM80.1896 11.47C80.1896 13.3679 79.7494 15.0409 78.8866 16.5149L80.6126 17.5252C81.6698 15.7192 82.1896 13.6922 82.1896 11.47H80.1896ZM78.8846 16.5182C78.0348 17.9827 76.8749 19.1251 75.3903 19.9579L76.3688 21.7022C78.1643 20.695 79.5843 19.2974 80.6145 17.5219L78.8846 16.5182ZM75.3903 19.9579C73.9062 20.7904 72.2758 21.21 70.4796 21.21V23.21C72.6034 23.21 74.5729 22.7096 76.3688 21.7022L75.3903 19.9579ZM70.4796 19.46C71.8925 19.46 73.1809 19.1444 74.3134 18.4838L73.3057 16.7563C72.5182 17.2156 71.5867 17.46 70.4796 17.46V19.46ZM74.3267 18.4759C75.4562 17.7935 76.3313 16.8297 76.9506 15.614L75.1685 14.7061C74.7079 15.6104 74.0829 16.2865 73.2925 16.7641L74.3267 18.4759ZM76.9506 15.614C77.5739 14.3905 77.8696 13 77.8696 11.47H75.8696C75.8696 12.7401 75.6253 13.8096 75.1685 14.7061L76.9506 15.614ZM77.8696 11.47C77.8696 9.94066 77.5741 8.55678 76.9471 7.34922L75.1721 8.27084C75.6251 9.14328 75.8696 10.1994 75.8696 11.47H77.8696ZM76.9506 7.3561C76.3299 6.13776 75.4509 5.17978 74.3134 4.51625L73.3057 6.24381C74.0882 6.70028 74.7092 7.3623 75.1685 8.26396L76.9506 7.3561ZM74.3134 4.51625C73.1809 3.85562 71.8925 3.54003 70.4796 3.54003V5.54003C71.5867 5.54003 72.5182 5.78444 73.3057 6.24381L74.3134 4.51625ZM70.4796 3.54003C69.0662 3.54003 67.7715 3.85573 66.6234 4.51179L67.6157 6.24827C68.4276 5.78433 69.3729 5.54003 70.4796 5.54003V3.54003ZM66.6157 4.51625C65.4782 5.17978 64.5992 6.13776 63.9785 7.3561L65.7606 8.26396C66.2199 7.3623 66.8409 6.70028 67.6234 6.24381L66.6157 4.51625ZM63.9821 7.34921C63.3551 8.55678 63.0596 9.94066 63.0596 11.47H65.0596C65.0596 10.1994 65.3041 9.14328 65.7571 8.27085L63.9821 7.34921ZM63.0596 11.47C63.0596 13 63.3553 14.3905 63.9785 15.614L65.7606 14.7061C65.3039 13.8096 65.0596 12.7401 65.0596 11.47H63.0596ZM63.9785 15.614C64.5979 16.8297 65.4729 17.7935 66.6025 18.4759L67.6367 16.7641C66.8462 16.2865 66.2213 15.6104 65.7606 14.7061L63.9785 15.614ZM66.6234 18.4883C67.7715 19.1443 69.0662 19.46 70.4796 19.46V17.46C69.3729 17.46 68.4276 17.2157 67.6157 16.7518L66.6234 18.4883Z" fill="black"/>
</g>
<defs>
<filter id="filter0_d_108_4" x="0.0700684" y="0.76004" width="85.1195" height="29.45" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_108_4"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_108_4" result="shape"/>
</filter>
</defs>
</svg>



          </a>

          <nav className="nav" >

            <ul className={click ? "nav-options active" : "nav-options"}>
              <li
                className="option"
                onClick={() => {
                  closeMobileMenu();
                  executeHome();
                }} 
              >
                <a  href="#home"  style={{ textDecoration: "none", color: "white" }}>
                  Home
                </a>
              </li>

              <li
                className="option"
                onClick={() => {
                  closeMobileMenu();
                  executeAbout();
                }}
              >
                <a href="#about" style={{ textDecoration: "none", color: "white" }}>
                  About
                </a>
              </li>

              <li
                className="option"
                onClick={() => {
                  closeMobileMenu();
                  executePortfolio();
                }}
              >
                <a  href="#portfolio" style={{ textDecoration: "none", color: "white" }}>
                  Portfolio
                </a>
              </li>

              <li
                className="option"
                onClick={() => {
                  closeMobileMenu();
                  executeBlog();
                }}
              >
                <a href="#testimonial" style={{ textDecoration: "none", color: "white" }}>
                  Testimonial
                </a>
              </li>

              <li
                className="option"
                onClick={() => {
                  closeMobileMenu();
                  executeContact();
                }}
              >
                <a href="#contact" style={{ textDecoration: "none", color: "white" }}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <div className="mobile-menu" onClick={handleClick}>
            {click ? (
              <CloseMenu className="menu-icon" />
            ) : (
              <MenuIcon className="menu-icon" />
            )}
          </div>
        </div>

       <div className="hero-section">
          <div className="hero-name">Hello, I'm Hero Momoh.</div>

          <div className="hero-desc">
            I am a Software Developer with <br/> 3+ years of experience.
          </div>

          <div className="changing-text">
            {" "}
          I Develop {" "}
            <span className="typing">
              <Typed
                strings={[
                  "Mobile Applications.",
                  "Web Applications",
                  "Software Applications.",
                ]}
                typeSpeed={100}
                backSpeed={60}
                loop={true}
              />
            </span>
          </div>

          <div className="social-login" style={{textDecoration:"none" }}>

            <a href="https://www.linkedin.com/in/momoh-herodion-038185183"  target="_blank" className="social-lg" >
            <img className="social-lg2" src={LI} alt="LinkedIn"/>
            </a>

            <a href="http://twitter.com/herocodes_" target="_blank" className="social-lg">
            <img className="social-lg2" src={Twitter} alt="Twitter"/>
            </a>

            <a href="https://stackoverflow.com/users/9373832/herocodes" target="_blank" className="social-lg">
            <img className="social-lg2" src={Stack} alt="Stack Overflow"/>
            </a>

            <a href="http://github.com/herocodess " target="_blank" className="social-lg">
              <img className="social-lg2" src={GIT} alt="Github"/>
            </a>
          </div>


          <div className="heroBtn">
            <a  href="#contact" className="heroBtn1">
              Hire Me
            </a>

            <a href={Pdf}  download target="_blank" className="heroBtn2">
              Download CV
            </a>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Header;
