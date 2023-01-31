
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
    const styleform = editor.styleManager;
  
    const blogStyle = `<style>
  
     
    .banner{
        position: relative;
        width: 100%;
        height: 100vh;
        background: url(https://cloud-banner.netlify.app/img/bg.jpg);
        background-size: cover;
        background-position: bottom;
    }
    
    .banner .clouds{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
    .banner .clouds img{
        position: absolute;
        bottom: 0;
        max-width: 100%;
        animation: animate calc(8s * var(--i)) linear infinite;
    }
    
    @keyframes animate{
        0%{
            transform: translateX(-100%);
        }
        100%{
            transform: translateX(100%);
        }
    }
    
    section{
        position: relative;
        padding: 75px 100px;
        margin-top: 25px;
    }
    
    section h2{
        font-family: 'Poppins', sans-serif;
        font-size: 2.5em;
        margin-bottom: 20px;
    }
    
    section p{
        font-family: 'Poppins', sans-serif;
        margin-top: 25px;
    }
    
    .banner .title{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 90vh;
        font-weight: 800;
        letter-spacing: 10px;
        text-transform: uppercase;
        word-spacing: 15px;
        color: #fff;
        opacity: .65;
    }
    
    @media screen and (min-width: 500px){
      .banner .title{
        font-size: 8vw;
      }
    }
    
    @media screen and (max-width: 500px){
      .banner .title{
        font-size: 10vw;
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
      <div class="banner">
      <center><h2 class="title">wat phra kaew</h2></center>
      <div class="clouds">
          <img src="https://cloud-banner.netlify.app/img/cloud1.png" style="--i:1;">
          <img src="https://cloud-banner.netlify.app/img/cloud2.png" style="--i:2;">
          <img src="https://cloud-banner.netlify.app/img/cloud3.png" style="--i:3;">
          <img src="https://cloud-banner.netlify.app/img/cloud4.png" style="--i:4;">
          <img src="https://cloud-banner.netlify.app/img/cloud5.png" style="--i:5;">
      </div>
  </div>
  <section>
      <h2>CSS Cloud Banner Animation Effects</h2>
      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nobis, architecto alias beatae quidem id ducimus
          deserunt laudantium non totam, iusto eaque labore odio commodi mollitia, in molestiae possimus! Vel itaque
          animi nesciunt repellendus, ullam voluptatum esse quam inventore reiciendis doloribus id temporibus ab
          adipisci! Laborum expedita, quam, mollitia, veritatis animi nam reiciendis quis beatae eius neque quia magni
          repellat vero qui. Ab amet cum quasi vitae aliquam eveniet neque, obcaecati iste voluptate, facere rerum
          ducimus earum hic natus. Natus dolor praesentium culpa id autem, tempora explicabo ipsum nam a laborum
          facere soluta nihil incidunt corrupti, alias quod. Eligendi libero ratione dolores nostrum alias sint
          dolorem fugiat quae quas iusto eum blanditiis mollitia molestias nobis quis officia excepturi exercitationem
          magnam totam, sunt iste? Ea cumque libero nobis nisi doloremque quam ab animi recusandae nam consectetur,
          rem blanditiis quidem labore suscipit consequatur asperiores provident ipsa. Corporis doloribus
          reprehenderit hic veritatis eum! Natus?</p>
      <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Nobis, architecto alias beatae quidem id ducimus
          deserunt laudantium non totam, iusto eaque labore odio commodi mollitia, in molestiae possimus! Vel itaque
          animi nesciunt repellendus, ullam voluptatum esse quam inventore reiciendis doloribus id temporibus ab
          adipisci! Laborum expedita, quam, mollitia, veritatis animi nam reiciendis quis beatae eius neque quia magni
          repellat vero qui. Ab amet cum quasi vitae aliquam eveniet neque, obcaecati iste voluptate, facere rerum
          ducimus earum hic natus. Natus dolor praesentium culpa id autem, tempora explicabo ipsum nam a laborum
          facere soluta nihil incidunt corrupti, alias quod. Eligendi libero ratione dolores nostrum alias sint
          dolorem fugiat quae quas iusto eum blanditiis mollitia molestias nobis quis officia excepturi exercitationem
          magnam totam, sunt iste? Ea cumque libero nobis nisi doloremque quam ab animi recusandae nam consectetur,
          rem blanditiis quidem labore suscipit consequatur asperiores provident ipsa. Corporis doloribus
          reprehenderit hic veritatis eum! Natus?</p>
  </section>
    
    </div>
    ${blogStyle}`,
    });
  
  };
  