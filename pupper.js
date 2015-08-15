"use strict";

var jaxCalls = {

  refreshPuppers: function(clickEvent) {
    clickEvent.preventDefault();
    
    $(".puppies-list").html("");

    $.get(
      "https://pacific-stream-9205.herokuapp.com/puppies.json",

      function(data) {
        data.forEach(function(puppy){
          $(".puppies-list").append("<li>" +
                                    puppy.name +
                                    " (" + puppy.breed.name + ")" +
                                    "</li>");
        });
      }
    )
  }

}

$(document).ready(function() {

  $.get(
    "https://pacific-stream-9205.herokuapp.com/breeds.json",

    function(data) {
      data.forEach(function(breed){
        $(".breeds").append("<option value='" + breed.name + "'>" + breed.name + "</option>");
      });
    }
  )

  $.get(
    "https://pacific-stream-9205.herokuapp.com/puppies.json",

    function(data) {
      data.forEach(function(puppy){
        $(".puppies-list").append("<li>" +
                                  puppy.name +
                                  " (" + puppy.breed.name + ")" +
                                  "</li>");
      });
    }
  )

  $(".refresh-puppers").click(function(click) {
    jaxCalls.refreshPuppers(click);
  })

})
