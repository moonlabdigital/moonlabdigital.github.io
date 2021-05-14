$(document).ready(function() {

    $(function(){
        //prepare Your data array with img urls
        var dataArray=new Array();
        dataArray[0]="images/silk-screen.png";
        dataArray[1]="images/burrito-screen.png";

        //start with id=0 after 5 seconds
        var thisId=0;

        window.setInterval(function(){
            $('.project-img').fadeOut('slow', function() {
                $('.project-img').attr('src',dataArray[thisId]).fadeIn('slow');
            });;
            thisId++; //increment data array id
            if (thisId==2) thisId=0; //repeat from start
            if(thisId==0)
            {
                $("#site-link").attr('href', './sites/silk_site/index.html')
            }
            else
            {
                $("#site-link").attr('href', './sites/test_site/index.html')
            }
        },10000);        
    });

    var counter = 0;

    $("#mobile-menu-container").click(o = function(){
        console.log(counter);
        if(counter == 0)
        {
            $("#expand-menu").css("width", "220px");
            $("#expand-menu").css("height", "300px");
            $("#mobile-menu-container").css("right", "130px");
            $('#mobile-menu-container').addClass('exit');
            $("#nav-links").css("display", "flex");
            counter = 1;
        }
        else if(counter == 1)
        {
                //$( "body" ).on( "click", "#mobile-menu-container", x );
                $("#expand-menu").css("width", "0px");
                $("#expand-menu").css("height", "0px");
                $("#mobile-menu-container").css("right", "0");
                $("#nav-links").css("display", "none");
                $('#mobile-menu-container').removeClass('exit');
                counter = 0;
    }
    });

    function reset(x) {
        if (x.matches == false) { // If media query matches
            $("#nav-links").css("display", "flex");
        } 
        else{
            $("#nav-links").css("display", "none");
        }
      }
      
      var x = window.matchMedia("(max-width: 768px)")
      reset(x) // Call listener function at run time
      x.addListener(reset) // Attach listener function on state changes 

})