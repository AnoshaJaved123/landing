
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
 
    const gallaryStyle3 = `<style>
    .container > div {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      background-color: #f1f2f9;
      direction: rtl;
  }
  
  .slider {
      width: 1000px;
      margin: 200px;
  
  }
  .container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px,200px));
      grid-template-rows: 200px 200px;
      gap: 15px;
      grid-auto-flow: dense;
  }
  .overlay {
      position: absolute;
      z-index: 100;
      width: 100%;
      min-height: 100px;
      max-height: auto;
      bottom: 0;
      border-radius: 0 0 10px 10px;
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.87));
  }
  .overlay h3 {
      padding: 20px;
      padding-bottom: 0;
      color: #fff;
  }
  .box-image {
      object-fit: cover;
      border-radius: 10px;
      height: 100%;
      width: 100%;
  }
  
  .first {
      position: relative;
      grid: 5/3;
      grid-row: 1/-1;
      grid-column: 1/3;
  }
  .second {
      grid-column: -1/3;
  }
  .third {
      grid-row: 2/2;
  }
  .fourth {
      grid-row: 2/2;
  }
    
 </style>
    `;
    bm.add(opts.name, {
      label: `
      <img class='labelimg' src='/gallar3.png'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
      category: opts.category,
      content: `
      <div>
      <div class="slider">
      <div class="container">
              <div class="first">
                  <img class="box-image" src="https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg" alt="">
                  <div class="overlay">
                      <h3>Mini Gallary</h3>
                  </div>
              </div>
              <div class="second">
                  <img class="box-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4z5LOIe5gB221rpZiHtt2xNU-zRxPHB3ckjoNUWTDvKxAH7a5mEzyESPJFA_VGwJRGys&usqp=CAU" alt="">
              </div>
              <div class="third">
                  <img class="box-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNPeSoQtGb2GeNOiMiu0I2dHzWdNGzG6ym8iK15C2SKHbyUM_c4xcFJNAoJLzH0n-f2w&usqp=CAU" alt="">
  
              </div>
              <div class="fourth">
                  <img class="box-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSgZV9SETEzHAMucUD8QRp-vv6VaXyXUo5wUH2NXC5tF-CKR5icasVhd2JvP4eN8b4pk&usqp=CAU" alt="">
              </div>
          </div>
      </div>
      </div>
  ${gallaryStyle3}`,
    });
  
  };
  