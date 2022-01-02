# Bootstrap-Lightbox
Simple &amp; lightweight lightbox for Bootstrap 5


## Basic Usage
Adding `data-modal="bs-lightbox"` in your A href tag. 

```
<a data-modal="bs-lightbox" href="(Image URL to display in lightbox)" target="_blank"><img src="(Thumbnail Image URL)"></a>
```

## Live Demo
You can see live demo on here:
https://avalon-studio.work/files/bs5lightbox-js.html

this is same code as sample.html in this project.

## Install

Insert <script> tag near by end of BODY tag.

```
<script async type="text/javascript" src="https://cdn.jsdelivr.net/gh/avalon-studio/Bootstrap-Lightbox/bs5lightbox.js" crossorigin="anonymous"></script>
```

## Requirement

Bootstrap 5.0 or higher


## Recommend

adding follow css code in your stylesheet. It's modify Bootstrap default style to fit lightbox.

```
.modal-content {background-color: unset;}
#LightboxCanvas{max-width:100%; max-height:100%;}
```
