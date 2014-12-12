// namespace
Game = {}
//===================================================================================

// initializer

$(document).ready(function() {
  var userInputGridWidth = 20
  var userInputGridHeight = 20
  var canvas = $('#canvas').attr({width: 400, height: 400});
  var controller = new Game.Controller(new Game.View(canvas[0]), new Game.Model(userInputGridWidth, userInputGridHeight), canvas[0]);
});
