.factory('DeviceDetector', function () {

   var service = {
       Android: function () {
           return navigator.userAgent.match(/Android/i) !== null;
       },
       BlackBerry: function () {
           return navigator.userAgent.match(/BlackBerry/i) !== null;
       },
       iOS: function () {
           return navigator.userAgent.match(/iPhone|iPad|iPod/i) !== null;
       },
       Opera: function () {
           return navigator.userAgent.match(/Opera Mini/i) !== null;
       },
       Windows: function () {
           return navigator.userAgent.match(/IEMobile/i) !== null;
       },
       isMobile: function () {
           return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
       }
   }
   return service;
})
;