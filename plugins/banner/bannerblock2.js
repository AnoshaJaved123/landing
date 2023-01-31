
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
    const styleform = editor.styleManager;
  
    const blogStyle = `<style>
    .banner-section {
      background: #0012ff url(http://www.webcoderskull.com/img/graphic-abstract.jpg) no-repeat top right fixed;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      min-height: 640px;
      position: relative;
      background-blend-mode: multiply;
  }
  .content-inner {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 70%;     
      transform: translate(-50%, -50%);
    text-align:center;
  }
  .banner-section .content-inner .hero-text{
      color: white;
      font-size: 4rem;
      padding: 0 .5em;
      line-height: 1.25em;
      font-family: "freight-big-pro", sans-serif;
      display: block;
       font-weight: 300;   
  }
  .banner-section .content-inner p{
     color:#fff;
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
      <section>
      <div class="banner-section">
       <div class="container">
          <div class="content-inner">
          <h1 class="hero-text">Freelance UX / UI Designer</h1>
           
              <p ><span>Design</span> is everything, for everything is designed</p>
            </div>
          
        </div>
      </div>
    </section>
    </a>
    
    </div>
    ${blogStyle}`,
    });
  
  };
  