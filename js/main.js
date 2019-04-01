var layar = document.getElementById('layar');
layar.value = '';

function hit(object) {
  var masukan = object.textContent;

  if (masukan == '=') {
    layar.value = eval(layar.value);

  } else if (masukan == 'AC') {
    layar.value = '';

  } else if (masukan == 'C') {
    var value = layar.value;
    value = value.slice(0, -1);
    layar.value = value;

  } else {
    if (masukan == '0') {
      layar.value = '';
    } else {
      layar.value += masukan
    }
  }
}
