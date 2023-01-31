
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
    const styleform = editor.styleManager;
  
    const blogStyle = `<style>
    @import url('https://fonts.googleapis.com/css?family=Rokkitt:300,700');

    a{
      text-decoration: none;
    }
    
    .banner{
      display: flex;
      align-items: center;
      
      margin: 100px 50px;  
      padding: 1.25em 2em;
      border-radius: 5px;
     
      color: #fff;
      font-family: "Rokkitt";
    }
    .banner--gradient-bg {
      background: linear-gradient(-30deg, #4b8ee5E5, #4b8ee5E5 45%, #4b8ee5 45%);
    }
    .banner__logo-wrapper{
      padding: 0 0.5em;
      margin-right: 20px;
    }
    .banner__title{
      text-transform: uppercase;
      font-size: .9em;
      font-weight: 700;
      letter-spacing: 3px;
      margin-bottom: 1em;
    }
    .banner__text{
      letter-spacing: 1px;
      font-weight: 300;
      line-height: 1.4;
    }
    .banner__cta{
      display: inline;
      padding: 10px 14px;
      margin-left: 1em;
      border-radius: 2px;
        
      font-size: 0.75rem;
      color: #4b8ee5;
      white-space: nowrap;
      text-transform: uppercase;
      
      background: #fff;
      box-shadow: 0 6px 13px 0 rgba(0,0,0,.15);
    }
    
    .fi-codepen{
      font-size: 2rem;
    }
    </style>
    `;
    bm.add(opts.name, {
      label: `
      <img class='labelimg' src='/foot4.png'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
      category: opts.category,
      content: `
      <div>
      <a href="#" class="banner banner--gradient-bg">
      <div class="banner__logo-wrapper">
        <i class="fi fi-codepen"></i>
      </div>
      <div>
        <div class="banner__title">Title</div>
        <div class="banner__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laboriosam? Accusantium aperiam aliquid assumenda fugit ea, quis veniam atque alias!</div>
      </div>
      <div class="banner__cta">
        Try Button!
      </div>
    </a>
    
    </div>
    ${blogStyle}`,
    });
  
  };
  