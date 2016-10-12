/**
 * Created by paulguichon on 06/10/2016.
 */
var $ = require('jquery');
$(function () {
   var pays;
   $("#searh1").on('click', function (event) {
      event.preventDefault();

   });
   function get_pays() {
      $.ajax({
         method: 'GET',
         url:'https://restcountries.eu/rest/v1/all'}).
      done(function(data){
         var result1 = $("#result1");
         var result2 = $("#result2");
         var ul = $('<div>');
         for(var i= 0, l=data.length; i < l; i++){
            var p = data[i];
            var li = $('<a>');
            li.attr("id", 'pays'+i);
            li.text(p.name);
            li.addClass("btn btn-primary");
            li.on('click', p,  function (event) {

               var pays1 = event.data;
               event.preventDefault();
               result2.html(pays1.name);
            });
            ul.append(li).append('<hr />');
         }
         console.log(ul);
         result1.empty().append(ul);
      });
   }
   function detail_pays(element, p) {

   }
   get_pays();

   /*$("#search1").click(function (event) {
      event.preventDefault();
      console.log('ça marche');
   })*/
});