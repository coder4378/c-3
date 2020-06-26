var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["7dbefefc-daee-4e86-9665-4ebf0ee90544","6bec530f-69d7-45f8-bb63-76f89aa24762","e30dca68-af23-452f-b1d9-25add3eb5391","964a351e-dc89-4d3b-95fd-ae232920e1cd","940bbd0d-1fa9-4e7b-aa23-21ebd496e3e3"],"propsByKey":{"7dbefefc-daee-4e86-9665-4ebf0ee90544":{"name":"unnamed.jpg_1","sourceUrl":"assets/v3/animations/nDulGjkHcXw_fb_tzZKssRmVa7BOGuVkU8pWeAh6lRY/7dbefefc-daee-4e86-9665-4ebf0ee90544.png","frameSize":{"x":512,"y":509},"frameCount":1,"looping":true,"frameDelay":4,"version":"o.bSYrdX5EKExqqg5Fn1QBXsIBu6tfwc","loadedFromSource":true,"saved":true,"sourceSize":{"x":512,"y":509},"rootRelativePath":"assets/v3/animations/nDulGjkHcXw_fb_tzZKssRmVa7BOGuVkU8pWeAh6lRY/7dbefefc-daee-4e86-9665-4ebf0ee90544.png"},"6bec530f-69d7-45f8-bb63-76f89aa24762":{"name":"images (1).jpg_1","sourceUrl":null,"frameSize":{"x":60,"y":60},"frameCount":1,"looping":true,"frameDelay":12,"version":"mDp9.hJ5OvlfKWPyQESW7GVTxGsxKhwI","loadedFromSource":true,"saved":true,"sourceSize":{"x":60,"y":60},"rootRelativePath":"assets/6bec530f-69d7-45f8-bb63-76f89aa24762.png"},"e30dca68-af23-452f-b1d9-25add3eb5391":{"name":"animation_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"0bno6guQpi.EmfjOQBS.Y2HuEcgqY.Ld","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/e30dca68-af23-452f-b1d9-25add3eb5391.png"},"964a351e-dc89-4d3b-95fd-ae232920e1cd":{"name":"animation_1_copy_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"TZov6qEVBq6BJ_e5vWn.kZmI8otAccrM","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/964a351e-dc89-4d3b-95fd-ae232920e1cd.png"},"940bbd0d-1fa9-4e7b-aa23-21ebd496e3e3":{"name":"animation_1_copy_1_copy_1","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"M.xG7.k3W7tHhttww_lRqv4xO8_ADeJy","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/940bbd0d-1fa9-4e7b-aa23-21ebd496e3e3.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var bg = createSprite(200, 200);
bg.setAnimation("unnamed.jpg_1");
var striker = createSprite(200, 340);
striker.setAnimation("images (1).jpg_1");
var queen = createSprite(200, 200);
queen.setAnimation("animation_1_copy_1_copy_1");
var black = createSprite(200, 230);
black.setAnimation("animation_1");
var black1 = createSprite(200, 170);
black1.setAnimation("animation_1");
var black2 = createSprite(230, 200);
black2.setAnimation("animation_1");
var black3 = createSprite(170, 200);
black3.setAnimation("animation_1");
var white = createSprite(230, 230);
white.setAnimation("animation_1_copy_1");
var white1 = createSprite(170, 170);
white1.setAnimation("animation_1_copy_1");
var white2 = createSprite(170, 230);
white2.setAnimation("animation_1_copy_1");
var white3 = createSprite(230, 170);
white3.setAnimation("animation_1_copy_1");
var sprite1 = createSprite(200, 0,250,5);
var sprite2 = createSprite(200, 400,250,5);
var sprite3 = createSprite(0, 200,5,250);
var sprire4 = createSprite(400, 200,5,250);
function draw() {
  queen.bounceOff(sprite1);
  queen.bounce(striker);
  black.bounce(striker);
  queen.bounceOff(sprite2);
  queen.bounceOff(sprite3);
  queen.bounceOff(sprire4);
  striker.bounceOff(sprire4);
  striker.bounceOff(sprite1);
  striker.bounceOff(sprite2);
  striker.bounceOff(sprite3);
  striker.bounce(black2);
  black.bounceOff(sprite1);
  black.bounceOff(sprite2);
  black.bounceOff(sprite3);
  black.bounceOff(sprire4);
  black2.bounceOff(sprite1);
  black2.bounceOff(sprite2);
  black2.bounceOff(sprite3);
  black2.bounceOff(sprire4);
  striker.bounce(black3);
  black3.bounceOff(sprite1);
  black3.bounceOff(sprite2);
  black3.bounceOff(sprite3);
  black3.bounceOff(sprire4);
  striker.bounce(black1);
  black1.bounceOff(sprite1);
  black1.bounceOff(sprite2);
  black1.bounceOff(sprite3);
  black1.bounceOff(sprire4);
  striker.bounce(white);
  white.bounceOff(sprite1);
  white.bounceOff(sprite2);
  white.bounceOff(sprite3);
  white.bounceOff(sprire4);
  striker.bounce(white1);
  white1.bounceOff(sprite1);
  white1.bounceOff(sprite2);
  white1.bounceOff(sprite3);
  white1.bounceOff(sprire4);
  striker.bounce(white2);
  white2.bounceOff(sprite1);
  white2.bounceOff(sprite2);
  white2.bounceOff(sprite3);
  white2.bounceOff(sprire4);
  striker.bounce(white3);
    white3.bounceOff(sprite1);
  white3.bounceOff(sprite2);
  white3.bounceOff(sprite3);
  white3.bounceOff(sprire4);
  createEdgeSprites();
  if (keyDown("up")) {
    striker.velocityX = 0;
    striker.velocityY = -8;
  }
  if (keyDown("down")) {
    striker.velocityX = 0;
    striker.velocityY = 8;
  }
  if (keyDown("left")) {
    striker.velocityX = -8;
    striker.velocityY = 0;
  }
  if (keyDown("right")) {
    striker.velocityX = 8;
    striker.velocityY = 0;
  }
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
