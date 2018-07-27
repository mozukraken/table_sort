(function() {
  'use strict';

  var ths = document.getElementsByTagName('th');
  var i;

  for (i = 0; i < ths.length; i++) {
    ths[i].addEventListener('click', function() {
      // console.log(this.cellIndex);

      // NodeList
      // var rows = document.querySelectorAll('tbody > tr');
      var rows = Array.prototype.slice.call(document.querySelectorAll('tbody > tr'));

      var col = this.cellIndex;

      rows.sort(function(a, b) {
        var _a = a.children[col].textContent;
        var _b = b.children[col].textContent;

        if (_a < _b) {
          return -1;
        }
        if (_a > _b) {
          return 1;
        }
        return 0; 
      });
        console.log(rows);
    });
  }

})();