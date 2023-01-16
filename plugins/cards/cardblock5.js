/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  // const dc = editor.DomComponents;
  // const defaultType = dc.getType("default");
  // const defaultView = defaultType.view;

  const bm = editor.BlockManager;
  const styleform = editor.styleManager;

  const contactStyle = `<style>
  *
   
  .containercard2
  {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 0;
  }
  
  .containercard2 .box
  {
    position: relative;
    width: 320px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 30px;
    transition: 0.5s;
  }
  
  .containercard2 .box::before
  {
    content:' ';
    position: absolute;
    top: 0;
    left: 50px;
    width: 50%;
    height: 100%;
    text-decoration: none;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
  }
  
  .containercard2 .box::after
  {
    content:'';
    position: absolute;
    top: 0;
    left: 50;
    width: 50%;
    height: 100%;
    background: #fff;
    border-radius: 8px;
    transform: skewX(15deg);
    transition: 0.5s;
    filter: blur(30px);
  }
  
  .containercard2 .box:hover:before,
  .containercard2 .box:hover:after
  {
    transform: skewX(0deg);
    left: 20px;
    width: calc(100% - 90px);
    
  }
  
  .containercard2 .box:nth-child(1):before,
  .containercard2 .box:nth-child(1):after
  {
    background: linear-gradient(315deg, #ffbc00, #ff0058)
  }
  
  .containercard2 .box:nth-child(2):before,
  .containercard2 .box:nth-child(2):after
  {
    background: linear-gradient(315deg, #03a9f4, #ff0058)
  }
  
  .containercard2 .box:nth-child(3):before,
  .containercard2 .box:nth-child(3):after
  {
    background: linear-gradient(315deg, #4dff03, #00d0ff)
  }
  
  .containercard2 .box span
  {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    pointer-events: none;
  }
  
  .containercard2 .box span::before
  {
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: 0.1s;  
    animation: animate 2s ease-in-out infinite;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08)
  }
  
  .containercard2 .box:hover span::before
  {
    top: -50px;
    left: 50px;
    width: 100px;
    height: 100px;
    opacity: 1;
  }
  
  .containercard2 .box span::after
  {
    content:'';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    opacity: 0;
    transition: 0.5s;
    animation: animate 2s ease-in-out infinite;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    animation-delay: -1s;
  }
  
  .containercard2 .box:hover span:after
  {
    bottom: -50px;
    right: 50px;
    width: 100px;
    height: 100px;
    opacity: 1;
  }
  
  @keyframes animate
  {
    0%, 100%
    {
      transform: translateY(10px);
    }
    
    50%
    {
      transform: translate(-10px);
    }
  }
  
  .containercard2 .box .content
  {
    position: relative;
    left: 0;
    padding: 20px 40px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    z-index: 1;
    transform: 0.5s;
    color: #fff;
  }
  
  .containercard2 .box:hover .content
  {
    left: -25px;
    padding: 60px 40px;
  }
  
  .containercard2 .box .content h2
  {
    font-size: 2em;
    color: #fff;
    margin-bottom: 10px;
  }
  
  .containercard2 .box .content p
  {
    font-size: 1.1em;
    margin-bottom: 10px;
    line-height: 1.4em;
  }
  
  .containercard2 .box .content a
  {
    display: inline-block;
    font-size: 1.1em;
    color: #111;
    background: #fff;
    padding: 10px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 700;
    margin-top: 5px;
  }
  
  .containercard2 .box .content a:hover
  {
    background: #ffcf4d;
    border: 1px solid rgba(255, 0, 88, 0.4);
    box-shadow: 0 1px 15px rgba(1, 1, 1, 0.2);
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
    <div class="containercard2">
    <div class="box">
      <span></span>
      <div class="content">
        <h2>Card one</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#">Read More</a>
      </div>
    </div>
    <div class="box">
      <span></span>
      <div class="content">
        <h2>Card two</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#">Read More</a>
      </div>
    </div>
    <div class="box">
      <span></span>
      <div class="content">
        <h2>Card Three</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div>
    ${contactStyle}`,
  });
};
