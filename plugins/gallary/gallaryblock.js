
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
 
    const gallaryStyle = `<style>
  .gallary{
    padding: 2rem 10px;

  }
  
  .main-nav {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
    width: 600px;
    height: 150px;
  }
  
  .main-nav li {
    list-style: none;
    position: absolute;
    width: 200px;
    height: 200px;
    background: #000;
    transform: rotate(45deg);
    transition: 0.5s;
    margin: -100px;
    overflow: hidden;
    opacity: 0.5;
  }
  
  .main-nav li:hover {
    opacity: 1;
  }
  
  .main-nav li.item1 {
    top: 0;
    left: 0;
  }
  
  .main-nav li.item2 {
    bottom: 0;
    left: 25%;
  }
  
  .main-nav li.item3 {
    top: 0;
    left: 50%;
  }
  
  .main-nav li.item4 {
    bottom: 0;
    left: 75%;
  }
  
  .main-nav li.item5 {
    top: 0;
    left: 100%;
  }
  
  .main-nav li .bg {
    width: 100%;
    height: 100%;
    transform: scale(1.1);
  }
  
  .main-nav li.item1 .bg {
    background: url(https://imgur.com/ir9l1IJ.jpg);
    background-size: cover;
    background-position: center;
  }
  
  .main-nav li.item2 .bg {
    background: url(https://imgur.com/fwe8Z9Q.jpg);
    background-size: cover;
    background-position: center;
  }
  
  .main-nav li.item3 .bg {
    background: url(https://imgur.com/kSoRoDk.jpg);
    background-size: cover;
    background-position: center;
  }
  
  .main-nav li.item4 .bg {
    background: url(https://imgur.com/sz1BSkB.jpg);
    background-size: cover;
    background-position: center;
  }
  
  .main-nav li.item5 .bg {
    background: url(https://imgur.com/ara0hoV.jpg);
    background-size: cover;
    background-position: center;
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
      <section class='gallary'>
      <ul class="main-nav">
      <li class="item1">
        <img class="bg"/>
      </li>
      <li class="item2">
        <img class="bg"/>
      </li>
      <li class="item3">
        <img class="bg"/>
      </li>
      <li class="item4">
        <img class="bg"/>
      </li>
      <li class="item5">
        <img class="bg"/>
      </li>
    </ul></section>
    </div>
    ${gallaryStyle}`,
    });
  
  };
  