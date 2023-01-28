import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Header from './components/Header'
const Template = () => {
  
  // useEffect(() => {
  //   function openNav() {
  //     document.getElementById("mySidenav").style.width = "300px";
  // }
  
  // /* Set the width of the side navigation to 0 */
  // function closeNav() {
  //     document.getElementById("mySidenav").style.width = "0";
  // }
    
  // }, [])
  
    
  return (
<div>
<Header/>
  <nav role="navigation">
    <div id="clickNav">
      <input type="checkbox" />
      <span />
      <span />
      <span />
      <ul className="nav-data" role="list">
        <li><a href="http://dograsweblog.com/" data-title="Home" aria-label="Home">Home</a></li>
        <li><a href="http://dograsweblog.com/nishant-dogra/" data-title="About" aria-label="About">About author</a></li>
        <li><a href="http://dograsweblog.com/expertise/" data-title="My Expertise" aria-label="My Expertise">Expertise</a></li>
        <li><a href="http://dograsweblog.com/articles/" data-title="My Technical articles" aria-label="My Technical articles">Tech Articles</a></li>
        <li><a href="http://dograsweblog.com/moments/" data-title="My twitter moments" aria-label="My twitter moments">Moments</a></li>
        <li className="separator" />
        <li><a href="http://dograsweblog.com/force-framework/?utm_medium=DograsWeblog" data-title="Force Framework" aria-label="Force Framework">Force Framework</a></li>
        <li><a href="http://dograsweblog.com/drive/good-time-game/?utm_medium=DograsWeblog" data-title="Don't Waste Good Time" aria-label="Don't Waste Good Time">Don't Waste Good Time</a></li>
        <li><a href="http://dograsweblog.com/drive/quotes-by-dogra/?utm_medium=DograsWeblog" data-title="QuotesByDogra" aria-label="QuotesByDogra">#QuotesByDogra</a></li>
        <li><a href="http://dograsweblog.com/engine/?utm_medium=DograsWeblog" data-title="Force Framework" aria-label="Force Framework">Custom Search Engine</a></li>
        <li><a href="http://dograsweblog.com/drive/?utm_medium=DograsWeblog" data-title="DograsWeblog Free Themes" aria-label="DograsWeblog Free Themes">DW Themes</a></li>
        <li className="separator" />
        <li><p><strong> © DOGRA'S WEBLOG</strong></p></li>
      </ul>
    </div>
  </nav>
  <div className="container">
    <div className="horizontal">
      <div className="vertical">
        <h1 style={{position: 'relative', textAlign: 'center', top: 100, color: '#fff', fontWeight: 'bold'}}>Pure CSS navigation - Force Framework</h1>
      </div>
    </div>
  </div>
</div>


  )
}

export default Template