/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  // const dc = editor.DomComponents;
  // const defaultType = dc.getType("default");
  // const defaultView = defaultType.view;

  const bm = editor.BlockManager;
  const customStyle = `<style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .navbar{
    height: 70px;
    width: 100%;
    padding: 14px 30px;
    background-color: #1b4cd3;
    position: relative;
  }
  .navbar .nav-header{
    display: inline;
  }
  .navbar .nav-header .nav-logo{
    display: inline-block;
    margin-top: -7px;
  }
  .navbar .nav-links{
    display: inline;
    float: right;
    font-size: 18px;
  }
   
  .navbar .nav-links .loginBtn{
    display: inline-block;
    padding: 5px 15px;
    margin-left: 20px;
    font-size: 17px;
    color: rgb(9, 14, 90);
  }
  .navbar .nav-links a{
    padding: 10px 12px;
    text-decoration: none;
    font-weight: 550;
    color: white;
  }
  /* Hover effects */
  .navbar .nav-links a:hover{
    background-color: rgba(0, 0, 0, 0.3);
  }
   
  /* responsive navbar toggle button */
  .navbar #nav-check, .navbar .nav-btn{
    display: none;
  }
   
  @media (max-width:700px) {
    .navbar .nav-btn{
      display: inline-block;
      position: absolute;
      top: 0px;
      right: 0px;
    }
    .navbar .nav-btn label {
      display: inline-block;
      width: 80px;
      height: 70px;
      padding: 25px;
    }
    .navbar .nav-btn label span {
      display: block;
      height: 10px;
      width: 25px;
      border-top: 3px solid #eee;
    }
    .navbar .nav-btn label:hover, .navbar #nav-check:checked ~ .nav-btn label {
      background-color: rgb(9, 14, 90);
    }
    .navbar .nav-links{
      position: absolute;
      display: block;
      text-align: center;
      width: 50%;
      background-color: rgb(9, 14, 90);
      transition: all 0.3s ease-in;
      overflow-y: hidden;
      top: 70px;
      right: 0px;
    }
    .navbar .nav-links a {
      display: block;
    }
   
    /* when nav toggle button not checked */
    .navbar #nav-check:not(:checked) ~ .nav-links {
      height: 0px;
    }
   
    /* when nav toggle button is checked */
    .navbar #nav-check:checked ~ .nav-links {
      height: calc(100vh - 70px);
      overflow-y: auto;
    }
    .navbar .nav-links .loginBtn {
      padding: 10px 40px ;
      margin: 20px;
      font-size:  18px;
      font-weight: bold;
      color: rgb(9, 14, 90);
    }
     
   
  }
  </style>
  `;
  bm.add(opts.name, {
    label: `
    <i class="fa fa-arrows-h"></i>
    <div class="gjs-block-label">
      ${opts.label}
    </div> 
    `,
    category: opts.category,
    content: `
    <div class="navbar">
 
    <!-- Navbar logo -->
    <div class="nav-header">
      <div class="nav-logo">
        <a href="#">
          <img src="logo.png" width="100px" alt="logo">
        </a>
      </div>
    </div>
     
    <!-- responsive navbar toggle button -->
    <input type="checkbox" id="nav-check">
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
   
    <!-- Navbar items -->
    <div class="nav-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Project</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
      <button class="loginBtn">Login</button>
    </div>
   
  </div>
     ${customStyle}`,
  });

};
