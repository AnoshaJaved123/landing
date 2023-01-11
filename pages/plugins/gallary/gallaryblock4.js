
/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
 
    const gallaryStyle2 = `<style>
        .containergal{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 80%;
      display: grid;
      grid-template-areas:
      'area1 area1 area2 area3 area3 area4 .'
      'area1 area1 area5 area5 area6 area6 area6';
      gap: 1.5vw;
      padding: 0;
      margin: 0;
      }
      .img-collection{
      width: 100%;
      block-size: auto;
      object-fit: cover;
      object-position: 50% 50%;
      filter: drop-shadow(2px 6px 15px rgba(135, 139, 142, 0.6));
      border-radius: 1.5rem;
      border: 0.3vw solid white;
      }
      .img-col1{
      position: relative;
      top: 10%;
      grid-area: area1;
      height: 80%;
      aspect-ratio: 1/2;
      }
      .img-col2{
      grid-area: area2;
      height:100%;
      aspect-ratio: 1/1;
      }
      .img-col3{
      grid-area: area3;
      height:100%;
      aspect-ratio: 2/1;
      }
      .img-col4{
      grid-area: area4;
      height:100%;
      aspect-ratio: 1.4/1;
      }
      .img-col5{
      grid-area: area5;
      aspect-ratio: 1/1;
      }
      .img-col6{
      grid-area: area6;
      aspect-ratio: 3/2;
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
      <div class="containergal">
      <img class="img-collection img-col1" src="https://images.unsplash.com/photo-1532529867795-3c83442c1e5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" >
      <img class="img-collection img-col2"  src="https://images.unsplash.com/photo-1495954222046-2c427ecb546d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" >
      
      <img class="img-collection img-col3"  src="https://images.unsplash.com/photo-1573053986275-840ffc7cc685?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" >
      <img class="img-collection img-col4"  src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" >
      
      <img class="img-collection img-col5"  src="https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" >
      <img class="img-collection img-col6"  src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80" >
      </div>
      </div>
  ${gallaryStyle2}`,
    });
  
  };
  