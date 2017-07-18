# Continuous

Continous is a css library which helps to solve problems everyone have sometimes.

Currently it supports:

1. Responsive grid system

## 1. The Grid

The grid system is based on 12 column's like them in twitter bootstrap. It combines the usage of flexboxes and relative sizes
to archieve the most responsive goal ever seen in a pure css grid.

You have to place column's inside a container. Then you are free to use row's to keep stuff on the dom more organized for yourself.
There is another shorter option for everyone who don't wants to use rows. 
If your column count will reach 12, rows will automatically be created. So you can simply place column's in a container.

Grid will rescale elements based on 7 different screen width's.

1. infinity
1. 1280 px 
1. 1024 px
1. 768 px
1. 640 px 
1. 480 px 
1. 320 px mobile

###### Examples

```html
<div class="fluid-container"> <!-- Grid rules will only apply inside this container -->
  <div class="row">
    <div class="col-4 color">text</div> <!-- one row has to fit maximum col size of 12 -->
    <div class="col-4 color">text</div>
    <div class="col-4 color">text</div>
  </div>
</div>
```

Don't like to add rows manually?
Throw them away.

```html
<div class="fluid-container"> <!-- Grid rules will only apply inside this container -->
   <div class="col-4 color">text</div> <!-- one row has to fit maximum col size of 12 -->
   <div class="col-4 color">text</div>
   <div class="col-4 color">text</div>
</div>
```
Now everytime your columns reach the size of 12 it will automatically create a row and resize overlapping elements to an
usual value.


###### Updates are coming soon.

Have fun using this!
