(function() {
  'use strict';

  var ths = document.getElementsByTagName('th');
  var i;

  for (i = 0; i < ths.length; i++) {
    ths[i].addEventListener('click', function() {
    //   console.log(this.cellIndex);

    // NodeList
    // var rows = document.querySelectorAll('tbody > tr');
    var rows = Array.prototype.slice.call(document.querySelectorAll('tbody > tr'));
    console.log(rows);
    return;
    });
  }

})();