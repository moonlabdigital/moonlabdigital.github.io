//jquery
$(document).ready(function() {


    orders = JSON.parse(localStorage.getItem("orders"));

    if (window.location.href.match('checkout.html'))
    {
        for(i = 0; i < orders.length; i++)
        {
            if(i > 0)
            {
                $(".checkout-items").append($("<li class='checkout-item'>").html("&nbsp;"));
            }
            $(".checkout-items").append($("<li class='checkout-item'>").html("<h3>Order #"+(i+1)+"</h3>"));
            $(".checkout-items").append($("<li class='checkout-item'>").html("<b><h3>Item:</b> "+orders[i].item+"</h3>"));
            $(".checkout-items").append($("<li class='checkout-item'>").html("<b><h3>Base:</b> "+orders[i].base+"</h3>"));
            $(".checkout-items").append($("<li class='checkout-item'>").html("<b><h3>Protein:</b> "+orders[i].protein+"</h3>"));
            $(".checkout-items").append($("<li class='checkout-item'>").html("<b><h3>Beans:</b> "+orders[i].beans+"</h3>"));

            for(j = 0; j < orders[i].toppings.length; j++)
            {
                $(".checkout-items").append($("<li class='checkout-item'>").html("<h3>Add: "+orders[i].toppings[j]+"</h3>"));
            }
        }
    
        
    }
    


});