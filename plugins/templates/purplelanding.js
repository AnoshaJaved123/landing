

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
     --dark:#131313;
     --gray:rgba(255,255,255,0.6);
     --lite:rgba(1,1,1,0.6);
     --cream:#f9f9f9;
     --primary:#ffa61b;
     --primary_lite:#ff3e55;
     --secondary:#6382f7;
     --secondary_dark:#15265b;
     --blue:#051135;
     --default:'Mukta', sans-serif;
     --title:'Montserrat', sans-serif;
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
     background: var(--dark);
 }
 
 
 /*DEFAULT*/
 body{
     margin:0;
     overflow-x:hidden !important;
     font-family:var(--default);
 }
 
 a{
     text-decoration:none !important;
     min-width: fit-content;
     width: fit-content;
     width: -webkit-fit-content;
     width: -moz-fit-content;
 }
 
 a, button, i{
     transition:0.5s;
 }
 
 em{
     font-style:normal;
     color:var(--primary);
 }
 
 ul{
     padding:0;
     margin:0;
 }
 
 figure{
     padding:0;
     margin:0;
 }
 
 fieldset{
     border:0;
 }
 
 .flex{
     display:flex;
     align-items:center;
     justify-content:center;
 }
 
 .flex-content{
     width:100%;
     position:relative;
 }
 
 .title{
     font-family:var(--title);
     color:var(--blue);
 }
 
 .cursive{
     font-family:var(--cursive);
 }
 
 .parallelogram{
     transform: skew(-20deg);
     display:block;
 }
 
 .skew-fix{
     display:inline-block;
     transform: skew(20deg);
 }
 
 .padding_1x{
     padding:1rem;
 }
 
 .padding_2x{
     padding:2rem;
 }
 
 .padding_3x{
     padding:3rem;
 }
 
 .big{
     font-size:4em;
 }
 
 .medium{
     font-size:2.5rem;
 }
 
 .small{
     font-size:1.5em;
 }
 
 .tag{
     color:var(--primary);
     display:flex;
     align-items:center;
     transition:0.5s;
     position:relative;
     padding-left:3.5rem;
 }
 
 .tag:before{
     content:"";
     width:50px;
     height:1px;
     position:absolute;
     left:0;
     top:50%;
     background-color:var(--primary);
     transform:translate(0%, -50%);
     font-family:"FontAwesome";
     transition:0.5s;
 }
 
 .tag:hover:after{
     margin:0 0.3rem;
 }
 
 .line{
     border-left:5px solid var(--primary_lite);
     padding-left:1rem;
 }
 
 .title_header{
     width:60%;
     margin:auto;
     text-align:center;
 }
 
 .title_header .title{
     line-height:0;
 }
 
 .title_header p:after{
     content:"";
     width:100px;
     height:2px;
     background-color:var(--primary);
     position:absolute;
     bottom:-50%;
     left:50%;
     transform:translate(-50%, 10%);
 }
 
 .title_header p{
     color:var(--lite) !important;
     position:relative;
 }
 
 .btn1, .btn2{
     padding:1rem 1.5rem;
     border:0;
     border-radius:5px;
     color:var(--white);
     font-weight:500;
     text-transform:uppercase;
 }
 
 .btn1 .fa, .btn2 .fa{
     position:relative;
     left:0.4rem;
 }
 
 .btn1{
     background-color:var(--primary);
 }
 
 .btn1:hover > .fa{
     left:0.1rem;
 }
 
 .btn2{
     width:100%;
     background-color:var(--secondary);
     padding:0.8rem 2rem;
     display:block;
     border:1px solid var(--secondary);
     font-weight:600;
 }
 
 .btn2:hover{
     background-color:var(--secondary_dark);
     border:1px solid var(--secondary_dark);
 }
 
 @media (max-width:1280px){
     .big{
         font-size:1.8em;
     }
     
     .medium{
         font-size:1.4em;
     }
     
     .small{
         font-size:1.2em;
     }
 }
 
 @media (max-width:920px){
     .title_header{
         width:100%;
         padding:1rem;
     }
     .big{
         font-size:1.8em;
     }
     
     .medium{
         font-size:1.4em;
     }
     
     .small{
         font-size:1.2em;
     }
     
     .flex{
         flex-wrap:wrap;
     }
     
     .padding_1x, .padding_2x, .padding_3x{
         padding:1rem;
     }
     
     .btn1, .btn2{
         padding:0.5rem 1rem;
     }
 }
 
 
 /*MAIN*/
 main{
     width:100%;
     position:relative;
     background:linear-gradient(to right, rgba(31, 28, 88, 0.9) 10%, rgba(31, 28, 88, 0.7) 50%, rgba(31, 28, 88, 0.1) 100%),url("https://i.postimg.cc/LsKfRM3Q/main.jpg");
     background-repeat:no-repeat;
     background-size:cover;
     background-position:center;
     color:var(--white);
     padding-bottom:6rem;
 }
 
 main:after{
     content:"";
     background-image:url("https://i.ibb.co/8zB1N3z/wave.png");
     background-size:cover;
     width:100%;
     height:100px;
     position:absolute;
     bottom:-20px;
 }
 
 main .tag{
     position:relative;
     top:20px;
     color:var(--white);
 }
 
 main .tag:before{
     background-color:var(--white);
 }
 
 main .title{
     font-weight:200;
     color:var(--white);
 }
 
 main em{
     color:var(--white);
     font-weight:400;
 }
 
 main p{
     position:relative;
     top:-30px;
     font-weight:400;
     color:var(--gray);
 }
 
 @media (max-width:920px){
     main .tag{
         top:20px;
     }
     
     main p{
         top:-10px;
     }
 }
 
 
 
 /*SECTION1*/
 .section1{
     display:flex;
     align-items:top !important;
 }
 
 .section1 em{
     color:var(--dark);
     top:20px;
 }
 
 .section1 .tag:before{
     background-color:var(--dark);
 }
 
 .section1 p{
     color:var(--lite);
 }
 
 .section1 form{
     background-color:var(--white);
     position:relative;
     top:-20vh;
     box-shadow:0 20px 60px -10px rgba(0,0,0,.1);
     border-radius:10px;
 }
 
 form .small{
     text-align:center;
 }
 
 form input, form select{
     background-color: #f7f7f7;
     color: #001837;
     width: 100%;
     font-weight: normal;
     border: 1px solid #eeeeee;
     border-radius: 5px;
     height: 48px;
     line-height: 48px;
     margin-top: 5px;
     margin-bottom: 5px;
     font-size: 14px;
     padding: 10px;
     transition: all ease .3s;
     -webkit-transition: all ease .3s;
 }
 
 @media (max-width:920px){
     .section1{
         flex-wrap:wrap;
     }
     
     .section1 em{
         top:10px;
     }
     
     form input, form select{
         height:38px;
     }
     
     .section1 form{
         top:0;
     }
 }
 
 
 /*SECTION2*/
 .section2{
     background:linear-gradient(to right, rgba(31, 28, 88, 0.7) 10%, rgba(31, 28, 88, 0.7) 50%, rgba(31, 28, 88, 0.7) 100%),url("https://i.postimg.cc/BZrmYtjR/bg-1.jpg");
     background-repeat:no-repeat;
     background-size:cover;
     color:var(--white);
     position:relative;
     top:-10vh;
 }
 
 .section2 p{
     color:var(--gray);
 }
 
 .section2 .cards{
     display:flex;
     align-items:top !important;
     justify-content:center;
 }
 
 .section2 .flex-content figure{
     position:relative;
 }
 
 .section2 .flex-content .title{
     color:var(--white);
 }
 
 .section2 .flex-content:not(:last-child) figure::after{
     content:"";
     background-image:url("https://i.postimg.cc/7LBXbLm6/arrow.png");
     background-size:100% 100%;
     background-position:top center;
     position:absolute;
     top:0;
     width:90%;
     height:50px;
 }
 
 .section2 .flex-content:nth-child(1) figure::after{
     top:-10%;
 }
 
 .section2 .flex-content:nth-child(2) figure::after{
     left:25%;
     top:10%;
 }
 
 .section2 .flex-content:nth-child(odd) figure::after{
     -webkit-transform:rotateX(180deg);
     transform:rotateX(180deg);
 }
 
 .section2 .flex-content figure img{
     filter:brightness(0) invert(1);
 }
 
 @media (max-width:920px){
     .section2{
         top:0;
     }
     
     .section2 .cards{
         flex-wrap:wrap;
     }
     
     .section2, .section2 .flex-content{
         padding:0 !important;
     }
     
     .section2 .flex-content:not(:last-child) figure::after{
         display:none;
     }
 }
 
 
 
 
 /*SECTION3*/
 .section3{
     background-color:#edeef0;
     background-image:url("#");
     background-size:cover;
 }
 
 .section3 section{
     transition:0.5s;
 }
 
 .section3 figure{
     position:relative;
     overflow:hidden;
     height:60vh;
 }
 
 .section3 figure img{
     width:100%;
     height:100%;
     object-fit:cover;
     object-position:center;
 }
 
 .section3 section:nth-child(odd) figure{
     margin-top:-2rem;
 }
 
 .section3 section:nth-child(even) figure{
     margin-top:8rem;
 }
 
 .section3 article{
     position:absolute;
     top:100%;
     background-color:rgba(1,1,1,0.4);
     width:100%;
     height:100%;
     z-index:1;
     transition:0.5s;
 }
 
 .section3 article span{
     display:block;
     width:100%;
     height:100%;
     position:absolute;
     left:-100%;
     transition:0.5s;
     transition-delay:0.5s;
 }
 
 .section3 figure:hover article{
     top:0%;
 }
 
 .section3 figure:hover article span{
     left:0;
 }
 
 .section3 h2, .section3 p{
     color:var(--white);
 }
 
 @media (max-width:920px){
     .section3 figure{
         height:30vh;
     }
     
     .section3 section{
         margin:0px 0;
     }
     
     .section3 section:nth-child(odd) figure{
         margin-top:0rem;
     }
 
     .section3 section:nth-child(even) figure{
         margin-top:0rem;
     }
 }
 
 
 
 /*SECTION4*/
 .section4 img{
     -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      width:100%;
 }
 
 .section4 figure{
     position:relative;
 }
 
 .section4 p{
     color:var(--lite);
 }
 
 .section4 figure span{
     position:absolute;
     top:0%;
     right:0%;
     display:block;
     z-index:1;
     background-color:var(--white);
     text-align:center;
     box-shadow:0px 6px 16px 6px rgba(255, 166, 27, 0.8); 
 }
 
 .section4 figure span .title{
     line-height:0;
     font-weight:900;
 }
 
 .section4 li{
     list-style:none;
     padding:0.3rem 0;
 }
 
 .section4 li::before{
     content:"\f00c";
     font-family:"FontAwesome";
     margin-right:0.4rem;
     color:var(--primary);
     font-size:1.5em;
 }
 
 .section4 .flex-content:nth-child(1):before{
     content:"";
     width:100%;
     height:100%;
     background-image:url("https://i.postimg.cc/x8Q8FKM6/bg-7.png");
     background-repeat:no-repeat;
     position:absolute;
     left:0;
     top:1%;
     z-index:1;
     --delay: 0s;
     animation: arrows 4s var(--delay) infinite ease-in;
 }
 
 
 
 /*SECTION5*/
 .section5{
     background-color:#edeef0;
     position:relative;
 }
 
 .section5:after{
     content:"";
     background-image:url("https://i.postimg.cc/yNvhsbQM/0.png");
     position:absolute;
     right:0;
     top:25%;
     height:100%;
     width:20%;
     background-repeat:no-repeat;
     background-size:100% 100%;
     pointer-events:none;
 }
 
 .section5 .flex-content{
     width:90%;
     margin:auto;
     background-color:var(--secondary_dark);
     background-image:url("https://i.postimg.cc/LXtLX4V0/shape.png");
     background-size:cover;
     color:var(--white);
     text-align:center;
     position:relative;
     top:5vh;
     border-radius:10px;
 }
 
 .section5 .title{
     color:var(--white);
 }
 
 .section5 p{
     color:var(--gray);
 }
 
 .section5 .btn1{
     background-color:transparent;
     border:1px solid var(--white);
     display:block;
     margin:auto;
     padding:0.5rem 1rem;
 }
 
 .section5 .btn1:hover{
     background-color:var(--white);
     color:var(--secondary_dark);
 }
 
 @media (max-width:920px){
     .section5 .flex-content{
         width:100%;
         top:0;
         border-radius:0;
     }
     
     .section5:after{
         display:none;
     }
 }
 
 
 
 /*FOOTER*/
 footer{
     display:flex;
     align-items:top;
     justify-content:center;
     background-color:var(--blue);
     color:var(--white);
     padding-top:3rem;
 }
 
 footer .title{
     color:var(--white);
 }
 
 footer a{
     display:block;
     color:var(--gray);
     margin:0.3rem 0;
 }
 
 footer a:hover{
     color:var(--white);
 }
 
 footer .flex-content:not(:first-child) a:before{
     content:"\f0da";
     font-family:"FontAwesome";
     margin-right:0.3rem;
 }
 
 footer .social_icons a{
     margin:0.3rem;
     padding:0.1rem 0.6rem;
     border-radius:50%;
     border:1px solid var(--gray);
     display:inline-block;
     text-align:center;
 }
 
 footer .social_icons a:hover{
     background-color:var(--gray);
     color:var(--blue);
 }
 
 footer p{
     color:var(--gray);
 }
 
 footer fieldset{
     padding:0;
     margin:0;
 }
 
 footer fieldset .flex-content:nth-child(2){
     width:23%;
 }
 
 footer input{
     padding:1rem;
     border:0;
     font-weight:600;
 }
 
 footer .btn1{
     border-radius:0;
     text-align:center;
 }
 
 footer .btn1 .fa{
     left:0;
 }
 
 .sub_footer{
     background-color:var(--secondary_dark);
     text-align:center;
     color:var(--gray);
     padding:0.01rem;
 }
 
 @media (max-width:920px){
     footer{
         flex-wrap:wrap;
     }
     
     footer fieldset{
         flex-wrap:nowrap !important;
     }
     
     footer fieldset .btn1{
         padding:1rem;
     }
 }
 
 
 /*Animate*/
 /*Animate up & down*/
 @keyframes arrows{
     0%, 100%{
         color: black;
         transform: translateY(0);
     }
     50%{
         color: #3AB493;
         transform: translateY(20px);
     }
 }
 
 
 
 
 
 /*REMOVE THIS*/
 .credits{
 position:fixed;
 right:0;
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
      <img class='labelimg' src='/purpleweb.png'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
      category: opts.category,
      content: `
      <head>
      
      <!--TITLE
      <title>Cleaning Service</title>-->
      
      <!--SHORTCUT ICON
      <link rel="shortcut icon" href="images/#">-->
      
      <!--META TAGS
      <meta charset="UTF-8">
      <meta name="language" content="ES">
      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">-->
      
      <!--FONT AWESOME-->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      
      <!--GOOGLE FONTS-->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Mukta:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"> 
      
      <!--STYLE SHEET
      <link rel="stylesheet" href="css/#">
      <link rel="stylesheet" href="css/#">-->
      
      </head>
      <body>
      
      <!--MAIN-->
      <main class="flex">
          <section class="flex-content padding_2x">
              <article>
                  <em class="tag">WEBSITE NAME</em>
                  <h1 class="title big">Best <em>Commercial & Residential</em> Cleaning Service.</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  <a href="#" class="btn1">Book a service <i class="fa fa-arrow-right"></i></a>
              </article>
          </section>
          <section class="flex-content padding_2x">
          </section>
      </main>
      
      <!--SECTION1-->
      <div class="section1">
          <section class="flex-content padding_2x">
              <em class="tag">ABOUT US</em>
              <h1 class="title medium">We help you to keep your place clean</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <em style="color:var(--secondary)">It is a long established fact</em>
          </section>
          <section class="flex-content padding_2x">
              <form id="form" class="padding_2x">
                  <h2 class="small">Book a service</h2>
                  <fieldset>
                      <label for="fname">Your name</label>
                      <input type="text" name="fname" id="fname" maxlength="60" />
                  </fieldset>
                  <fieldset>
                      <label for="cno" id="cno">Contact number</label>
                      <input type="tel" name="cno" maxlength="15" />
                  </fieldset>
                  <fieldset>
                      <label for="zip" id="zip">Zip code</label>
                      <input type="tel" name="zip" maxlength="8" />
                  </fieldset>
                  <fieldset>
                      <label for="service">Choose a service</label>
                      <select name="service" id="service">
                          <option value="1">Residential Cleaning</option>
                          <option value="2">Commercial Cleaning</option>
                          <option value="3">Other</option>
                      </select>
                  </fieldset>
                  <fieldset>
                      <button id="form_btn" class="btn2">SUBMIT DETAILS</button>
                  </fieldset>
              </form>
          </section>
      </div>
      
      <!--SECTION2-->
      <div class="sections section2 padding_2x">
          <article class="cards padding_2x">
              <section class="flex-content padding_2x">
                  <figure>
                      <img src="https://i.postimg.cc/J7yFYNtr/01.png" alt="" loading="lazy">
                  </figure>
                  <h2 class="title small">Pick a <em>service</em></h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </section>
              <section class="flex-content padding_2x">
                  <figure>
                      <img src="https://i.postimg.cc/jSTkjBc2/02.png" alt="" loading="lazy">
                      <h2 class="title small"><em>Schedule</em> with us</h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </figure>
              </section>
              <section class="flex-content padding_2x">
                  <figure>
                      <img src="https://i.postimg.cc/FKsWyc2Q/03.png" alt="" loading="lazy">
                      <h2 class="title small">Get things <em>done</em></h2>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                  <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </figure>
              </section>
          </article>
      </div>
      
      <!--SECTION4-->
      <div class="section4 flex">
          <section class="flex-content padding_2x">
              <figure>
                  <img src="https://i.postimg.cc/YSnXb0HL/05.jpg" alt="">
                  <span class="padding_1x">
                      <p class="title medium">5+</p>
                      <em>Years of experience</em>
                 </span>
              </figure>
          </section>
          <section class="flex-content padding_2x">
              <em class="tag">WHY CHOOSE US?</em>
              <h1 class="title medium">We provide the best services for your help!</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              <ul>
                  <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
                  <li>When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</li>
                  <li>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</li>
              </ul>
          </section>
      </div>
      
      <!--SECTION3-->
      <div class="section3 padding_2x">
          <div class="title_header">
              <em>OUR RECENT WORKS</em>
              <h1 class="title medium">Quality Service</h1>
          </div>
          <div class="flex">
          <section class="flex-content padding_1x">
              <figure>
                  <img src="https://i.postimg.cc/MZhFCnjy/01.jpg" alt="">
                  <article>
                      <span class="padding_1x">
                          <h2 class="cursive">Commercial</h2>
                          <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </span>
                  </article>
              </figure>
          </section>
          <section class="flex-content padding_1x">
              <figure>
                  <img src="https://i.postimg.cc/Df45ynsv/02.jpg" alt="">
                  <article>
                      <span class="padding_1x">
                          <h2 class="cursive">Hotels</h2>
                          <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </span>
                  </article>
              </figure>
          </section>
          <section class="flex-content padding_1x">
              <figure>
                  <img src="https://i.postimg.cc/bNQTkg34/03.jpg" alt="">
                  <article>
                      <span class="padding_1x">
                          <h2 class="cursive">Hotels</h2>
                          <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </span>
                  </article>
              </figure>
          </section>
          <section class="flex-content padding_1x">
              <figure>
                  <img src="https://i.postimg.cc/kGSyjv96/04.jpg" alt="">
                  <article>
                      <span class="padding_1x">
                          <h2 class="cursive">Hotels</h2>
                          <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                      </span>
                  </article>
              </figure>
          </section>
          </div>
      </div>
      
      <!--SECTION5-->
      <div class="section5 flex">
          <section class="flex-content padding_2x">
              <h1 class="title small">Stay connected with us</h1>
              <p>Have any questions? please feel free to contact us. We are always happy to hear from you.</p>
              <a href="#" class="btn1">Contact us</a>
          </section>
      </div>
      
      <!--FOOTER-->
      <footer>
          <section class="flex-content padding_2x">
              <h3 class="title small">Welcome to <em>{name}</em></h3>
              <p>When an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              <span class="social_icons">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-youtube"></i></a>
              </span>
          </section>
          <section class="flex-content padding_2x">
              <h3 class="title small">Opening hours</h3>
              <p>Monday ~ Saturday, 8am-6pm || Sunday, 10am-1pm</p>
          </section>
          <section class="flex-content padding_2x">
              <h3 class="title small">Other Links</h3>
              <a href="#">Terms & conditions</a>
              <a href="#">Privacy policy</a>
              <a href="#">Cookie policy</a>
              <a href="#">Raise a ticket</a>
          </section>
          <section class="flex-content padding_2x">
              <h3 class="title small">Newsletter</h3>
              <p>Subscribe our newsletter to get our latest update & news</p>
              <fieldset class="flex">
                  <input type="email" name="email" placeholder="Email address" class="flex-content" required="" />
                  <button class="btn1 flex-content"><i class="fa fa-paper-plane"></i></button>
              </fieldset>
          </section>
      </footer>
      <div class="sub_footer">
      <p> 2022 © All rights reserved by {website}</p>
      </div>
      
      <!--JAVASCRIPT
      <script type="text/javascript" src="js/#"></script>-->
      
        
        
      <!--REMOVE THIS-->
      <div class="credits">
      <b>Credits:</b>
      <a href="https://postimg.cc" title="Publish Your Images" target="_blank">PostImages</a> , 
      <a href="https://unsplash.com/photos/uq2E2V4LhCY" title="Images"  target="_blank">Unsplash</a> ,
      <a href="https://www.flaticon.com" title="Nav Icons" target="_blank">FlatIcon</a> 
       ,
      <a href="https://www.freepik.com/search?format=search&query=panorama" title="Banner Image" target="_blank">Freepik</a> 
      </div>
        
       
      
    ${panelStyle}`,
    });
  
  };
  