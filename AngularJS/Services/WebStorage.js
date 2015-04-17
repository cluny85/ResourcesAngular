.factory('SessionStorage', ['$window',
   function ($window) {
       return {

           getItem: function (key) {
               return JSON.parse($window.sessionStorage.getItem(key));
           },

           setItem: function (key, value) {
               $window.sessionStorage.setItem(key, JSON.stringify(value));
           },

           removeItem: function (key) {
               $window.sessionStorage.removeItem(key);
           }

       };
   }
])

.factory('LocalStorage', ['$window',
   function ($window) {
       return {

           getItem: function (key) {
               return JSON.parse($window.localStorage.getItem(key));
           },

           setItem: function (key, value) {
               $window.localStorage.setItem(key, JSON.stringify(value));
           },

           removeItem: function (key) {
               $window.localStorage.removeItem(key);
           }

       };
   }
])
;