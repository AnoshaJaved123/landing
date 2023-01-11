

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  
    const bm = editor.BlockManager;
  
    const panelStyle = `<style>
    @import url('https://fonts.googleapis.com/css2?family=Abel&display=swap');
    
    .section-timeline {
      position: relative;
      padding: 50px 0;
      overflow: auto;
      min-width: 700px;
    }
    .section-timeline .container {
      max-width: 1100px;
      padding-left: 15px;
      padding-right: 15px;
      margin: 0 auto;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      position: relative;
    }
    
    .section-timeline .timeline {
      list-style: none;
      position: relative;
      margin: 30px 0;
    }
    .section-timeline .timeline li {
      height: 80px;
      width: 80px;
      position: absolute;
      border-color: var(--clr-border-timeline);
    }
    .section-timeline .timeline li:nth-child(odd) {
      border-style: solid;
      border-width: 2px 2px 2px 0;
      left: -40px;
      transform: translateX(50%);
      border-radius: 0 80px 80px 0;
      box-shadow: 13px 0 15px -12px rgba(0, 0, 0, .3);
    }
    .section-timeline .timeline li:nth-child(even) {
      left: -40px;
      border-style: solid;
      border-width: 2px 0 2px 2px;
      transform: translateX(-50%);
      border-radius: 80px 0 0 80px;
      box-shadow: -15px 0 15px -12px rgba(0, 0, 0, .5);
    }
    
    /* Style li */
    .section-timeline .timeline li:nth-child(2) {
      top: 78px;
    }
    .section-timeline .timeline li:nth-child(3) {
      top: 156px;
    }
    .section-timeline .timeline li:nth-child(4) {
      top: 234px;
    }
    .section-timeline .timeline li:nth-child(5) {
      top: 312px;
    }
    .section-timeline .timeline li:nth-child(6) {
      top: 390px;
    }
    
    /* Style pseudo Element */
    .section-timeline .timeline li:before {
      content: '';
      position: absolute;
      height: 30px;
      width: 30px;
      border: 2px solid black;
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      background-color: var(--clr-border-timeline);
      text-align: center;
      line-height: 30px;
      font-weight: bold;
      font-size: 13px;
      color: #FFF;
    }
    .section-timeline .timeline li:nth-child(odd):before {
      right: 0;
      transform: translateY(-50%) translateX(50%);
    }
    .section-timeline .timeline li:nth-child(even):before {
      left: 0;
      transform: translateY(-50%) translateX(-50%);
    }
    
    .section-timeline .timeline li:nth-child(1):after,
    .section-timeline .timeline li:last-child:after {
      content: '';
      position: absolute;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: var(--clr-border-timeline);
    }
    .section-timeline .timeline li:nth-child(1):after {
      top: 0;
      transform: translate(-50%, -50%)
    }
    .section-timeline .timeline li:last-child:after {
      bottom: 0;
      right:0;
      transform: translate(50%, 50%)
    }
    
    .section-timeline .timeline li:nth-child(1):before {content: '1'}
    .section-timeline .timeline li:nth-child(2):before {content: '2'}
    .section-timeline .timeline li:nth-child(3):before {content: '3'}
    .section-timeline .timeline li:nth-child(4):before {content: '4'}
    .section-timeline .timeline li:nth-child(5):before {content: '5'}
    .section-timeline .timeline li:nth-child(6):before {content: '6'}
    
    /* Style content */
    .section-timeline .timeline .content {
      border: 1px solid #F2F2F2;
      position: absolute;
      min-width: 180px;
      border-radius: 10px;
      overflow: hidden;
      top: 50%;
      transform: translateY(-50%);
      max-height: 120px;
      box-shadow: 0 15px 25px -20px rgba(0, 0, 0, .2);
    }
    .section-timeline .timeline li:nth-child(odd) .content {
      left: calc(100% + 30px);
    }
    .section-timeline .timeline li:nth-child(even) .content {
      right: calc(100% + 30px);
    }
    
    .section-timeline .timeline .content > * {
      padding: .5rem;
    }
    .section-timeline .timeline .content h3 {
      text-align: center;
      margin: 0;
      box-shadow: 0 5px 8px -6px rgba(0, 0, 0, .4);
    }
    .section-timeline .timeline li:nth-child(1) h3 {
      background-color: #e74c3c;
    }
    .section-timeline .timeline li:nth-child(2) h3 {
      background-color: #2ecc71;
    }
    .section-timeline .timeline li:nth-child(3) h3 {
      background-color: #e67e22;
    }
    .section-timeline .timeline li:nth-child(4) h3 {
      background-color: #1abc9c;
    }
    .section-timeline .timeline li:nth-child(5) h3 {
      background-color: #9b59b6;
    }
    .section-timeline .timeline li:nth-child(6) h3 {
      background-color: #fff00f;
    }
    
    .section-timeline .timeline .content p {
      font-size: 14;
      line-height: 1.3;
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
      content: `<div>
  
<section class="section-timeline">
<div class="container">
  <ul class="timeline">
    <li class="">
      <div class="content">
        <h3>Header</h3>
        <p>This is some text description for nothing.</p>
      </div>
    </li>
    <li class="">
      <div class="content">
        <h3>Header</h3>
        <p>This is some text description for nothing.</p>
      </div>
    </li>
    <li class="">
      <div class="content">
        <h3>Header</h3>
        <p>This is some text description for nothing.</p>
      </div>
    </li>
    <li class="">
      <div class="content">
        <h3>Header</h3>
        <p>This is some text description for nothing.</p>
      </div>
    </li>
    <li class="">
      <div class="content">
        <h3>Header</h3>
        <p>This is some text description for nothing.</p>
      </div>
    </li>
    <li class="">
  <div class="content">
    <h3>Header</h3>
    <p>This is some text description for nothing.</p>
  </div>
    </li>
  </ul>
</div>
</section>
      </div>${panelStyle}`,
    });
  
  };
  