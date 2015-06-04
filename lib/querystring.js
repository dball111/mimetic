module.exports = function (input) {
  var newObj = {};
  if (input === null) {
  return newObj;}
  else {
  var splitter = input.replace("?", "").split('&');

  for (var i = 0; i < splitter.length; i++) {
    var key = splitter[i].split("=")[0];
    var value = splitter[i].split("=")[1];
    newObj[key] = value;


  }
  return newObj;

}

}
