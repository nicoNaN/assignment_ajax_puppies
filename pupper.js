"use strict";

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

})
