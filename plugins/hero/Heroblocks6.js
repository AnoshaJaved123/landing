

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {

    const bm = editor.BlockManager;

    const heroStyle2 = `<style>
     
   #hero-banner-wrap{
     max-width: 100%;
     width: 100%;
     margin: 0 auto;
   }
   
     .hero-banner h1{
     text-align: center;
     font-size: 3em;
       color:#fff;
   }
   
   
   .hero-banner{
     padding: 15vh 0 15vh 0;
     background-color: Deepskyblue;
     background: url(https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?w=940&h=650&auto=compress&cs=tinysrgb);
     background-size: cover;
     background-position: center;
     color: #fff;
     width: 100%;
     max-height: 500px;
   }
   
   
   #hero-banner-wrap h1 {
     text-align:center;
       word-spacing: 1px;
     letter-spacing:-0.068px!important;
     font-weight:700!important;
       font-size: 3em;
   }
   #hero-banner-wrap p {
     font-size: 1.2em;
     font-weight:300!important;
     line-height: 1.6;
     text-align:center;
     word-spacing: 1px;
     letter-spacing:-.40px;
     margin: 2%;
     padding: 1px;
   }
   
   
   @media (max-width: 600px){
     .hero-banner-wrap{
       padding: 0vh 0vh;
     }
     
     .hero-banner h1{
       font-size: 2.35em!important;
     }
     p{
       font-size: 90%;
       padding: 10px;
     }
   }
   
   /*.hero-banner-cta{}*/
   button.uk-button-primary.uk-button-large{
     background:#257920!important;
     border:solid 2px #257920!important;  
   
   }
   button.uk-button-secondary.uk-button-large{
     background:none!important;
     border:solid 1px #fff;  
   }
   
   .uk-button-large{
   font-weight:300!important;
   letter-spacing:0.55px!important;
   display:flex-inline!important;}
   
   
    </style>
    `;
    bm.add(opts.name, {
        label: `
        <img class='labelimg' src='/hero5.PNG'/>
        <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
        category: opts.category,
        content: `
     <div>
     <!-- UIkit CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.27/css/uikit.min.css" />

<!-- jQuery is required -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

<!-- UIkit JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.27/js/uikit.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.27/js/uikit-icons.min.js"></script>


  <div id="hero-banner-wrap">
    <div class="hero-banner">
      <h1>Fake news or not fake news?</h1><p>It's your call - read it or do not</p>
  
  <center>
<div class="hero-banner-cta">
    <button class="uk-button uk-button-primary uk-button-large">REAL NEWS</button>
    <button class="uk-button uk-button-secondary uk-button-large">FAKE NEWS</button>

       
  </center>
  </div>
    
    </div>   </div>


    
     </div>
      ${heroStyle2}`,
    });

};
