

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  
    const bm = editor.BlockManager;
  
    const panelStyle = `<style>
    :root {
      --main_color: #10cab7;
      --sec-color: #f6f6f6;
      --header-color: #ebeced;
      --txt-color: #797979;
      --dark-green-color: #2c4755;
  }
  
  html {
      scroll-behavior: smooth;
      overflow-x-: hidden;
  }
  
  body {
      margin: 0px;
      padding: 0px;
      min-width: 200px;
  }
  
  *{
      box-sizing: border-box;
      font-family: 'Cairo', sans-serif;
  }
  
  ::selection {
      color: #fff;
      background-color: #10cab7;
  }
  
  header {
      padding: 10px 5%;
      height: 50px;
      display: flex;
      justify-content: space-between;
  }
  
  /* Creating Bars */
  .bars {
      display: flex;
      width: 40px;
      height: 100%;
      flex-wrap: wrap;
      align-items: center;
      justify-content: flex-end;
  }
  
  .bars span{
      display: block;
      background-color: #333;
      height: 2px;
      transition: all 250ms ease;
  }
  
  .bars span:first-child{
      width: 100%;
  }
  
  .bars span:nth-child(2){
      width: 60%;
  }
  
  .bars span:last-child{
      width: 100%;
  }
  
  header .nav:hover .bars span:nth-child(2){
      width: 100%;
  }
  /* Icon Done */
  
  header .nav {
      position: relative;
  }
  
  .nav ul {
      position: absolute;
      right: 5%;
      top: 60px;
      background-color: #fff;
      list-style: none;
      margin: 0px;
      padding: 0px;
      display: none;
  }
  
  .nav ul::before {
      content: '';
      display: block;
      position: absolute;
      right: 10px;
      top: -40px;
      height: 1px;
      width: 1px;
      border-style: solid;
      border-width: 20px;
      border-color: transparent transparent #fff transparent;
  }
  
  .nav:hover .links{
      display: block;
  }
  
  .nav li:not(:last-child) {
      border-bottom: 1px solid #dddd;
  }
  
  .nav a {
      text-decoration: none;
      color: #000;
      display: block;
      width: 200px;
      padding: 10px 20px;
      font-size: 20px;
      transition: all 250ms ease;
  }
  
  .nav a:hover {
      padding-left: 40px;
  }
  
  /* Header Finished */
  
  .landing {
      height: calc(100vh - 50px);
      min-height: 390px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-image: url('https://github.com/ElzeroWebSchool/HTML_And_CSS_Template_One/blob/main/images/landing.jpg?raw=true');
      background-size: cover;
      padding: 0px 20px;
  }
  
  .landing h1 {
      color:var(--main_color);
      font-size: 50px;
  }
  
  .landing p {
      font-size: 20px;
      line-height: 2;
      word-spacing: 2px;
  }
  
  /* DRY: BOX & COLORED-BOX */
  .colored-box{
      background-color: #f6f6f6;
  }
  
  /* Features */ 
  section.idea {
      max-width: 1200px;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      grid-auto-rows: auto;
      justify-content: space-evenly;
      /* background-color: #f6f6f6; */
      padding-top: 50px;
  }
  @media (max-width: 400px){
    section.idea{
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
  }
  section.idea div{
      text-align: center;
      padding: 20px 40px;
  }
  @media (max-width: 400px){
    section.idea div{
      padding: 20px 10px;
    }
  }
  i {
      font-size: 50px;
      color: var(--main_color);
  }
  
  /*Services*/
  section.title{
      text-align: center;
      margin-top: 50px;
      margin-bottom: 50px;
  }
  section.title h1{
      font-size: 64px;
      font-weight: 900;
      letter-spacing: -1.5px;
      color: var(--header-color);
      margin: 0px;
  }
  section.title p{
      margin: 0px;
      margin-top: -55px;
      font-size: 24px;
      word-spacing: 3.5px;
      color: var(--txt-color);
  }
  @media (min-width: 850px) {
      section.title h1{
          font-size: 100px;
      }
      section.title p{
          margin-top: -85px;
      }
  }
  @media (max-width: 270px) {
      section.title h1{
          font-size: clamp(40px, 50px, 60px);
      }
      section.title p{
          margin-top: -50px;
          font-size: 18px;
      }
  }
  section.services{
      max-width: 1200px;
      margin: auto;
      padding: 20px 50px;
      display: flex;
      justify-content: center;
  }
  section.services .container{
      display: flex;
  }
  section.services .srv{
      width: 65%;
      max-width: 900px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 325px));
      grid-auto-flow: auto;
      gap: 10px;
  }
  section.services i{
      font-size: 35px;
      transform: translate(-15px, 15px);
  }
  section.services p{
      font-size: 14px
  }
  section.services .pic{
      border-right: 150px solid var(--dark-green-color);
      display: flex;
      justify-content: right;
      align-items: center;
      height: 430px;
  }
  section.services .pic img{
      height: 80%;
      transform: translateX(75px);
  }
  @media (max-width: 1185px) {
      section.services .pic{
          display: none;
      }
      section.services .srv{
          width: 100%;
          justify-content: center;
      }
  }
  @media (max-width: 777px){
      section.services .container{
          flex-direction: column;
          text-align: center;
          margin-bottom: 20px;
      }
      section.services .icons{
          /* padding: 20px 0px; */
          transform: translate(15px, -15px)
      }
  }
  
  /*PORTFOLIO*/
  
  section.colored-title{
      background-color: #f6f6f6;
      margin-bottom: 0px;
  }
  section.portfolio {
      max-width: 1200px ;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-auto-rows: auto;
      gap: 20px;
      /* background-color: #f6f6f6; */
      padding: 50px 60px;
  
      /* justify-content: center;
      justify-content: space-evenly; */
  }
  @media (max-width: 400px){
    section.portfolio{
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      padding: 50px 5px;
    }
  }
  section.portfolio .project{
      background-color: #fff;
  }
  section.portfolio .project h4,
  section.portfolio .project p{
      margin-top: 0px;
      margin-bottom: 0px;
  }
  section.portfolio .project img{
      width: 100%;
  }
  section.portfolio .project div {
      padding: 10px 25px;
  }
  
  /*ABOUT*/
  section.about section.container{
      max-width: 1200px;
      margin: auto;
      display: grid;
      padding: 20px 50px;
  }
  @media (max-width: 400px){
    section.about section.container{
      padding: 20px 5px;
    }
  }
  section.about section.container .about-pic{
      text-align: center;
  }
  section.about section.container .about-pic img{
      width: 250px;
  }
  @media (max-width: 290px){
    section.about section.container .about-pic img{
      width: 150px;
    }
  }
  section.about section.container .about-info p:first-child{
      font-weight: 800;
      margin-bottom: 50px;
  }
  section.about section.container .about-info p:last-child{
      color: var(--txt-color);
  }
  section.about section.container .about-info{
      text-align: center;
  }
  section.about section.container .about-info hr {
      border-color: var(--main_color);
      width: 50%;
      display: inline-block;
  }
  @media (min-width: 991px) {
      section.about section.container{
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
      }
      section.about section.container .about-info{
          text-align: start;
      }
      section.about section.container .about-pic{
          text-align: start;
          position: relative;
          z-index: 100px;
          margin-left: 25px;
      }
      section.about section.container .about-pic::before{
          content: "";
          display: block;
          height: calc(100% + 80px);
          width: 100px;
          position: absolute;
          left: -40px;
          top: -40px;
          border-left: 100px solid var(--header-color);
          z-index: -1;
      }
      section.about section.container .about-pic::after {
          content: "";
          display: block;
          height: 375px;  /* Equal To Image Height */
          width: 200px;
          position: absolute;
          top: -40px;
          left: 200px;
          border-bottom: 80px solid var(--main_color);
          border-left: 80px solid var(--main_color);
          box-sizing: border-box;
          z-index: -1;
      }
  }
  
  /* Contact */
  section.contact{
      /* background-color: #f6f6f6; */
  }
  section.contact .social{
      text-align: center;
      font-size: 24px;
      margin-top: 100px;
      padding-bottom: 100px;
  }
  section.contact .social p:first-child{
      font-weight: 900;
      color: var(--dark-green-color);
      margin-bottom: 0px;
  }
  section.contact .social p:last-child{
      text-transform: capitalize;
      font-size: 18px;
      margin-top: 5px;
  }
  section.contact .social a{
      text-decoration: none;
      color: #10cab7;
      font-weight: 900;
  }
  @media (max-width: 270px){
    section.contact .social p:first-child{
      font-size: 20px;
    }
    section.contact .social a{
      font-size: 18px
    }
  }
  section.contact .social i{
      font-size: 20px;
      margin-left: 8px;
  }
  /* Footer */
  footer {
      font-size: 20px;
      text-align: center;
      text-transform: capitalize;
      padding: 15px 0px;
      background-color: #2c4755;
      color: #fff;
  }
  footer p{
      margin: 0px;
  }
  footer p span {
      color: #10cab7;
  }
  @media (max-width: 270px){
    footer{
      font-size: 16px;
    }
  }
      
    </style>
    `;
    bm.add(opts.name, {
      label: `
      <img class='labelimg' src='/gymweb.png'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
      category: opts.category,
      content: `<head>
      <link rel="stylesheet" href="style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      <script src="https://kit.fontawesome.com/4242e0133b.js" crossorigin="anonymous"></script>
    </head>
    
    <body>
        <header>
          <img
            src="https://github.com/ElzeroWebSchool/HTML_And_CSS_Template_One/blob/main/images/logo.png?raw=true"
          />
    
          <div class="nav">
            <span class="bars">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <ul class="links">
              <li><a href="#srv">Services</a></li>
              <li><a href="#prt">Portfolio</a></li>
              <li><a href="#abt">About</a></li>
              <li><a href="#cont">Contact</a></li>
            </ul>
          </div>
        </header>
    
        <div class="landing">
          <div>
            <h1>Hello There</h1>
            <p>
              We are Leon - Super Creative &<br />
              Minimal Agency Web Template
            </p>
          </div>
        </div>
    
        <div class="box colored-box">
          <section class="idea">
            <div>
              <i class="fas fa-magic"></i>
              <h2>Tell Us Your Idea</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut lab
              </p>
            </div>
            <div>
              <i class="far fa-gem"></i>
              <h2>We Will Do All The Work</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut lab
              </p>
            </div>
            <div>
              <i class="fas fa-globe-africa"></i>
              <h2>Your Product is Worldwide</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut lab
              </p>
            </div>
          </section>
        </div>
    
        <section class="title" id="srv">
          <h1>Services</h1>
          <p>Don't be busy, be productive</p>
        </section>
    
        <div class="box">
          <section class="services">
            <div class="srv">
              <div class="container">
                <div class="icons">
                  <i class="fas fa-palette"></i>
                </div>
                <div class="info">
                  <h2>Graphic Design</h2>
                  <p>
                    Graphic design is the process of visual communication and
                    problem-solving using one or more of typography, photography and
                    illustration
                  </p>
                </div>
              </div>
              <div class="container">
                <div class="icons">
                  <i class="far fa-gem"></i>
                </div>
                <div class="info">
                  <h2>UI & UX</h2>
                  <p>
                    Process of enhancing user satisfaction with a product by
                    improving the usability, accessibility, and pleasure provided in
                    the interaction.
                  </p>
                </div>
              </div>
              <div class="container">
                <div class="icons">
                  <i class="fas fa-vector-square"></i>
                </div>
                <div class="info">
                  <h2>Web Design</h2>
                  <p>
                    Web design encompasses many different skills and disciplines in
                    the production and maintenance of websites.
                  </p>
                </div>
              </div>
              <div class="container">
                <div class="icons">
                  <i class="fas fa-pencil-ruler"></i>
                </div>
                <div class="info">
                  <h2>Web Development</h2>
                  <p>
                    Web development is a broad term for the work involved in
                    developing a web site for the Internet or an intranet.
                  </p>
                </div>
              </div>
            </div>
            <div class="pic">
              <img
                src="https://github.com/ElzeroWebSchool/HTML_And_CSS_Template_One/blob/main/images/services.jpg?raw=true"
              />
            </div>
          </section>
        </div>
    
        <section class="title colored-title">
          <h1>Portfolio</h1>
          <p>If you do it right, it will last forever.</p>
        </section>
    
        <div class="box colored-box">
          <section class="portfolio" id="prt">
            <div class="project">
              <img
                src="https://github.com/ElzeroWebSchool/HTML_And_CSS_Template_One/blob/main/images/portfolio-1.jpg?raw=true"
              />
              <div>
                <h4>Project Here</h4>
                <p>
                  My creative ability is very difficult to measure because it can
                  manifest in so many surprising and.
                </p>
              </div>
            </div>
            <div class="project">
              <img
                src="https://github.com/ElzeroWebSchool/HTML_And_CSS_Template_One/blob/main/images/portfolio-2.jpg?raw=true"
              />
              <div>
                <h4>Project Here</h4>
                <p>
                  My creative ability is very difficult to measure because it can
                  manifest in so many surprising and.
                </p>
              </div>
            </div>
            <div class="project">
              <img
                src="https://github.com/ElzeroWebSchool/HTML_And_CSS_Template_One/blob/main/images/portfolio-3.jpg?raw=true"
              />
              <div>
                <h4>Project Here</h4>
                <p>
                  My creative ability is very difficult to measure because it can
                  manifest in so many surprising and.
                </p>
              </div>
            </div>
          </section>
        </div>
    
        <div class="box">
          <section class="about" id="abt">
            <section class="title">
              <h1>About</h1>
              <p>Less is more work</p>
            </section>
            <section class="container">
              <div class="about-pic">
                <img
                  src="https://github.com/ElzeroWebSchool/HTML_And_CSS_Template_One/blob/main/images/about.jpg?raw=true"
                />
              </div>
              <div class="about-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
                  nemo neque voluptate tempora velit cum non, fuga vitae architecto
                  delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi
                  iusto laudantium!
                </p>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
                  sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum
                  officiis dolorum hic voluptate quaerat minima, similique inventore
                  esse, alias, sed quo officia?
                </p>
              </div>
            </section>
          </section>
        </div>
    
        <div class="box colored-box">
          <section class="contact" id="cont">
            <section class="title colored-title">
              <h1>Contact</h1>
              <p>We are born to create</p>
            </section>
            <section class="social">
              <p>Fell free to drop us a line at:</p>
              <a href="#">leonagency@mail.com</a>
              <p>
                Find us on social networks
                <i class="fab fa-youtube"></i>
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
              </p>
            </section>
          </section>
        </div>
    
        <footer>
          <p>&copy; 2021 <span>Leon</span> all right reserved</p>
        </footer>
      </body>
    ${panelStyle}`,
    });
  
  };
  