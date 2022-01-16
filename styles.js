$(document).ready(function(){
    $("form-group#pizza").submit(function(event){
        event.preventDefault()

        let selectedPizzaSize = $("select#pizza-size").val()
        let selectedPizzaCrust = $("select#pizza-crust").val()
        let selectedPizzaTopping = $("select#barbecue-steak").val()

        let pizza = pizza(selectedPizzaSize,selectedPizzaTopping,selectedPizzaCrust)
    })
})