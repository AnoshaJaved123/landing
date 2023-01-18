

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
 
    const customStyle = `<style>
    .hero {
      /* Sizing */
      width: 100vw;
      height: 100vh;
      
      /* Flexbox stuff */
      display: flex;
      justify-content: center;
      align-items: center;
      
      /* Text styles */
      text-align: center;
      
      /* Background styles */
      background-image: url(https://codetheweb.blog/assets/img/posts/full-image-hero/image.jpg);
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
  }
  .hero .btn {
      /* Positioning and sizing */
      display: block;
      width: 200px;
      
      /* Padding and margins */
      padding: 1em;
      margin-top: 50px;
      margin-left: auto;
      margin-right: auto;
      
      /* Text styles */
      color: black;
      text-decoration: none;
      font-size: 1.5em;
      
      /* Border styles */
      border: 3px solid black;
      border-radius: 20px;
  }
  .hero h1 {
      /* Text styles */
      font-size: 5em;
      
      /* Margins */
      margin-top: 0;
      margin-bottom: 0.5em;
  }
    </style>
    `;
    bm.add(opts.name, {
      label: `
      <img class='labelimg' src='/hero1.png'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
      category: opts.category,
      content: ` <section class="hero pt-80 pb-70">
      <div class="hero-inner">
          <h1>My awesome website</h1>
          <h2>Look at this website and bask in its amazing glory!</h2>
          <a href="#" class="btn">Go ahead...</a>
      </div>
  </section>
  <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec nibh molestie, efficitur leo sed, viverra nunc. Donec vehicula accumsan erat facilisis ullamcorper. Donec commodo quis dui nec placerat. Donec mi orci, scelerisque eget nisl ac, hendrerit condimentum odio. Nam dictum odio eget quam tempus, a mattis odio ornare. Nullam auctor libero ut libero suscipit, ut accumsan nunc condimentum. Donec ullamcorper maximus sapien quis egestas.</p>
  
      <p>Mauris viverra scelerisque lobortis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ultrices enim sit amet elit tincidunt maximus. Suspendisse vitae pellentesque lectus. Duis commodo leo suscipit augue mollis, non venenatis dolor ullamcorper. Duis tincidunt scelerisque lacus, vel vehicula leo consectetur vel. Duis posuere nisl non odio consequat ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      
      <p>Etiam a leo nec mi blandit euismod. Etiam fringilla odio vitae risus ornare, id bibendum velit consequat. Fusce posuere risus sollicitudin condimentum ultrices. Fusce gravida, purus eget laoreet mattis, velit sapien ultrices diam, id dapibus erat leo id quam. Maecenas quis risus convallis, placerat elit non, iaculis tortor. Nullam porttitor magna risus, quis bibendum metus tincidunt in. Etiam vel ligula ac risus mattis tincidunt vel sit amet ante. Morbi et viverra ligula. Ut ac dignissim nisi, condimentum imperdiet mauris. Pellentesque ut ipsum vel diam tristique faucibus eu et lectus. Maecenas posuere neque non lacus bibendum, sit amet pharetra justo semper. Sed mi risus, tempor sit amet ligula eget, varius pretium est. Sed a odio in orci accumsan pretium suscipit ut quam.</p>
  </div> ${customStyle}`,
    });
  
  };
  