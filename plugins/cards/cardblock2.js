/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  // const dc = editor.DomComponents;
  // const defaultType = dc.getType("default");
  // const defaultView = defaultType.view;

  const bm = editor.BlockManager;
  const styleform = editor.styleManager;

  const contactStyle = `<style>

  .wrapper{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
 }
  .card{
     max-width: 300px;
      min-height: 250px;
      background: #02b875;
      padding: 30px;
       border-radius: 3px;
      box-sizing: border-box;
      color: #FFF;
      margin:20px;
       box-shadow: rgb(50 50 93 / 25%) 0px 30px 60px -12px, rgb(0 0 0 / 30%) 0px 18px 36px -18px;
 }
  .card:nth-child(2){
     background: #4181ee;
 }
  .card:last-child{
     background: #673ab7;
 }
  .card-title{
      margin-top: 0;
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 1.2px;
 }
  .card-content{
      font-size: 14px;
      letter-spacing: 0.5px;
      line-height: 1.5;
 }
  .card-btn{
      all: unset;
      display: block;
      margin-left: auto;
      border: 2px solid #FFF;
      padding: 10px 15px;
      border-radius: 25px;
      font-size: 10px;
      font-weight: 600;
      transition: all 0.5s;
      cursor: pointer;
      letter-spacing: 1.2px;
 }
  .card-btn:hover{
     color:#02b875;
     background: #FFF;
 }
  .card:nth-child(2) .card-btn:hover{
     color:#4181ee;
     background: #FFF;
 }
  .card:last-child .card-btn:hover{
     color:#673ab7;
      background: #FFF;
 }
 
    </style>
    `;
  bm.add(opts.name, {
    label: `
    <img class='labelimg' src='/card2.png'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
    category: opts.category,
    content: `
    <div>
<div class="wrapper">
<div class="card">
	<h3 class="card-title">CARD TITLE</h3>
		<p class="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
		<button class="card-btn">READ MORE</button>
	</div>
	<div class="card">
		<h3 class="card-title">CARD TITLE</h3>
		<p class="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
		<button class="card-btn">READ MORE</button>
	</div>
	<div class="card">
		<h3 class="card-title">CARD TITLE</h3>
		<p class="card-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
		<button class="card-btn">READ MORE</button>
	</div>
</div>
    </div>${contactStyle}`,
  });
};
