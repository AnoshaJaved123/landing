

/* eslint-disable import/no-anonymous-default-export */
export default (editor, opts = {}) => {
  
    const bm = editor.BlockManager;
  
    const panelStyle = `<style>
    @import url(../fonts/Gilroy-Medium/style.css);
    @import url(../fonts/Gilroy-Bold/style.css);
    /* 
    DESKTOP FIRST APPROACH
    0-600  phone
    600-900 tablet portrait
    900-1200 tablet landscape
    1200 -1800 normal styles
    1800 +  big desktop
    
    BASE, typography ,general layout grid, page layout , components
    */
    /* 
    $breakpoints argument choices:
    - phone
    - tab-port
    - tab-land
    - big-desktop
    */
    *,
    *:after,
    *:before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      box-sizing: inherit; }
    
    html {
      font-size: 62.5%; }
      @media only screen and (max-width: 75em) {
        html {
          font-size: 56.25%; } }
      @media only screen and (max-width: 56.25em) {
        html {
          font-size: 50%; } }
      @media only screen and (min-width: 112.5em) {
        html {
          font-size: 75%; } }
    
    body {
      font-family: 'Gilroy', sans-serif;
      font-weight: 500;
      font-size: 1.6rem;
      line-height: 1.7;
      color: #777;
      padding: 3rem;
      box-sizing: border-box; }
      @media only screen and (max-width: 56.25em) {
        body {
          padding: 0rem; } }
    
    ::selection {
      background-color: #7ed56f;
      color: #fff; }
    
    @keyframes moveInLeft {
      0% {
        opacity: 0;
        transform: translateX(-10rem); }
      80% {
        transform: translateX(1rem); }
      100% {
        opacity: 1;
        transform: translate(0); } }
    
    @keyframes moveInRight {
      0% {
        opacity: 0;
        transform: translateX(10rem); }
      80% {
        transform: translateX(-1rem); }
      100% {
        opacity: 1;
        transform: translate(0); } }
    
    @keyframes moveInButton {
      0% {
        transform: translateY(3rem);
        opacity: 0; }
      100% {
        transform: translateY(0);
        opacity: 1; } }
    
    .headingPrimary {
      color: #fff;
      text-transform: uppercase;
      backface-visibility: hidden;
      margin-bottom: 6rem; }
      .headingPrimary--main {
        display: block;
        font-size: 6rem;
        letter-spacing: 3.5rem;
        animation-name: moveInLeft;
        animation-duration: 1s;
        animation-timing-function: ease-out;
        /* animation-delay: 3s;
            animation-iteration-count: 3; */ }
        @media only screen and (max-width: 37.5em) {
          .headingPrimary--main {
            letter-spacing: 1rem;
            font-size: 5rem; } }
      .headingPrimary--sub {
        display: block;
        font-size: 2rem;
        letter-spacing: 1.5rem;
        font-weight: 500;
        animation: moveInRight 1s ease-out; }
        @media only screen and (max-width: 37.5em) {
          .headingPrimary--sub {
            letter-spacing: .5rem; } }
    
    .heading-secondary {
      font-size: 3.5rem;
      text-transform: uppercase;
      background-image: linear-gradient(to right bottom, #55c57a, #28b485);
      display: inline-block;
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      transition: all 0.2s ease-in-out; }
      .heading-secondary:hover {
        transform: skewY(2deg) skewX(15deg);
        text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2); }
      @media only screen and (max-width: 56.25em) {
        .heading-secondary {
          font-size: 3rem; } }
      @media only screen and (max-width: 37.5em) {
        .heading-secondary {
          font-size: 2.5rem; } }
    
    .heading-tertiary {
      font-size: 1.6rem;
      text-transform: uppercase; }
    
    .paragraph {
      font-size: 1.6rem; }
      .paragraph:not(:last-child) {
        margin-bottom: 3rem; }
    
    .u-center-text {
      text-align: center !important; }
    
    .u-margin-bottom-large {
      margin-bottom: 8rem !important; }
      @media only screen and (max-width: 56.25em) {
        .u-margin-bottom-large {
          margin-bottom: 5rem !important; } }
    
    .u-margin-bottom-medium {
      margin-bottom: 4rem !important; }
      @media only screen and (max-width: 56.25em) {
        .u-margin-bottom-medium {
          margin-bottom: 3rem !important; } }
    
    .u-margin-bottom-small {
      margin-bottom: 1.5rem !important; }
    
    .u-margin-top-large {
      margin-top: 1.5rem !important; }
    
    .u-margin-top-huge {
      margin-top: 1rem !important; }
    
    .btn, .btn:link, .btn:visited {
      text-decoration: none;
      padding: 1.5rem 4rem;
      display: inline-block;
      border-radius: 10rem;
      transition: all .2s ease-in-out;
      font-size: 1.6rem;
      position: relative;
      border: none;
      cursor: pointer; }
    
    .btn--white {
      background-color: #fff;
      color: #777; }
      .btn--white::after {
        background-color: #fff; }
    
    .btn--green {
      background-color: #55c57a;
      color: #fff; }
      .btn--green::after {
        background-color: #55c57a; }
    
    .btn:hover {
      transform: translateY(-0.3rem);
      box-shadow: 0rem 0.7rem 2rem rgba(0, 0, 0, 0.2); }
      .btn:hover::after {
        transform: scaleX(1.4) scaleY(1.5);
        opacity: 0; }
    
    .btn:active, .btn:focus {
      outline: none;
      transform: translateY(-0.1rem);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); }
    
    .btn::after {
      content: "";
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 10rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all 0.4s ease-in-out; }
    
    .btn--animated {
      animation: moveInButton 0.5s ease-out 0.75s;
      animation-fill-mode: backwards; }
    
    .btn-text:link, .btn-text:visited {
      color: #7ed56f;
      display: inline-block;
      text-decoration: none;
      border-bottom: 1px solid #7ed56f;
      padding: 3px;
      transition: all .2s ease-in-out; }
    
    .btn-text:hover {
      background-color: #7ed56f;
      color: #fff;
      transform: translateY(-0.3rem);
      box-shadow: 0rem 0.7rem 2rem rgba(0, 0, 0, 0.2); }
    
    .btn-text:active {
      transform: translateY(-0.1rem);
      box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2); }
    
    .composition {
      position: relative; }
      .composition__photo {
        width: 55%;
        box-shadow: 0rem 1.5rem 4rem rgba(0, 0, 0, 0.4);
        position: absolute;
        z-index: 1;
        transition: all .2s ease-in-out;
        outline-offset: 2rem; }
        @media only screen and (max-width: 56.25em) {
          .composition__photo {
            float: left;
            position: relative;
            width: 33.333%;
            box-shadow: 0rem 1.5rem 3rem rgba(0, 0, 0, 0.2); } }
        .composition__photo--p1 {
          left: 0;
          top: -2rem; }
          @media only screen and (max-width: 56.25em) {
            .composition__photo--p1 {
              top: 0;
              transform: scale(1.2); } }
        .composition__photo--p2 {
          right: 0;
          top: 2rem; }
          @media only screen and (max-width: 56.25em) {
            .composition__photo--p2 {
              top: -1rem;
              transform: scale(1.3);
              z-index: 2; } }
        .composition__photo--p3 {
          left: 20%;
          top: 10rem; }
          @media only screen and (max-width: 56.25em) {
            .composition__photo--p3 {
              top: 1rem;
              left: 0;
              transform: scale(1.1); } }
        .composition__photo:hover {
          outline: 1.5rem solid #7ed56f;
          transform: scale(1.05) translateY(0.5rem);
          box-shadow: 0rem 2.5rem 4rem rgba(0, 0, 0, 0.5);
          z-index: 2; }
      .composition:hover .composition__photo:not(:hover) {
        transform: scale(0.9); }
    
    .feature-card {
      background-color: rgba(255, 255, 255, 0.8);
      font-size: 1.5rem;
      padding: 3rem;
      text-align: center;
      border-radius: 2px;
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease-in-out; }
      @media only screen and (max-width: 56.25em) {
        .feature-card {
          padding: 2rem; } }
      .feature-card:hover {
        transform: translateY(-1.5rem) scale(1.03); }
      .feature-card__icon {
        font-size: 6rem;
        margin-bottom: 0.5rem;
        background-image: linear-gradient(to right bottom, #55c57a, #28b485);
        background-clip: text;
        display: inline-block;
        -webkit-background-clip: text;
        color: transparent; }
        @media only screen and (max-width: 56.25em) {
          .feature-card__icon {
            margin-bottom: 0rem; } }
    
    .card {
      perspective: 150rem;
      -moz-perspective: 150rem;
      position: relative;
      height: 50rem; }
      .card__side {
        height: 50rem;
        transition: all 0.8s ease-in-out;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        backface-visibility: hidden;
        border-radius: 3px;
        overflow: hidden;
        box-shadow: 0rem 1.5rem 4rem rgba(0, 0, 0, 0.15); }
        .card__side--front {
          background-color: white; }
        .card__side--back {
          transform: rotateY(180deg);
          background-color: green; }
          .card__side--back-1 {
            background-image: linear-gradient(to right bottom, #ffb900, #ff7730); }
          .card__side--back-2 {
            background-image: linear-gradient(to right bottom, #7ed56f, #28b485); }
          .card__side--back-3 {
            background-image: linear-gradient(to right bottom, #2998ff, #5643fa); }
      .card:hover .card__side--front {
        transform: rotateY(-180deg); }
      .card:hover .card__side--back {
        transform: rotateY(0deg); }
      .card__picture {
        background-size: cover;
        height: 23rem;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px; }
        .card__picture-1 {
          background-image: linear-gradient(to right bottom, #ffb900, #ff7730), url("https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-5.jpg");
          background-blend-mode: screen;
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); }
        .card__picture-2 {
          background-image: linear-gradient(to right bottom, #55c57a, #28b485), url("https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-6.jpg");
          background-blend-mode: screen;
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); }
        .card__picture-3 {
          background-image: linear-gradient(to right bottom, #2998ff, #5643fa), url("https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-7.jpg");
          background-blend-mode: screen;
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%); }
      .card__heading {
        font-size: 2.8rem;
        font-weight: 300;
        color: white;
        position: absolute;
        top: 12rem;
        right: 2rem;
        text-align: right;
        text-transform: uppercase;
        width: 70%; }
        .card__heading-span {
          padding: 1rem 1.4rem;
          -webkit-box-decoration-break: clone;
          box-decoration-break: clone; }
          .card__heading-span--1 {
            background-image: linear-gradient(to right bottom, rgba(255, 185, 0, 0.85), rgba(255, 119, 48, 0.85)); }
          .card__heading-span--2 {
            background-image: linear-gradient(to right bottom, rgba(85, 197, 122, 0.85), rgba(40, 180, 133, 0.85)); }
          .card__heading-span--3 {
            background-image: linear-gradient(to right bottom, rgba(41, 152, 255, 0.85), rgba(86, 67, 250, 0.85)); }
      .card__details ul {
        list-style: none;
        width: 80%;
        margin: 0 auto; }
        .card__details ul li {
          text-align: center;
          font-size: 1.5rem;
          padding: 1rem; }
          .card__details ul li:not(:last-child) {
            border-bottom: 1px solid #eee; }
      .card__cta {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); }
      .card__price-box {
        text-align: center;
        color: #fff;
        margin-bottom: 8rem; }
      .card__price-only {
        font-size: 1.4rem;
        text-transform: uppercase; }
      .card__price-value {
        font-size: 6rem;
        font-weight: 500; }
    
    .story {
      width: 75%;
      margin: 0 auto;
      box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
      background-color: rgba(255, 255, 255, 0.65);
      border-radius: 3px;
      padding: 6rem;
      padding-left: 9rem;
      transform: skew(-12deg);
      position: relative; }
      @media only screen and (max-width: 56.25em) {
        .story {
          width: 100%;
          padding: 4rem;
          padding-left: 7rem; } }
      @media only screen and (max-width: 37.5em) {
        .story {
          transform: skew(0); } }
      .story__shape {
        width: 15rem;
        height: 15rem;
        float: left;
        shape-outside: circle(50% at 50% 50%);
        -webkit-shape-outside: circle(50% at 50% 50%);
        -webkit-clip-path: circle(50% at 50% 50%);
        clip-path: circle(50% at 50% 50%);
        transform: translateX(-3rem) skewX(12deg); }
        @media only screen and (max-width: 37.5em) {
          .story__shape {
            transform: translateX(-3rem) skew(0); } }
      .story__img {
        height: 100%;
        transform: translateX(-4rem) scale(1.4);
        transition: all 0.5s ease-in-out; }
      .story__text {
        transform: skew(12deg); }
        @media only screen and (max-width: 37.5em) {
          .story__text {
            transform: skew(0); } }
      .story__caption {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 20%);
        opacity: 0;
        color: #fff;
        text-transform: uppercase;
        font-size: 1.7rem;
        text-align: center;
        text-align: center;
        transition: all 0.5s ease-in-out;
        backface-visibility: hidden; }
      .story:hover .story__caption {
        opacity: 1;
        transform: translate(-50%, -50%); }
      .story:hover .story__img {
        transform: translateX(-4rem) scale(1);
        filter: blur(3px) brightness(80%); }
    
    .bg-video {
      position: absolute;
      top: 0%;
      left: 0%;
      height: 100%;
      width: 100%;
      z-index: -1;
      opacity: 0.15; }
      .bg-video__content {
        width: 100%;
        height: 100%;
        object-fit: cover; }
    
    .form__group:not(:last-child) {
      margin-bottom: 2rem; }
    
    .form__input {
      padding: 1.5rem 2rem;
      font-family: inherit;
      color: inherit;
      font-size: 1.5rem;
      border-radius: 2px;
      background-color: rgba(255, 255, 255, 0.5);
      border: none;
      width: 90%;
      display: block;
      border-bottom: 3px solid transparent;
      transition: all0 0.3s ease-in-out; }
      @media only screen and (max-width: 75em) {
        .form__input {
          width: 100%; } }
      .form__input:focus {
        outline: none;
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
        border-bottom: 3px solid #7ed56f; }
      .form__input:focus:invalid {
        border-bottom: 3px solid #ff7730; }
      .form__input::-webkit-input-placeholder {
        color: #999; }
    
    .form__label {
      font-size: 1.2rem;
      font-weight: 700;
      margin-left: 2rem;
      margin-top: 0.7rem;
      display: block;
      transition: all .3s ease-in-out; }
    
    .form__input:placeholder-shown + .form__label {
      opacity: 0;
      visibility: hidden;
      transform: translateY(-4rem); }
    
    .form__radio-group {
      width: 49%;
      display: inline-block; }
      @media only screen and (max-width: 56.25em) {
        .form__radio-group {
          width: 100%;
          margin-bottom: 1.6rem; } }
    
    .form__radio-label {
      font-size: 1.6rem;
      cursor: pointer;
      position: relative;
      padding-left: 4.5rem; }
    
    .form__radio-button {
      height: 3rem;
      width: 3rem;
      border: 5px solid #7ed56f;
      border-radius: 50%;
      display: inline-block;
      position: absolute;
      left: 0;
      top: -0.5rem; }
      .form__radio-button::after {
        height: 1.3rem;
        width: 1.3rem;
        content: "";
        display: block;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #7ed56f;
        opacity: 0;
        transition: opacity 0.2s ease-in-out; }
    
    .form__radio-input:checked ~ .form__radio-label .form__radio-button::after {
      opacity: 1; }
    
    .popup {
      height: 100vh;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 6;
      opacity: 0;
      visibility: hidden;
      transition: all .3s ease-in-out;
      backdrop-filter: blur(10px);
      background-color: rgba(0, 0, 0, 0.8); }
      @supports (-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px)) {
        .popup {
          -webkit-backdrop-filter: blur(10px);
          background-color: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px); } }
      .popup__content {
        width: 75%;
        background-color: #fff;
        box-shadow: 0 2rem 4rem rgba(0, 0, 0, 0.2);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.25);
        border-radius: 3px;
        display: table;
        overflow: hidden;
        transition: all .3s ease-in-out; }
      .popup:target {
        opacity: 1;
        visibility: visible; }
      .popup:target .popup__content {
        transform: translate(-50%, -50%) scale(1); }
      .popup__left {
        width: 33.33%;
        display: table-cell; }
      .popup__right {
        width: 66.6667%;
        display: table-cell;
        vertical-align: middle;
        padding: 3rem 5rem; }
      .popup__img {
        display: block;
        width: 100%; }
      .popup__text {
        font-size: 1.4rem;
        margin-bottom: 4rem;
        -moz-column-count: 2;
        -moz-column-gap: 3rem;
        -moz-column-rule: 1px solid #999;
        column-count: 2;
        column-gap: 3rem;
        column-rule: 1px solid #999;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto; }
      .popup__close:link, .popup__close:visited {
        color: #999;
        position: absolute;
        top: 2.5rem;
        right: 2.5rem;
        text-decoration: none;
        font-size: 3rem; }
      .popup__close:hover, .popup__close:active {
        color: #7ed56f; }
    
    .header {
      height: 85vh;
      background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8)), url("https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/hero.jpg");
      background-size: cover;
      background-position: top;
      position: relative; }
      @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%)) {
        .header {
          clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
          /* always go clockwise */
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
          height: 95vh; } }
      @media only screen and (max-width: 37.5em) {
        .header {
          clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%);
          /* always go clockwise */
          -webkit-clip-path: polygon(0 0, 100% 0, 100% 85vh, 0 100%); } }
      .header__logoBox {
        position: absolute;
        top: 4rem;
        left: 4rem; }
      .header__logo {
        height: 3.5rem; }
      .header__textBox {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center; }
    
    .row {
      max-width: 114rem;
      margin: 0 auto; }
      .row:not(:last-child) {
        margin-bottom: 8rem; }
        @media only screen and (max-width: 56.25em) {
          .row:not(:last-child) {
            margin-bottom: 6rem; } }
      @media only screen and (max-width: 56.25em) {
        .row {
          max-width: 50rem; } }
      @media only screen and (max-width: 37.5em) {
        .row {
          max-width: 40rem; } }
      .row::after {
        content: "";
        display: table;
        clear: both; }
      .row [class^="col-"] {
        float: left; }
        .row [class^="col-"]:not(:last-child) {
          margin-right: 8rem; }
          @media only screen and (max-width: 56.25em) {
            .row [class^="col-"]:not(:last-child) {
              margin-right: 0;
              margin-bottom: 6rem; } }
        @media only screen and (max-width: 56.25em) {
          .row [class^="col-"] {
            width: 100% !important; } }
      .row .col-1-of-2 {
        width: calc((100% - 8rem) / 2); }
      .row .col-1-of-3 {
        width: calc((100% - 2 * 8rem) / 3); }
      .row .col-1-of-4 {
        width: calc((100% - 3 * 8rem) / 4); }
      .row .col-2-of-3 {
        width: calc(2 * ((100% - 2 * 8rem) / 3) + 8rem); }
      .row .col-2-of-4 {
        width: calc(2 * ((100% - 3 * 8rem) / 4) + 8rem); }
      .row .col-3-of-4 {
        width: calc(3 * ((100% - 3 * 8rem) / 4) + 2 * 8rem); }
    
    .footer {
      background-color: #333;
      padding: 10rem 0;
      font-size: 1.4rem; }
      @media only screen and (max-width: 56.25em) {
        .footer {
          padding: 8rem 0; } }
      .footer__logo-box {
        text-align: center;
        margin: auto 0;
        margin-bottom: 8rem; }
        @media only screen and (max-width: 56.25em) {
          .footer__logo-box {
            margin-bottom: 4rem; } }
      .footer__logo {
        width: 15rem; }
      .footer__navigation {
        display: inline-block;
        border-top: 1px solid #f7f7f7;
        padding-top: 2rem; }
        @media only screen and (max-width: 56.25em) {
          .footer__navigation {
            width: 100%;
            text-align: center; } }
      .footer__list {
        list-style: none; }
      .footer__items {
        display: inline-block; }
        .footer__items:not(:last-child) {
          margin-right: 1.5rem; }
      .footer__link:link, .footer__link:visited {
        color: #f7f7f7;
        text-decoration: none;
        text-transform: uppercase;
        display: inline-block;
        transition: all 0.2s ease-in-out;
        background-color: #333; }
      .footer__link:hover, .footer__link:active {
        color: #7ed56f;
        box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.4);
        transform: rotate(5deg) scale(1.3); }
      .footer__copyright {
        display: inline-block;
        color: #f7f7f7;
        border-top: 1px solid #f7f7f7;
        padding-top: 2rem;
        text-align: justify; }
    
    .navigation__checkbox {
      display: none; }
    
    .navigation__button {
      background-color: white;
      height: 7rem;
      width: 7rem;
      position: fixed;
      top: 6rem;
      right: 6rem;
      border-radius: 50%;
      z-index: 4;
      box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.1);
      text-align: center;
      cursor: pointer; }
      @media only screen and (max-width: 56.25em) {
        .navigation__button {
          top: 4rem;
          right: 4rem; } }
      @media only screen and (max-width: 37.5em) {
        .navigation__button {
          top: 3rem;
          right: 3rem; } }
    
    .navigation__background {
      height: 6rem;
      width: 6rem;
      border-radius: 50%;
      position: fixed;
      top: 6.5rem;
      right: 6.5rem;
      background-image: radial-gradient(#55c57a, #28b485);
      z-index: 2;
      transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1); }
      @media only screen and (max-width: 56.25em) {
        .navigation__background {
          top: 4.5rem;
          right: 4.5rem; } }
      @media only screen and (max-width: 37.5em) {
        .navigation__background {
          top: 3.5rem;
          right: 3.5rem; } }
    
    .navigation__nav {
      height: 100vh;
      width: 0;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 3;
      opacity: 0;
      visibility: hidden;
      width: 0;
      transition: all 0.8s cubic-bezier(0.86, 0, 0.07, 1); }
    
    .navigation__list {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      list-style: none;
      text-align: center;
      width: 100%; }
    
    .navigation__item {
      margin: 1rem; }
    
    .navigation__link:link, .navigation__link:visited {
      display: inline-block;
      padding: 1rem 2rem;
      font-size: 3rem;
      font-weight: 300;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      background-image: linear-gradient(120deg, transparent 0%, transparent 50%, #fff 50%);
      background-size: 220%;
      transition: all 0.3s ease-in-out; }
      .navigation__link:link span, .navigation__link:visited span {
        display: inline-block;
        margin-right: 1.5rem; }
    
    .navigation__link:hover, .navigation__link:active {
      background-position: 100%;
      color: #55c57a;
      transform: translateX(1rem); }
    
    .navigation__checkbox:checked ~ .navigation__background {
      transform: scale(80); }
    
    .navigation__checkbox:checked ~ .navigation__nav {
      opacity: 1;
      visibility: visible;
      width: 100%; }
    
    .navigation__icon {
      position: relative;
      margin-top: 3.5rem; }
      .navigation__icon, .navigation__icon::after, .navigation__icon::before {
        width: 3rem;
        height: 2px;
        background-color: #333;
        display: inline-block;
        transition: all 0.3s ease-in-out; }
      .navigation__icon::after, .navigation__icon::before {
        content: "";
        position: absolute;
        left: 0; }
      .navigation__icon::before {
        top: -.8rem; }
      .navigation__icon::after {
        top: .8rem; }
    
    .navigation__button:hover .navigation__icon::before {
      top: -1rem; }
    
    .navigation__button:hover .navigation__icon::after {
      top: 1rem; }
    
    .navigation__checkbox:checked + .navigation__button .navigation__icon {
      background-color: transparent; }
    
    .navigation__checkbox:checked + .navigation__button .navigation__icon::before {
      top: 0;
      transform: rotate(135deg); }
    
    .navigation__checkbox:checked + .navigation__button .navigation__icon::after {
      top: 0;
      transform: rotate(-135deg); }
    
    .section-about {
      background-color: #f7f7f7;
      padding: 20rem 0;
      margin-top: -20vh; }
      @media only screen and (max-width: 56.25em) {
        .section-about {
          padding: 15rem 0; } }
    
    .features {
      padding: 20rem 0 15rem 0;
      background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8)), url("https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-4.jpg");
      background-size: cover;
      margin-top: -10rem;
      transform: skewY(-7deg); }
      .features > * {
        transform: skewY(7deg); }
      @media only screen and (max-width: 56.25em) {
        .features {
          padding: 20rem 0 15rem 0; } }
    
    .section-tours {
      background-color: #f7f7f7;
      padding: 20rem 0 15rem 0;
      margin-top: -15vh; }
      @media only screen and (max-width: 56.25em) {
        .section-tours {
          padding: 15rem 0 10rem 0;
          margin-top: -5rem; } }
    
    .section-stories {
      padding: 10rem 0;
      position: relative; }
    
    .section-book {
      padding: 10rem;
      background-image: linear-gradient(to right bottom, #55c57a, #28b485); }
      @media only screen and (max-width: 75em) {
        .section-book {
          padding: 5rem; } }
    
    .book {
      background-image: linear-gradient(105deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 50%, transparent 50%), url("https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-10.jpg");
      background-size: cover;
      border-radius: 3px;
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2); }
      @media only screen and (max-width: 75em) {
        .book {
          background-image: linear-gradient(105deg, rgba(255, 255, 255, 0.9) 65%, rgba(255, 255, 255, 0.9) 65%, transparent 65%), url("https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-10.jpg"); } }
      @media only screen and (max-width: 56.25em) {
        .book {
          background-image: linear-gradient(to right, rgba(255, 255, 255, 0.9) 100%, rgba(255, 255, 255, 0.9) 100%), url("https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-10.jpg"); } }
      .book__form {
        width: 50%;
        padding: 6rem; }
        @media only screen and (max-width: 75em) {
          .book__form {
            width: 65%; } }
        @media only screen and (max-width: 56.25em) {
          .book__form {
            width: 100%; } }
    
 
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
      <!DOCTYPE html>
      <html lang="en">
      
      <!-- to download video footage use website coverr -->
      
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="./fonts/_ICONFONT/styles.css">
          <link rel="stylesheet" href="./css/styles.css">
          <link rel="shortcut icon" href="https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/favicon.png" type="image/x-icon">
          <title>Natours | Exciting tours for adventurous people</title>
      </head>
      
      <body>
          <div class="navigation">
              <input type="checkbox" class="navigation__checkbox" id="navi-toggle">
              <label for="navi-toggle" class="navigation__button">
                  <span class="navigation__icon">
                      &nbsp;
                  </span>
              </label>
              <div class="navigation__background"></div>
              <nav class="navigation__nav">
                  <ul class="navigation__list">
                      <li class="navigation__item"><a href="" class="navigation__link"> <span>01</span> About Natours</a></li>
                      <li class="navigation__item"><a href="" class="navigation__link"> <span>02</span> Your Benefits</a></li>
                      <li class="navigation__item"><a href="" class="navigation__link"> <span>03</span> Popular Tours</a></li>
                      <li class="navigation__item"><a href="" class="navigation__link"> <span>04</span> Stories</a></li>
                      <li class="navigation__item"><a href="" class="navigation__link"> <span>04</span> Book now</a></li>
                  </ul>
              </nav>
      
          </div>
      
          <header class="header">
              <div class="header__logoBox">
                  <img src="https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/logo-white.png" alt="logo" class="header__logo">
              </div>
              <div class="header__textBox">
                  <h1 class="headingPrimary">
                      <span class="headingPrimary--main">Outdoors</span>
                      <span class="headingPrimary--sub">is where life happens</span>
                  </h1>
                  <a href="#" class="btn btn--white btn--animated">Discover our tools</a>
              </div>
          </header>
      
          <main>
              <section class="section-about">
                  <div class="u-center-text u-margin-bottom-large">
                      <h2 class="heading-secondary">
                          Exciting tours for adventurous people
                      </h2>
                  </div>
                  <div class="row">
                      <div class="col-1-of-2">
                          <h3 class="heading-tertiary u-margin-bottom-small">
                              You Are going to fall in love with nature
                          </h3>
                          <p class="paragraph">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque architecto fugit nihil
                              voluptas quia, ullam quod ipsum, odio laborum, quas excepturi aspernatur similique assumenda
                              porro! Ab similique quaerat culpa.
                          </p>
                          <h3 class="heading-tertiary u-margin-bottom-small">
                              Live Adventures like you never had before
                          </h3>
                          <p class="paragraph">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem neque architecto fugit nihil
                              voluptas quia, ullam quod ipsum, odio laborum, quas excepturi aspernatur similique assumenda
                              porro! Ab similique quaerat culpa.
                          </p>
                          <a href="#" class="btn-text">Learn more &rarr;</a>
                      </div>
                      <div class="col-1-of-2">
                          <div class="composition">
                              <img src="https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-1-large.jpg" alt="Photo 1"
                                  class="composition__photo composition__photo--p1">
                              <img src="https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-3-large.jpg" alt="Photo 2"
                                  class="composition__photo composition__photo--p2">
                              <img src="https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-2-large.jpg" alt="Photo 3"
                                  class="composition__photo composition__photo--p3">
                          </div>
                      </div>
                  </div>
              </section>
      
              <section class="features">
                  <div class="row">
                      <div class="col-1-of-4">
                          <div class="feature-card">
                              <i class="feature-card__icon icon-basic-world"></i>
                              <h3 class="heading-tertiary u-margin-bottom-small">
                                  Explore the world
                              </h3>
                              <p class="feature-card__text">
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quas saepe tempore nihil
                              </p>
                          </div>
                      </div>
                      <div class="col-1-of-4">
                          <div class="feature-card">
                              <i class="feature-card__icon icon-basic-compass"></i>
                              <h3 class="heading-tertiary u-margin-bottom-small">
                                  Meet the Nature
                              </h3>
                              <p class="feature-card__text">
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quas saepe tempore nihil
                              </p>
                          </div>
                      </div>
                      <div class="col-1-of-4">
                          <div class="feature-card">
                              <i class="feature-card__icon icon-basic-map"></i>
                              <h3 class="heading-tertiary u-margin-bottom-small">
                                  Find your Way
                              </h3>
                              <p class="feature-card__text">
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quas saepe tempore nihil
                              </p>
                          </div>
                      </div>
                      <div class="col-1-of-4">
                          <div class="feature-card">
                              <i class="feature-card__icon icon-basic-heart"></i>
                              <h3 class="heading-tertiary u-margin-bottom-small">
                                  Live a healthier Life
                              </h3>
                              <p class="feature-card__text">
                                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi quas saepe tempore nihil
                              </p>
                          </div>
                      </div>
                  </div>
              </section>
      
              <section class="section-tours" id="section-tours">
                  <div class="u-center-text u-margin-bottom-large">
                      <h2 class="heading-secondary">
                          Most popular tours
                      </h2>
                  </div>
                  <div class="row">
                      <div class="col-1-of-3">
                          <div class="card">
                              <div class="card__side card__side--front">
                                  <div class="card__picture card__picture-1">
      
                                  </div>
                                  <h4 class="card__heading">
                                      <span class="card__heading-span card__heading-span--1">The Sea Explorer</span>
                                  </h4>
                                  <div class="card__details">
                                      <ul>
                                          <li>3 day tour</li>
                                          <li>upto 30 people</li>
                                          <li>2 tour guides</li>
                                          <li>sleep in cozy hotels</li>
                                          <li>Difficulty: easy</li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="card__side card__side--back card__side--back-1">
                                  <div class="card__cta">
                                      <div class="card__price-box">
                                          <p class="card__price-only">Only</p>
                                          <p class="card__price-value">$279</p>
                                      </div>
                                      <a href="#popup" class="btn btn--white">Book Now</a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-1-of-3">
                          <div class="card">
                              <div class="card">
                                  <div class="card__side card__side--front">
                                      <div class="card__picture card__picture-2">
      
                                      </div>
                                      <div class="card__heading">
                                          <span class="card__heading-span card__heading-span--2">The Forest Hiker</span>
                                      </div>
                                      <div class="card__details">
                                          <ul>
                                              <li>7 day tour</li>
                                              <li>upto 40 people</li>
                                              <li>6 tour guides</li>
                                              <li>sleep in provided tents</li>
                                              <li>Difficulty: medium</li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="card__side card__side--back card__side--back-2">
                                      <div class="card__cta">
                                          <div class="card__price-box">
                                              <p class="card__price-only">Only</p>
                                              <p class="card__price-value">$497</p>
                                          </div>
                                          <a href="#popup" class="btn btn--white">Book Now</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-1-of-3">
                          <div class="card">
                              <div class="card">
                                  <div class="card__side card__side--front">
                                      <div class="card__picture card__picture-3">
      
                                      </div>
                                      <div class="card__heading">
                                          <span class="card__heading-span card__heading-span--3">The Snow Adventurer</span>
                                      </div>
                                      <div class="card__details">
                                          <ul>
                                              <li>5 day tour</li>
                                              <li>upto 15 people</li>
                                              <li>3 tour guides</li>
                                              <li>sleep in provided tents</li>
                                              <li>Difficulty: hard</li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div class="card__side card__side--back card__side--back-3">
                                      <div class="card__cta">
                                          <div class="card__price-box">
                                              <p class="card__price-only">Only</p>
                                              <p class="card__price-value">$897</p>
                                          </div>
                                          <a href="#popup" class="btn btn--white">Book Now</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="u-center-text u-margin-bottom-huge">
                      <a href="#section-tours" class="btn btn--green">
                          Discover our tours
                      </a>
                  </div>
              </section>
      
              <section class="section-stories">
                  <div class="bg-video">
                      <video class="bg-video__content" autoplay muted loop>
                          <source src="https://github.com/yashfalke77/Natours-project/blob/master/images/video.mp4" type="video/mp4">
                          <source src="images/video.webm" type="video/webm">
                          Your Browser is not Supported
                      </video>
                  </div>
                  <div class="u-center-text u-margin-bottom-large">
                      <h2 class="heading-secondary">We make people geniuenly happy</h2>
                  </div>
      
                  <div class="row">
                      <div class="story">
                          <figure class="story__shape">
                              <img class="story__img" src="https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-8.jpg" alt="Person on a tour">
                              <figcaption class="story__caption">
                                  Mery Smith
                              </figcaption>
                          </figure>
                          <div class="story__text">
                              <h3 class="heading-tertiary u-margin-bottom-small">
                                  I had the best week ever with my family
                              </h3>
                              <p>
                                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit incidunt earum quasi
                                  repudiandae dolore ex laudantium aliquid ab, dolor minus atque veritatis velit. Similique,
                                  sint? Deleniti obcaecati veritatis eveniet excepturi?
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="story">
                          <figure class="story__shape">
                              <img class="story__img" src="https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/nat-9.jpg" alt="Person on a tour">
                              <figcaption class="story__caption">
                                  Mery Smith
                              </figcaption>
                          </figure>
                          <div class="story__text">
                              <h3 class="heading-tertiary u-margin-bottom-small">
                                  Wow my life is completely different now !!
                              </h3>
                              <p>
                                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit incidunt earum quasi
                                  repudiandae dolore ex laudantium aliquid ab, dolor minus atque veritatis velit. Similique,
                                  sint? Deleniti obcaecati veritatis eveniet excepturi?
                          </div>
                      </div>
                  </div>
                  <div class="u-center-text u-margin-top-huge">
                      <a href="#" class="btn-text">Read all stories &rarr;</a>
                  </div>
              </section>
      
              <section class="section-book">
                  <div class="row">
                      <div class="book">
                          <div class="book__form">
                              <form action="" class="form" autocomplete="off">
                                  <div class=" u-margin-bottom-medium">
                                      <h2 class="heading-secondary">
                                          Start booking now
                                      </h2>
                                  </div>
                                  <div class="form__group">
                                      <input type="text" class="form__input" id="name" placeholder="Full Name" required>
                                      <label for="name" class="form__label">Full Name</label>
                                  </div>
                                  <div class="form__group">
                                      <input type="email" class="form__input" id="email" placeholder="Email Address" required>
                                      <label for="email" class="form__label">Email Address</label>
                                  </div>
                                  <div class="form__group u-margin-bottom-medium">
                                      <div class="form__radio-group">
                                          <input type="radio" class="form__radio-input" id="small" name="size" hidden>
                                          <label for="small" class="form__radio-label">
                                              <span class="form__radio-button"></span>
                                              Small tour group
                                          </label>
                                      </div>
                                      <div class="form__radio-group">
                                          <input type="radio" class="form__radio-input" id="large" name="size" hidden>
                                          <label for="large" class="form__radio-label">
                                              <span class="form__radio-button"></span>
                                              Large tour group
                                          </label>
                                      </div>
                                  </div>
      
                                  <div class="form__group">
                                      <button type="submit" class="btn btn--green">Next Step &rarr;</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
              </section>
          </main>
      
          <footer class="footer">
              <div class="footer__logo-box">
                  <!-- srcset responsive images for one for low resolution and one for high resolution -->
                  <picture class="footer__logo">
                      <source srcset="https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/logo-green-small-1x.png 1x, https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/logo-green-small-2x.png 2x"
                          media="(max-width: 37.5em)">
                      <img srcset="https://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/logo-green-small-2x.png 1x, ihttps://raw.githubusercontent.com/yashfalke77/Natours-project/master/images/logo-green-small-2x.png 2x" alt="Full Logo"
                          class="footer__logo">
                  </picture>
              </div>
              <div class="row">
                  <div class="col-1-of-2">
                      <div class="footer__navigation">
                          <ul class="footer__list">
                              <li class="footer__items"><a href="" class="footer__link">Company</a></li>
                              <li class="footer__items"><a href="" class="footer__link">Contact us</a></li>
                              <li class="footer__items"><a href="" class="footer__link">Carrers</a></li>
                              <li class="footer__items"><a href="" class="footer__link">Privacy Policy</a></li>
                              <li class="footer__items"><a href="" class="footer__link">Terms</a></li>
                          </ul>
                      </div>
                  </div>
                  <div class="col-1-of-2">
                      <p class="footer__copyright">
                          Built by <a href="#" class="footer__link">Yash Falke</a> for the project. Copyright &copy; by
                          anosha javed, You 100% are allowed to use this webpage for both personal as well as commercial but
                          NOT to claim as it your design. A credit to the original author is of course highly appreciated!
                      </p>
                  </div>
              </div>
          </footer>
      
          <div class="popup" id="popup">
              <div class="popup__content">
                  <div class="popup__left">
                      <img src="images/nat-8.jpg" alt="Tour Photo" class="popup__img">
                      <img src="images/nat-9.jpg" alt="Tour Photo" class="popup__img">
                  </div>
                  <div class="popup__right">
                      <a href="#section-tours" class="popup__close">&times;</a>
                      <h2 class="heading-secondary u-margin-bottom-small">Start Booking now</h2>
                      <h3 class="heading tertiary u-margin-bottom-small">Important &ndash; Please read these terms before
                          booking</h3>
                      <p class="popup__text">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam cumque molestiae minus harum corporis
                          sint eum similique eos dignissimos adipisci assumenda explicabo facilis voluptas dolor odio officia
                          laboriosam, nemo minima! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, accusamus
                          temporibus tempore
                      </p>
                      <a href="" class="btn btn--green">Book Now</a>
                  </div>
              </div>
          </div>
      
      
      </body>
      
      </html>
        
       
      
    ${panelStyle}`,
    });
  
  };
  