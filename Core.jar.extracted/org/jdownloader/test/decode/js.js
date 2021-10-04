 function toNumbers(d) {
   var e = [];
   d.replace(/(..)/g, function(d) {
     e.push(parseInt(d, 16))
   });
   return e
 }

 function toHex() {
   for (var d = [], d = 1 == arguments.length && arguments[0].constructor == Array ? arguments[0] : arguments, e = "", f = 0; f < d.length; f++) e += (16 > d[f] ? "0" : "") + d[f].toString(16);
   return e.toLowerCase()
 }

 function Decode() {
   var a = toNumbers("474f4184c0c025b1111abe02c53a82dc"),
     b = toNumbers("b411d21615c916335944cd455def320c"),
     c = toNumbers("135d34538bbc15c0f00f85af648e4eb6");
   document.cookie = "denial=" + toHex(slowAES.decrypt(c, 2, a, b)) + "; max-age=" + 60 * 60 * 24 * 1 + "; path=/";
   window.location.href = "http://www.imgbabes.com/ce8pegsha874/133438058342.jpg.html?attempt=1";
 }

 function Exit() {
   window.location.href = "http://www.disney.com";
 }