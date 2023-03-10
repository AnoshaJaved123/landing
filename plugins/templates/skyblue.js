

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  
    const bm = editor.BlockManager;
  
    const panelStyle = `<style>
    .about {
      $cubic: cubic-bezier(0.64, 0.01, 0.07, 1.65);
      $transition: 0.6s $cubic;
      $size: 40px;
      position: fixed;
      z-index: 10;
      bottom: 10px;
      right: 10px;
      width: $size;
      height: $size;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      transition: all 0.2s ease;
   
      .bg_links {
         width: $size;
         height: $size;
         border-radius: 100%;
         display: flex;
         justify-content: center;
         align-items: center;
         background-color: rgba(#000000, 0.2);
         border-radius: 100%;
         backdrop-filter: blur(5px);
         position: absolute;
      }
   
      .logo {
         width: $size;
         height: $size;
         z-index: 9;
         background-image: url(https://rafaelavlucas.github.io/assets/codepen/logo_white.svg);
         background-size: 50%;
         background-repeat: no-repeat;
         background-position: 10px 7px;
         opacity: 0.9;
         transition: all 1s 0.2s ease;
         bottom: 0;
         right: 0;
      }
   
      .social {
         opacity: 0;
         right: 0;
         bottom: 0;
   
         .icon {
            width: 100%;
            height: 100%;
            background-size: 20px;
            background-repeat: no-repeat;
            background-position: center;
            background-color: transparent;
            display: flex;
            transition: all 0.2s ease, background-color 0.4s ease;
            opacity: 0;
            border-radius: 100%;
         }
   
         &.portfolio {
            transition: all 0.8s ease;
   
            .icon {
               background-image: url(https://rafaelavlucas.github.io/assets/codepen/link.svg);
            }
         }
   
         &.dribbble {
            transition: all 0.3s ease;
            .icon {
               background-image: url(https://rafaelavlucas.github.io/assets/codepen/dribbble.svg);
            }
         }
   
         &.linkedin {
            transition: all 0.8s ease;
            .icon {
               background-image: url(https://rafaelavlucas.github.io/assets/codepen/linkedin.svg);
            }
         }
      }
   
      &:hover {
         width: 105px;
         height: 105px;
         transition: all $transition;
   
         .logo {
            opacity: 1;
            transition: all 0.6s ease;
         }
   
         .social {
            opacity: 1;
   
            .icon {
               opacity: 0.9;
            }
   
            &:hover {
               background-size: 28px;
               .icon {
                  background-size: 65%;
                  opacity: 1;
               }
            }
   
            &.portfolio {
               right: 0;
               bottom: calc(100% - 40px);
               transition: all 0.3s 0s $cubic;
               .icon {
                  &:hover {
                     background-color: #698fb7;
                  }
               }
            }
   
            &.dribbble {
               bottom: 45%;
               right: 45%;
               transition: all 0.3s 0.15s $cubic;
               .icon {
                  &:hover {
                     background-color: #ea4c89;
                  }
               }
            }
   
            &.linkedin {
               bottom: 0;
               right: calc(100% - 40px);
               transition: all 0.3s 0.25s $cubic;
               .icon {
                  &:hover {
                     background-color: #0077b5;
                  }
               }
            }
         }
      }
   }
   
   @import url("https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900&display=swap");
   
   $font-01: "Roboto",
   sans-serif;
   
   $m-01: #7fb6ca;
   $m-02: #e7eff5;
   $g-01: linear-gradient(225deg, $m-01 0%, #c6dde2 100%);
   $g-02: linear-gradient(-225deg, $m-01 0%, #c6dde2 100%);
   
   $neu-01: #f5f5f5;
   $neu-02: #eaeaea;
   $neu-03: #d2d2d2;
   $neu-04: #b7b7b7;
   $neu-05: #9c9c9c;
   $neu-06: #404145;
   $neu-07: #1c1c1e;
   
   @mixin xl {
       @media screen and (max-width: 1440px) {
           @content;
       }
   }
   
   @mixin lg {
       @media screen and (max-width: 1240px) {
           @content;
       }
   }
   
   @mixin md {
       @media screen and (max-width: 1023px) {
           @content;
       }
   }
   
   @mixin sm {
       @media screen and (max-width: 799px) {
           @content;
       }
   }
   
   @mixin xs {
       @media screen and (max-width: 639px) {
           @content;
       }
   }
   
   @mixin xxs {
       @media screen and (max-width: 380px) {
           @content;
       }
   }
   
   h1,
   h2,
   h3,
   h4,
   h5,
   h6,
   p,
   ul,
   li,
   button,
   a,
   i {
       margin: 0;
       padding: 0;
       list-style: none;
       border: 0;
       -webkit-tap-highlight-color: transparent;
       text-decoration: none;
       color: inherit;
   
       &:focus {
           outline: 0;
       }
   }
   
   body {
       margin: 0;
       padding: 0;
       font-family: $font-01;
       overflow-x: hidden;
   
       &.no-scroll {
           overflow: hidden;
       }
   }
   
   .btn {
       min-width: 160px;
       padding: 16px 30px;
       box-shadow: inset 0px 0px 0px 1px $m-01;
       border: 0;
       background-color: white;
       color: $m-01;
       text-transform: uppercase;
       font-weight: 800;
       font-size: 14px;
       position: relative;
       letter-spacing: 0.05em;
       cursor: pointer;
       margin: auto;
       display: block;
   
       &:focus {
           outline: 0;
       }
   
       &:before {
           width: 100%;
           height: 100%;
           background-color: $m-01;
           position: absolute;
           content: "";
           z-index: -1;
           left: 0;
           top: 0;
           transition: all 0.3s ease;
           transform: translate(6px, 6px);
       }
   
       &:hover {
           &:before {
               transform: translate(0px, 0px);
           }
       }
   }
   
   // Content
   .wrapper {
   
       .section-title {
           color: $m-01;
           text-transform: uppercase;
           text-align: center;
           position: relative;
           display: flex;
           align-items: baseline;
           justify-content: center;
           font-weight: 900;
           font-size: 50px;
           line-height: normal;
           letter-spacing: 0.04em;
           height: 120px;
           grid-column: 1 / 15;
           margin-bottom: 40px;
   
           @include sm {
               font-size: 32px;
               height: 76px;
               margin-bottom: 30px;
           }
   
           b {
               font-weight: 900;
               margin: 0 10px;
   
               @include sm {
                   margin: 0 5px;
               }
           }
   
           span {
               color: transparent;
               -webkit-text-stroke: 1px $m-01;
               margin: 0 10px;
   
               @include sm {
                   margin: 0 5px;
               }
           }
   
           &:before {
               content: "";
               width: 10px;
               height: 40px;
               background-color: $neu-02;
               position: absolute;
               transform: rotate(20deg);
               bottom: 0;
   
               @include sm {
                   width: 7px;
                   height: 26px;
               }
           }
   
   
       }
   
       .module {
           display: grid;
           grid-template-columns: repeat(14, 1fr);
           grid-column-gap: 20px;
           width: 100%;
           max-width: 1920px;
           margin: auto;
   
           @include sm {
               grid-column-gap: 10px;
   
               grid-template-columns: 10px repeat(12, 1fr) 10px;
   
           }
   
           .content {
               grid-column: 3 / 13;
               width: 100%;
               display: grid;
               grid-template-columns: repeat(10, 1fr);
               grid-column-gap: 20px;
   
               @include md {
                   grid-column: 2 / 14;
               }
   
               @include sm {
                   grid-template-columns: repeat(1, 1fr);
                   grid-column: 2 / 14;
               }
           }
       }
   
       section {
           padding-top: 100px;
           padding-bottom: 100px;
   
           @include sm {
               padding-top: 40px;
               padding-bottom: 40px;
           }
       }
   }
   
   
   nav {
       .icon-menu {
           width: 48px;
           height: 48px;
           z-index: 5;
           top: 40px;
           right: 40px;
           position: fixed;
           display: flex;
           justify-content: center;
           align-items: center;
           cursor: pointer;
           transition: all 0.6s ease;
           box-shadow: inset 0px 0px 0px 0px rgba(255, 255, 255, 0.1);
           background: transparent;
   
           @include sm {
               top: 10px;
               right: 10px;
           }
   
           span {
               display: flex;
               width: 32px;
               height: 2px;
               background-color: white;
               border-radius: 6px;
               display: flex;
               justify-content: center;
               align-items: center;
               transition: all 0.4s 0.2s ease;
   
               &:before,
               &:after {
                   position: absolute;
                   width: 32px;
                   height: 2px;
                   content: '';
                   background-color: inherit;
                   transform-origin: center;
               }
   
               &:before {
                   transition: all 0.3s ease;
                   top: 14px;
               }
   
               &:after {
                   bottom: 14px;
                   transition: all 0.3s ease;
               }
   
   
           }
   
           &:hover {
               transition: all 0.6s ease;
               box-shadow: inset 0px 0px 0px 25px rgba(255, 255, 255, 0.2);
   
               span {
                   &:before {
                       top: 11px;
                   }
   
                   &:after {
                       bottom: 11px;
                   }
               }
   
               @include sm {
                   box-shadow: none;
               }
           }
   
           &.icon-open {
               span {
                   width: 0;
                   transition: all 0.4s 0.2s ease;
   
                   &:before {
                       transition: all 0.4s 0.2s ease;
                       top: 22px;
                       transform: rotate(45deg);
                   }
   
                   &:after {
                       transition: all 0.4s 0.3s ease;
                       bottom: 23px;
                       transform: rotate(-45deg);
                   }
               }
           }
   
           &.sticky {
               transition: all 0.6s ease;
               background: $g-01;
               position: fixed;
           }
   
       }
   
       .main-nav {
           display: none;
   
           .menu {
               width: 100vw;
               height: 100vh;
               position: fixed;
               top: 0;
               z-index: 4;
               display: flex;
               justify-content: center;
               align-items: center;
   
               &:before,
               &:after {
                   content: '';
                   position: absolute;
                   width: 100vw;
                   height: 100%;
                   top: 0;
                   left: 0;
               }
   
               &:before {
                   background-color: white;
                   z-index: 2;
                   opacity: 0.8;
                   box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
               }
   
               &:after {
                   background: $g-01;
                   z-index: 3;
               }
   
               .menu-items {
                   z-index: 5;
   
                   .item {
                       color: $m-01;
                       text-transform: uppercase;
                       text-align: center;
                       position: relative;
                       display: flex;
                       align-items: center;
                       justify-content: center;
                       font-weight: 900;
                       font-size: 50px;
                       line-height: normal;
                       letter-spacing: 0.04em;
                       color: transparent;
                       -webkit-text-stroke: 1px white;
                       z-index: 5;
                       padding: 10px;
                       transition: all 0.4s ease;
                       cursor: pointer;
                       position: relative;
   
                       @include sm {
                           font-size: 40px;
                       }
   
                       &:before {
                           content: '';
                           position: absolute;
                           width: 0%;
                           height: 60%;
                           transition: width 0.6s ease, opacity 2s ease;
                           z-index: -1;
                           opacity: 0;
                           background: $m-01;
   
                           @include sm {
                               display: none;
                           }
                       }
   
   
                       &:hover {
                           color: white;
   
                           @include sm {
                               color: transparent;
                           }
                       }
   
   
                   }
               }
   
   
           }
   
           &.menu-open {
               display: block;
   
               .menu {
                   &:before {
                       animation: menuOpen 1s ease both;
                   }
   
                   &:after {
                       animation: menuOpen 0.6s 0.3s ease both;
                   }
   
                   @keyframes menuOpen {
                       0% {
                           transform: translateY(-100%);
                       }
   
                       100% {
                           transform: translateY(0%);
                       }
                   }
   
                   .menu-items {
                       .item {
                           animation: itemMenu 0.4s 0.6s ease both;
   
                           @keyframes itemMenu {
                               0% {
                                   transform: translateY(-50px);
                                   opacity: 0;
                               }
   
                               100% {
                                   transform: translateY(0);
                                   opacity: 1;
                               }
                           }
   
                           &:nth-child(1) {
                               animation-delay: 0.6s;
   
                               &:before {
                                   transform: translate(15px, -20px);
                               }
                           }
   
                           &:nth-child(2) {
                               animation-delay: 0.8s;
   
                               &:before {
                                   transform: translate(-50px, -12px);
                               }
                           }
   
                           &:nth-child(3) {
                               animation-delay: 1s;
   
                               &:before {
                                   transform: translate(28px, -14px);
                               }
                           }
   
                           &:nth-child(4) {
                               animation-delay: 1.2s;
   
                               &:before {
                                   transform: translate(-24px, -17px);
                               }
                           }
   
                           &:hover {
                               &:before {
                                   opacity: 1;
                                   width: 80%;
                                   height: 60%;
                               }
   
                               &:nth-child(2) {
                                   &:before {
                                       width: 50%;
                                   }
                               }
   
                               &:nth-child(3) {
                                   &:before {
                                       width: 60%;
                                   }
                               }
                           }
                       }
                   }
               }
           }
   
           &.menu-close {
               .menu {
   
                   &:before {
                       animation: menuClose 0.6s 0.3s ease both;
                   }
   
                   &:after {
                       animation: menuClose 0.6s ease both;
                   }
   
                   @keyframes menuClose {
                       0% {
                           transform: translateY(0%);
                       }
   
                       100% {
                           transform: translateY(-100%);
                       }
                   }
   
                   .menu-items {
                       .item {
                           animation: itemClose 0.4s ease both;
   
   
                           &:nth-child(1),
                           &:nth-child(2),
                           &:nth-child(3),
                           &:nth-child(4) {
                               animation-delay: 0s;
                           }
   
                           @keyframes itemClose {
                               0% {
                                   transform: translateY(0px);
                                   opacity: 1;
                               }
   
                               100% {
                                   transform: translateY(-100%);
                                   opacity: 0;
                               }
                           }
                       }
                   }
               }
           }
       }
   }
   
   
   // Header
   header {
       width: 100%;
       background-image: $g-02;
   
       .main-heading {
           width: 100%;
           max-width: 1920px;
           margin: 0 auto;
           display: grid;
           grid-template-columns: repeat(14, 1fr);
           grid-column-gap: 20px;
           position: relative;
           transition: all 0.4s ease;
   
           @include sm {
               grid-template-columns: 10px repeat(12, 1fr) 10px;
               grid-column-gap: 10px;
           }
   
           &:before {
               content: "";
               position: absolute;
               width: 100vw;
               height: calc(100% + 50px);
               background-image: $g-01;
               grid-column-start: 3;
               transition: all 0.4s ease;
   
               @include md {
                   grid-column-start: 2;
               }
   
               @include sm {
                   width: 100%;
                   grid-column-end: 15;
                   height: calc(100% + 20px);
               }
           }
   
           article {
               grid-column-start: 3;
               position: absolute;
               z-index: 2;
               color: white;
               margin-top: 70px;
   
               @include md {
                   grid-column-start: 2;
               }
   
               @include sm {
                   grid-column-start: 2;
                   margin-top: 40px;
               }
   
               .site-title {
                   font-size: 144px;
                   font-weight: 800;
                   text-transform: uppercase;
                   color: transparent;
                   -webkit-text-stroke: 2px white;
   
                   @include sm {
                       font-size: 68px;
                       -webkit-text-stroke: 1px white;
                   }
               }
           }
   
           .slide-container {
               width: 100%;
               height: 680px;
               grid-column: 4 / 13;
               position: relative;
               box-sizing: border-box;
               display: grid;
               grid-template-columns: repeat(9, 1fr);
               grid-column-gap: 20px;
   
               @include md {
                   grid-column: 3 / 14;
               }
   
               @include sm {
                   height: 400px;
               }
   
               .slide-wrapper {
                   display: grid;
                   grid-template-columns: repeat(9, 1fr);
                   grid-column-gap: 20px;
                   grid-column: 1 / 10;
   
                   .slide {
                       display: flex;
                       justify-content: center;
                       align-items: center;
                       background-color: $m-01;
                       grid-column: 1 / 9;
                       visibility: hidden;
                       overflow: hidden;
                       height: 480px;
                       position: absolute;
                       transition: all 0.4s ease;
                       z-index: 1;
   
                       @include sm {
                           grid-column: 1 / 10;
                       }
   
                       &.active {
                           opacity: 1;
                           visibility: visible;
                           height: 480px;
                           transition: all 0.4s ease;
                           top: 160px;
                           background-color: $m-01;
   
                           @include sm {
                               height: 300px;
                               top: 80px;
                           }
                       }
   
                       &.next {
                           transition: all 0.4s ease;
                           width: 260px;
                           height: 160px;
                           opacity: 1;
                           grid-column-end: 10;
                           visibility: visible;
                           position: absolute;
                           right: 0;
                           bottom: -50px;
   
                           @include sm {
                               display: none;
                           }
                       }
   
                       img {
                           object-fit: cover;
                           width: 100%;
                           height: 100%;
                       }
   
                       &.anime-in {
                           &:before {
                               content: "";
                               width: 100%;
                               height: 100%;
                               position: absolute;
                               background-image: $g-02;
                               animation: anime-in-before 0.6s ease both;
   
                               @keyframes anime-in-before {
                                   0% {
                                       transform: translateX(101%);
                                   }
                               }
                           }
   
                           img {
                               animation: anime-in 0.6s 0.4s ease both;
                               z-index: 1;
   
                               @keyframes anime-in {
                                   0% {
                                       transform: translateX(101%);
                                   }
                               }
                           }
                       }
   
                       &.anime-next-in {
                           img {
                               animation: anime-next-in 0.4s 0.2s ease both;
                               z-index: 1;
   
                               @keyframes anime-next-in {
                                   0% {
                                       transform: translateX(101%);
                                   }
                               }
                           }
                       }
   
                       &.anime-out {
                           &:before {
                               content: "";
                               width: 100%;
                               height: 100%;
                               position: absolute;
                               background-image: $g-02;
                               animation: anime-out-before 0.6s ease both;
   
                               @keyframes anime-out-before {
                                   0% {
                                       transform: translateX(-101%);
                                   }
                               }
                           }
   
                           img {
                               animation: anime-out 0.6s 0.4s ease both;
                               z-index: 1;
   
                               @keyframes anime-out {
                                   0% {
                                       transform: translateX(-101%);
                                   }
                               }
                           }
                       }
   
                       &.anime-next-out {
                           img {
                               animation: anime-next-out 0.4s 0.2s ease both;
                               z-index: 1;
   
                               @keyframes anime-next-out {
                                   0% {
                                       transform: translateX(-101%);
                                   }
                               }
                           }
                       }
                   }
               }
   
               .slide-arrows {
                   position: absolute;
                   right: 0;
                   display: flex;
                   flex-direction: column;
                   bottom: 180px;
                   width: 60px;
                   height: 200px;
                   justify-content: center;
                   align-items: center;
   
                   @include sm {
                       display: none;
                   }
   
                   .button-prev,
                   .button-next {
                       bottom: 0;
                       top: initial;
                       width: 60px;
                       height: 60px;
                       position: initial;
                       margin-top: 0;
                       transition: all 0.4s ease;
                       box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 1);
                       background-size: 24px;
                       background-repeat: no-repeat;
                       background-position: center;
                       cursor: pointer;
   
                       &:focus {
                           outline: 0;
                       }
   
                       &:hover {
                           box-shadow: inset 0px 0px 0px 1px rgba(255, 255, 255, 1),
                               inset 0px 0px 0px 6px rgba(255, 255, 255, 0.2);
                           //background-color: rgba(255,255,255,0.2);
                       }
                   }
   
                   .button-prev {
                       background-image: url(https://rafaelavlucas.github.io/assets/icons/white/icon-13.svg);
                   }
   
                   .button-next {
                       background-image: url(https://rafaelavlucas.github.io/assets/icons/white/icon-15.svg);
                       margin-top: 20px;
                   }
               }
   
               .slide-bullets {
                   bottom: -50px;
                   height: 80px;
                   width: calc(100% - 280px);
                   position: initial;
                   display: flex;
                   justify-content: flex-end;
                   align-items: flex-end;
                   position: absolute;
                   grid-column-start: 1;
   
                   @include sm {
                       width: 100%;
                       bottom: -20px;
                   }
   
                   .bullet {
                       background-color: transparent;
                       opacity: 1;
                       box-shadow: inset 0px 0px 0px 1px white;
                       width: 8px;
                       height: 30px;
                       transition: all 0.4s ease;
                       margin: 0 10px;
   
                       @include sm {
                           width: 6px;
                           height: 20px;
                           margin: 0 6px;
                       }
   
                       &.selected {
                           box-shadow: inset 0px 0px 0px 1px white,
                               inset 0px -60px 0px 0px white;
                           height: 40px;
   
                           @include sm {
                               height: 30px;
                           }
                       }
   
   
                   }
               }
           }
       }
   }
   
   
   // modules
   .tour-list {
       padding-top: 150px !important;
   
       @include sm {
           padding-top: 60px !important;
       }
   
       &:before {
           content: "";
           position: absolute;
           width: 6%;
           max-width: 120px;
           height: 500px;
           border: 1px solid $m-01;
           right: 0;
           transform: translatey(-200px);
           animation: beforeShape1 6s ease infinite alternate both;
   
           @keyframes beforeShape1 {
               0% {
                   transform: translate(50px, -200px);
               }
   
               100% {
                   transform: translate(0px, -280px);
               }
           }
   
           @include md {
               display: none;
           }
       }
   
       .content {
           width: 100%;
           margin: auto;
   
           .shows {
               margin-bottom: 60px;
               grid-column: 1 / 11;
   
               @include sm {
                   margin-bottom: 40px;
               }
   
               li {
                   display: grid;
                   grid-template-columns: auto 3fr 2fr auto;
                   grid-column-gap: 4%;
                   text-transform: uppercase;
                   font-family: $font-01;
                   font-size: 16px;
                   letter-spacing: 0.3px;
                   font-weight: 600;
                   align-items: center;
                   padding: 20px 10px;
                   border-bottom: 1px solid $m-02;
                   grid-template-areas: "date place country buttons";
                   transition: all 0.6s ease;
                   cursor: default;
   
   
   
                   @include lg {
                       grid-template-columns: 2fr 1fr;
                       grid-template-areas:
                           "date date date"
                           "place country buttons";
                       grid-row-gap: 20px;
                   }
   
                   @include md {
                       grid-template-columns: auto 1fr auto;
                       grid-template-areas:
                           "date place place"
                           ". country buttons";
                       grid-row-gap: 20px;
                   }
   
                   @include sm {
                       padding: 20px 0 20px 0;
                       grid-template-columns: 1fr 1fr;
                       grid-template-areas:
                           "date ."
                           "place country"
                           "buttons buttons";
   
                       &:first-child {
                           padding: 0px 0 20px 0;
                       }
                   }
   
                   @include xs {
                       grid-template-columns: 1fr;
                       grid-template-areas:
                           "date ."
                           "place place"
                           "country country"
                           "buttons buttons";
                   }
   
                   &:hover {
                       background-color: rgba(231, 239, 245, 0.5);
   
                       @include sm {
                           background-color: transparent;
                       }
                   }
   
                   date {
                       color: $m-01;
                       grid-area: date;
                   }
   
                   .place {
                       color: $neu-06;
                       grid-area: place;
                   }
   
                   .country {
                       color: $neu-04;
                       font-weight: normal;
                       grid-area: country;
                   }
   
                   .button-container {
                       display: flex;
                       grid-area: buttons;
   
                       .btn-rsvp,
                       .btn-buy {
                           font-style: normal;
                           font-weight: 600;
                           font-size: 14px;
                           line-height: 16px;
                           letter-spacing: 0.05em;
                           text-transform: uppercase;
                           font-family: $font-01;
                           box-shadow: inset 0px 0px 0px 1px $m-01;
                           color: $m-01;
                           background-color: transparent;
                           padding: 8px 16px;
                           transition: all 0.6s ease;
                           border: 0;
                           cursor: pointer;
   
                           &:hover {
                               box-shadow: inset 0px 0px 0px 1px $m-01,
                                   inset 0px -40px 0px $m-01;
                               color: white;
                           }
                       }
   
                       .btn-rsvp {
                           color: $neu-05;
                           box-shadow: inset 0px 0px 0px 1px $neu-05;
                           margin-right: 10px;
   
                           &:hover {
                               box-shadow: inset 0px 0px 0px 1px $neu-05,
                                   inset 0px -40px 0px $neu-05;
                               color: white;
                           }
                       }
                   }
               }
           }
   
           a {
               grid-column: 1 / 11;
           }
       }
   }
   
   .videos {
       position: relative;
   
       &:before {
           content: "";
           position: absolute;
           width: 16%;
           max-width: 390px;
           height: 630px;
           background-color: $m-01;
           left: 0;
           animation: beforeShape2 6s ease infinite alternate both;
   
           @keyframes beforeShape2 {
               0% {
                   transform: translate(-50px, 0px);
               }
   
               100% {
                   transform: translate(0px, 50px);
               }
           }
   
   
           @include md {
               display: none;
           }
       }
   
       .content {
   
           display: grid;
           grid-template-columns: repeat(3, 1fr);
   
           @include sm {
               grid-template-columns: 1fr
           }
   
           .video-item {
               background-color: $m-01;
               height: 430px;
               overflow: hidden;
               display: flex;
               justify-content: center;
               align-items: center;
               position: relative;
               cursor: pointer;
               width: calc(100% - 1px);
   
               &:last-child {
                   width: 100%;
               }
   
               @include xl {
                   height: 320px;
               }
   
               @include md {
                   height: 240px;
               }
   
               @include sm {
                   width: 100%;
                   height: 200px;
                   margin-bottom: 1px;
               }
   
   
   
               img {
                   width: 100%;
                   height: 100%;
                   object-fit: cover;
                   filter: grayscale(100%);
                   -webkit-filter: grayscale(100%);
                   transition: all 0.8s ease-out;
               }
   
               .video-title {
                   position: absolute;
                   z-index: 3;
                   color: transparent;
                   -webkit-text-stroke: 1px white;
                   font-weight: 900;
                   font-size: 40px;
                   letter-spacing: 1.5px;
                   text-transform: uppercase;
                   transition: all 0.6s ease;
                   width: 80%;
                   text-align: center;
                   height: 100px;
                   display: flex;
                   justify-content: center;
                   align-items: center;
   
                   @include lg {
                       font-size: 28px;
                   }
               }
   
               .video-icon {
                   position: absolute;
                   opacity: 0;
                   color: white;
                   transition: all 0.4s ease;
                   z-index: 3;
                   transform: translateY(100px);
                   width: 32px;
                   height: 32px;
                   display: block;
                   background-image: url(https://rafaelavlucas.github.io/assets/icons/white/icon-179.svg);
   
                   @include sm {
                       transform: translateY(80px);
                   }
               }
   
               &:before,
               &:after {
                   content: '';
                   width: 100%;
                   height: 100%;
                   position: absolute;
                   top: 0;
                   transition: all 0.6s ease;
   
               }
   
               &:before {
                   background-color: $neu-06;
                   opacity: 0.8;
                   z-index: 1;
   
               }
   
               &:after {
                   background-color: $m-01;
                   opacity: 0.2;
                   z-index: 2;
               }
   
               &:hover {
   
                   .video-title {
                       color: white;
                       transform: translateY(-10px);
                   }
   
                   .video-icon {
                       opacity: 1;
                       transform: translateY(60px);
   
                       @include sm {
                           transform: translateY(40px);
                       }
                   }
   
   
                   img {
                       transform: scale(1.2);
                   }
   
                   &:before {
                       opacity: 0.4;
                   }
   
                   &:after {
                       opacity: 0.8;
                   }
   
               }
           }
       }
   
       .modal-video {
           z-index: 5;
           position: fixed;
           width: 100vw;
           height: 100vh;
           top: 0;
           left: 0;
           visibility: hidden;
   
           &:before,
           &:after {
               content: '';
               width: 100%;
               height: 100%;
               position: absolute;
               top: 0;
               transition: all 0.4s ease;
               opacity: 0;
           }
   
           &:before {
               background-color: $neu-06;
           }
   
           &:after {
               background-color: $m-01;
               z-index: -1;
           }
   
           .wrapper-video {
               width: calc(80vw - 80px);
               max-width: 1280px;
               height: calc(80vh - 80px);
               background-color: white;
               position: absolute;
               top: calc(50% + 100px);
               left: 50%;
               transform: translate(-50%, -50%) perspective(100em) rotateX(20deg);
               transition: all 0.4s ease;
               opacity: 0;
               display: flex;
               justify-content: center;
               align-items: center;
   
               @include sm {
                   width: initial;
                   height: initial;
               }
   
   
               .close-video {
                   width: 32px;
                   height: 32px;
                   position: fixed;
                   background-image: url(https://rafaelavlucas.github.io/assets/icons/gray1/icon-61.svg);
                   right: 40px;
                   top: 40px;
                   cursor: pointer;
                   transition: all 0.4s ease;
   
                   &:hover {
                       transform: rotate(90deg);
                   }
   
                   @include sm {
                       right: 20px;
                       top: 20px;
                   }
               }
   
               .video-container {
                   width: calc(100% - 80px);
                   max-width: 820px;
                   margin: auto;
   
                   @include sm {
                       width: calc(100% - 40px);
                   }
   
                   .video-code {
                       position: relative;
                       padding-bottom: 56.25%;
                       padding-top: 30px;
                       height: 0;
                       overflow: hidden;
   
                       iframe {
                           transform: translateY(50px);
                           opacity: 0;
                           transition: all 0.6s ease;
                           position: absolute;
                           top: 0;
                           left: 0;
                           width: 100%;
                           height: 100%;
                       }
                   }
               }
           }
   
           &.video-open {
               transition: all 0.6s ease;
               visibility: visible;
   
               &:before {
                   opacity: 0.8;
               }
   
               &:after {
                   opacity: 0.2;
               }
   
               .wrapper-video {
                   width: 90vw;
                   height: 80vh;
                   opacity: 1;
                   top: 50%;
                   transform: translate(-50%, -50%) perspective(0em) rotateX(0deg);
   
                   @include sm {
                       width: calc(100% - 40px);
                       height: auto;
                       padding: 80px 0;
                   }
   
                   .video-container {
                       .video-code {
                           iframe {
                               transform: translateY(0px);
                               background-color: $m-01;
                               transition: all 0.4s 0.4s ease;
                               opacity: 1;
                           }
                       }
                   }
   
               }
           }
   
       }
   }
   
   .album {
   
   
       &:before {
           content: "";
           position: absolute;
           width: 20%;
           //max-width: 440px;
           height: 520px;
           border: 1px solid $m-01;
           right: 0;
           animation: beforeShape3 6s ease infinite alternate both;
   
           @keyframes beforeShape3 {
               0% {
                   transform: translate(50px, 50px);
               }
   
               100% {
                   transform: translate(0px, -50px);
               }
           }
   
   
           @include md {
               display: none;
           }
       }
   
       .content {
           grid-template-rows: auto auto auto;
           //grid-template-areas: "cover cover cover cover""button tracks";
   
           @include sm {
               justify-items: center;
               grid-template-columns: 1fr;
               width: 100%;
           }
   
           .cover {
               grid-column: 1 / 5;
               grid-row: 1 / 2;
               z-index: 1;
               height: fit-content;
   
               @include sm {
                   grid-column: 1;
                   width: 100%;
                   height: 200px;
   
               }
   
   
               .cover-img {
                   width: 100%;
                   padding-bottom: 100%;
                   overflow: hidden;
                   position: relative;
                   display: flex;
                   justify-content: center;
   
                   @include sm {
                       width: 100%;
                       height: 200px;
                       padding: 0;
                   }
   
                   img {
                       width: 100%;
                       height: 100%;
                       object-fit: cover;
                       position: absolute;
   
                       @include sm {
                           width: 200px;
                           height: 200px;
                       }
   
   
                   }
               }
           }
   
           .tracks {
   
               grid-column: 3 / 11;
               grid-row: 1 / 3;
               transform: translateY(50px);
               position: relative;
               display: grid;
               grid-template-columns: repeat(8, 1fr);
               grid-column-gap: 20px;
               //grid-area: tracks;
   
               @include sm {
                   width: 100%;
                   grid-column: 1;
                   grid-template-columns: 1fr;
               }
   
               &:before {
                   width: 100%;
                   height: 100%;
                   content: '';
                   position: absolute;
                   background-image: $g-01;
                   opacity: 0.5;
                   z-index: -1;
               }
   
               .tracklist {
                   grid-column: 3 / 9;
                   padding: 80px 0;
                   z-index: 1;
                   padding-right: 20px;
   
   
                   @include md {
                       grid-column: 3 / 9;
                   }
   
                   @include sm {
                       padding: 190px 0 40px 0;
                       grid-column: 1;
                   }
   
                   li {
                       display: flex;
                       justify-content: space-between;
                       align-items: center;
                       text-transform: uppercase;
                       font-family: $font-01;
                       font-size: 14px;
                       line-height: 20px;
                       letter-spacing: 0.3px;
                       font-weight: 600;
                       padding: 0px 20px;
                       height: 45px;
                       transition: all 0.6s ease;
                       position: relative;
                       margin: 0 10%;
                       cursor: default;
   
                       @include lg {
                           margin: 0 6%;
                       }
   
                       @include md {
                           margin: 0;
                       }
   
                       @include sm {
                           margin: 0 10%;
                           padding: 0px;
                       }
   
                       @include xs {
                           margin: 0 20px;
                           font-size: 12px;
                       }
   
                       article {
                           display: flex;
                       }
   
   
                       p {
                           color: $neu-06;
                           transition: all 0.2s ease;
                       }
   
                       span {
                           margin-right: 20px;
                           color: $m-01;
                           transition: all 0.2s ease;
   
                           @include sm {
                               margin-right: 10px;
                           }
                       }
   
                       small {
                           font-size: 12px;
                           color: $neu-04;
                           font-weight: normal;
                           margin-left: 10px;
                           line-height: 20px;
                           letter-spacing: 0.05em;
                           transition: all 0.4s ease;
   
                           @include sm {
                               font-size: 12px;
                               margin-left: 10px;
                           }
   
                           @include xxs {
                               display: none;
                           }
                       }
   
                       .icons {
                           display: flex;
   
                           i {
                               width: 20px;
                               height: 20px;
                               background-image: url(https://rafaelavlucas.github.io/assets/icons/white/icon-13.svg);
                               display: block;
                               margin-left: 20px;
                               opacity: 0;
                               transition: all 0.4s ease;
                               transform: translateX(20px);
                               cursor: pointer;
   
                               &:first-child {
                                   margin-left: 0;
                               }
   
                               @include sm {
                                   opacity: 0.6;
                                   transform: translateX(0px);
                               }
                           }
   
                           .like {
                               background-image: url(https://rafaelavlucas.github.io/assets/icons/white/icon-123.svg);
   
                               @include sm {
                                   background-image: url(https://rafaelavlucas.github.io/assets/icons/gray1/icon-123.svg);
                               }
   
                           }
   
                           .play {
                               background-image: url(https://rafaelavlucas.github.io/assets/icons/white/icon-179.svg);
   
                               @include sm {
                                   background-image: url(https://rafaelavlucas.github.io/assets/icons/gray1/icon-179.svg);
                               }
                           }
                       }
   
                       &:hover {
                           background-color: $m-01;
                           box-shadow: inset 0px -1px 0px white;
   
                           p {
                               color: white;
                           }
   
                           span {
                               color: $m-02;
                           }
   
                           small {
                               color: $neu-02;
                           }
   
                           i {
                               opacity: 0.5;
                               transform: translateX(0px);
   
                               &:hover {
                                   opacity: 1;
                               }
                           }
   
                           @include sm {
                               background-color: transparent;
                               box-shadow: none;
   
                               span {
                                   color: $m-01;
                               }
   
                               p {
                                   color: $neu-06;
                               }
   
                               small {
                                   color: $neu-04;
                               }
                           }
                       }
                   }
               }
           }
   
           .button-container {
               grid-row: 2 / 4;
               grid-column: 1 / 5;
               margin-top: 30px;
               z-index: 2;
               //grid-area: button;
   
               @include sm {
                   grid-row: 3;
                   grid-column: 1;
               }
           }
       }
   
   }
   
   .follow {
       position: relative;
   
       &:before,
       &:after {
           content: "";
           position: absolute;
           width: 40%;
           height: 300px;
           background-color: $m-02;
           left: 0;
           bottom: 0;
           animation: beforeShape5 6s 1s ease infinite alternate both;
   
   
           @keyframes beforeShape5 {
               0% {
                   transform: translate(-60%, 50px);
               }
   
               100% {
                   transform: translate(-50%, -50px);
               }
           }
   
   
           @include md {
               display: none;
           }
       }
   
       &:after {
           z-index: -1;
           left: initial;
           width: 100%;
           grid-column: 12 / 14;
           right: 0;
           top: 0;
           height: 400px;
           animation: beforeShape6 6s 1s ease infinite alternate both;
   
           @keyframes beforeShape6 {
               0% {
                   transform: translate(0px, 150px);
               }
   
               100% {
                   transform: translate(50px, 180px);
               }
           }
       }
   
       .content {
   
   
           @include sm {
               grid-template-columns: repeat(1, 1fr);
               grid-row-gap: 10px;
           }
   
           .newsletter,
           .social {
               overflow: hidden;
               position: relative;
               height: 360px;
               display: flex;
               justify-content: center;
               align-items: center;
   
               @include md {
                   height: 280px;
               }
   
               @include md {
                   height: 200px;
               }
   
   
               img {
                   width: 100%;
                   height: 100%;
                   object-fit: cover;
                   filter: grayscale(100%);
                   -webkit-filter: grayscale(100%);
               }
   
               .social-title {
                   position: absolute;
                   z-index: 3;
                   color: transparent;
                   -webkit-text-stroke: 1px white;
                   font-weight: 900;
                   font-size: 40px;
                   letter-spacing: 1.5px;
                   text-transform: uppercase;
                   transition: all 0.6s ease;
   
   
                   @include lg {
                       font-size: 28px;
                   }
   
   
               }
   
               &:before,
               &:after {
                   width: 100%;
                   height: 100%;
                   position: absolute;
                   content: '';
                   background-color: $m-01;
                   z-index: 1;
                   left: 0;
                   top: 0;
                   transition: all 0.4s ease;
               }
   
               &:before {
                   mix-blend-mode: multiply;
               }
   
               &:after {
                   opacity: 0.6;
                   z-index: 2;
               }
   
               &:hover {
                   &:after {
                       opacity: 0.8;
   
                       @include sm {
                           opacity: 0.6;
                       }
                   }
   
                   .social-title {
                       color: white;
   
                       @include sm {
                           color: transparent;
                       }
                   }
               }
           }
   
           .newsletter {
               grid-column: 1 / 6;
               background-color: $m-01;
   
               @include sm {
                   grid-column: 1;
               }
   
               .social-title {
                   left: 40px;
                   top: 20px;
   
                   @include sm {
                       left: 20px;
                   }
               }
   
               .form {
                   z-index: 3;
                   position: absolute;
                   width: 100%;
                   padding: 0 10%;
                   box-sizing: border-box;
   
                   @include sm {
                       padding: 0 20px;
                   }
   
                   input {
                       width: 100%;
                       background-color: transparent;
                       color: white;
                       border: 0;
                       box-shadow: inset 0px -2px 0px white;
                       padding: 10px 40px 10px 10px;
                       text-transform: uppercase;
                       font-weight: 900;
                       font-size: 18px;
                       letter-spacing: 0.05em;
                       box-sizing: border-box;
   
                       &:focus {
                           outline: 0;
                       }
   
                       &::placeholder {
                           color: white;
                           text-transform: uppercase;
                           font-weight: 900;
                           font-size: 18px;
                           opacity: 0.5;
                           letter-spacing: 0.05em;
   
                           @include sm {
                               font-size: 14px;
                           }
                       }
   
                       @include sm {
                           font-size: 14px;
                       }
                   }
   
                   .send {
                       width: 24px;
                       height: 24px;
                       position: absolute;
                       z-index: 3;
                       right: 10%;
                       top: 0;
                       transition: all 0.4s ease;
                       background-image: url(https://rafaelavlucas.github.io/assets/icons/white/icon-12.svg);
                       transform: translate(-10px, 5px);
                       cursor: pointer;
   
                       @include sm {
                           right: 20px;
                           transform: translate(-10px, 5px);
                       }
   
                       &:hover {
                           transform: translate(0px, 5px);
                       }
                   }
               }
           }
   
           .social {
               grid-column: 6 / 11;
               background-color: $m-02;
               transform: translateY(50px);
               position: relative;
   
               @include sm {
                   grid-column: 1;
                   transform: translateY(0px);
               }
   
               .social-title {
                   right: 40px;
                   top: 20px;
                   cursor: default;
   
                   @include sm {
                       right: 20px;
                   }
               }
   
               .social-icons {
                   z-index: 3;
                   position: absolute;
                   width: 100%;
                   display: flex;
                   justify-content: center;
   
   
                   .network {
                       margin: 0 5%;
                       cursor: pointer;
                       position: relative;
                       display: flex;
                       justify-content: center;
   
                       @include md {
                           margin: 0 4%;
                       }
   
                       @include sm {
                           margin: 0 5%;
                       }
   
                       img {
                           width: 48px;
                           height: 48px;
                           transition: all 0.4s ease;
   
                           @include md {
                               width: 40px;
                               height: 40px;
                           }
   
                           @include sm {
                               width: 32px;
                               height: 32px;
                           }
                       }
   
                       .social-name {
                           opacity: 0;
                           font-size: 14px;
                           color: $m-02;
                           text-transform: uppercase;
                           font-weight: 500;
                           letter-spacing: 1px;
                           position: absolute;
                           bottom: 0;
                           transition: all 0.4s ease;
                           transform: translateY(60px);
   
                           @include sm {
                               display: none;
                           }
   
                       }
   
                       &:hover {
   
                           img {
                               transform: translateY(-10px);
   
                               @include sm {
                                   transform: translateY(0px);
                               }
                           }
   
                           .social-name {
                               transform: translateY(30px);
                               opacity: 0.8;
   
                           }
   
                       }
                   }
   
               }
           }
   
   
       }
   }
   
   footer {
       padding-top: 200px;
   
       @include sm {
           padding-top: 30px;
       }
   
       .content {
           background-color: $neu-06;
           width: 100%;
           height: 290px;
           position: relative;
           display: grid;
           grid-template-columns: repeat(14, 1fr);
           grid-column-gap: 20px;
           justify-content: center;
           align-items: center;
   
           @include sm {
               grid-template-columns: 10px repeat(12, 1fr) 10px;
               grid-column-gap: 10px;
               height: 180px;
           }
   
           &:after {
               content: '';
               position: absolute;
               width: 100%;
               height: 100%;
               border: solid 1px $m-01;
               grid-column: 2 / 14;
               transform: translateY(-50px);
   
               @include sm {
                   transform: translateY(-20px);
               }
           }
   
           article {
               grid-column: 3/13;
               text-transform: uppercase;
               letter-spacing: 1px;
               z-index: 3;
   
               .text {
   
                   color: $m-01;
                   text-align: center;
                   font-weight: 500;
                   font-size: 14px;
                   line-height: 22px;
   
               }
   
               .credits {
                   display: block;
                   color: $neu-05;
                   text-align: center;
                   margin-top: 20px;
   
                   font-size: 12px;
   
   
                   a {
                       color: white;
                       text-decoration: none;
                       cursor: pointer;
                       position: relative;
                       transition: all 0.4s ease;
                       padding: 0 2px;
   
   
                       &:before {
                           content: '';
                           position: absolute;
                           width: 100%;
                           height: 0%;
                           background: $g-01;
                           grid-column: 2 / 14;
                           transform: translateY(5px);
                           left: 0;
                           bottom: 0;
                           transition: all 0.4s ease;
                           z-index: -1;
                       }
   
                       span {
                           display: inline-block;
                       }
   
   
                       &:hover {
                           color: $neu-06;
   
                           &:before {
                               height: 100%;
                               transform: translateY(0px);
                               opacity: 1;
                           }
                       }
                   }
               }
           }
       }
   }
    
 
    </style>
    `;
    bm.add(opts.name, {
      label: `
      <img class='labelimg' src='/green.png'/>
      <div class="gjs-block-label">
        ${opts.label}
      </div> 
      `,
      category: opts.category,
      content: `
      <!-- about -->
      <div class="about">
         <a class="bg_links social portfolio" href="https://www.rafaelalucas.com/dailyui" target="_blank">
            <span class="icon"></span>
         </a>
         <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
            <span class="icon"></span>
         </a>
         <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
            <span class="icon"></span>
         </a>
         <a class="bg_links logo"></a>
      </div>
      <!-- end about -->
      
      <nav>
         <i class="icon-menu">
                  <span></span>
              </i>
      
         <div class="main-nav">
            <div class="menu">
               <div class="menu-items">
                  <a href="https://www.facebook.com/pg/angeleouenpoudre/about" class="item" target="_blank">about</a>
                  <a href="https://www.facebook.com/pg/angeleouenpoudre/events" class="item" target="_blank">tour</a>
                  <a href="https://www.facebook.com/pg/angeleouenpoudre/shop" class="item" target="_blank">shop</a>
                  <a href="https://www.facebook.com/pg/angeleouenpoudre/about" class="item" target="_blank">contacts</a>
               </div>
            </div>
         </div>
      
      </nav>
      <header>
      
         <div class="main-heading">
            <article>
               <h1 class="site-title">Ang??le</h1>
      
            </article>
      
            <div class="slide-container">
               <!-- Additional required wrapper -->
               <div class="slide-wrapper">
                  <!-- Slides -->
                  <div class="slide active">
                     <img src="" alt="" data-id="">
                  </div>
                  <div class="slide next">
                     <img src="" alt="" data-id="">
                  </div>
      
               </div>
               <div class="slide-arrows">
                  <!-- If we need navigation buttons -->
      
                  <div class="button-prev"></div>
      
                  <div class="button-next"></div>
               </div>
               <div class="slide-bullets">
                  <span class="bullet selected" data-id="0"></span>
                  <span class="bullet" data-id="1"></span>
                  <span class="bullet" data-id="2"></span>
                  <span class="bullet" data-id="3"></span>
               </div>
      
            </div>
         </div>
      </header>
      
      <div class="wrapper">
         <section class="module tour-list">
            <h3 class="section-title"><b>Tour</b><span>Dates</span></h3>
            <div class="content">
               <ul class="shows">
                  <!-- Date -->
                  <li>
                     <date>06 Nov 2019</date>
                     <p class="place">Le Millesium</p>
                     <p class="country">Epernay, France</p>
                     <div class="button-container">
                        <a class="btn-rsvp" href="https://www.facebook.com/pg/angeleouenpoudre/events/" target="_blank">RSVP</a>
                        <a class="btn-buy" href="https://www.facebook.com/pg/angeleouenpoudre/events/" target="_blank">Buy tickets</a>
                     </div>
                  </li>
                  <!-- Date -->
                  <li>
                     <date>10 Nov 2019</date>
                     <p class="place">Lotto Arena</p>
                     <p class="country">Antwerp, Belgium</p>
                     <div class="button-container">
                        <a class="btn-rsvp" href="https://www.facebook.com/pg/angeleouenpoudre/events/" target="_blank">RSVP</a>
                        <a class="btn-buy" href="https://www.facebook.com/pg/angeleouenpoudre/events/" target="_blank">Buy tickets</a>
                     </div>
                  </li>
                  <!-- Date -->
                  <li>
                     <date>13 Nov 2019</date>
                     <p class="place">ZENITH TOULOUSE METROPOLE</p>
                     <p class="country">Toulouse, France</p>
                     <div class="button-container">
                        <a class="btn-rsvp" href="https://www.facebook.com/pg/angeleouenpoudre/events/" target="_blank">RSVP</a>
                        <a class="btn-buy" href="https://www.facebook.com/pg/angeleouenpoudre/events/" target="_blank">Buy tickets</a>
                     </div>
                  </li>
                  <!-- Date -->
                  <li>
                     <date>14 Nov 2019</date>
                     <p class="place">Arkea Arena</p>
                     <p class="country">Floirac, France</p>
                     <div class="button-container">
                        <a class="btn-rsvp" href="https://www.facebook.com/pg/angeleouenpoudre/events/" target="_blank">RSVP</a>
                        <a class="btn-buy" href="https://www.facebook.com/pg/angeleouenpoudre/events/" target="_blank">Buy tickets</a>
                     </div>
                  </li>
                  <!-- Date -->
                  <li>
                     <date>15 Nov 2019</date>
                     <p class="place">ZENITH NANTES METROPOLE</p>
                     <p class="country">Nantes, France</p>
                     <div class="button-container">
                        <a class="btn-rsvp" href="https://www.facebook.com/pg/angeleouenpoudre/events/" target="_blank">RSVP</a>
                        <a class="btn-buy" href="https://www.facebook.com/pg/angeleouenpoudre/events/" target="_blank">Buy tickets</a>
                     </div>
                  </li>
                  <!-- Date -->
                  <li>
                     <date>19 Nov 2019</date>
                     <p class="place">Palais 12</p>
                     <p class="country">Brussels, Belgium</p>
                     <div class="button-container">
                        <a class="btn-rsvp" href="https://www.facebook.com/pg/angeleouenpoudre/events/" target="_blank">RSVP</a>
                        <a class="btn-buy" href="https://www.facebook.com/pg/angeleouenpoudre/events/" target="_blank">Buy tickets</a>
                     </div>
                  </li>
      
               </ul>
               <a href="https://www.facebook.com/pg/angeleouenpoudre/events/" target="_blank"> <button class="btn">view
                              all</button></a>
      
            </div>
         </section>
      
         <section class=" videos">
            <h3 class="section-title"><span>latest</span><b>videos</b></h3>
            <div class="content">
      
               <!-- video item -->
      
               <a class="video-item" data-video="https://www.youtube.com/embed/D6Wi3SmmnAE" data-url="https://www.youtube.com/watch?v=D6Wi3SmmnAE">
      
                  <p class="video-title">Flou</p>
                  <span class="video-icon"></span>
                  <img src="https://rafaelalucas.com/dailyui/3/assets/angele-05.jpg" alt="">
      
               </a>
      
               <!-- video item -->
      
               <a class="video-item" data-video="https://www.youtube.com/embed/Hi7Rx3En7-k" data-url="https://www.youtube.com/watch?v=Hi7Rx3En7-k">
                  <p class="video-title">balance ton quoi</p>
                  <span class="video-icon"></span>
                  <img src="https://rafaelalucas.com/dailyui/3/assets/angele-04.jpg" alt="">
               </a>
      
               <!-- video item -->
      
               <a class="video-item" data-video="https://www.youtube.com/embed/Fy1xQSiLx8U" data-url="https://www.youtube.com/watch?v=Fy1xQSiLx8U">
                  <p class="video-title">tout oublier</p>
                  <span class="video-icon"></span>
                  <img src="https://rafaelalucas.com/dailyui/3/assets/angele-15.jpeg" alt="">
               </a>
      
            </div>
      
            <div class="modal-video">
      
               <div class="wrapper-video">
                  <i class="close-video"></i>
      
                  <div class="video-container">
                     <div class="video-code">
                        <iframe width="1920" height="1080" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                     </div>
      
                     <!-- <a href="" class="yt-link" target="_blank">view on youtube</a>-->
                  </div>
      
               </div>
      
            </div>
         </section>
      
         <section class="module album">
            <h3 class="section-title"><b>Brol</b><span>Album</span></h3>
            <div class="content">
               <div class="cover">
                  <div class="cover-img">
                     <img src="https://rafaelalucas.com/dailyui/3/assets/angele-09.jpg" alt="">
                  </div>
      
               </div>
               <div class="tracks">
                  <ul class="tracklist">
                     <!-- track -->
                     <li>
                        <article>
                           <span>01</span>
                           <p> la thune</p>
                        </article>
                        <div class="icons">
                           <i class="like"></i>
                           <i class="play"></i>
                        </div>
                     </li>
                     <!-- track -->
                     <li>
                        <article>
                           <span>02</span>
                           <p>Balance ton quoi</p>
                        </article>
                        <div class="icons">
                           <i class="like"></i>
                           <i class="play"></i>
                        </div>
                     </li>
                     <!-- track -->
                     <li>
                        <article>
                           <span>03</span>
                           <p>jalousie</p>
                        </article>
                        <div class="icons">
                           <i class="like"></i>
                           <i class="play"></i>
                        </div>
                     </li>
                     <!-- track -->
                     <li>
                        <article>
                           <span>04</span>
                           <p>tout oublier</p>
                           <small>ft. Rom??o Elvis</small>
                        </article>
                        <div class="icons">
                           <i class="like"></i>
                           <i class="play"></i>
                        </div>
                     </li>
                     <!-- track -->
                     <li>
                        <article>
                           <span>05</span>
                           <p>la loi de murphy</p>
                        </article>
                        <div class="icons">
                           <i class="like"></i>
                           <i class="play"></i>
                        </div>
                     </li>
                     <!-- track -->
                     <li>
                        <article>
                           <span>06</span>
                           <p>nombreux</p>
                        </article>
                        <div class="icons">
                           <i class="like"></i>
                           <i class="play"></i>
                        </div>
                     </li>
                     <!-- track -->
                     <li>
                        <article>
                           <span>07</span>
                           <p>victime des r??seaux</p>
                        </article>
                        <div class="icons">
                           <i class="like"></i>
                           <i class="play"></i>
                        </div>
                     </li>
                     <!-- track -->
                     <li>
                        <article>
                           <span>08</span>
                           <p>les matins</p>
                        </article>
                        <div class="icons">
                           <i class="like"></i>
                           <i class="play"></i>
                        </div>
                     </li>
                     <!-- track -->
                     <li>
                        <article>
                           <span>09</span>
                           <p>je veux tes yeux</p>
                        </article>
                        <div class="icons">
                           <i class="like"></i>
                           <i class="play"></i>
                        </div>
                     </li>
                     <!-- track -->
                     <li>
                        <article>
                           <span>10</span>
                           <p>ta reine</p>
                        </article>
                        <div class="icons">
                           <i class="like"></i>
                           <i class="play"></i>
                        </div>
                     </li>
                     <!-- track -->
                     <li>
                        <article>
                           <span>11</span>
                           <p>flemme</p>
                        </article>
                        <div class="icons">
                           <i class="like"></i>
                           <i class="play"></i>
                        </div>
                     </li>
                     <!-- track -->
                     <li>
                        <article>
                           <span>12</span>
                           <p>flou</p>
                        </article>
                        <div class="icons">
                           <i class="like"></i>
                           <i class="play"></i>
                        </div>
                     </li>
      
                  </ul>
               </div>
      
               <div class="button-container">
                  <a href="https://www.facebook.com/pg/angeleouenpoudre/shop/" target="_blank"><button class="btn">buy
                                  album</button></a>
               </div>
      
            </div>
      
         </section>
      
         <section class="module follow">
      
            <h3 class="section-title"><span>Follow</span><b>Ang??le</b></h3>
            <div class="content">
               <div class="newsletter">
      
                  <p class="social-title">Newsletter</p>
      
                  <img src="https://rafaelalucas.com/dailyui/3/assets/angele-14.jpg" alt="">
      
                  <div class="form"><input type="text" placeholder="email">
                     <i class="send"></i>
                  </div>
               </div>
               <div class="social">
      
                  <p class="social-title">Social</p>
                  <div class="social-icons">
                     <a class="network" href="https://www.facebook.com/pg/angeleouenpoudre/" target="_blank">
                                  <img src="https://rafaelalucas.com/dailyui/3/assets/facebook.svg" alt="">
                                  <p class="social-name">facebook</p>
                              </a>
                     <a class="network" href="https://www.youtube.com/user/AngeleAmbre" target="_blank">
                                  <img src="https://rafaelalucas.com/dailyui/3/assets/youtube.svg" alt="">
                                  <p class="social-name">youtube</p>
                              </a>
                     <a class="network" href="https://www.instagram.com/angele_vl" target="_blank">
                                  <img src="https://rafaelalucas.com/dailyui/3/assets/instagram.svg" alt="">
                                  <p class="social-name">instagram</p>
                              </a>
                     <a class="network" href="https://twitter.com/angele_vl" target="_blank">
                                  <img src="https://rafaelalucas.com/dailyui/3/assets/twitter.svg" alt="">
                                  <p class="social-name">twitter</p>
                              </a>
      
                  </div>
                  <img src="https://rafaelalucas.com/dailyui/3/assets/angele-08.jpg" alt="">
      
               </div>
            </div>
      
         </section>
      
      </div>
      
      <footer>
         <div class="content">
            <article>
               <p class="text">Ang??le @ 2019 ??? all rights reserved</p>
               <p class="credits">design by <a href="https://rafaelalucas.com" target="_blank"><span>rafaela
                                      lucas</span></a></p>
            </article>
         </div>
      </footer>
      
    ${panelStyle}`,
    });
  
  };
  