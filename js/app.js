/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('',
  
{
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 400.9771699587272
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": .2	,
        "color": "#ffffff"
      },
      "polygon": {
        "nb_sides":1
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.6496617698410762,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 0.9,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 0.407242916656496,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#b00e12",
      "opacity": 5,
      "width": 0.6
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": true,
      "attract": {
        "enable": true,
        "rotateX": 100,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 180,
        "line_linked": {
          "opacity": 5
        }
      },
      "bubble": {
        "distance": 1254.6592930055783,
        "size": 4.060386061506726,
        "duration": 3,
        "opacity": 0.07308694910712106,
        "speed": 3
      },
      "repulse": {
        "distance": 250,
        "duration": 0.5
      },
      "push": {
        "particles_nb": 0.5
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

);