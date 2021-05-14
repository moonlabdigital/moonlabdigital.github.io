//jquery
$(document).ready(function() {
    // all custom jQuery will go here

        const order = document.getElementById("drk-wrapper");
        const orderBttn = document.getElementById("order-bttn");
        const menu = document.getElementById("order-menu");
        const menuItem = document.getElementsByClassName("order-item");
        const orderHeader = document.getElementById("order-header");
        const menuImage = document.getElementById("menu-img");

        //array of objects for holding orders

        var currentItem;
        var orders = [];
        //var toppings = [];
        var arrToppings = [];
        var base, protein, beans;
        var index = 0;

        var item;

        //displays or doesn't display order menu
        function orderDisplay(val)
        {
            order.style.display = val;

            if(val == "flex")
            {
                menu.style.display = "flex";

            }
            else if (val = "none")
            {
                menu.style.display = "none";

                var html = jQuery('html');
                var scrollPosition = html.data('scroll-position');
                html.css('overflow', html.data('previous-overflow'));
            }
        }

        function getID(val)
        {
            cap = val.charAt(0).toUpperCase() + val.slice(1);

            currentItem = cap;

            orderHeader.innerHTML = "Build Your " + cap;   

            getImg(val);

        }

        function getImg(val)
        {
            switch(val)
            {
                case("taco"): 
                $(menuImage).attr("src", "./images/taco1.png");
                break;
                case("burrito"):
                $(menuImage).attr("src", "./images/burrito3.png");
                break;
                case("quesadilla"):
                $(menuImage).attr("src", "./images/quesadilla.png");
                break;
                case("nachos"):
                $(menuImage).attr("src", "./images/nacho2.png");
                break;
                case("bowl"):
                $(menuImage).attr("src", "./images/burrito-bowl.png");
                break;
            }
        }

        //assign event listener to class objects
        for(var i = 0; i < menuItem.length; i++)
        {
            menuItem[i].addEventListener("click", function(){getID(this.id);});
            menuItem[i].addEventListener("click", function(){orderDisplay("flex");});
        }

    
        order.addEventListener("click", function(){orderDisplay("none");});

        function populateOrders(index)
            {
                orders.push({item: currentItem, base: base, protein: protein, beans: beans, toppings: arrToppings[index]});
            }
 
 
        $( "#sub-bttn" ).click(function() {

            var toppings = [];
            for(i = 1; i < 9; i++)
            {
                $("input:checkbox[name=topping"+i+"]:checked").each(function(){
                toppings.push($(this).val());
                });
            }
            arrToppings.push(toppings);

            base = $( "#base option:selected" ).val();
            protein = $( "#protein option:selected" ).val();
            beans = $( "#bean option:selected" ).val();
            
            populateOrders(index);

            $("#modal").show().css("display", "flex");
            $("#drk-wrapper").show().css("z-index", "4");
            $("#blackout").show().css("display", "flex");
          });


          function popArr(val)
          {
                    arrToppings.push([val, toppings.valueOf()]);
                
          }


        //modal functions ---------------------------------------------------------------------------------------------------------

        //exit button
        $("#exit").click(function(){
            $("#modal").removeAttr("style").hide();
            $("#drk-wrapper").show().css("z-index", "2");
        });
        
        //add order button
        $("#add-order").click(function(){
            $("#modal").removeAttr("style").hide();
            $(menu).removeAttr("style").hide();
            $(order).removeAttr("style").hide();
            $("#drk-wrapper").show().css("display", "none");
            index += 1;
        });

        $("#sub-order").click(function(){
            localStorage.setItem("orders", JSON.stringify(orders));
            
        });
        
});

//mobile menu-----------------------------------------------------------------------------

function myFunction() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 
