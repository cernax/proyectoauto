import React, { Component } from 'react';
import './App.css';
import M from "materialize-css/dist/js/materialize.min.js";

class App extends Component {
  componentDidMount() {
    let sidenav = document.querySelector('.sidenav');
    M.Sidenav.init(sidenav, {
      edge: "left",
      inDuration: 250
    });    
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
      fullWidth: false,
      duration: 200,
      onCycleTo:[]
    });
    
    var elems = document.querySelectorAll('.modal');
    M.Modal.init(elems, {});

    
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems, {
      responsiveThreshold:0
    });
  }
  render() {  
    return(
      <>
      <div>
        <nav>
          <div class="nav-wrapper">
            <a href="#!" class="brand-logo">Logo</a>
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
              <li><a href="sass.html">Sass</a></li>
              <li><a href="badges.html">Components</a></li>
              <li><a href="collapsible.html">Javascript</a></li>
              <li><a href="mobile.html">Mobile</a></li>
            </ul>
          </div>
        </nav>

        <ul class="sidenav" id="mobile-demo">
          <li><a href="sass.html">Sass</a></li>
          <li><a href="badges.html">Components</a></li>
          <li><a href="collapsible.html">Javascript</a></li>
          <li><a href="mobile.html">Mobile</a></li>
        </ul>
      </div> 

      
    <div class="parallax-container">
      <div class="parallax"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg" /></div>
    </div>

    <div class="section white">
      <div class="row container">
        <div class="carousel">
          <a class="carousel-item" href="#one!"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(7).jpg" /></a>
          <a class="carousel-item" href="#two!"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(3).jpg" /></a>
          <a class="carousel-item" href="#three!"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg" /></a>
          <a class="carousel-item" href="#four!"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(1).jpg" /></a>
          <a class="carousel-item" href="#five!"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(11).jpg" /></a>
        </div>
        <button data-target="modal1" class="btn modal-trigger">Modal</button>
        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
      </div>
    </div>

    <div class="parallax-container">
      <div class="parallax"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(30).jpg" /></div>
    </div>

    <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Footer Content</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2022 Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
    </footer>
    </>
    )}
}

export default App;
