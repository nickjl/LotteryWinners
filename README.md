# LotteryWinners

## JS
- All JS files in source/assets/js are concatenated and minified to lotterywinners.min.js
  in the order specified in Grunt.
   
   
## CSS
- styles.scss includes Bootstrap 4 alpha and is compiled to app/assets/css/app.min.css.
- this can then be concatenated and minified with any additional css specificed in Grunt
  to create lotterywinners.min.css


### Lottery card component
 - used in index and lotto pages.
 - adds lw-card-yellow dependent on component placement.
 
 
### Lottery winner component
 - used in index and allwinners pages.
 - title and description placed together for index and seperate for allwinners.
 
 
### Compare card component
 - used in comparison page.
 - adds lw-card-yellow dependent on component placement.
 
 
### Result card component
 - used in index and lotto pages.
 - adds lw-card-yellow dependent on component placement.