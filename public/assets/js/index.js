// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  if ($(".eat-it").data("devoured") == 1) {
    console.log("hi");
  }

  $(".eat-it").on("click", function(event) {
    var id = $(this).data("id");

    var devoured = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
    }).then(function() {
      console.log("changed sleep to", devoured);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $("#create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      name: $("#bn")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
