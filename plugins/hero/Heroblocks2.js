

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
    const style2 = editor.styleManager;
  
    const customStyle = `<style>
   
    
    .header{
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      max-height: 600px;
    }
    
    .header .hero { 
      display: grid;
      grid-template-columns: 4fr 1fr 4fr; 
      grid-template-rows: 1fr 6fr 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      max-width: 1000px;
      width: 90%;
      margin: 0 auto;
    }
    
    /* LEFT PART */
    .left { 
      grid-area: 1 / 1 / 3 / 3;
      border: 10px solid #F1C50E;
      padding: 30px;
      background-color: #FFFFFF;
      position: relative;
    }
    .left h1{
      text-transform: uppercase;
      font-size: clamp(20px, 5vw ,40px);
      font-weight: 700;
      white-space: nowrap;
    }
    .left h1 span{
      color: #F1C50E;
    }
    .left p{
      margin-top: 25px;
      margin-bottom: 50px;
      font-size: 16px;
    }
    .left a{
      padding: 10px;
      text-transform: uppercase;
      text-decoration: none;
      border: 2px solid #F1C50E;
      color: #000;
      font-weight: 700;
    }
    .left a:hover{
      color: #FFFFFF;
      background-color: #F1C50E;
    }
    
    
    /* RIGHT PART */
    .right { 
      grid-area: 2 / 2 / 4 / 4;
      border: 10px solid #F1C50E;
      z-index: -1;
      position: relative;
    }
    
    .right img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    /* LEFT AND RIGHT BANDS */
    .left::before,
    .right::before{
      content: '';
      position: relative;
      top: 50%;
      height: 50%;
      width: 50vw;
      background: #F1C50E;
    }
    .left::before{
      left: 0;
      transform: translateY(-50%) translateX(-100%);
    }
    .right::before{
      right: 0;
      transform: translateY(-50%) translateX(100%); 
    }
    
    @media screen and (max-width: 450px){
      header .hero { 
        grid-template-rows: 6fr 1fr 6fr;
      }
      .left{
        grid-area: 1 / 1 / 3 / 4;
      }
      .right{
        grid-area: 2 / 1 / 4 / 4
      }
    }
    
    
    
    Resources
    
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
      <div class="header">
      <section class="hero">
        <div class="left">
          <h1>The center <br>for home <br><span>education</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, aliquid.</p>
          <a href="#">Learn more</a>
        </div>
        <div class="right">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="">
        </div>
      </section>
    </div>${customStyle}`,
    });
  
  };
  