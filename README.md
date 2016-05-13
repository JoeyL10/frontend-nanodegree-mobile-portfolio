## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository, inspect the code,

### Getting started

####Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

####Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).


# Optimizations that I've made to improve performance


    Inlined the print.css file by making a media query.  Currently it is a separate css file that induces another unnecessary roundtrip to the server.  This unblocks rendering.

	Created separate css file for portrait view css and add media tag.  This is to minimize critical bytes and unblock rendering.

	Added async tags in analytics and perfmatters js files to prevent parser blocking

	Removed updatePositions() call at around line 591 from below #movingPizzas1 query selector.  Was forcing layout again.

	In the updatePositions function made a variable out of (document.body.scrollTop/1250).  I checked console.log(phase, document.body.scrollTop / 1250) to see performance in console.

	Optimize the updatePositions JS function by removing the phase variable from the for loop inside updatePositions.  It should be outside of the loop and setup as an empty array variable so that the scrollCalc variable.


	I added a requestAnimationFrame with help from forums since as per the class anything that is making a visual change to the page should
    be happening inside of a requestAnimationFrame

	Quick optimization was to change the use of document.querySelectorAll(). This is one of the slowest methods to access our specified DOM elements. document.getElementsByClassName() is much faster so I've applied this to var items = document.getElementsByClassName('mover');  and var randomPizzas = document.getElementsByClassName("randomPizzaContainer");   Changed query selector to getElementById for movingPizzas1 too - document.getElementById("movingPizzas1").appendChild(elem);

	Change src for images on index.html.  3 of 4 were making web calls even though we have images stored in a folder.

	Compressed and resized images

	Run grunt image optimization task on image folders

	Run grunt uglify js task to minify JS.  Then make changes in pizza.html to read new main.min.js file.

	Added will-change to tell the browser to put the mover element on a new compositor layer.  A transform of translateZ(0) was also added for older browsers.

	Preload css google fonts file - https://github.com/filamentgroup/loadCSS/blob/master/README.md 


### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
