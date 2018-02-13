// AB Coaching lightbox
var abc = $("#ab").click(function(el) {
  abcLb.show();
});
var abcLb = basicLightbox.create(`
  <div class="modal1">
    <a href="http://www.amandabozzicoaching.com"><img src="assets/images/portfolio/ab-coaching.png" width="200" height="100">
    <a><span class="fa fa-close"></span></a>
  </div>
`, {
  beforeShow: function (instance) {
    instance.element().querySelector('.fa-close').onclick = instance.close
  }
})

//  IBM lightbox
var ibm = $("#ibm").click(function(el) {
  ibmLb.show();
});
var ibmLb = basicLightbox.create(`
  <div class="modal1">
    <a href="https://ibmwhlevel2.automata.net/"><img src="assets/images/portfolio/level2.png" width="200" height="100"></a>
    <a><span class="fa fa-close"></span></a>
  </div>
`, {
  beforeShow: function (instance) {
    instance.element().querySelector('.fa-close').onclick = instance.close
  }
});


// Releaf lightbox
var releaf = $("#releaf").click(function(el) {
  releafLb.show();
});
var releafLb = basicLightbox.create(`
  <div class="modal1">
  <a href="http://www.releafapp.com"><img src="assets/images/portfolio/releaf-feels.png" width="200" height="100">
    <a><span class="fa fa-close"></span></a>
  </div>
`, {
  beforeShow: function (instance) {
    instance.element().querySelector('.fa-close').onclick = instance.close
  }
});

// inprnt lightbox
var inprnt = $("#inprnt").click(function(el) {
  inprntLb.show();
});
var inprntLb = basicLightbox.create(`
  <div class="modal1">
    <a href="http://www.inprnt.com/discover"><img src="assets/images/portfolio/inprnt-discovery.png" width="200" height="100"></a>
    <a><span class="fa fa-close"></span></a>
  </div>
`, {
  beforeShow: function (instance) {
    instance.element().querySelector('.fa-close').onclick = instance.close
  }
});
