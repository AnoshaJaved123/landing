/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  // const dc = editor.DomComponents;
  // const defaultType = dc.getType("default");
  // const defaultView = defaultType.view;

  const bm = editor.BlockManager;
  const cardStyle = `<style>

.containercard {
  position: relative;
  width: 1160px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  transform-style: preserve-3d;
  perspective: 500px;
  margin: auto;
}
.containercard .box {
  position: relative;
  width: 275px;
  height: 275px;
  background: #000;
  transition: 0.5s;
  transform-style: preserve-3d;
  overflow: hidden;
  margin-right: 15px;
  margin-top: 45px;
}
.containercard:hover .box {
  transform: rotateY(25deg);
}
.containercard .box:hover ~ .box {
  transform: rotateY(-25deg);
}
.containercard .box:hover {
  transform: rotateY(0deg) scale(1.25);
  z-index: 1;
  box-shadow: 0 25px 40px rgba(0,0,0,0.5);
}
.containercard .box .imgBx {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.containercard .box .imgBx:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg,#f00,#000);
  z-index: 1;
  opacity: 0;
  transition: 0.5s;
  mix-blend-mode: multiply;
}
.containercard .box:hover .imgBx:before {
  opacity: 1;
}
.containercard .box .imgBx img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.containercard .box .content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  padding: 20px;
  align-items: flex-end;
  box-sizing: border-box;
}
.containercard .box .content h2 {
  color: #fff;
  transition: 0.5s;
  text-transform: uppercase;
  margin-bottom: 5px;
  font-size: 20px;
  transform: translateY(200px);
  transition-delay: 0.3s;
}
.containercard .box:hover .content h2 {
  transform: translateY(0px);
}
.containercard .box .content p {
  color: #fff;
  transition: 0.5s;
  font-size: 14px;
  transform: translateY(200px);
  transition-delay: 0.4s;
}
.containercard .box:hover .content p {
  transform: translateY(0px);
}
    </style>
    `;
  bm.add(opts.name, {
    label: `
    <img class='labelimg' src='/card3.png'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
    category: opts.category,
    content: `
    <div>
    <div class="containercard">
    <div class="box">
      <div class="imgBx">
        <img src="https://images.unsplash.com/photo-1579748138140-ce9ef2c32db1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80">
      </div>
      <div class="content">
        <div>
          <h2>Image Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
          </p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="imgBx">
        <img src="https://images.unsplash.com/photo-1579639782539-15cc6c0be63f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80">
      </div>
      <div class="content">
        <div>
          <h2>Image Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
          </p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="imgBx">
        <img src="https://images.unsplash.com/photo-1603984362497-0a878f607b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80">
      </div>
      <div class="content">
        <div>
          <h2>Image Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
          </p>
        </div>
      </div>
    </div>
    <div class="box">
      <div class="imgBx">
        <img src="https://images.unsplash.com/photo-1579310962131-aa21f240d986?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80">
      </div>
      <div class="content">
        <div>
          <h2>Image Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi accusamus molestias quidem iusto.
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>${cardStyle}`,
  });
};
