/**
 * Created by paulguichon on 06/10/2016.
 */
var $ = require('jquery');
// $(document).ready(function () {
//     console.log('coucuo')
// });
$(function () {
   $("#search1").on('click', function (event) {
      event.preventDefault();
      console.log('ça marche');
   });

   /*$("#search1").click(function (event) {
      event.preventDefault();
      console.log('ça marche');
   })*/
});