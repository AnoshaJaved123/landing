/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
 
    const cardStyle = `<style>
    
    .honeycomb {
      max-width: 1000px;
      margin: 70px auto;
      list-style: none;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      overflow: hidden;
      padding-bottom: 5.5%;
    }
    
    .honeycomb li {
      width: 25%;
      position: relative;
      visibility: hidden;
    }
    
    .honeycomb li:after {
      content: '';
      display: block;
      padding-bottom: 86.6%;
    }
    
    .honeycomb li:nth-child(7n+5) {
      margin-left: 12.5%;
    }
    
    .cell {
      position: absolute;
      width: 96%;
      margin: 0 2%;
      padding-bottom: 110.85%;
      transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);
      overflow: hidden;
    }
    
    .cell * {
      margin: 0;
      padding: 0;
      position: absolute;
      visibility: visible;
    }
    
    .honeycomb li a {
      display: block;
      width: 100%;
      height: 100%;
      margin: 0 auto;
      transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
      overflow: hidden;
    }
    
    .honeycomb li img {
      left: -100%;
      right: -100%;
      width: auto;
      height: 100%;
      margin: 0 auto;
      transform: rotate3d(0, 0, 0, 0deg);
    }
    
    .honeycomb li .title,
    .honeycomb li .text {
      width: 100%;
      padding: 5%;
      display: block;
      box-sizing: border-box;
      background-color: rgba(0, 0, 0, 0.7);
      color: #fff;
      text-align: center;
      transition: transform .2s ease-out, opacity .3s ease-out;
    }
    
    .honeycomb li .title {
      bottom: 50%;
      padding-top: 50%;
      font-size: 1.5em;
      z-index: 1;
      transform: translate3d(0, -100%, 0);
    }
    
    .honeycomb li .title:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 45%;
      width: 10%;
      border-bottom: 1px solid #fff;
    }
    
    .honeycomb li .text {
      top: 50%;
      padding-bottom: 50%;
      transform: translate3d(0, 100%, 0);
    }
    
    .honeycomb li a:hover .title,
    .honeycomb li a:focus .title,
    .honeycomb li a:hover .text,
    .honeycomb li a:focus .text {
      transform: translate3d(0, 0, 0);
    }
      </style>
      `;
    bm.add(opts.name, {
      label: `
      <img class='labelimg' src='/card1.PNG'/>
      <div class="gjs-block-label">
          ${opts.label}
        </div> 
        `,
      category: opts.category,
      content: `
      <div>
      <ul class="honeycomb">
      <li>
        <div class="cell">
          <a href="#">
            <img src="https://steyra.ru/images/img-1.jpg" alt="">
            <span class="title">TITLE</span>
            <span class="text">One text box</span>
          </a>
        </div>
      </li>
      <li>
        <div class="cell">
          <a href="#">
            <img src="https://steyra.ru/images/img-2.jpg" alt="">
            <span class="title">TITLE</span>
            <span class="text">One text box</span>
          </a>
        </div>
      </li>
      <li>
        <div class="cell">
          <a href="#">
            <img src="https://steyra.ru/images/img-3.jpg" alt="">
            <span class="title">TITLE</span>
            <span class="text">One text box</span>
          </a>
        </div>
      </li>
      <li>
        <div class="cell">
          <a href="#">
            <img src="https://steyra.ru/images/img-4.jpg" alt="">
            <span class="title">TITLE</span>
            <span class="text">One text box</span>
          </a>
        </div>
      </li>
      <li>
        <div class="cell">
          <a href="#">
            <img src="https://steyra.ru/images/img-5.jpg" alt="">
            <span class="title">TITLE</span>
            <span class="text">One text box</span>
          </a>
        </div>
      </li>
      <li>
        <div class="cell">
          <a href="#">
            <img src="https://steyra.ru/images/img-6.jpg" alt="">
            <span class="title">Honeycomb Gallery</span>
            <span class="text">by Steyra</span>
          </a>
        </div>
      </li>
      <li>
        <div class="cell">
          <a href="#">
            <img src="https://steyra.ru/images/img-7.jpg" alt="">
            <span class="title">TITLE</span>
            <span class="text">One text box</span>
          </a>
        </div>
      </li>
      <li>
        <div class="cell">
          <a href="#">
            <img src="https://steyra.ru/images/img-8.jpg" alt="">
            <span class="title">TITLE</span>
            <span class="text">One text box</span>
          </a>
        </div>
      </li>
      <li>
        <div class="cell">
          <a href="#">
            <img src="https://steyra.ru/images/img-9.jpg" alt="">
            <span class="title">TITLE</span>
            <span class="text">One text box</span>
          </a>
        </div>
      </li>
      <li>
        <div class="cell">
          <a href="#">
            <img src="https://steyra.ru/images/img-10.jpg" alt="">
            <span class="title">TITLE</span>
            <span class="text">One text box</span>
          </a>
        </div>
      </li>
      <li>
        <div class="cell">
          <a href="#">
            <img src="https://steyra.ru/images/img-11.jpg" alt="">
            <span class="title">TITLE</span>
            <span class="text">One text box</span>
          </a>
        </div>
      </li>
    </ul>
  
  
  </div>
  ${cardStyle}`,
    });
  };
  