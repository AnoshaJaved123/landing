
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
    const styleform = editor.styleManager;
  
    const blogStyle = `<style>
  

.footer{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #263238;
  text-align: center;
  color: #f4f4f4;
}

.icons{
  padding-top: 1rem;
}

.icons a{
  text-decoration: none;
  font-size: 2rem;
  margin: 0.5rem;
  color: #f4f4f4;
}

.company-name{
  font-size: 1.6rem;
  margin-top: 0.5rem;
}

@media (max-width: 500px){
  html{
      font-size: 50%;
  }
}    

@media(min-width: 501px) and (max-width: 768px){
  html{
  font-size: 50%;
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
      <footer class="footer">
        <div class="icons">
           <a href="#"><i class="fab fa-facebook"></i></a>
           <a href="#"><i class="fab fa-linkedin"></i></a>
           <a href="#"><i class="fab fa-instagram"></i></a>
           <a href="#"><i class="fab fa-twitter"></i></a>
            <p class="company-name">
                ABC &copy; 2021, ALL Rights Reserved
            </p>
        </div>
    </footer>
    </div>
    ${blogStyle}`,
    });
  
  };
  