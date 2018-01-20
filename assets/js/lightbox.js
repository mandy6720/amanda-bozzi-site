// AB Coaching lightbox
var abc = $("#abc").click(function(el) {
  abcLb.show();
});
var abcLb = basicLightbox.create(`
    <img src="assets/images/portfolio/ab-coaching.png" width="800" height="600">
`);

// Releaf lightbox
var releaf = $("#releaf").click(function(el) {
  console.log('releaf')
  releafLb.show();
});
var releafLb = basicLightbox.create(`
    <img src="assets/images/portfolio/releaf-feels.png" width="800" height="600">
`);

// inprnt lightbox
var abc = $("#inprnt").click(function(el) {
  abcLb.show();
});
var abcLb = basicLightbox.create(`
    <img src="assets/images/portfolio/inprnt-discovery.png" width="800" height="600">
`);

//  IBM lightbox
var releaf = $("#ibm").click(function(el) {
  console.log('ibm')
  releafLb.show();
});
var releafLb = basicLightbox.create(`
    <img src="assets/images/portfolio/level2.png" width="800" height="600">
`);
