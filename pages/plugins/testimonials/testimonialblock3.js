/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
    const testimonialStyle = `<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto');
  
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 40px;
      align-items: stretch;
      width: 100%;
      margin: auto 0;
    }
    
    @media (min-width: 576px) and (max-width: 767.98px) {
      .grid {
        width: 540px;
      }
    }
    
    @media (min-width: 768px) and (max-width: 991.98px) {
      .grid {
        width: 720px;
      }
    }
    
    @media (min-width: 992px)
    {
      .grid {
        width: 960px;
      }
    }
    
    @media (min-width: 1200px)
    {
      .grid {
        width: 1140px;
      }
    }
    
    .mycard {
      position: relative;
      height: auto;
      padding: 50px 20px;
      background: #ff0;
      border-radius: 10px;
      border: 4px solid #fff;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
      animation: animate 5s linear infinite;
      overflow: hidden;
    }
    
    .mycard::before {
      content: "";
      position: absolute;
      top: 0;
      left: -50%;
      width: 100%;
      height: 100%;
      transform: skewx(-5deg);
      background: rgba(255, 255, 255, 0.2);
    }
    
    .mycard:nth-child(1) {
      background: #3fc012 url(https://www.transparenttextures.com/patterns/basketball.png)
    }
    
    .mycard:nth-child(2) {
      background: #f1206a url(https://www.transparenttextures.com/patterns/basketball.png);
    }
    
    .mycard:nth-child(3) {
      background: #0f84d4 url(https://www.transparenttextures.com/patterns/basketball.png);
    }
    
    @keyframes animate
    {
      0%
      {
        background-position: 0 0;
      }
      100%
      {
        background-position: 0 -196px;
      }
    }
    
    .mycard .image {
      position: relative;
      width: 120px;
      height: 120px;
      margin: 20px auto;
      overflow: hidden;
      z-index: 1;
    }
    
    .mycard .image img {
      width: 100%;
      height: auto;
    }
    
    .mycard .text {
      position: relative;
      color: #fff;
      font-size: 18px;
      padding-top: 50px;
    }
    
    .mycard .text::before {
      content: "\f10d";
      position: absolute;
      top: -30px;
      left: 50%;
      font-family: FontAwesome;
      font-size: 60px;
      color: rgba(255, 255, 255, 0.5);
      transform: translatex(-50%);
    }
    
    .mycard .details {
      text-align: center;
    }
    
    .mycard .details h2 {
      position: relative;
      color: #fff;
      margin: 0;
      padding: 0;
      font-size: 24px;
      z-index: 1;
    }
    
    .mycard .details h2 span {
      font-size: 20px;
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
     <div>
     <div class="grid">
  <div class="mycard text-center">
    <div class="content">
      <div class="text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
    </div>
    <div class="author">
      <div class="image">
        <img src="http://icons.iconarchive.com/icons/hopstarter/face-avatars/128/Male-Face-D5-icon.png" class="img-fluid">
      </div>
      <div class="details">
        <h2>Someone Famous<br><span>Website Designer</span></h2>
      </div>
    </div>
  </div>
  <div class="mycard text-center">
    <div class="content">
      <div class="text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
    </div>
    <div class="author">
      <div class="image">
        <img src="http://icons.iconarchive.com/icons/hopstarter/face-avatars/128/Female-Face-FE-5-blonde-icon.png" class="img-fluid">
      </div>
      <div class="details">
        <h2>Someone Famous<br><span>Website Designer</span></h2>
      </div>
    </div>
  </div>        
  <div class="mycard text-center">
    <div class="content">
      <div class="text">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
    </div>
    <div class="author">
      <div class="image">
        <img src="http://icons.iconarchive.com/icons/hopstarter/face-avatars/128/Female-Face-FI-1-icon.png" class="img-fluid">
      </div>
      <div class="details">
        <h2>Someone Famous<br><span>Website Designer</span></h2>
      </div>
    </div>
  </div> 
</div> 

     </div>
${testimonialStyle}`,
    });
  };
  