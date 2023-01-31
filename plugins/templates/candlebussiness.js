

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  
    const bm = editor.BlockManager;
  
    const panelStyle = `<style>
    /***************************
     CUSTOM SCROLL BAR
 ****************************/
 *,html{
 scroll-behavior: smooth;
 }
 *, *:after, *:before {
 -webkit-box-sizing: border-box;
 -moz-box-sizing: border-box;
 box-sizing: border-box;
 }
 :root{
 scrollbar-color: rgb(210,210,210) rgb(46,54,69) !important;
 scrollbar-width: thin !important;
 --white:#fff;
 --black:#131417;
 --gray:rgba(255,255,255,0.7);
 --lite:rgba(1,1,1,0.6);
 --palegreen:#99decc;
 --palepink:#ffe2e2;
 --paleblue:#bad7df;
 --pink:#fc9caa;
 --green:#99ddcc;
 --blue:#b6daf4;
 --default:'Josefin Sans', sans-serif;
 --title:'Cormorant Garamond', serif;
 --cursive:'Dancing Script', cursive;
 }
 ::-webkit-scrollbar {
 height: 12px;
 width: 8px;
 background: var(--dark);
 }
 ::-webkit-scrollbar-thumb {
 background: gray;
 -webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
 }
 ::-webkit-scrollbar-corner {
 background: var(--paleblue);
 }
 
 
 
 
 /***************************
          DEFAULT
 ***************************/
 body{
 margin:0;
 overflow-x:hidden !important;
 font-family:var(--default);
 }
 
 a{
 text-decoration:none;
 transition:0.5s;
 outline:none !important;
 }
 
 em{
 color:var(--pink);
 font-family:var(--cursive);
 }
 
 p{
 line-height:1.4em;
 }
 
 .title{
 font-family:var(--title);
 font-size:3em;
 color:var(--black);
 font-weight:200;
 }
 
 .btn1{
 font-size: 14px;
 text-transform: uppercase;
 letter-spacing: 0.8px;
 color: var(--blue);
 background-color: var(--white);
 box-shadow: 4px 4px 0px 0px var(--blue);
 border-style: solid;
 border-width: 1px 1px 1px 1px;
 border-color: var(--blue);
 border-radius: 0px 0px 0px 0px;
 padding: 25px 50px;
 }
 
 .btn1:hover{
 background-color:var(--blue);
 color:var(--white);
 box-shadow: 6px 6px 0px 0px #BAD7DF;
 }
 
 @media (max-width:1000px){
 .title{
 font-size:1.5em;
 }
 .btn1{
 padding:15px 25px;
 display:block;
 width:180px;
 text-align:center;
 }
 }
 
 
 
 /***************************
          ANIMATIONS
 ***************************/
 .animate {
 -webkit-animation: animatezoom 0.6s;
 animation: animatezoom 0.6s
 }
 
 @-webkit-keyframes animatezoom {
 from {-webkit-transform: scale(0)} 
 to {-webkit-transform: scale(1)}
 }
 
 @keyframes animatezoom {
 from {transform: scale(0)} 
 to {transform: scale(1)}
 }
 
 
 @-webkit-keyframes scroll {
 0% {
 transform: translateX(0);
 }
 100% {
 transform: translateX(calc(-250px * 7));
 }
 }
 
 @keyframes scroll {
 0% {
 transform: translateX(0);
 }
 100% {
 transform: translateX(calc(-250px * 7));
 }
 }
 .slider {
 background: white;
 height: 100px;
 margin: auto;
 overflow: hidden;
 position: relative;
 width: 960px;
 }
 .slider::before, .slider::after {
 background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
 content: "";
 height: 100px;
 position: absolute;
 width: 200px;
 z-index: 2;
 }
 .slider::after {
 right: 0;
 top: 0;
 transform: rotateZ(180deg);
 }
 .slider::before {
 left: 0;
 top: 0;
 }
 .slider .slide-track {
 -webkit-animation: scroll 40s linear infinite;
 animation: scroll 40s linear infinite;
 display: flex;
 width: calc(250px * 14);
 }
 .slider .slide {
 height: 100px;
 width: 250px;
 }
 
 
 
 /***************************
           HEADER
 ***************************/
 header{
 width:100%;
 background-color:var(--palepink);
 display:flex;
 }
 
 header a{
 color:var(--lite);
 }
 
 header a:hover{
 color:var(--black);
 }
 
 header section{
 width:100%;
 padding:0.5rem 2rem;
 font-size:14px;
 display:flex;
 align-items:center;
 justify-content:center;
 }
 
 header section span{
 padding:0 1rem;
 text-align:center;
 white-space:nowrap;
 }
 
 
 header span .fa{
 margin:0 5px;
 }
 
 header .btn1{
 padding:5px 10px !important;
 }
 
 @media (max-width:920px){
 header section:nth-child(1){
 display:none !important;
 }
 header section{
 padding:0.5rem 0rem;
 }
 } 
 
 @media (max-width:340px){
 header section span{
 padding:0 2px;
 }
 }
 
 
 
 
 
 
 
 
 /***************************
          NAVIGATION
 ***************************/
 .topnav {
 overflow: hidden;
 background-color:var(--white);
 }
 
 .topnav a {
 float:right;
 display: block;
 color: var(--lite);
 text-align: center;
 padding: 14px 16px;
 text-decoration: none;
 font-size: 16px;
 font-weight:400;
 }
 
 .topnav a:not(:first-child),.dropdown,#navbar a:not(:first-child){
 margin:15px;
 }
 
 #logo{
 float:left;
 display:flex;
 align-items:Center;
 pointer-events:none;
 }
 
 #logo b{
 position:relative;
 top:8px;
 left:5px;
 }
 
 #logo img{
 width:40px;
 position:relative;
 }
 
 #active,#navbar #active2{
 color:var(--blue);
 }
 
 .topnav .icon {
 display: none;
 position:absolute;
 right:10px;
 top:50px;
 }
 
 .dropdown, .sub-dropdown {
 float:right;
 overflow: hidden;
 }
 
 .dropbtn, .sub-dropbtn{
 transition:0.5s;
 }
 
 .dropdown .dropbtn,.sub-dropdown .sub-dropbtn  {
 font-size: 16px;    
 border: none;
 outline: none;
 padding: 12px 16px;
 background-color: inherit;
 font-family: inherit;
 margin: 0;
 font-weight:400;
 color: var(--lite);
 }
 
 .sub-dropdown {
 text-align:left !important;
 padding:0px 0px;
 margin:0 !important;
 float:none;
 border-bottom:1px solid rgba(1,1,1,0.05);
 }
 
 .sub-dropdown .fa{
 float:left;
 margin:0 10px;
 position:relative;
 top:3px;
 }
 
 .dropdown-content,.sub-dropdown-content {
 display: none;
 position: absolute;
 background-color: #f9f9f9;
 min-width: 160px;
 box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
 z-index: 111;
 border-top:2px solid var(--primary);
 }
 
 .sub-dropdown-content{
 right:100%;
 box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.2);
 top:0;
 }
 
 .dropdown-content a,.sub-dropdown-content a {
 float: none;
 color: #464646;
 padding: 12px 16px;
 text-decoration: none;
 display: block;
 text-align: left;
 margin:0px !important;
 border-bottom:1px solid rgba(1,1,1,0.05);
 }
 
 .topnav a:hover, .dropdown:hover .dropbtn,.sub-dropdown:hover .sub-dropbtn {
 color: var(--primary);
 }
 
 .dropdown-content a:hover,.sub-dropdown-content a:hover {
 color: var(--primary);
 }
 
 .dropdown:hover .dropdown-content,.sub-dropdown:hover .sub-dropdown-content {
 display: block;
 }
 
 @media screen and (max-width: 840px) {
 #logo{
 float:left;
 width:90%;
 }
 #logo img{
 float:left;
 top:0;
 }
 .topnav a:not(:first-child),.dropdown,#navbar a:not(:first-child){
 margin:0px;
 }
 .topnav a:not(:first-child), .dropdown .dropbtn, .sub-dropdown .sub-dropbtn {
 display: none;
 }
 .topnav a.icon {
 float: right;
 display: block;
 }
 }
 
 @media screen and (max-width: 840px) {
 .topnav.responsive {position: relative;}
 .topnav.responsive .icon {
 position: absolute;
 right: 0;
 top: 0;
 }
 .topnav.responsive a {
 float: none;
 display: block;
 text-align: left;
 }
 .topnav.responsive .dropdown,.topnav.responsive .sub-dropdown {float: none;}
 .topnav.responsive .dropdown-content,.topnav.responsive .sub-dropdown-content {position: relative;}
 .topnav.responsive .dropdown .dropbtn,.topnav.responsive .sub-dropdown .sub-dropbtn {
 display: block;
 width: 100%;
 text-align: left;
 }
 .dropdown-content,.sub-dropdown-content {
 position: relative;
 }
 .sub-dropdown-content{
 right:0;
 }
 }
 
 @media (max-width:400px){
 .topnav .icon {
 top:50px;
 }
 }
 
 #navbar {
 background-color:var(--white);
 position: fixed;
 top: -180px;
 width: 100%;
 display: block;
 transition: top 0.3s;
 z-index:99999999999;
 box-shadow:0px 6px 16px -6px rgba(1,1,1,0.2);
 }
 
 #navbar a {
 float: right;
 display: block;
 color: var(--lite);
 text-align: center;
 padding: 15px;
 text-decoration: none;
 font-size: 16px;
 font-weight:400;
 }
 
 #navbar a:hover {
 color: var(--primary);
 }
 
 #logo2{
 float:left !important;
 }
 
 #logo2 img{
 width:40px;
 position:relative;
 }
 
 #logo2 b{
 position:relative;
 top:-7px;
 }
 
 #navbar .dropdown-content{
 min-width:160px !important;
 width:160px;
 }
 
 #navbar .dropdown-content a, #navbar .sub-dropdown-content a {
 display:block !important;
 width:100%;
 text-align:left;
 }
 
 @media (max-width:640px){
 #navbar{
 display:none !important;
 }
 }
 
 
 
 
 
 /***************************
            MAIN
 ***************************/
 main{
 width:100%;
 height:105vh;
 background-image:url("https://i.postimg.cc/h4xMcxZx/banner.jpg");
 background-size:cover;
 display:flex;
 align-items:center;
 justify-content:left;
 position:relative;
 }
 
 main:after{
 content:"";
 background-image:url("https://i.postimg.cc/pXHCTT3S/wave.png");
 background-size:100% 100%;
 position:absolute;
 bottom:-1%;
 width:100%;
 height:100px;
 }
 
 main section{
 padding:4rem;
 width:60%;
 }
 
 main section em{
 font-size:2.5em;
 line-height:0;
 }
 
 @media (max-width:920px){
 main{
 flex-wrap:wrap;
 height:100%;
 padding:8rem 0;
 }
 main:after{
 content:"";
 background-size:cover;
 }
 main section{
 padding:1rem;
 width:100%;
 }
 main section em{
 font-size:1.5em;
 }
 }
 
 
 
 
 /*SECTION1*/
 .section1{
 width:90%;
 margin:auto;
 overflow:hidden;
 }
 
 
 
 
 /***************************
          SECTION2
 ***************************/
 .section2{
 display:flex;
 align-items:center;
 padding:3rem 0;
 }
 
 .section2 section{
 width:100%;
 padding:2rem;
 position:relative;
 }
 
 .section2 section:nth-child(1){
 width:40%;
 }
 
 .section2 section:nth-child(1) em{
 font-size:2.5em;
 background-image:url("../images/icon_1.png");
 background-repeat:no-repeat;
 background-position:center;
 padding:25px 25px;
 }
 
 .section2 section:nth-child(1) .title{
 line-height:0;
 white-space:nowrap;
 }
 
 .section2 section:nth-child(1) p{
 color:var(--lite);
 font-weight:300;
 }
 
 .section2 section:nth-child(2){
 display:flex;
 align-items:top;
 }
 
 .section2 section span{
 width:100%;
 margin:0 10px;
 position:relative;
 }
 
 .section2 section span:nth-child(2){
 top:4rem;
 }
 
 .section2 section span img{
 width:100%;
 }
 
 .section2 section span p{
 position:absolute;
 bottom:-4rem;
 width:90%;
 box-shadow:0px 6px 16px -6px rgba(1,1,1,.2);
 padding:1rem 2rem;
 background-color:var(--white);
 font-size:2rem;
 text-align:center;
 left:50%;
 transform: translate(-50%, 0);
 font-weight:300;
 font-family:var(--title);
 box-shadow: 5px 5px 0px 0px var(--blue);
 border-style: solid;
 border-width: 1px 1px 1px 1px;
 border-color: var(--blue);
 border-radius: 0px 0px 0px 0px;
 }
 
 @media (max-width:1000px){
 .section2 section span p{
 font-size:1.5rem
 }
 }
 
 @media (max-width:820px){
 .section2{
 flex-wrap:wrap;
 }
 .section2 section{
 padding:1rem;
 }
 .section2 section:nth-child(1){
 width:100%;
 text-align:center;
 }
 .section2 section:nth-child(1) em{
 font-size:1.5em;
 }
 .section2 section:nth-child(2){
 flex-wrap:wrap;
 }
 .section2 section span{
 margin:10px 0;
 }
 .section2 section span:nth-child(2){
 top:0rem;
 }
 .section2 section span p{
 bottom:0;
 }
 }
 
 
 
 
 
 
 /***************************
           SECTION3
 ***************************/
 .section3{
 width:100%;
 padding:0rem 3rem;
 display:flex;
 align-items:center;
 }
 
 .section3 section{
 width:100%;
 position:relative;
 padding:2rem;
 }
 
 .section3 section img{
 width:100%;
 }
 
 .section3 section span{
 background-color: var(--white);
 box-shadow: 10px 10px 0px 0px var(--blue);
 border-style: solid;
 border-width: 1px 1px 1px 1px;
 border-color: var(--blue);
 border-radius: 0px 0px 0px 0px;
 padding: 25px 50px;
 display:block;
 transition:0.5s;
 }
 
 .section3 section span .title{
 font-size:1.5em;
 font-weight:400;
 }
 
 .section3 section span p{
 color:var(--lite);
 line-height:1.6em;
 font-weight:300;
 }
 
 .section3 section span .btn1{
 display:block;
 width:230px;
 text-align:center;
 }
 
 @media (max-width:1000px){
 .section3 section span{
 padding: 15px 30px;
 }
 }
 
 @media (max-width:820px){
 .section3{
 flex-wrap:wrap;
 padding:0;
 }
 .section3 section{
 padding:1rem;
 }
 .section3 section figure,.section3 section img{
 height:60vh;
 padding:0;
 margin:0;
 object-fit:cover;
 }
 .section3 section img{
 height:100%;
 }
 .section3 section span{
 padding:1rem;
 }
 }
 
 
 
 
 
 /***************************
           SECTION4
 ***************************/
 .section4{
 width:100%;
 padding:0rem 3rem;
 display:flex;
 align-items:center;
 }
 
 .section4 section{
 width:100%;
 position:relative;
 padding:2rem;
 }
 
 .section4 section figure{
 width:80%;
 margin:auto;
 }
 
 .section4 section img{
 width:100%;
 height:80vh;
 }
 
 .section4 section span{
 background-color: var(--white);
 box-shadow: -10px 10px 0px 0px var(--blue);
 border-style: solid;
 border-width: 1px 1px 1px 1px;
 border-color: var(--blue);
 border-radius: 0px 0px 0px 0px;
 padding: 25px 50px;
 display:block;
 transition:0.5s;
 }
 
 .section4 section span .title{
 font-size:1.5em;
 font-weight:400;
 }
 
 .section4 section span p{
 color:var(--lite);
 line-height:1.6em;
 font-weight:300;
 }
 
 .section4 section span .btn1{
 display:block;
 width:230px;
 text-align:center;
 }
 
 @media (max-width:820px){
 .section4{
 flex-wrap:wrap;
 padding:2rem 0;
 }
 .section4 section{
 padding:1rem;
 }
 .section4 section figure,.section4 section img{
 height:60vh;
 padding:0;
 margin:0;
 object-fit:cover;
 }
 .section4 section:nth-child(2){
 height:100%;
 display:none;
 }
 .section4 section span{
 padding:1rem;
 }
 }
 
 
 
 
 /***************************
           SECTION5
 ***************************/
 .section5{
 width:100%;
 padding:0rem 3rem;
 display:flex;
 align-items:center;
 background-color:var(--blue);
 }
 
 .section5 section{
 width:100%;
 height:100vh;
 position:relative;
 display:flex;
 align-items:center;
 justify-content:right;
 }
 
 .section5 section span{
 width:100%;
 padding:25px 50px;
 display:block;
 text-align:center;
 position:absolute;
 right:15%;
 z-index:1;
 box-shadow: 10px 10px 0px 0px var(--white);
 border-style: solid;
 border-width: 1px 1px 1px 1px;
 border-color: var(--white);
 border-radius: 0px 0px 0px 0px;
 transition:0.5s;
 }
 
 .section5 section span:hover{
 background-color:var(--blue);
 box-shadow: 15px 15px 0px 0px var(--white);
 right:16%;
 }
 
 .section5 section span .title{
 font-weight:900 !important;
 color:var(--white) !important;
 }
 
 .section5 section figure{
 width:100%;
 height:100vh;
 position:relative;
 }
 
 .section5 section img{
 width:100%;
 height:100%;
 }
 
 @media (max-width:1000px){
 .section5 section span .title{
 font-size:2rem;
 }
 }
 
 @media (max-width:820px){
 .section5{
 flex-wrap:wrap;
 padding:0rem;
 }
 .section5 section{
 flex-wrap:wrap;
 height:100%;
 padding:3rem 1rem;
 }
 .section5 section span{
 padding:1rem;
 position:static;
 }
 .section5 section figure{
 height:auto;
 margin:0;
 padding:0;
 }
 }
 
 
 
 
 /***************************
          SECTION6
 ***************************/
 .section6{
 padding:2rem 0;
 width:100%;
 }
 
 .section6 section{
 display:flex;
 align-items:top;
 justify-content:center;
 width:100%;
 }
 
 .section6 span{
 width:100%;
 padding:2rem;
 text-align:center;
 position:relative;
 }
 
 .section6 span:after{
 content:"";
 position:absolute;
 right:0;
 top:50%;
 transform: translate(50%, -50%);
 width:2px;
 height:40%;
 background-color:var(--palepink);
 }
 
 .section6 span img{
 display:block;
 margin:auto;
 padding:1rem;
 }
 
 .section6 span p{
 color:var(--lite);
 font-weight:300;
 }
 
 @media (max-width:820px){
 .section6 section{
 flex-wrap:wrap;
 }
 .section6 span{
 width:100%;
 padding:0.5rem 1rem;
 display:flex;
 align-items:center;
 justify-content:left;
 }
 .section6 span img{
 margin:0;
 margin-right:5px;
 width:60px;
 }
 .section6 span:after{
 display:none;
 }
 }
 
 
 
 
 
 /***************************
           FOOTER
 ***************************/
 footer{
 width:100%;
 background-color:var(--palepink);
 color:var(--lite);
 position:relative;
 background-image:url("https://i.postimg.cc/R0FXBD2V/icon-2.png");
 background-repeat:no-repeat;
 background-position:top right;
 }
 
 .top_header{
 padding:2rem;
 display:flex;
 align-items:center;
 justify-content:center;
 position:relative;
 }
 
 .top_header section{
 width:50%;
 text-align:Center;
 }
 
 .top_header img{
 display:block;
 margin:auto;
 }
 
 .top_header .title{
 line-height:0;
 }
 
 .top_header fieldset{
 display:flex;
 align-items:center;
 justify-content:center;
 border:0;
 }
 
 .top_header fieldset input{
 background-color:rgba(255,255,255,0.5);
 padding:1rem;
 border:0;
 outline:none;
 width:100%;
 }
 
 .top_header fieldset .btn2{
 background-color:var(--pink);
 color:var(--lite);
 padding:1rem;
 border:0;
 outline:none;
 width:150px;
 transition:0.5s;
 }
 
 .top_header fieldset .btn2:hover{
 color:var(--white);
 background-color:#ad5d5a;
 }
 
 
 .border-shape {
 background: rgba(1,1,1,0.5) none repeat scroll 0 0;
 color: #fff;
 display: block;
 height: 3px;
 left: 0;
 margin: 20px auto;
 position: relative;
 right: 0;
 text-align: center;
 top: 0;
 width: 80px;
 }
 
 .border-shape::before {
 background: rgba(1,1,1,0.3) none repeat scroll 0 0;
 bottom: 0;
 content: "";
 height: 1px;
 left: 80px;
 margin: 0 auto;
 position: absolute;
 text-align: center;
 top: 1px;
 width: 100px;
 }
 
 .border-shape::after {
 background: rgba(1,1,1,0.3) none repeat scroll 0 0;
 bottom: 0;
 content: "";
 height: 1px;
 margin: 0 auto;
 position: absolute;
 right: 80px;
 text-align: center;
 top: 1px;
 width: 100px;
 }
 
 footer .border-shape {
 width: 40%;
 }
 
 footer .border-shape::before {
 width: 100%;
 left:120px;
 }
 
 footer .border-shape::after {
 width: 100%;
 right:120px;
 }
 
 footer .bottom_content section{
 padding:1.5rem 2rem;
 display:flex;
 align-items:center;
 justify-content:Center;
 }
 
 .bottom_content a{
 margin:0 20px;
 color:var(--lite);
 transition:0.5s;
 }
 
 .bottom_content a:hover{
 color:var(--black);
 }
 
 
 .copyright{
 padding:0.8em 0;
 background-color:var(--pink);
 text-align:center;
 color:rgba(1,1,1,0.7);
 font-size:12px;
 }
 
 @media (max-width:820px){
 .top_header{
 padding:1rem;
 display:block;
 }
 
 .top_header section{
 width:100%;
 margin:40px 0;
 align-items:left;
 justify-content:left;
 }
 footer .bottom_content section{
 padding:1rem;
 display:block;
 }
 footer .bottom_content section a{
 padding:1rem;
 font-size:12px;
 margin:0 5px;
 display:inline-block;
 }
 }
 
 
 
 
 
 /***************************
           ADDITIONAL
 ***************************/
 #roll_back{
 position:fixed;
 bottom:2rem;
 right:2rem;
 background-color:var(--palepink);
 border-radius:5px;
 border:2px solid var(--pink);
 padding:5px 10px;
 display:none;
 align-items:center;
 justify-content:center;
 z-index:999999;
 box-shadow:0px 6px 16px -6px rgba(1,1,1,0.5);
 color:var(--pink);
 font-weight:900;
 }
 
 
 
 
 
 /*REMOVE THIS*/
 .credits{
 position:fixed;
 left:0;
 bottom:2%;
 background-color:#1e1e1e;
 padding:0.5rem;
 font-size:12px;
 z-index:999;
 color:rgba(255,255,255,0.7);
 }
 
 .credits a{
 color:rgba(255,255,255,0.7);
 }
 
 .credits a:hover{
 color:white;
 }
 
 .credits .btn0{
 background-color:white;
 color:#000;
 padding:5px;
 border-radius:5px;
 border:0;
 display:block;
 margin:1vh auto;
 width:100px;
 text-align:Center;
 }
 
 .credits .btn0:hover{
 color:black;
 background-color:#b8bca7;
 }
    </style>
    `;
    bm.add(opts.name, {
      label: `
      <img class='labelimg' src='/candle.png'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
      category: opts.category,
      content: `<!DOCTYPE html>
      <htm lang="en">
      <head>
      
      <title>Candle Business</title>
      
      <link rel="shortcut icon" href="images/icon_1.png">
      
      
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      
      <!--FONT AWESOME-->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      
      <!--PLUGIN-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
      
      <!--GOOGLE FONTS-->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600&family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"> 
      
      <!--STYLESHEET
      <link rel="stylesheet" href="css/main.css">
      <link rel="stylesheet" href="css/animation.css">-->
      
      </head>
      <body>
      
      
      <!--HEADER-->
      <header>
      <section>
      <span><a href="emailto:support@websitename.com">Support@websitename.com</a></span>
      </section>
      <section>
      <span><a href="#"><i class="fa fa-facebook"></i></a></span>
      <span><a href="#"><i class="fa fa-instagram"></i></a></span>
      <span><a href="#"><i class="fa fa-youtube"></i></a></span>
      <span><a href="#"><i class="fa fa-twitter"></i></a></span>
      </section>
      </header>
      
      <!--NAVIGATION-->
      <nav>
      <div class="topnav" id="myTopnav">
      <a href="#home" id="logo"><img src="https://i.postimg.cc/Y9TX8zn2/icon-1.png" alt="LOGO "> <b>Logo.</b></a>
      <a href="#about" class="animate">About</a>
      <a href="#contact" class="animate">Contact</a>
      <div class="dropdown">
      <button class="dropbtn animate">Pages
      <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
      <a href="#">Page no1</a>
      <a href="#">Page no2</a>
      <a href="#">Page no3</a>
      </div>
      </div> 
      <a href="#" class="animate">Tab-2</a>
      <a href="#" id="active" class="animate">Home</a>
      <a href="javascript:void(0);" style="font-size:15px;" class="icon" onclick="NavBar()">&#9776;</a>
      </div>
      <div id="navbar">
      <a href="#home" id="logo2"><img src="https://i.postimg.cc/Y9TX8zn2/icon-1.png" alt=""> <b>Logo.</b></a>
      <a href="#about" class="animate">About</a>
      <a href="#contact" class="animate">Contact</a>
      <div class="dropdown">
      <button class="dropbtn animate">Pages
      <i class="fa fa-caret-down"></i>
      </button>
      <div class="dropdown-content">
      <a href="#">Page no1</a>
      <a href="#">Page no2</a>
      <a href="#">Page no3</a>
      </div>
      </div> 
      <a href="#" class="animate">Tab-2</a>
      <a href="#" id="active2" class="animate">Home</a>
      </div>
      </nav>
      
      
      
      <!--MAIN-->
      <main>
      <section>
      <em>Eco friendly</em>
      <h1 class="title">We like to think of our wares as full sensory experiences!</h1>
      <a href="#" class="btn1">LEARN MORE</a>
      </section>
      </main>
      
      
      
      
      <!--SECTION1-->
      <div class="section1">
      <div class="slider">
      <div class="slide-track">
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.png" height="100" alt="" />
      </div>
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.png" height="100" alt="" />
      </div>
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.png" height="100" alt="" />
      </div>
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.png" height="100" alt="" />
      </div>
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.pngg" height="100" alt="" />
      </div>
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.png" height="100" alt="" />
      </div>
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.png" height="100" alt="" />
      </div>
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.png" height="100" alt="" />
      </div>
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.png" height="100" alt="" />
      </div>
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.png" height="100" alt="" />
      </div>
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.png" height="100" alt="" />
      </div>
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.png" height="100" alt="" />
      </div>
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.png" height="100" alt="" />
      </div>
      <div class="slide">
      <img src="https://i.postimg.cc/ZnrLHtvj/icon-7.png" height="100" alt="" />
      </div>
      </div>
      </div>
      </div>
      
      
      
      <!--SECTION2-->
      <div class="section2">
      <section>
      <em>Category</em>
      <h1 class="title">Our Categories</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod. Tempor incididunt ut labore…</p>
      </section>
      <section>
      <span>
      <img src="https://i.postimg.cc/ncbRDT90/card-1.jpg" alt="" loading="lazy">
      <p>Candles</p>
      </span>
      <span>
      <img src="https://i.postimg.cc/4ytW0Hq6/card-2.jpg" alt="" loading="lazy">
      <p>Accessories</p>
      </span>
      <span>
      <img src="https://i.postimg.cc/2SC0H6wW/card-3.jpg" alt="" loading="lazy">
      <p>Gift Set</p>
      </span>
      </section>
      </div>
      
      
      
      <!--SECTION3-->
      <div class="section3">
      <section>
      <figure><img src="https://i.postimg.cc/W1SXxvWH/01.jpg" alt="" loading="lazy"></figure>
      </section>
      <section>
      <span>
      <em>About Us</em>
      <h1 class="title">We like to think of our wares as full sensory experiences!</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
      <p>Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
      <a href="#" class="btn1">Contact Us</a>
      </span>
      </section>
      </div>
      
      
      
      
      <!--SECTION4-->
      <div class="section4">
      <section>
      <span>
      <em>Gift Cards</em>
      <h1 class="title">The Self Discovery Collection</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </span>
      </section>
      <section>
      <figure><img src="https://i.postimg.cc/bNx6HbQ8/02.jpg" alt="" loading="lazy"></figure>
      </section>
      </div>
      
      
      
      
      <!--SECTION5-->
      <div class="section5">
      <section>
      <figure><img src="https://i.postimg.cc/wTQVszpj/03.jpg" alt="" loading="lazy"></figure>
      </section>
      <section>
      <span>
      <h1 class="title">The Self Discovery Collection</h1>
      </span>
      </section>
      </div>
      
      
      
      
      <!--SECTION6-->
      <div class="section6">
      <section>
      <span>
      <img src="https://i.postimg.cc/tJ05FCJY/icon-4.png" alt="">
      <p>(+x) xxxx xxxxx</p>
      </span>
      <span>
      <img src="https://i.postimg.cc/bvBLNRj0/icon-5.png" alt="">
      <p>support@websitename.com</p>
      </span>
      <span>
      <img src="https://i.postimg.cc/B6Pp81qr/icon-6.png" alt="">
      <p>0th Floor Auricle Building Levioosa Road<br> P.O Box 0000 - 00000 Province - Country</p>
      </span>
      </section>
      </div>
      
      
      
      
      <!--FOOTER-->
      <footer>
      <div class="top_header">
      <section>
      <img src="https://i.postimg.cc/FFJCzwzY/icon-3.png" alt="">
      <h1 class="title">Newsletter</h1>
      <form>
      <fieldset>
      <input type="email" name="email" placeholder="email address*" requried=""><button class="btn2">subscribe</button>
      </fieldset>
      </form>
      </section>
      </div>
      <span class="border-shape"></span>
      <div class="bottom_content">
      <section>
      <a href="#"><i class="fa fa-facebook"></i></a>
      <a href="#"><i class="fa fa-instagram"></i></a>
      <a href="#"><i class="fa fa-twitter"></i></a>
      <a href="#"><i class="fa fa-telegram"></i></a>
      </section>
      <section>
      <a href="#">Home</a>
      <a href="#">About us</a>
      <a href="#">Order</a>
      <a href="#">Retail</a>
      <a href="#">Member</a>
      <a href="#">Contact Us</a>
      </section>
      </div>
      <div class="copyright">
      Copyright © 2021 websitename - All rights reserved 
      </div>
      </footer>
      
      
      <!--ADDITIONAL-->
      <a href="#" id="roll_back" class="animate"><i class="fa fa-angle-up"></i></a>
      
      
      <!--REMOVE THIS-->
      <div class="credits">
      <b>Credits:</b>
      <a href="https://postimg.cc" title="Publish Your Images" target="_blank">PostImages</a> , 
      <a href="https://www.flaticon.com" title="Cool Icons"  target="_blank">Flaticons</a> ,
      <a href="https://unsplash.com" title="Noncopyright Images" target="_blank">Unsplash</a> 
      </div>
      
      <!--JAVASCRIPT
      <script type="text/javascript" src="js/main.js"></script>
      <script type="text/javascript" src="js/animation.js"></script>
      </body>
      </html>-->
    ${panelStyle}`,
    });
  
  };
  