document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems, options);
});

var instance = M.Collapsible.getInstance(elem);

instance.open(3);

instance.close(3);

let btn = document.querySelectorAll("a.btn");
btn.style.color = "black";