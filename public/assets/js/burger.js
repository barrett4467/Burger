$(function() {
    $(".toggle-devoured").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        var eaten = $(this).data("new");
        console.log("Eaten: " + eaten);
        console.log(id);
        var burgerEaten = {
            devoured: eaten
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerEaten
        }).then(
            function(){
                location.reload();
            }
        );
    })

});