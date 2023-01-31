
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
    const styleform = editor.styleManager;
  
    const blogStyle = `<style>
    .container {
 
      color: white;
      height: 100vh;
      background: rgb(253, 45, 224);
      background: linear-gradient(
        90deg,
        rgba(253, 45, 224, 1) 10%,
        rgba(34, 193, 195, 1) 90%
      );
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .main {
      overflow:auto;
      height: auto;
      width: 65vw;
      border-radius: 12px;
      padding: 5px;
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.18);
      display: flex;
      align-items: center;
      text-align: left;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    .col1 {
      border-radius: 12px;
      height: auto;
      width: 250px;
    }
    .col2 {
      border-radius: 12px;
      height: auto;
      width: 250px;
    }
    .model {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
    }
    .name{
       font-family: Open Sans;
     }
    .info{
      font-family:"Secular One"
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
      <div class="container">
      <div class="main">
        <div class="col1"><img src="https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="model" alt="can't load image"></img></div>
        <div class="col2">
          <h2 class="name">John Wick</h2>
          <h4 class="name"> Web Developer</h4><br>
          <p class="info">I have prior knowledge about front-end development which includes (html, css, javascript, react, tailwind css, material ui and more) for collaboration or project development get in touch with me.</p>
          <span><a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg></a></span>
          <span><a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="4" />
              <circle cx="12" cy="12" r="3" />
              <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
            </svg></a></span>
          <span><a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-gmail" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M16 20h3a1 1 0 0 0 1 -1v-14a1 1 0 0 0 -1 -1h-3v16z" />
                <path d="M5 20h3v-16h-3a1 1 0 0 0 -1 1v14a1 1 0 0 0 1 1z" />
                <path d="M16 4l-4 4l-4 -4" />
                <path d="M4 6.5l8 7.5l8 -7.5" />
              </svg></a></span>
          <span><a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-whatsapp" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
    <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
  </svg></a></span>
  
        </div>
      </div>
    </div>
    ${blogStyle}`,
    });
  
  };
  