
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
 
    const gallaryStyle2 = `<style>
    .gallery-image {
      padding: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .gallery-image img {
      height: 250px;
      width: 350px;
      transform: scale(1.0);
      transition: transform 0.4s ease;
    }
    
    .img-box {
      box-sizing: content-box;
      margin: 10px;
      height: 250px;
      width: 350px;
      overflow: hidden;
      display: inline-block;
      color: white;
      position: relative;
      background-color: white;
    }
    
    .caption {
      position: absolute;
      bottom: 5px;
      left: 20px;
      opacity: 0.0;
      transition: transform 0.3s ease, opacity 0.3s ease;
    }
    
    .transparent-box {
      height: 250px;
      width: 350px;
      background-color:rgba(0, 0, 0, 0);
      position: absolute;
      top: 0;
      left: 0;
      transition: background-color 0.3s ease;
    }
    
    .img-box:hover img { 
      transform: scale(1.1);
    }
    
    .img-box:hover .transparent-box {
      background-color:rgba(0, 0, 0, 0.5);
    }
    
    .img-box:hover .caption {
      transform: translateY(-20px);
      opacity: 1.0;
    }
    
    .img-box:hover {
      cursor: pointer;
    }
    
    .caption > p:nth-child(2) {
      font-size: 0.8em;
    }
    
    .opacity-low {
      opacity: 0.5;
    }
    
 </style>
    `;
    bm.add(opts.name, {
      label: `
      <img class='labelimg' src='/gallar4.png'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
      category: opts.category,
      content: `
      <div>
      <div class="gallery-image">
    <div class="img-box">
      <img src="https://picsum.photos/350/250?image=444" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Library</p>
          <p class="opacity-low">Architect Design</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="https://picsum.photos/350/250/?image=232" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Night Sky</p>
          <p class="opacity-low">Cinematic</p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src="https://picsum.photos/350/250/?image=431" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Tea Talk</p>
          <p class="opacity-low">Composite</p>
        </div>
      </div>
    </div>
    <div class="img-box">
      <img src="https://picsum.photos/350/250?image=474" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Road</p>
          <p class="opacity-low">Landscape</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="https://picsum.photos/350/250?image=344" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Sea</p>
          <p class="opacity-low">Cityscape</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="https://picsum.photos/350/250?image=494" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Vintage</p>
          <p class="opacity-low">Cinematic</p>
        </div>
      </div> 
    </div>
  </div>
      </div>
  ${gallaryStyle2}`,
    });
  
  };
  