

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  
    const bm = editor.BlockManager;
  
    const panelStyle = `<style>
  
    </style>
    `;
    bm.add(opts.name, {
      label: `
      <img class='labelimg' src='/resume.png'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
      category: opts.category,
      content: `

      <html>
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
          <link rel="stylesheet" href="https://hckkiu.github.io/resume-template/style.css">
          <link rel="stylesheet" href="https://hckkiu.github.io/resume-template/color.css">
          <script src="https://kit.fontawesome.com/9209300180.js" crossorigin="anonymous"></script>
          <title>John Smith | Web Developer</title>
      </head>
      <body>
      
          <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="Navbar">
              <div class="container">
                  <a class="navbar-brand text-accent-4 fw-bold" href="#">JS</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav ms-auto">
                          <li class="nav-item mx-2">
                              <a class="nav-link" href="#Home">Home</a>
                          </li>
                          <li class="nav-item mx-2">
                              <a class="nav-link" href="#About">About</a>
                          </li>
                          <li class="nav-item mx-2">
                              <a class="nav-link" href="#Experience">Experience</a>
                          </li>
                          <li class="nav-item mx-2">
                              <a class="nav-link" href="#Skills">Skills</a>
                          </li>
                          <li class="nav-item mx-2">
                              <a class="nav-link" href="#Services">Services</a>
                          </li>
                          <li class="nav-item mx-2">
                              <a class="nav-link" href="#Portfolio">Portfolio</a>
                          </li>
                          <li class="nav-item mx-2">
                              <a class="nav-link" href="#Contact">Contact</a>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      
          <section id="Home">
              <div class="container h-100">
                  <div class="row h-100">
                      <div class="col-12  col-md-10 mx-auto my-auto">
                          <h1 class="display-3 fw-medium text-light-grey">Hello! I'm 
                              <span class="fw-semibold text-accent-4">John</span>
                          </h1>
                          <h4 class="text-light-grey mb-4">UI/UX Designer & Web Developer</h4>
                          <a class="btn bg-accent-4 text-white fw-medium" style="width: fit-content;" href="#Contact">Hire Me</a>
                      </div>
                  </div>
              </div>
          </section>
      
          
          <section class="bg-light-grey px-5" id="About">
              <div class="container">
                  <div class="row">
                      <div class="col-12 col-md-4 my-auto">
                          <h1 class="text-center pb-3">About Me</h3>
                          <h1 class="display-4 text-center text-accent-4 text-cursive">John Smith</h1>
                      </div>
                      <div class="col-12 col-md-8 lh-lg">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac eleifend eros, quis placerat tellus. Morbi vitae libero eget risus mattis euismod. Vestibulum ac finibus nunc, id facilisis est. Nam consequat egestas neque sit amet tempus. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis consequat libero non egestas. Etiam magna arcu, varius in suscipit ut, pulvinar et ex. Nullam sed ante sagittis nulla luctus blandit in vel nunc.</p>
                      </div>
                  </div>
              </div>
          </section>
          
          <section class="bg-white" id="Experience">
              <div class="container">
                  <div class="row">
                      <h1 class="col-12 text-center fw-semibold py-3">Experience</h1>
                  </div>
                  <div class="row">
                      <div class="col-12 col-md-6 px-5 py-4">
                          <i class="fa-solid fa-graduation-cap h1"></i>
                          <h3 class="ps-2 py-2 fw-semibold d-inline-block">Education</h3>
                          <div class="pb-3">
                              <h5>Master Degree, <span class="text-accent-4 fw-bold">ABC University</span></h5>
                              <p class="mb-0 py-1 fst-italic">2018 - 2020</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac eleifend eros, quis placerat tellus. Morbi vitae libero eget risus mattis euismod. </p>
                          </div>
                          <div class="pb-3">
                              <h5>Bachelor Degree, <span class="text-accent-4 fw-bold">ABC University</span></h5>
                              <p class="mb-0 py-1 fst-italic">2014 - 2018</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac eleifend eros, quis placerat tellus. Morbi vitae libero eget risus mattis euismod. </p>
                          </div>
                      </div>
                      <div class="col-12 col-md-6 px-5 py-4  border-start">
                          <i class="fa-solid fa-briefcase h1"></i>
                          <h3 class="ps-2 py-2 fw-semibold d-inline-block">Work Experience</h3>
                          <div class="pb-3">
                              <h5>Team Lead <span class="text-accent-4 fw-bold">Company XYZ</span></h5>
                              <p class="mb-0 py-1 fst-italic">2020 - present</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac eleifend eros, quis placerat tellus. Morbi vitae libero eget risus mattis euismod. </p>
                          </div>
                          <div class="pb-3">
                              <h5>Developer <span class="text-accent-4 fw-bold">Company XYZ</span></h5>
                              <p class="mb-0 py-1 fst-italic">2017 - 2020</p>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac eleifend eros, quis placerat tellus. Morbi vitae libero eget risus mattis euismod. </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          <section class="bg-light-grey" id="Skills">
              <div class="container">
                  <div class="row">
                      <h1 class="col-12 text-center fw-semibold py-3">Skills</h1>
                  </div>
                  <div class="row">
                      <div class="col-12 col-md-6 px-5 pt-4 pt-0 pt-md-4">
                          <div class="row py-3">
                              <div class="col-12 col-md-4">
                                  <h5 class="d-inline-block pe-1 pe-5">HTML</h5>
                              </div>
                              <div class="col-12 col-md-8">
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-light-grey-2 skills-circle"></span>
                                  <h5 class="d-inline-block ms-2 px-3 py-1 text-white fw-bold bg-accent-4" style="border-radius: 8px;">90%</h5>
                              </div>
                          </div>
                          <div class="row py-3">
                              <div class="col-12 col-md-4">
                                  <h5 class="d-inline-block pe-1 pe-5">JQuery</h5>
                              </div>
                              <div class="col-12 col-md-8">
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-light-grey-2 skills-circle"></span>
                              <span class="bg-light-grey-2 skills-circle"></span>
                              <h5 class="d-inline-block ms-2 px-3 py-1 text-white fw-bold bg-accent-4" style="border-radius: 8px;">80%</h5>
                          </div>
                          </div>
                          <div class="row py-3">
                              <div class="col-12 col-md-4">
                                  <h5 class="d-inline-block pe-1 pe-5">Python</h5>
                              </div>
                              <div class="col-12 col-md-8">
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-light-grey-2 skills-circle"></span>
                              <span class="bg-light-grey-2 skills-circle"></span>
                              <h5 class="d-inline-block ms-2 px-3 py-1 text-white fw-bold bg-accent-4" style="border-radius: 8px;">80%</h5>
                          </div>
                          </div>
                      </div>
                      <div class="col-12 col-md-6 px-5 pt-0 pt-md-4 pb-4">
                          <div class="row py-3">
                              <div class="col-12 col-md-4">
                                  <h5 class="d-inline-block pe-1 pe-5">Wordpress</h5>
                              </div>
                              <div class="col-12 col-md-8">
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-accent-4 skills-circle"></span>
                                  <span class="bg-light-grey-2 skills-circle"></span>
                                  <h5 class="d-inline-block ms-2 px-3 py-1 text-white fw-bold bg-accent-4" style="border-radius: 8px;">90%</h5>
                              </div>
                          </div>
                          <div class="row py-3">
                              <div class="col-12 col-md-4">
                                  <h5 class="d-inline-block pe-1 pe-5">Photoshop</h5>
                              </div>
                              <div class="col-12 col-md-8">
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-light-grey-2 skills-circle"></span>
                              <span class="bg-light-grey-2 skills-circle"></span>
                              <h5 class="d-inline-block ms-2 px-3 py-1 text-white fw-bold bg-accent-4" style="border-radius: 8px;">80%</h5>
                          </div>
                          </div>
                          <div class="row py-3">
                              <div class="col-12 col-md-4">
                                  <h5 class="d-inline-block pe-1 pe-5">Illustrator</h5>
                              </div>
                              <div class="col-12 col-md-8">
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-accent-4 skills-circle"></span>
                              <span class="bg-light-grey-2 skills-circle"></span>
                              <span class="bg-light-grey-2 skills-circle"></span>
                              <h5 class="d-inline-block ms-2 px-3 py-1 text-white fw-bold bg-accent-4" style="border-radius: 8px;">80%</h5>
                          </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          <section class="bg-white" id="Services">
              <div class="container">
                  <div class="row">
                      <h1 class="col-12 text-center fw-semibold py-3">What I do</h1>
                  </div>
                  <div class="row">
                      <div class="col-12 col-md-4 px-5 py-4">
                          <i class="fa-solid fa-code h1 text-accent-1"></i>
                          <h3 class="py-2 fw-semibold text-accent-1">Web Development</h3>
                          <p class="lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac eleifend eros, quis placerat tellus. Morbi vitae libero eget risus mattis euismod. </p>
                      </div>
                      <div class="col-12 col-md-4 px-5 py-4  border-start border-end">
                          <i class="fa-solid fa-pen-nib h1 text-accent-3"></i>
                          <h3 class="py-2 fw-semibold text-accent-3">Graphic Design</h3>
                          <p class="lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac eleifend eros, quis placerat tellus. Morbi vitae libero eget risus mattis euismod. </p>
                      </div>
                      <div class="col-12 col-md-4 px-5 py-4">
                          <i class="fa-solid fa-magnifying-glass h1 text-accent-2"></i>
                          <h3 class="py-2 fw-semibold text-accent-2">SEO Optimization</h3>
                          <p class="lh-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac eleifend eros, quis placerat tellus. Morbi vitae libero eget risus mattis euismod. </p>
                      </div>
                  </div>
              </div>
          </section>
      
          <section class="bg-light-grey" id="Portfolio">
              <div class="container">
                  <div class="row">
                      <h1 class="col-12 text-center fw-semibold py-3">My Work</h1>
                  </div>
                  <div class="row">
                      <div class="mx-auto col-10 row">
                          <div class="col-12 col-md-4">
                              <img class="w-100" style="border-radius: 12px;" src="img/portfolio-1.jpeg" alt="">
                              <h5 class="pt-3">Lorem ipsum</h5>
                              <p class="pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                          <div class="col-12 col-md-4 square">
                              <img class="w-100" style="border-radius: 12px;" src="img/portfolio-2.jpeg" alt="">
                              <h5 class="pt-3">Lorem ipsum</h5>
                              <p class="pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                          <div class="col-12 col-md-4 square">
                              <img class="w-100" style="border-radius: 12px;" src="img/portfolio-3.jpeg" alt="">
                              <h5 class="pt-3">Lorem ipsum</h5>
                              <p class="pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="mx-auto col-10 row">
                          <div class="col-12 col-md-4 square">
                              <img class="w-100" style="border-radius: 12px;" src="img/portfolio-4.jpeg" alt="">
                              <h5 class="pt-4">Lorem ipsum</h5>
                              <p class="pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                          <div class="col-12 col-md-4 square">
                              <img class="w-100" style="border-radius: 12px;" src="img/portfolio-5.jpeg" alt="">
                              <h5 class="pt-4">Lorem ipsum</h5>
                              <p class="pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                          <div class="col-12 col-md-4 square">
                              <img class="w-100" style="border-radius: 12px;" src="img/portfolio-6.jpeg" alt="">
                              <h5 class="pt-4">Lorem ipsum</h5>
                              <p class="pb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      
          <section class="bg-white" id="Contact">
              <div class="container">
                  <div class="row">
                      <h1 class="col-12 text-center fw-semibold py-3">Contact Info</h1>
                  </div>
                  <div class="row">
                      <div class="col-12 col-md-4 px-5 py-2 py-md-4">
                          <i class="fa-solid fa-phone h1 text-accent-4 d-block text-center"></i>
                          <h5 class="lh-lg text-center">+852-0000-0000</h5>
                      </div>
                      <div class="col-12 col-md-4 px-5 py-2 py-md-4">
                          <i class="fa-solid fa-at h1 text-accent-4 d-block text-center"></i>
                          <h5 class="lh-lg text-center">abc@domain.com</h5>
                      </div>
                      <div class="col-12 col-md-4 px-5 py-2 py-md-4">
                          <i class="fa-solid fa-location-dot h1 text-accent-4 d-block text-center"></i>
                          <h5 class="lh-lg text-center">Hong Kong</h5>
                      </div>
                  </div>
              </div>
          </section>
      
          <section class="p-0" id="Footer">
              <p class="text-center text-white bg-dark-grey m-0 py-4">&copy; 2022 hckkiu. All Rights Reserved.</p>
          </section>
      
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
      </body>
      </html>
    ${panelStyle}`,
    });
  
  };
  