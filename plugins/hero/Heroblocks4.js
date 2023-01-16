

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  
    const bm = editor.BlockManager;
  
    const heroStyle2 = `<style>
    .banner {
      width: 100%;
      background:url(http://s6.favim.com/orig/150112/background-cold-gif-nature-Favim.com-2380226.gif);
      /*https://i0.wp.com/media.giphy.com/media/5ERaOy5fQEIAU/giphy.gif*/
      background-size: cover;
      font-size: 80px;
      color: #fff;
      text-align: center;
      padding: 40px 15px;
    }
    
    .big-text {
      font-size: 130px;
      font-weight:800;
      animation-delay: 1s;
    }
    .banner a {
      display: inline-block;
      background: #fff;
      color: #36465d;
      text-transform: uppercase;
      padding: 15px;
      text-decoration: none;
      font-size: 40px;
      transition: .3s;
    }
    .banner a:hover {
      background: #333;
      color: #fff;
      padding: 15px 20px;
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
      content: ` <div>
      <div class="banner animated tada">
      <div class=" big-text animated tada">95% OFF</div>
       <div>the entire store</div>
       <a href="#">Go to store</a>
     </div>
      </div>${heroStyle2}`,
    });
  
  };
  