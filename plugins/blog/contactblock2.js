
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
 
    const blogStyle2 = `<style>
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300');
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:600');
    *{
        margin: 0
    }
    body{
        background: url(http://11.madbet24.myjino.ru/img/fon.jpg) no-repeat;
        background-size: cover;
      font-family: 'Josefin Sans', sans-serif;
    }
    input:active, input:focus {
      outline: none;
    }
    input{
        border: 1px solid #5EB4CB;
        box-sizing: border-box;
        border-radius: 20px;
        font-weight: 300;
        font-size: 18px;
        color: #9C9C9C;
        font-family: inherit;
        padding:13px 25px;
        background: transparent;
        margin-bottom: 20px;  
        width:350px;
        max-width: 100%;    
    }
    
    ul{
        list-style: none;
        padding: 0
    }
    
    ul li{
        display: inline-block;
        padding-right: 10px;     
    }
    .container {
        width: 100%;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;
    }
    
    @media (min-width: 576px){
    .container {
        max-width: 540px;
    }
    }
    
    @media (min-width: 768px){
    .container {
        max-width: 720px;
    }
    }
    
    @media (min-width: 992px){
    .container {
        max-width: 960px;
    }
    }
    
    @media (min-width: 1200px){
    .container {
        max-width: 1140px;
    }
    }
    
    
    
    
    .wrapper{
        margin: 125px 0;
    
    }
    
    .form{
        display: flex;
        text-align: center;
        justify-content: center; 
    }
    
    .left-col{
        width: 40%;
        padding: 135px 30px 0 30px;
        background: linear-gradient(to bottom, #69B9C4, #91C8EB);
    
    }
    
    
    
    .left-col h2{
        color:#fff;
        font-size:32px;
        line-height: 37px;
    }
    
    .left-col img.img1{
        margin-bottom: 10px;
    }
    
    .left-col .bull{
        margin: 100px 0 0;
    }
    .left-col .bull p{
        font-size: 20px;
        color: #fff;
    }
    
    .left-col .bull img.img2{
        margin:25px 0;
    }
    
    .left-col .soc{
        margin: 100px 0 0;
    }
    .left-col .soc a img{
        transition: 0.5s;   
    }
    .left-col .soc a img:hover{
        transition: 0.5s;
        transform: scale(1.3)
    }
    
    .left-col .soc p{
        color: #fff;
        font-size: 18px;
        font-weight: 300;
    }
    
    .left-col .soc ul{
        padding:20px 0 50px;
    }
    
    
    .right-col{
        width: 60%;
        padding: 135px 30px 0 30px;    
        background: rgba(255, 255, 255, 0.7);
      
    }
    
    .right-col h2{
        margin-bottom: 70px;
        font-size: 30px;
        color: #585858;
        font-weight: 600;    
    }
    
    .right-col button{
        background: linear-gradient(299.5deg, #6DBAC8 35.53%, #8FC7E9 109.8%);
        border-radius: 18px;
        font-weight: 600;
        font-size: 20px;
        color: #FFFFFF;
        padding: 10px 20px;
        margin-top: 20px;
        border:none;
        cursor: pointer;
    }
    .right-col button:hover{
        background: linear-gradient(299.5deg, #8FC7E9 35.53%, #6DBAC8 109.8%);
    }
    @media screen and (max-width: 992px) {
        .form{
            display: block;
        }
        .left-col img.img1{
            display: none
        }
    
        .right-col, .left-col{
            width:100%;
            padding: 40px 0;
        }
    
    }
    </style>
    `;
    bm.add(opts.name, {
      label: `
      <img class='labelimg' src='/contact2.png'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
      category: opts.category,
      content: `
      <div class="container">
      <div class="wrapper">
        <div class="form">
          <div class="left-col">
            <img src="img/ellipse1.png" class="img1" alt="">
            <h2>Leave us your email and get a BuJo Starter Kit</h2>
          </div>
          <div class="right-col">
            <h2>Oh yes, you will definetely get it</h2>
          <form>
                    <div class="result"></div>
            <div class="form-group">
              <input id="name" type="text" placeholder="enter your name">
            </div>
            
            <div class="form-group">
              <input id="email" type="email" placeholder="enter your email">
            </div>
            
            <div class="form-group">
              <input id="message" type="text" placeholder="enter your phone number">
            </div>
            <button id="submit" type="submit">Send me my kit</button>
          </form>
          </div>
        </div>
      </div>
    </div>
      ${blogStyle2}`,
    });
  
  };
  