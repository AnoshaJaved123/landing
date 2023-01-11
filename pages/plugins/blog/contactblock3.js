
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
 
    const blogStyle2 = `<style>
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
 
    .container {
        max-width: 1200px;
        width: 90%;
        margin: 0 auto;
    }
    
    :root {
        /* //....... Color ........// */
        --primary-color: #ff3c78;
        --light-black: rgba(0, 0, 0, 0.89);
        --black: #000;
        --white: #fff;
        --grey: #aaa;
    }
    
    .contact {
        margin-top: 45px;
    }
    
    .form {
        display: flex;
        justify-content: space-between;
        margin: 80px 0;
    }
    
    .form .form-txt {
        flex-basis: 48%;
    }
    
    .form .form-txt h1 {
        font-weight: 600;
        color: var(--black);
        font-size: 40px;
        letter-spacing: 1.5px;
        margin-bottom: 10px;
        color: var(--light-black);
    }
    
    .form .form-txt span {
        color: var(--light-black);
        font-size: 14px;
    }
    
    .form .form-txt h3 {
        font-size: 22px;
        font-weight: 600;
        margin: 15px 0;
        color: var(--light-black);
    }
    
    .form .form-txt p {
        color: var(--light-black);
        font-size: 14px;
    }
    
    .form .form-details {
        flex-basis: 48%;
    }
    
    .form .form-details input[type="text"],
    .form .form-details input[type="email"] {
        padding: 15px 20px;
        color: var(--black);
        outline: none;
        border: 1px solid var(--grey);
        margin: 35px 15px;
        font-size: 14px;
    }
    
    .form .form-details textarea {
        padding: 15px 20px;
        margin: 0 15px;
        color: var(--black);
        outline: none;
        border: 1px solid var(--grey);
        font-size: 14px;
        resize: none;
    }
    
    .form .form-details button {
        padding: 15px 25px;
        color: var(--white);
        font-weight: 500;
        background: var(--black);
        outline: none;
        border: none;
        margin: 15px;
        font-size: 14px;
        letter-spacing: 2px;
        cursor: pointer;
    }
    
    @media (max-width: 500px) {
        .form {
            display: flex;
            flex-direction: column;
        }
        .form .form-details button {
            margin-left: 0;
        }
        .form .form-details input[type="text"],
        .form .form-details input[type="email"],
        .form .form-details textarea {
            width: 100%;
            margin-left: 0;
        }
        .form .form-details input[type="text"] {
            margin-bottom: 0px;
        }
    }
    
    @media(min-width: 501px) and (max-width: 768px) {
        .form {
            display: flex;
            flex-direction: column;
        }
        .form .form-details button {
            margin-left: 0;
        }
        .form .form-details input[type="text"],
        .form .form-details input[type="email"],
        .form .form-details textarea {
            width: 100%;
            margin-left: 0;
        }
        .form .form-details input[type="text"] {
            margin-bottom: 0px;
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
      <div>
      <div class="contact container">
      <form>
          <div class="form">
              <div class="form-txt">
                  <h1>Contact Us</h1>
                  <span>As you might expect of a company that began as a high-end interiors contractor, we pay strict
                  attention.</span>
                  <h3>USA</h3>
                  <p>195 E Parker Square Dr, Parker, CO 801<br>+43 982-314-0958</p>
                  <h3>Pakistan</h3>
                  <p>HW95+C9C, Mhada Colony, Viman , Lahore, Maharashtra<br>411014</p>
              </div>
              <div class="form-details">
                  <input type="text" name="name" id="name" placeholder="Name" required>
                  <input type="email" name="email" id="email" placeholder="Email" required>
                  <textarea name="message" id="message" cols="52" rows="7" placeholder="Message" required></textarea>
                  <button>SEND MESSAGE</button>
              </div>
          </div>
      </form>
  </div>

      </div>
      
      ${blogStyle2}`,
    });
  
  };
  