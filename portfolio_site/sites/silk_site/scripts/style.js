$(document).ready(function() {

    $("#lotion-model").click(function() {
        console.log("moisturizer")
        //localStorage.clear();
        localStorage.setItem('num', '1');
    });

    $("#facial-model").click(function() {
        console.log("facewash")
        //localStorage.clear();
        localStorage.setItem('num', '0');
    });

    $("#moisturizer-model").click(function() {
        console.log("lotion")
        //localStorage.clear();
        localStorage.setItem('num', '2');
    });

    var counter = parseInt(localStorage.getItem('num'));

    if(counter  == 0)
        {
            $("#product-title").html("Facewash")

            $("#product-img").attr("src", "../images/silk-facewash.png");
            $("#product-img").css("max-width", "320px");


            $("#product-wrapper").css("background-image", "url(../images/frond.png)");
            $("#product-wrapper").css("background-position-x", "-35em");

            $("#sub-bttn").css("border-color", "#74AB7A");
            $("#sub-bttn").css("color", "#74AB7A");
            
            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "color", "#e5e5e5" );
                }, function() {
                $( this ).css( "color", "#74AB7A" );
                }
            );

            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "border-color", "#e5e5e5" );
                }, function() {
                $( this ).css( "border-color", "#74AB7A" );
                }
            );
        }

        else if(counter == 1)
        {
            $("#product-title").html("Body Lotion")

            $("#product-img").attr("src", "../images/silk-lotion.png");
            $("#product-img").css("max-width", "230px");
            $("#product-img").css("margin-right", "3rem");

            $("#product-wrapper").css("background-image", "url(../images/coconut-background.png)");
            $("#product-wrapper").css("background-position-x", "-50em");

            $("#sub-bttn").css("border-color", "#a7805a");
            $("#sub-bttn").css("color", "#a7805a");
            
            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "color", "#e5e5e5" );
                }, function() {
                $( this ).css( "color", "#a7805a" );
                }
            );

            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "border-color", "#e5e5e5" );
                }, function() {
                $( this ).css( "border-color", "#a7805a" );
                }
            );
        }
        else if (counter == 2)
        {
            $("#product-title").html("Moisturizer")

            $("#product-img").attr("src", "../images/silk-moisturizer.png");
            $("#product-img").css("max-width", "230px");
            $("#product-img").css("margin-right", "3rem");

            $("#product-wrapper").css("background-image", "url(../images/wave.png)");
            $("#product-wrapper").css("background-position-x", "-35em");

            $("#sub-bttn").css("border-color", "#047D8E");
            $("#sub-bttn").css("color", "#047D8E");
            
            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "color", "#e5e5e5" );
                }, function() {
                $( this ).css( "color", "#047D8E" );
                }
            );

            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "border-color", "#e5e5e5" );
                }, function() {
                $( this ).css( "border-color", "#047D8E" );
                }
            );
        }

    

    $("#down-arrow").click(function() {

        counter+=1;

        if(counter > 2)
        {
            counter = 0;
            $("#product-info").removeClass("coconut");
        }

        if(counter  == 0)
        {
            $("#product-title").html("Facewash")

            $("#product-img").attr("src", "../images/silk-facewash.png");
            $("#product-img").css("max-width", "320px");


            $("#product-wrapper").css("background-image", "url(../images/frond.png)");
            $("#product-wrapper").css("background-position-x", "-35em");

            $("#sub-bttn").css("border-color", "#74AB7A");
            $("#sub-bttn").css("color", "#74AB7A");
            
            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "color", "#e5e5e5" );
                }, function() {
                $( this ).css( "color", "#74AB7A" );
                }
            );

            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "border-color", "#e5e5e5" );
                }, function() {
                $( this ).css( "border-color", "#74AB7A" );
                }
            );
        }

        else if(counter == 1)
        {
            $("#product-title").html("Body Lotion")

            $("#product-img").attr("src", "../images/silk-lotion.png");
            $("#product-img").css("max-width", "230px");
            $("#product-img").css("margin-right", "3rem");

            $("#product-wrapper").css("background-image", "url(../images/coconut-background.png)");
            $("#product-wrapper").css("background-position-x", "-50em");

            $("#sub-bttn").css("border-color", "#a7805a");
            $("#sub-bttn").css("color", "#a7805a");
            
            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "color", "#e5e5e5" );
                }, function() {
                $( this ).css( "color", "#a7805a" );
                }
            );

            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "border-color", "#e5e5e5" );
                }, function() {
                $( this ).css( "border-color", "#a7805a" );
                }
            );
        }
        else if (counter == 2)
        {
            $("#product-title").html("Moisturizer")

            $("#product-img").attr("src", "../images/silk-moisturizer.png");
            $("#product-img").css("max-width", "230px");
            $("#product-img").css("margin-right", "3rem");

            $("#product-wrapper").css("background-image", "url(../images/wave.png)");
            $("#product-wrapper").css("background-position-x", "-35em");

            $("#sub-bttn").css("border-color", "#047D8E");
            $("#sub-bttn").css("color", "#047D8E");
            
            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "color", "#e5e5e5" );
                }, function() {
                $( this ).css( "color", "#047D8E" );
                }
            );

            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "border-color", "#e5e5e5" );
                }, function() {
                $( this ).css( "border-color", "#047D8E" );
                }
            );
        }

    });

    $("#up-arrow").click(function() {

        counter-=1;

        if(counter < -1)
        {
            counter = 0;
        }

        if(counter  == 0)
        {
            $("#product-title").html("Facewash")

            $("#product-img").attr("src", "../images/silk-facewash.png");
            $("#product-img").css("max-width", "320px");

            $("#product-wrapper").css("background-image", "url(../images/frond.png)");
            $("#product-wrapper").css("background-position-x", "-35em");

            $("#sub-bttn").css("border-color", "#74AB7A");
            $("#sub-bttn").css("color", "#74AB7A");
            
            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "color", "#e5e5e5" );
                }, function() {
                $( this ).css( "color", "#74AB7A" );
                }
            );

            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "border-color", "#e5e5e5" );
                }, function() {
                $( this ).css( "border-color", "#74AB7A" );
                }
            );
        }

        else if(counter == 1)
        {

            $("#product-title").html("Body Lotion")

            $("#product-img").attr("src", "../images/silk-lotion.png");
            $("#product-img").css("max-width", "230px");
            $("#product-img").css("margin-right", "3rem");

            $("#product-wrapper").css("background-image", "url(../images/coconut-background.png)");
            $("#product-wrapper").css("background-position-x", "-50em");

            $("#sub-bttn").css("border-color", "#a7805a");
            $("#sub-bttn").css("color", "#a7805a");
            
            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "color", "#e5e5e5" );
                }, function() {
                $( this ).css( "color", "#a7805a" );
                }
            );

            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "border-color", "#e5e5e5" );
                }, function() {
                $( this ).css( "border-color", "#a7805a" );
                }
            );
        }
        else if (counter == -1)
        {
            $("#product-title").html("Moisturizer")

            $("#product-img").attr("src", "../images/silk-moisturizer.png");
            $("#product-img").css("max-width", "230px");
            $("#product-img").css("margin-right", "3rem");

            $("#product-wrapper").css("background-image", "url(../images/wave.png)");
            $("#product-wrapper").css("background-position-x", "-35em");

            $("#sub-bttn").css("border-color", "#047D8E");
            $("#sub-bttn").css("color", "#047D8E");
            
            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "color", "#e5e5e5" );
                }, function() {
                $( this ).css( "color", "#047D8E" );
                }
            );

            $( "#sub-bttn" ).hover(
                function() {
                $( this ).css( "border-color", "#e5e5e5" );
                }, function() {
                $( this ).css( "border-color", "#047D8E" );
                }
            );
            counter = 2;
        }

    });

    function menuBars() {
        var x = document.getElementById("link-container");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      } 

});
