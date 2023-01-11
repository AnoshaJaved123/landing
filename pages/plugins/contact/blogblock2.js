
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
 
    const blogStyle2 = `<style>
    @import url('https://fonts.googleapis.com/css?family=Heebo:400,700|Open+Sans:400,700');

    :root {
      --color: #3c3163;
      --transition-time: 0.5s;
    }
    
    * {
      box-sizing: border-box;
    }
    
    body {
      margin: 0;
      min-height: 100vh;
      font-family: 'Open Sans';
      background: #fafafa;
    }
    
    a {
      color: inherit;
    }
    
    .cards-wrapper {
      display: grid;
      justify-content: center;
      align-items: center;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 4rem;
      padding: 4rem;
      margin: 0 auto;
      width: max-content;
    }
    
    .card {
      font-family: 'Heebo';
      --bg-filter-opacity: 0.5;
      background-image: linear-gradient(rgba(0,0,0,var(--bg-filter-opacity)),rgba(0,0,0,var(--bg-filter-opacity))), var(--bg-img);
      height: 20em;
      width: 15em;
      font-size: 1.5em;
      color: white;
      border-radius: 1em;
      padding: 1em;
      /*margin: 2em;*/
      display: flex;
      align-items: flex-end;
      background-size: cover;
      background-position: center;
      box-shadow: 0 0 5em -1em black;
      transition: all, var(--transition-time);
      position: relative;
      overflow: hidden;
      border: 10px solid #ccc;
      text-decoration: none;
    }
    
    .card:hover {
      transform: rotate(0);
    }
    
    .card h1 {
      margin: 0;
      font-size: 1.5em;
      line-height: 1.2em;
    }
    
    .card p {
      font-size: 0.75em;
      font-family: 'Open Sans';
      margin-top: 0.5em;
      line-height: 2em;
    }
    
    .card .tags {
      display: flex;
    }
    
    .card .tags .tag {
      font-size: 0.75em;
      background: rgba(255,255,255,0.5);
      border-radius: 0.3rem;
      padding: 0 0.5em;
      margin-right: 0.5em;
      line-height: 1.5em;
      transition: all, var(--transition-time);
    }
    
    .card:hover .tags .tag {
      background: var(--color);
      color: white;
    }
    
    .card .date {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 0.75em;
      padding: 1em;
      line-height: 1em;
      opacity: .8;
    }
    
    .card:before, .card:after {
      content: '';
      transform: scale(0);
      transform-origin: top left;
      border-radius: 50%;
      position: absolute;
      left: -50%;
      top: -50%;
      z-index: -5;
      transition: all, var(--transition-time);
      transition-timing-function: ease-in-out;
    }
    
    .card:before {
      background: #ddd;
      width: 250%;
      height: 250%;
    }
    
    .card:after {
      background: white;
      width: 200%;
      height: 200%;
    }
    
    .card:hover {
      color: var(--color);
    }
    
    .card:hover:before, .card:hover:after {
      transform: scale(1);
    }
    
    .card-grid-space .num {
      font-size: 3em;
      margin-bottom: 1.2rem;
      margin-left: 1rem;
    }
    
   
    
    /* MEDIA QUERIES */
    @media screen and (max-width: 1285px) {
      .cards-wrapper {
        grid-template-columns: 1fr 1fr;
      }
    }
    
    @media screen and (max-width: 900px) {
      .cards-wrapper {
        grid-template-columns: 1fr;
      }
    
      .card-grid-space .num {
        /margin-left: 0;
        /text-align: center;
      }
    }
    
    @media screen and (max-width: 500px) {
      .cards-wrapper {
        padding: 4rem 2rem;
      }
      .card {
        max-width: calc(100vw - 4rem);
      }
    }
    

     
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
     
<section class="cards-wrapper">
  <div class="card-grid-space">
    <div class="num">01</div>
    <a class="card"  style="--bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/html-syntax/cover.jpg)">
      <div>
        <h1>HTML Syntax</h1>
        <p>The syntax of a language is how it works. How to actually write it. Learn HTML syntax…</p>
        <div class="date">6 Oct 2017</div>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  <div class="card-grid-space">
    <div class="num">02</div>
    <a class="card"  style="--bg-img: url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg')">
      <div>
        <h1>Basic types of HTML tags</h1>
        <p>Learn about some of the most common HTML tags…</p>
        <div class="date">9 Oct 2017</div>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  <div class="card-grid-space">
    <div class="num">03</div>
    <a class="card" style="--bg-img: url('https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg')">
      <div>
        <h1>Links, images and about file paths</h1>
        <p>Learn how to use links and images along with file paths…</p>
        <div class="date">14 Oct 2017</div>
        <div class="tags">
          <div class="tag">HTML</div>
        </div>
      </div>
    </a>
  </div>
  <!-- https://images.unsplash.com/photo-1520839090488-4a6c211e2f94?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=38951b8650067840307cba514b554ba5&auto=format&fit=crop&w=1350&q=80 -->
</section>${blogStyle2}`,
    });
  
  };
  