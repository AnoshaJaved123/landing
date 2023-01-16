
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
 
    const gallaryStyle2 = `<style>
  
  #container{
      max-width:61.25rem;
      margin:1.25rem auto;
      /*border:2px solid #FFFFFF;*/
  }
  .card-container{
      display: flex;
      flex-wrap: wrap;
      margin:1.25rem;
      padding:0.3125rem;
      /*border:2px solid #FFFFFF;*/
  }
  .card{
      flex:1 0 12.5rem;
      margin:0.625rem;
      /*border:2px solid #FFFFFF;*/
  }
  .card-image{
      display:block;
      height:21.875rem;
      background-size:cover;
      box-shadow:0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4);
      transition:transform 500ms ease-in;
      filter:grayscale(100%);
      /*border:2px solid #FFFFFF;*/
  }
  .card-image:hover{
      transform:scale(1.10);
      filter:grayscale(0%);
  }
  .card-image.card-1{
      background-image:url(https://images.unsplash.com/photo-1661586762551-b595e65388ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1285&q=80);
  }
  .card-image.card-2{
      background-image:url(https://images.unsplash.com/photo-1668115118877-ca2946340036?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80);
  }
  .card-image.card-3{
      background-image:url(https://images.unsplash.com/photo-1564678164-f00ad53a38e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80);
  }
  .card-image.card-4{
      background-image:url(https://images.unsplash.com/photo-1658501656233-6e2c44834760?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80);
  }
  .card-image.card-5{
      background-image:url(https://images.unsplash.com/photo-1536266305399-b367feb671f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80);
  }
  .card-image.card-6{
      background-image:url(https://images.unsplash.com/photo-1570299135572-3a10aa26de2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=463&q=80);
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
      content: ` <div> <h1>Image Gallery</h1>
      <h2>with Flexbox and Hover Effect</h2>
      <hr>
      <div id="container">
          <div class="card-container">
              <!--Card 1-->
              <div class="card">
                  <div class="card-image card-1"></div>
              </div>
              <!--Card 2-->
              <div class="card">
                  <div class="card-image card-2"></div>
              </div>
              <!--Card 3-->
              <div class="card">
                  <div class="card-image card-3"></div>
              </div>
              <!--Card 4-->
              <div class="card">
                  <div class="card-image card-4"></div>
              </div>
              <!--Card 5-->
              <div class="card">
                  <div class="card-image card-5"></div>
              </div>
              <!--Card 6-->
              <div class="card">
                  <div class="card-image card-6"></div>
              </div>
          </div>
      </div>
      </div>
  ${gallaryStyle2}`,
    });
  
  };
  