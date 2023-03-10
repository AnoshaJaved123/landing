

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  
    const bm = editor.BlockManager;
  
    const heroStyle2 = `<style>
    body {
      color: #fff;
      font-family: 'Open Sans';
      background-color: #fff;
    }
    
    .banner {
        padding: 6em 0 8em 0;
        text-align: center;
      width: 100%;
      background-image: url(http://illusion.scene360.com/wp-content/uploads/2015/01/wes-anderson-12.jpg);
      background-repeat: no-repeat;
      background-size: cover;
      box-shadow: inset 0 0 0 2000px rgba(0,0,0,0.5);
    }
    
    .border {
        width: 60%;
        margin: 0 auto;
        height: 47px;
        border: 2px solid #fff;
      border-bottom: 0;
    }
    .banner h2 {
        margin: 0;
        font-size: 3em;
        color: #FFFFFF;
        text-align: center;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 0.5em;
        padding: 0.5em 0 0 0;
    }
    
    .banner p {
        color: #FFFFFF;
        font-size: 1em;
        font-weight: bold;
        margin: 1em 0 0 0;
        line-height: 2em;
        letter-spacing: 2px;
      padding: 0 0 2em 0;
    }
    
    .border-bottom {
        border-top: 0;
        border-bottom: 2px solid #fff !important;
    }
    </style>
    `;
    bm.add(opts.name, {
      label: `
      <img class='labelimg' src='/hero2.PNG'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
      category: opts.category,
      content: `<div>
    
  <div class="banner">
  <div class="border"> </div>
  <h2>The Company Limited</h2>
  <p>by Wes Anderson</span></p>
  <div class="border border-bottom"> </div>
</div>
      </div>${heroStyle2}`,
    });
  
  };
  