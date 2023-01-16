/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
    // const dc = editor.DomComponents;
    // const defaultType = dc.getType("default");
    // const defaultView = defaultType.view;
  
    const bm = editor.BlockManager;
    const testimonialStyle = `<style>
    /* ========== 00. General Styling ========== */

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');


blockquote {
    padding: 0;
    margin: 0;
}

section.t-bq-section {
    padding: 30px;
    margin-bottom: 60px;
}

.t-bq-wrapper.t-bq-wrapper-boxed {
    max-width: 576px;
    margin: 0 auto;
}

.t-bq-wrapper.t-bq-wrapper-fullwidth {
    max-width: 100%;
}








/* ========== 05. Paul ========== */

.t-bq-quote-paul {
    position: relative;
    display: flex;
    flex-direction: row;
    min-height: 250px;
    box-shadow: 2px 2px 25px #cecece;
    border-radius: 10px;
}

.t-bq-quote-paul .t-bq-quote-paul-pattern {
    flex-basis: 80px;
    background: url("https://raw.githubusercontent.com/taviskaron/t-div-blockquotes/main/img/hexabump.png") repeat;
    border-radius: 10px 0 0 10px;
}

.t-bq-quote-paul .t-bq-quote-paul-base {
    flex-basis: calc(100% - 80px);
    background: #ffffff;
    padding: 40px 30px 50px 80px;
    font-size: 11pt;
    line-height: 1.62em;
    border-radius: 0 10px 10px 0;
}

.t-bq-quote-paul .t-bq-quote-paul-qmark {
    position: absolute;
    top: 50px;
    left: 105px;
    font-family: Garamond, Georgia, "Times New Roman", serif;
    font-size: 42pt;
    color: #999999;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

.t-bq-quote-paul .t-bq-quote-paul-userpic {
    position: absolute;
    top: 80px;
    left: 45px;
    width: 70px;
    height: 70px;
    background: url("https://raw.githubusercontent.com/taviskaron/t-div-blockquotes/main/img/strug.jpg") center center no-repeat;
    background-size: cover;
    border-radius: 50%;
}

.t-bq-quote-paul .t-bq-quote-paul-meta {
    margin-top: 30px;
    padding-top: 10px;
    border-top: 2px dotted #777777;
}

.t-bq-quote-paul .t-bq-quote-paul-meta .t-bq-quote-paul-author,
.t-bq-quote-paul .t-bq-quote-paul-meta .t-bq-quote-paul-source {
    color: #777777;
}

.t-bq-quote-paul .t-bq-quote-paul-meta .t-bq-quote-paul-author {
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-size: 10pt;
    font-weight: bold;
}

.t-bq-quote-paul .t-bq-quote-paul-meta .t-bq-quote-paul-author cite {
    font-style: normal;
}

.t-bq-quote-paul .t-bq-quote-paul-meta .t-bq-quote-paul-source {
    font-size: 9pt;
}

@media screen and (max-width: 768px) {

    .t-bq-quote-paul .t-bq-quote-paul-pattern {
        flex-basis: 20px;
    }

    .t-bq-quote-paul .t-bq-quote-paul-base {
        flex-basis: calc(100% - 20px);
        padding: 100px 30px 50px 30px;
    }

    .t-bq-quote-paul .t-bq-quote-paul-userpic {
        width: 50px;
        height: 50px;
        left: 40px;
        top: 20px;
    }

    .t-bq-quote-paul .t-bq-quote-paul-qmark {
        left: 100px;
        top: 45px;
    }
}









/* ========== 06. Jasper ========== */

.t-bq-quote-jasper {
    position: relative;
    box-shadow: 2px 2px 25px #cecece;
    border-radius: 10px;
}

.t-bq-quote-jasper .t-bq-quote-jasper-pattern {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 80px;
    align-items: center;
    justify-content: flex-start;
    background: url("https://raw.githubusercontent.com/taviskaron/t-div-blockquotes/main/img/hexabump.png") repeat;
    border-radius: 10px 10px 0 0;
}

.t-bq-quote-jasper .t-bq-quote-jasper-pattern .t-bq-quote-jasper-qmark {
    flex-basis: 100px;
    font-family: Garamond, Georgia, "Times New Roman", serif;
    font-size: 60pt;
    color: #999999;
    text-align: center;
    height: 80px;
    line-height: 90pt;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

.t-bq-quote-jasper .t-bq-quote-jasper-userpic {
    position: absolute;
    top: 45px;
    left: calc(50% - 35px);
    width: 70px;
    height: 70px;
    background: url("https://raw.githubusercontent.com/taviskaron/t-div-blockquotes/main/img/strug.jpg") center center no-repeat;
    background-size: cover;
    border-radius: 50%;
}

.t-bq-quote-jasper .t-bq-quote-jasper-base {
    flex-basis: calc(100% - 80px);
    background: #ffffff;
    padding: 60px 30px 50px 100px;
    font-size: 11pt;
    line-height: 1.62em;
    border-radius: 0 0 10px 10px;
}

.t-bq-quote-jasper .t-bq-quote-jasper-meta {
    margin-top: 30px;
    padding-top: 10px;
    border-top: 2px dotted #777777;
    text-align: center;
}

.t-bq-quote-jasper .t-bq-quote-jasper-meta .t-bq-quote-jasper-author,
.t-bq-quote-jasper .t-bq-quote-jasper-meta .t-bq-quote-jasper-source {
    color: #777777;
}

.t-bq-quote-jasper .t-bq-quote-jasper-meta .t-bq-quote-jasper-author {
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-size: 10pt;
    font-weight: bold;
}

.t-bq-quote-jasper .t-bq-quote-jasper-meta .t-bq-quote-jasper-author cite {
    font-style: normal;
}

.t-bq-quote-jasper .t-bq-quote-jasper-meta .t-bq-quote-jasper-source {
    font-size: 9pt;
}

@media screen and (max-width: 768px) {

    .t-bq-quote-jasper .t-bq-quote-jasper-base {
        padding-left: 30px;
    }
}








/* ========== 07. Horace ========== */

.t-bq-quote-horace {
    position: relative;
    min-height: 250px;
    border-radius: 10px;
    box-shadow: 2px 2px 25px #cecece;
}

.t-bq-quote-horace .t-bq-quote-horace-base {
    background: url("https://raw.githubusercontent.com/taviskaron/t-div-blockquotes/main/img/hexabump.png") repeat;
    color: #ffffff;
    font-weight: bold;
    padding: 60px;
    border-radius: 10px;
}

.t-bq-quote-horace .t-bq-quote-horace-meta {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    padding-top: 20px;
    border-top: 2px dotted #ffffff;
}

.t-bq-quote-horace .t-bq-quote-horace-meta .t-bq-quote-horace-author {
    font-style: normal;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    font-size: 10pt;
    font-weight: bold;
}

.t-bq-quote-horace .t-bq-quote-horace-meta .t-bq-quote-horace-author cite {
    font-style: normal;
}

.t-bq-quote-horace .t-bq-quote-horace-meta .t-bq-quote-horace-source {
    font-size: 10pt;
}

.t-bq-quote-horace .t-bq-quote-horace-qmark {
    position: absolute;
    top: 140px;
    right: 5px;
    font-size: 280pt;
    color: #ffffff;
    opacity: 0.17;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    user-select: none;
}

.t-bq-quote-horace .t-bq-quote-horace-userpic {
    width: 70px;
    height: 70px;
    background: url("https://raw.githubusercontent.com/taviskaron/t-div-blockquotes/main/img/strug.jpg") center center no-repeat;
    background-size: cover;
    border-radius: 50%;
    margin-right: 20px;
}

@media screen and (max-width: 768px) {

    .t-bq-quote-horace .t-bq-quote-horace-base {
        padding-left: 40px;
        padding-right: 40px;
    }

    .t-bq-quote-horace .t-bq-quote-horace-meta {
        flex-direction: column;
        text-align: center;
    }

    .t-bq-quote-horace .t-bq-quote-horace-meta .t-bq-quote-horace-userpic {
        margin: 0 auto;
        margin-bottom: 10px;
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
      <section class="t-bq-section" id="paul">
      <div class="t-bq-wrapper t-bq-wrapper-boxed">
          <div class="t-bq-quote t-bq-quote-paul">
              <div class="t-bq-quote-paul-userpic"></div>
              <div class="t-bq-quote-paul-qmark">
                  &#10077;
              </div>
              <div class="t-bq-quote-paul-pattern">
              </div>
              <div class="t-bq-quote-paul-base">
                  <blockquote class="t-bq-quote-paul-text" cite="Strugatsky Brothers">
  Psychologically, almost all of them were slaves - slaves of faith, slaves of their own kind, slaves of passions, slaves of greed. And if, by the will of fate, one of them was born or became a master, he did not know what to do with his freedom. He again hurried to become a slave - a slave of wealth, unnatural excesses, a slave of dissolute friends, a slave of his slaves. 
                  </blockquote>
                  <div class="t-bq-quote-paul-meta">
                      <div class="t-bq-quote-paul-meta-info">
                          <div class="t-bq-quote-paul-author"><cite>Strugatsky Brothers</cite></div>
                          <div class="t-bq-quote-paul-source"><span>Hard to Be a God</span></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  
  
  <section class="t-bq-section" id="jasper">
      <div class="t-bq-wrapper t-bq-wrapper-boxed">
          <div class="t-bq-quote t-bq-quote-jasper">
              <div class="t-bq-quote-jasper-pattern">
                  <div class="t-bq-quote-jasper-qmark">
                      &#10077;
                  </div>
              </div>
  
              <div class="t-bq-quote-jasper-userpic"></div>
  
              <div class="t-bq-quote-jasper-base">
                  <blockquote class="t-bq-quote-jasper-text" cite="Strugatsky Brothers">
  He was neat by nature and could not stand any disorder. Maybe that's why, when he got drunk and lost his human form, he always made such a disgusting mess. 
                  </blockquote>
                  <div class="t-bq-quote-jasper-meta">
                      <div class="t-bq-quote-jasper-meta-info">
                          <div class="t-bq-quote-jasper-author"><cite>Strugatsky Brothers</cite></div>
                          <div class="t-bq-quote-jasper-source"><span>The Powerless of This World </span></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  
  
  <section class="t-bq-section" id="horace">
      <div class="t-bq-wrapper t-bq-wrapper-boxed">
          <div class="t-bq-quote t-bq-quote-horace">
  
              <div class="t-bq-quote-horace-qmark">
                  &#10078;
              </div>
  
  
              <div class="t-bq-quote-horace-base">
                  <blockquote class="t-bq-quote-horace-text" cite="Strugatsky Brothers">
  Children cannot be beaten. Even without you, they will be beaten for the rest of their lives, and if you want to hit him, it’s better to hit your own face, it will be more useful. 
                  </blockquote>
                  <div class="t-bq-quote-horace-meta">
                      <div class="t-bq-quote-horace-userpic"></div>
                      <div class="t-bq-quote-horace-meta-info">
                          <div class="t-bq-quote-horace-author"><cite>Strugatsky Brothers</cite></div>
                          <div class="t-bq-quote-horace-source"><span>Ugly Swans</span></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  </div>
  ${testimonialStyle}`,
    });
  };
  