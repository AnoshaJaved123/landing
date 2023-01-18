/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  // const dc = editor.DomComponents;
  // const defaultType = dc.getType("default");
  // const defaultView = defaultType.view;

  const bm = editor.BlockManager;
  const customStyle = `<style>
    li{
    list-style: none;
  }
  .content{
    width: 100vw; height: 10vh;
    position: fixed;
    display: flex;
    align-items: center;
    background-color: black;
    z-index: 100;
    justify-content: space-evenly;
    color: white;
    box-shadow: 0 0 10px rgba(0,0,0,0.9);
  }
  .navcomp{
    letter-spacing: 5px;
    font-size: 40px;
    cursor: pointer;
  }
  .navigation ul{
    display: flex;
    justify-content: space-evenly;
    width: 40vw;
  }
  a{
    color: white;
    font-size: 20px;
    transition: 0.5s linear;
  }
  a:hover{
    letter-spacing: 2px;
  }
  
  @media only screen and (max-width: 700px){
    .content{
      flex-direction: column;
      height: auto;
    }
    .navigation ul{
      width: 100vw;
    }
  }
  
  </style>
  `;
  bm.add(opts.name, {
    label: `
    <img class='labelimg' src='/navbar5.PNG'/>
    <div class="gjs-block-label">
      ${opts.label}
    </div> 
    `,
    category: opts.category,
    content: `
    <div class="content">
    <h1 class="navcomp">COMPANY</h1>
    <div class="navigation">
      <ul class="navul">
        <li><a href="#">HOME</a></li>
        <li><a href="#">WORK</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
    </div>
  </div>
     ${customStyle}`,
  });

};
