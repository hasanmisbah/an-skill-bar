# an-skill-bar ![CI status](https://img.shields.io/badge/build-passing-brightgreen.svg)

A jQuery Based lightweight skill bar filler

## Demo
[Demo](https://hasanmisbah.github.io/an-skill-bar/)

## Installation
add **an-skill-bar** css to html head section
```html
<link rel="stylesheet" href="an-skill-bar.min.css">
```
and then add javascript file after jquery library
```html
<script src="scripts/an-skill-bar.js"></script>
```

### Requirements
* jquery 3.3.1 or later


## Usage

**Initialize your markup like this**
```html
<div class="skillbar">
      <span class="title"></i> less</span>
      <span class="percent">40%</span>
      <div class="filled" data-width="90%"></div>
</div>
```
**you can use our predefined class like this**
```html
<div class="skillbar html">
      <span class="title"></i> less</span>
      <span class="percent">40%</span>
      <div class="filled" data-width="90%"></div>
</div>
```
**Predefined Class**
```
html, css, js, php, jquery, sass, less, react, nodejs,
angular, vue, meteor, backbone, ember, mysql, python, django,
agile, photoshop, illustrator, indesign, laravel
```

### initialize plugin with jquery
```js
$(document).ready(function () {
    $(".skillbar").skillbar();
});

```
**you can pass value with this**
```js
$(document).ready(function () {
    $(".skillbar").skillbar({
        speed: 1000,
        bg : "#008080"
    });
});

```

## custom Style or color
add a class name after `skillbar` class customize it with your own style like `<div class="skillbar myownclass"></div>` and then call it to your css file like 
```css
.skillbar.myownclass .title{
/* Your style goes here */
}
.skillbar.myownclass .percent{
/* Your style goes here */
}
.skillbar.myownclass .filled{
/* Your style goes here */
}
```



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
