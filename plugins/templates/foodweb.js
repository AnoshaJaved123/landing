

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  
    const bm = editor.BlockManager;
  
    const panelStyle = `<style>
    /* general*/
    *{
        font-family: "league spartan";
    }
    body {
        overflow-x: hidden;
    }
    a{
        text-decoration:none !important; 
       color:white;
    }
    h2 {
        font-size:3.5rem;
    }
    h3{
        font-size:1.5rem;
    }
    h5{
        font-size:0.5rem;
    }
    .container{
        max-width: 1080px;
    }
    
    /*nav */
    #logo {
        max-width:150px;
    }
    #navcima{
        background-color:black;
        top:0;
        position: sticky;
        z-index: 5;
    }
    
    .nav-link{
        color:white!important;
    }
    
    /* carousel*/
    #peca-agora {
      background-color:black;
      padding:50px 0 50px 0;
    }
    
    /*menu*/
    .menu{
      background-color:black;
      padding-bottom:50px;
    }
    .menu .menu-content {
      margin-top: 30px;
      overflow: hidden;
      display: flex;
      justify-content: space-between;
      position: relative;
      color:white;
    }
    .menu .menu-content::after {
      content: "......................................................................" "...................................................................." "....................................................................";
      position: absolute;
      left: 20px;
      right: 0;
      top: -4px;
      color: white;
    }
    .menu .menu-content a {
      padding-right: 10px;
      background: black;
      position: relative;
      z-index: 3;
      font-weight: 700;
      color: white;
    }
    .menu .menu-content span {
      background: black;
      position: relative;
      z-index: 3;
      padding: 0 10px;
      font-weight: 600;
    }
    .menu .menu-ingredients {
      font-style: italic;
      font-size: 14px;
      font-family: "Comic Neue", sans-serif;
      color: white;
    }
    
    .overflow-auto {
      height:300px;
      
    }
    ::-webkit-scrollbar {
        width: 12px;
    }
    
    ::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(200,200,200,0);
        border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color:rgba(0,0,0,0.5);
        -webkit-box-shadow: inset 0 0 6px rgba(200,200,200,0.5);
    }
    
    /* quem somos */
    #quem-somos {
      background-color:black;
    }
    
    .place {
      padding-bottom:50px;
    }
    .img-fluid{
      border-radius: 5px;
      display: block;
      width: 100%;
      height: auto;
    }
    .pic {
      position: relative;
    }
    
    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100%;
      width: 100%;
      opacity: 0;
      border-radius: 5px;
      transition: .5s ease;
      background-color: #F68116;
    }
    
    .place:hover .overlay {
      opacity: 0.7;
    }
    
    .subtitle{ 
      color: white;
      font-size: 1.5rem;
      font-weight:bolder;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      text-align: center;
    }
    
    /* fale conosco*/
    #contato {
      background-color:black;
      padding:50px 0 50px 0;
    }
    .title-contato{
       line-height:0;
    /*footer*/
    }
    .fa-brands {
      color:white;
    }
    .fa-brands:hover{
      color: #F68116;
    }
    
    .contact-section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      width: 100%;
      padding-top:10px;
      background: black;
      color:white;
      
    }
    .contact-links {
      display: flex;
      justify-content: center;
      width: 100%;
      max-width: 980px;
     
      flex-wrap: wrap;
      
    }
    
    .contact-details {
      font-size: 1.4rem;
      transition: transform 0.3s ease-out;
     }
    
    .contact-details:hover {
      transform: translateY(4px);
    }
    </style>
    `;
    bm.add(opts.name, {
      label: `
      <img class='labelimg' src='/foodweb.png'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
      category: opts.category,
      content: ` <html>  
      <head>
          <link rel="stylesheet" href="style.css" type="text/css">
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer"/>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
          <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@500&display=swap" rel="stylesheet">
        
          <title>Dona Ana - Pizzaria e Restaurante</title>
        </head>
      <body>
      <section id="navcima">
        <div class="container">
          <nav class="navbar navbar-expand-lg" id="nav">
            <div class="container-fluid">
              <a class="navbar-brand" href="index.html">
                <img src="https://i.ibb.co/tX84DWM/75.png" id="logo" alt="logo-dona-ana">        
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span><i class="fa-solid fa-bars text-white"></i>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#peca-agora">Peça agora</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#cardapio">Cardápio</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#quem-somos">Quem somos</a>
                  </li>
                   <li class="nav-item">
                    <a class="nav-link" href="#contato">Contato</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
      </div>
      </section>
      <section id="peca-agora">
            <div class="carousel slide carousel-fade carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="5000">
              <a href="#"> 
            <img class="d-block w-100" src="https://i.ibb.co/NjKG8yc/Salgada-ou-doce-1.png" alt="promoção">
          </a>
          </div>
          <div class="carousel-item" data-bs-interval="5000">
              <a href="#"> 
            <img class="d-block w-100" src="https://i.ibb.co/5YVxX1H/pizza2.png" alt="Segundo Slide">
            </a> 
          </div>
          <div class="carousel-item" data-bs-interval="5000">
              <a href="#"> 
            <img class="d-block w-100" src="https://i.ibb.co/rQD0G25/pizza3.png" alt="Terceiro Slide">
            </a>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        </a>
        <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        </a>
      </div>
        </div>
        </div>
      </section>
      
      <section id="menu">
           <section id="cardapio" class="menu">
            <div class="container overflow-auto">
              <div class="section-title">
                <h2 class="text-center text-white">Nosso Cardápio</span></h2>
              </div>
              <div class="row menu-container">
                <div class="col-lg-6 menu-item filter-starters">
                  <div class="menu-content">
                    <a href="#peca-agora">Quatro queijos</a><span>R$35.95</span>
                  </div>
                  <div class="menu-ingredients">
                    ingredientes, etc, ingredientes, etc,ingredientes, etc
                  </div>
                </div>
      
                <div class="col-lg-6 menu-item filter-specialty">
                  <div class="menu-content">
                    <a href="#peca-agora">Frango com catupiry</a><span>R$46.95</span>
                  </div>
                  <div class="menu-ingredients">
                    ingredientes, etc, ingredientes, etc,ingredientes, etc
                  </div>
                </div>
      
                <div class="col-lg-6 menu-item filter-starters">
                  <div class="menu-content">
                    <a href="#peca-agora">Atum</a><span>R$47.95</span>
                  </div>
                  <div class="menu-ingredients">
                   ingredientes, etc, ingredientes, etc,ingredientes, etc
                  </div>
                </div>
      
                <div class="col-lg-6 menu-item filter-salads">
                  <div class="menu-content">
                    <a href="#peca-agora">Napolitana</a><span>R$38.95</span>
                  </div>
                  <div class="menu-ingredients">
                    ingredientes, etc, ingredientes, etc,ingredientes, etc
                  </div>
                </div>
      
                <div class="col-lg-6 menu-item filter-specialty">
                  <div class="menu-content">
                    <a href="#peca-agora">Portuguesa</a><span>R$49.95</span>
                  </div>
                  <div class="menu-ingredients">
                    ingredientes, etc, ingredientes, etc,ingredientes, etc
                  </div>
                </div>
      
                <div class="col-lg-6 menu-item filter-starters">
                  <div class="menu-content">
                    <a href="#peca-agora">Lombinho canadense</a><span>R$44.95</span>
                  </div>
                  <div class="menu-ingredients">
                   ingredientes, etc, ingredientes, etc,ingredientes, etc
                  </div>
                </div>
      
                <div class="col-lg-6 menu-item filter-salads">
                  <div class="menu-content">
                    <a href="#peca-agora">Calabresa</a><span>R$39.95</span>
                  </div>
                  <div class="menu-ingredients">
                   ingredientes, etc, ingredientes, etc,ingredientes, etc
                  </div>
                </div>
      
                <div class="col-lg-6 menu-item filter-salads">
                  <div class="menu-content">
                    <a href="#peca-agora">Rúcula com tomate seco</a><span>R$59.95</span>
                  </div>
                  <div class="menu-ingredients">
                    ingredientes, etc, ingredientes, etc,ingredientes, etc
                  </div>
                </div>
      
                <div class="col-lg-6 menu-item filter-specialty">
                  <div class="menu-content">
                    <a href="#peca-agora">Camarão</a><span>R$82.95</span>
                  </div>
                  <div class="menu-ingredients">
                    ingredientes, etc, ingredientes, etc,ingredientes, etc
                  </div>
                </div>
              </div>
            </div>
          </section>
      
      <section id='quem-somos'>
            <div class="container">
              <div class="section-title text-center text-white">
                <h2>Quem Somos</h2>
                <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
             
        </div>
               <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class='place'>
                    <div class="pic"><img src="https://i.ibb.co/vZbhf8g/2.png" class="img-fluid" alt="pizza-camarao">
                      <div class="overlay">
                        <div class="subtitle">nossas pizzas</div>
                        </div>
                    </div>      
                  </div>
                 </div>
                   <div class="col-lg-4 col-md-6">
                  <div class='place'>
                    <div class="pic"><img src="https://i.ibb.co/Z6XGRmj/3.png" class="img-fluid" alt="menu-e-vinho">
                       <div class="overlay">
                        <div class="subtitle">nosso espaço</div>
                        </div>
                    </div>
                  </div>
                 </div>
                   <div class="col-lg-4 col-md-6">
                  <div class='place'>
                    <div class="pic"><img src="https://i.ibb.co/HqK3ks3/1.png" class="img-fluid" alt="clientes">
                       <div class="overlay">
                        <div class="subtitle">nossos clientes</div>
                        </div>
                    </div>
                  </div>
                 </div>
              </div>
            </div>
        </section>
      <section id='contato'>
        <div class='text-center text-white contato'>
          <h2>Fale conosco</h2><br>
        </div>
           <div class="container">
            <div class="row">
              <div class="col-12 col-md-5 text-end text-white  pt-0">
                <div class='title-contato'><h3>Dona Ana<br></h3><p>Restaurante e Pizzaria</p></div>
               <br><p>Rua Itaparica, 321, CEP 44455-555<br>(75)99466-84561</p>
                <div class='social-icons h3'>
                <a href='#'><i class="fa-brands fa-whatsapp"></i></a>
                <a href='#'><i class="fa-brands fa-instagram"></i></a>
                <a href='#'><i class="fa-brands fa-facebook"></i></a>
                </div>
              </div>
              
                  <div class="col-12 col-md-5 mb-5 mb-md-0">
                 
              <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1503.1835137858461!2d-38.952088446908625!3d-12.26345420646158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x714379f357fd365%3A0xace0cd9e28ebb694!2sIgreja%20Adventista%20do%20S%C3%A9timo%20Dia%20-%20Brasilia!5e0!3m2!1spt-BR!2sbr!4v1653333499975!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
      </section>
      <footer id="contact" class="contact-section border-top">
        <div class="contact-section-header">
   
        </div>
      
        </footer>
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </body>
      
      
    ${panelStyle}`,
    });
  
  };
  