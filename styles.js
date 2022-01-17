function pizza(size,crust,topping){
    this.size=size
    this.crust=crust
    this.topping=topping
}

$(document).ready(function(){
    $("form-group#pizza").submit(function(event){
        event.preventDefault()

        let selectedPizzaSize = $("select#pizza-size").val()
        let selectedPizzaCrust = $("select#pizza-crust").val()
        let selectedPizzaTopping = $("select#barbecue-steak").val()

        let pizza = pizza(selectedPizzaSize,selectedPizzaTopping,selectedPizzaCrust)

        $("ul#pizzas").append("<li><span class='pizzas'>" + pizza.size + "</span></li>")

        $("select#pizza-size").val()
        $("select#pizza-crust").val()
        $("select#barbecue-steak").val()

    })
})