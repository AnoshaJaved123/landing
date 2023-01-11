

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  
    const bm = editor.BlockManager;
  
    const panelStyle = `<style>
 
    .Yearly-timeline{ font-family: 'Poppins', sans-serif; }
            .Yearly-timeline:after{
                content: '';
                display: block;
                clear: both;
            }
            .Yearly-timeline .timeline{
                width: calc(50% + 17px);
                padding: 0 30px 30px 0;
                float: left; 
                position: relative;
            }
            .Yearly-timeline .timeline:before,
            .Yearly-timeline .timeline:after{
                content: '';
                height: 60px;
                width: 2px;
                border-left: 2px solid #70d6ff;
                transform: rotate(-45deg);
                position: absolute;
                right: 30px;
                bottom: 0;
            }
            .Yearly-timeline .timeline:after{
                background-color: #fff;
                height: 20px;
                width: 20px;
                border: 6px solid #70d6ff;
                border-radius: 50%;
                right: 0;
            }   
            .Yearly-timeline .timeline-content{
                color: #555;
                background: #70d6ff;
                text-align: center;
                min-height: 170px;
                padding: 30px 35px 35px;
                border-radius: 15px 15px 0 15px;
                display: block;
                position: relative;
                z-index: 1;
            }
            .Yearly-timeline .timeline-content:before{
                content: '';
                background-color: #fff;
                position: absolute;
                left: 17px;
                right: 17px;
                top: 17px;
                bottom: 17px;
                z-index: -1;
            }
            .Yearly-timeline .timeline-content:hover{ text-decoration: none; }
            .Yearly-timeline .timeline-icon{
                color: #777;
                font-size: 35px;
            }
            .Yearly-timeline .title{
                font-size: 22px;
                font-weight: 700;
                letter-spacing: 2px;
                text-transform: uppercase;
                margin: 0 0 8px;
            }
            .Yearly-timeline .description{
                color: #777;
                font-size: 13px;
                font-weight: 400;
                letter-spacing: 0.5px;
                line-height: 18px;
                margin: 0;
            }
            .Yearly-timeline .timeline:nth-child(even){
                padding: 0 0 30px 30px;
                float: right;
            }
            .Yearly-timeline .timeline:nth-child(even):before{
                transform: rotate(45deg);
                right: auto;
                left: 30px;
            }
            .Yearly-timeline .timeline:nth-child(even):after{
                right: auto;
                left: 0;
            }
            .Yearly-timeline .timeline:nth-child(even) .timeline-content{ border-radius: 15px 15px 15px 0; }
            .Yearly-timeline .timeline:nth-child(4n+2):before,
            .Yearly-timeline .timeline:nth-child(4n+2):after{
                border-color: #ff70a6;
            }
            .Yearly-timeline .timeline:nth-child(4n+2) .timeline-content{
                background: #ff70a6;
            }
            .Yearly-timeline .timeline:nth-child(4n+3):before,
            .Yearly-timeline .timeline:nth-child(4n+3):after{
                border-color: #ff9770;
            }
            .Yearly-timeline .timeline:nth-child(4n+3) .timeline-content{
                background: #ff9770;
            }
            .Yearly-timeline .timeline:nth-child(4n+4):before,
            .Yearly-timeline .timeline:nth-child(4n+4):after{
                border-color: #ffd670;
            }
            .Yearly-timeline .timeline:nth-child(4n+4) .timeline-content{
                background:#ffd670;
            }
            @media screen and (max-width:767px){
                .Yearly-timeline .timeline{
                    width: 100%;
                    padding: 30px 0 0 30px;
                    margin: 0 0 20px;
                }   
                .Yearly-timeline .timeline:before,
                .Yearly-timeline .timeline:nth-child(even):before{
                    transform: rotate(-45deg);
                    bottom: auto;
                    top: 0;
                    right: auto;
                    left: 30px;
                }
                .Yearly-timeline .timeline:after,
                .Yearly-timeline .timeline:nth-child(even):after{
                    bottom: auto;
                    top: 0;
                    right: auto;
                    left: 0;
                }
                .Yearly-timeline .timeline-content,
                .Yearly-timeline .timeline:nth-child(even) .timeline-content{
                    border-radius: 0 15px 15px 15px;
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
      content: `<div>
      <div class="container">
      <div class="row">
          <div class="col-md-12">
              <div class="Yearly-timeline">
                  <div class="timeline">
                      <a href="" class="timeline-content">
                          <div class="timeline-icon"><i class="fa fa-instagram"></i></div>
                          <h3 class="title">2018-2021</h3>
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                          </p>
                      </a>
                  </div>
                  <div class="timeline">
                      <a href="" class="timeline-content">
                          <div class="timeline-icon"><i class="fa fa-twitter"></i></div>    
                          <h3 class="title">2013-2017</h3>
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                          </p>
                      </a>
                  </div>
                  <div class="timeline">
                      <a href="" class="timeline-content">
                          <div class="timeline-icon"><i class="fa fa-facebook"></i></div>    
                          <h3 class="title">2009-2012</h3>
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                          </p>
                      </a>
                  </div>
                  <div class="timeline">
                      <a href="" class="timeline-content">
                          <div class="timeline-icon"><i class="fa fa-linkedin"></i></div>    
                          <h3 class="title">2006-2009</h3>
                          <p class="description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer males uada tellus lorem, et condimentum neque commodo Integer males uada tellus lorem, et condimentum neque commodo
                          </p>
                      </a>
                  </div>
              </div>
          </div>
      </div>
  </div>
      </div>${panelStyle}`,
    });
  
  };
  