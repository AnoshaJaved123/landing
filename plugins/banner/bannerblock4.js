
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
    const styleform = editor.styleManager;
  
    const blogStyle = `<style>
  
    .hero {
        float: left;
        width: 100%;
        height: 480px;
        background-image: url("https://images.unsplash.com/photo-1672175263631-98dbe0e06370?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center top;
        overflow: hidden;
        position: relative;
      }
      
      .banner-tag {
        display: inline-block;
        vertical-align: top;
        position: absolute;
        left: 0;
        right: -1.2%;
        top: 50%;
        transform: rotate(-8.5deg) skew(-8.5deg, 0deg) translateY(-50%);
        transform-origin: left top;
        line-height: 1;
        font-family: Arial;
        font-weight: bold;
      }
      .banner-tag i {
        display: block;
        font-style: normal;
        background-color: #ee2364;
        color: #ffffff;
        padding: 8px 0 8px 20px;
        font-size: calc(12px + (25 - 12) * ((100vw - 320px) / (1200 - 320)));
      }
      
      .banner-tag p {
        display: inline-block;
        vertical-align: top;
        margin: 0;
        color: #00b1e5;
        font-size: calc(22px + (50 - 22) * ((100vw - 320px) / (1200 - 320)));
        text-transform: uppercase;
      }
      .banner-tag p span {
        display: block;
        width: 92%;
        margin-bottom: -1px;
        padding: 9px 16px 0;
        background-color: #ffffff;
      }
      .banner-tag p span:last-child {
        width: 100%;
        padding: 4px 16px 6px;
      }
      
      @media (min-width: 768px) {
        .hero {
          height: 820px;
        }
      
        .banner-tag {
          right: auto;
        }
      
        .banner-tag i {
          padding-right: 20px;
        }
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
      <section class="hero">
      <!-- tag starts -->
      <div class="banner-tag">
        <p>
          <span>The Biggest Cricket</span>
          <span>Extravaganza is Here!</span>
        </p>
        <i>Experience #T20WithPYT in Australia! Limited slots only!</i>
      </div>
      <!-- tag ends -->
    </section>
    
    </div>
    ${blogStyle}`,
    });
  
  };
  