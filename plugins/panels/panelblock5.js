

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  
    const bm = editor.BlockManager;
  
    const panelStyle = `<style>
    /* start global style */
    @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css");
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    /*   outline: 1px solid #999; */
    }
    
    /*.......... start timeline style ..........*/
    
    .timeline > h3 {
      text-align: center;
      text-transform: capitalize;
      font-size: 2rem;
      font-weight: bold;
      padding: 1rem;
    }
    
    .timeline > .column {
      display: flex;
      flex-direction: column;
      position: relative;
      margin: 1rem;
    }
    
    .timeline > .column::before {
      content: "";
      display: block;
      position: absolute;
      left: 50%;
      transform: translatex(-50%);
      border: 1px solid rgba(49, 49, 49, 0.5);
      height: calc(100% / 5 * 4);
      z-index: -1;
    }
    
    .timeline > .column > .row {
      display: flex;
    }
    
    /* row text */
    .timeline > .column > .row > .text {
      flex: 1 1 calc(50% - 50px);
      position: relative;
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
    }
    .timeline > .column > .row h3 {
      color: #fff;
      background-color: black;
      padding: 1rem;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
    
    .timeline > .column > .row p {
      padding: 1rem;
      color: rgba(51, 51, 51, 0.5);
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    }
    
    /* row icon */
    .timeline > .column > .row > .icon {
      flex: 1 1 100px;
    }
    
    .timeline > .column > .row > .icon > div {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin: auto;
      background: #fff;
      box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);
      position: relative;
    }
    
    .timeline > .column > .row > div i {
      display: block;
      font-size: 1.5rem;
      color: rgb(0, 85, 255);
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    
    /* row time */
    .timeline > .column > .row > .time {
      flex: 1 1 calc(50% - 50px);
      padding-top: 1rem;
    }
    
    .timeline > .column > .row:nth-child(even) {
      flex-direction: row-reverse;
    }
    
    .timeline > .column > .row:nth-child(even) > div:last-child {
      text-align: end;
    }
    
    .timeline > .column > .row:nth-child(even) h3::before {
      content: "";
      position: absolute;
      left: -20px;
      border: 10px solid rgba(0, 0, 0, 0);
      border-right-color: black;
    }
    .timeline > .column > .row:nth-child(odd) h3::after {
      content: "";
      position: absolute;
      right: -20px;
      border: 10px solid rgba(0, 0, 0, 0);
      border-left-color: black;
    }
    
    
    /* mobile version */
    @media screen and (max-width: 768px) {
      .timeline > .column::before {
        left: 50px;
        height: calc(100% / 5 * 4);
        top: 50px;
      }
    
      .timeline > .column > .row {
        flex-flow: column wrap;
        height: 250px;
      }
    
      .timeline > .column > .row:nth-child(even) {
        flex-direction: column;
      }
    
      .timeline > .column > .row:nth-child(even) > .time:last-child {
        text-align: start;
      }
    
      .timeline > .column > .row > .icon {
        order: 1;
        flex: 1 1 100%;
        padding-top: 50px;
        width: 100px;
      }
    
      .timeline > .column > .row > .time {
        order: 2;
        flex: 1 1 50px;
        width: calc(100% - 100px);
      }
    
      .timeline > .column > .row > .text {
        order: 3;
        flex: 1 1 calc(100% - 50px);
        width: calc(100% - 100px);
      }
    
      .timeline > .column > .row:nth-child(odd) h3::before {
        content: "";
        position: absolute;
        left: -20px;
        border: 10px solid rgba(0, 0, 0, 0);
        border-right-color: black;
      }
      .timeline > .column > .row:nth-child(odd) h3::after {
        border: none;
      }
    }
    /*.......... end timeline style ..........*/
    
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
      
      <section class="timeline">
      <h3>timeline</h3>
      <div class="column">
        <div class="row">
          <div class="text">
            <h3>Lorem ipsum dolor sit amet </h3>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div class="icon">
            <div>
              <i class="bi bi-patch-check-fill"></i>
            </div>
          </div>
          <div class="time">
            <time>1970-01-01 Saturday</time>
          </div>
        </div>
        <div class="row">
          <div class="text">
            <h3>Lorem ipsum dolor sit amet </h3>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div class="icon">
            <div>
              <i class="bi bi-patch-check-fill"></i>
            </div>
          </div>
          <div class="time">
            <time>1970-01-01 Saturday</time>
          </div>
        </div>
        <div class="row">
          <div class="text">
            <h3>Lorem ipsum dolor sit amet </h3>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div class="icon">
            <div>
              <i class="bi bi-patch-check-fill"></i>
            </div>
          </div>
          <div class="time">
            <time>1970-01-01 Saturday</time>
          </div>
        </div>
        <div class="row">
          <div class="text">
            <h3>Lorem ipsum dolor sit amet </h3>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div class="icon">
            <div>
              <i class="bi bi-patch-check-fill"></i>
            </div>
          </div>
          <div class="time">
            <time>1970-01-01 Saturday</time>
          </div>
        </div>
        <div class="row">
          <div class="text">
            <h3>Lorem ipsum dolor sit amet </h3>
            <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
          </div>
          <div class="icon">
            <div>
              <i class="bi bi-patch-check-fill"></i>
            </div>
          </div>
          <div class="time">
            <time>1970-01-01 Saturday</time>
          </div>
        </div>
      </div>
    </section>      </div>${panelStyle}`,
    });
  
  };
  