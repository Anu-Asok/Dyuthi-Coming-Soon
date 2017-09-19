var grad = new Date(2016, 3, 16, 17, 0, 0, 0, 0),
  digit0 = $('#digit-0');
  digit1 = $('#digit-1'),
  digit2 = $('#digit-2'),
  digit3 = $('#digit-3'),
  digit4 = $('#digit-4'),
  digit5 = $('#digit-5'),
  digit6 = $('#digit-6'),
  digit7 = $('#digit-7'),
  digit8 = $('#digit-8'),
  digit9 = $('#digit-9'),
  digit10 = $('#digit-10');

function renderDigit(container, number) {
  var matrix;
  switch(number) {
    case 0:
      matrix = [
        true, true, true, true,
        true, false, false, true,
        true, false, false, true,
        true, false, false, true,
        true, false, false, true,
        true, false, false, true,
        true, true, true, true
      ];
      break;
    case 1:
      matrix = [
        false, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true
      ];
      break;
    case 2:
      matrix = [
        true, true, true, true,
        false, false, false, true,
        false, false, false, true,
        true, true, true, true,
        true, false, false, false,
        true, false, false, false,
        true, true, true, true
      ];
      break;
    case 3:
      matrix = [
        true, true, true, true,
        false, false, false, true,
        false, false, false, true,
        false, true, true, true,
        false, false, false, true,
        false, false, false, true,
        true, true, true, true
      ];
      break;
    case 4:
      matrix = [
        true, false, false, false,
        true, false, false, true,
        true, false, false, true,
        true, true, true, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true
      ];
      break;
    case 5:
      matrix = [
        true, true, true, true,
        true, false, false, false,
        true, false, false, false,
        true, true, true, true,
        false, false, false, true,
        false, false, false, true,
        true, true, true, true
      ];
      break;
    case 6:
      matrix = [
        true, true, true, true,
        true, false, false, false,
        true, false, false, false,
        true, true, true, true,
        true, false, false, true,
        true, false, false, true,
        true, true, true, true
      ];
      break;
    case 7:
      matrix = [
        true, true, true, true,
        true, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true
      ];
      break;
    case 8:
      matrix = [
        true, true, true, true,
        true, false, false, true,
        true, false, false, true,
        true, true, true, true,
        true, false, false, true,
        true, false, false, true,
        true, true, true, true
      ];
      break;
    case 9:
      matrix = [
        true, true, true, true,
        true, false, false, true,
        true, false, false, true,
        true, true, true, true,
        false, false, false, true,
        false, false, false, true,
        false, false, false, true
      ];
      break;
  }
  var children = container.children();
  var len = matrix.length;
  for (var i = 0; i < len; i++) {
    children.eq(i).toggleClass('on', matrix[i]);
  }
}

function render() {
  var now = new Date(),
    diff = String(grad.getTime() - now.getTime()),
    len = diff.length;
  renderDigit(digit0, Number(diff.charAt(len-1)));
  renderDigit(digit1, Number(diff.charAt(len-2)));
  renderDigit(digit2, Number(diff.charAt(len-3)));
  renderDigit(digit3, Number(diff.charAt(len-4)));
  renderDigit(digit4, Number(diff.charAt(len-5)));
  renderDigit(digit5, Number(diff.charAt(len-6)));
  renderDigit(digit6, Number(diff.charAt(len-7)));
  renderDigit(digit7, Number(diff.charAt(len-8)));
  renderDigit(digit8, Number(diff.charAt(len-9)));
  renderDigit(digit9, Number(diff.charAt(len-10)));
  renderDigit(digit10, Number(diff.charAt(len-11)));
  requestAnimationFrame(render);
}

requestAnimationFrame(render);