$(document).ready(function(){
    $("form-group#pizza").submit(function(event){
        event.preventDefault()

        let inputtedPizzaSize = $("select#pizza-size").val()
        let inputtedPizzaSize = $("select#pizza-crust").val()
        let inputtedPizzaSize = $("select#barbecue-steak").val()
    })
})