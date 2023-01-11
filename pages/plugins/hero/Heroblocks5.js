

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  
    const bm = editor.BlockManager;
  
    const heroStyle2 = `<style>
    @import url("https://fonts.googleapis.com/css2?family=Caveat+Brush&family=Caveat:wght@400;500;600;700&family=Poiret+One&display=swap");
	
                header {
                    height: auto;
                    width: 100%;
                    border-radius: 0 0 72% 72% / 25%;
                    background-image: url("https://littleartsydreams.com/copy_metal.jpg?bypass-cache=09629320"); /*header tree picture*/
                    background-size: cover;
                    background-attachment: fixed;
                    background-position: center;
                    text-align: center;
                    overflow: hidden;
                }
                header .overlay {
                    width: 100%;
                    padding: 5rem;
                    padding-bottom: 0;
                    font-weight: bold;
                    background-image: linear-gradient(
                        135deg,
                        rgba(100, 149, 237, 92) 10%,
                        rgba(255, 192, 203, 0.9) 100%
                    );
                }
                .overlay h1 {
                    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
                    font-weight: 900;
                }
                /*header paragraph text*/
                header .overlay p {
                    padding: 1rem;
                    letter-spacing: 0.14rem;
                    font-size: 20px;
                    border-radius: 50px;
                    color: white;
                }
                .overlay button {
                    width: 100%;
                    bottom: 0;
                    padding: 1rem;
                    outline: none;
                    border: none;
                    background-color: transparent;
                }
                .overlay button a {
                    height: 100%;
                    width: 100%;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    padding: 1rem;
                    position: relative;
                    border-radius: 50px;
                    font-size: 30px;
                    text-decoration: none;
                    letter-spacing: 0.14rem;
                    color: white;
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
      content: `<div>  <header>
      <div class="overlay">
        <h1>A Curved Header Revamped</h1>
        <h3>Created by Anosha</h3>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ex
          deserunt sapiente repudiandae doloremque culpa, expedita aliquid
          aspernatur, eum reprehenderit quis quasi odio obcaecati repellendus id
          veniam? Architecto, nulla consequuntur.
        </p>
        <button><a href="#press">PRESS</a></button>
      </div>
    </header>
    <div class="container">
      <section id="press">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ex
          deserunt sapiente repudiandae doloremque culpa, expedita aliquid
          aspernatur, eum reprehenderit quis quasi odio obcaecati repellendus id
          veniam? Architecto, nulla consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ex
          deserunt sapiente repudiandae doloremque culpa, expedita aliquid
          aspernatur, eum reprehenderit quis quasi odio obcaecati repellendus id
          veniam? Architecto, nulla consequuntur.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, ex
          deserunt sapiente repudiandae doloremque culpa, expedita aliquid
          aspernatur, eum reprehenderit quis quasi odio obcaecati repellendus id
          veniam? Architecto, nulla consequuntur.
        </p>
      </section>
    </div>
    </div>
      ${heroStyle2}`,
    });
  
  };
  