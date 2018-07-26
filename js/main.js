(function() {
  'use strict';

  var ths = document.getElementsByTagName('th');
  var i;

  for (i = 0; i < ths.length; i++) {
    ths[i].addEventListener('click', function() {
      console.log(this.cellIndex);
    });
  }

})();