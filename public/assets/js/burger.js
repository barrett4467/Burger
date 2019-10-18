$(function () {
    $(".toggle-devoured").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        var eaten = $(this).data("new");
        console.log("Eaten: " + eaten);
        eaten = false;
        console.log("Eaten: " + eaten);
        console.log(id);
        var burgerEaten = {
            devoured: eaten
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerEaten
        }).then(
            function () {
                location.reload();
            }
        );
    })

    $("#newBurger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#name").val().trim(),
            devoured: $("input[name='isEaten']:checked").val()
        }
        console.log("New Burger: " + newBurger);

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            location.reload();
        })

        $("#name").val("");
        $("input[id='devoured']:checked").val(true);
    })

});