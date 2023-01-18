
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
    const styleform = editor.styleManager;
  
    const blogStyle = `<style>
    @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    
    body {
      font-family: "Quicksand", sans-serif;
      display: grid;
      place-items: center;
      height: 100vh;
      background: #7f7fd5;
      background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
    }
    
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 1200px;
      margin-block: 2rem;
      gap: 2rem;
    }
    
    img {
      max-width: 100%;
      display: block;
      object-fit: cover;
    }
    
    .card {
      display: flex;
      flex-direction: column;
      width: clamp(20rem, calc(20rem + 2vw), 22rem);
      overflow: hidden;
      box-shadow: 0 .1rem 1rem rgba(0, 0, 0, 0.1);
      border-radius: 1em;
      background: #ECE9E6;
    background: linear-gradient(to right, #FFFFFF, #ECE9E6);
    
    }
    
    
    
    .card__body {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: .5rem;
    }
    
    
    .tag {
      align-self: flex-start;
      padding: .25em .75em;
      border-radius: 1em;
      font-size: .75rem;
    }
    
    .tag + .tag {
      margin-left: .5em;
    }
    
    .tag-blue {
      background: #56CCF2;
    background: linear-gradient(to bottom, #2F80ED, #56CCF2);
      color: #fafafa;
    }
    
    .tag-brown {
      background: #D1913C;
    background: linear-gradient(to bottom, #FFD194, #D1913C);
      color: #fafafa;
    }
    
    .tag-red {
      background: #cb2d3e;
    background: linear-gradient(to bottom, #ef473a, #cb2d3e);
      color: #fafafa;
    }
    
    .card__body h4 {
      font-size: 1.5rem;
      text-transform: capitalize;
    }
    
    .card__footer {
      display: flex;
      padding: 1rem;
      margin-top: auto;
    }
    
    .user {
      display: flex;
      gap: .5rem;
    }
    
    .user__image {
      border-radius: 50%;
    }
    
    .user__info > small {
      color: #666;
    }
    </style>
    `;
    bm.add(opts.name, {
      label: `
      <img class='labelimg' src='/blog1.PNG'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
      category: opts.category,
      content: `
      <div class="container">
      <div class="card">
        <div class="card__header">
          <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="card__image" width="600">
        </div>
        <div class="card__body">
          <span class="tag tag-blue">Technology</span>
          <h4>What's new in 2022 Tech</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
        </div>
        <div class="card__footer">
          <div class="user">
            <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image">
            <div class="user__info">
              <h5>Jane Doe</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card__header">
          <img src="https://source.unsplash.com/600x400/?food" alt="card__image" class="card__image" width="600">
        </div>
        <div class="card__body">
          <span class="tag tag-brown">Food</span>
          <h4>Delicious Food</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
        </div>
        <div class="card__footer">
          <div class="user">
            <img src="https://i.pravatar.cc/40?img=2" alt="user__image" class="user__image">
            <div class="user__info">
              <h5>Jony Doe</h5>
              <small>Yesterday</small>
            </div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card__header">
          <img src="https://source.unsplash.com/600x400/?car,automobile" alt="card__image" class="card__image" width="600">
        </div>
        <div class="card__body">
          <span class="tag tag-red">Automobile</span>
          <h4>Race to your heart content</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
        </div>
        <div class="card__footer">
          <div class="user">
            <img src="https://i.pravatar.cc/40?img=3" alt="user__image" class="user__image">
            <div class="user__info">
              <h5>John Doe</h5>
              <small>2d ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>${blogStyle}`,
    });
  
  };
  