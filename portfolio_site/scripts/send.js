
function sendMail(params){
    console.log("fired");
    var tempParams = {
        from_name: document.getElementById("name").value,
        my_email: document.getElementById("email").value,
        my_phone: document.getElementById("phone").value,
        my_project: document.getElementById("project").value,
        message: document.getElementById("msg").value,
    }

    emailjs.send('service_d5ny82n', 'template_5kbqtdk', tempParams)
    .then(function(res){
        console.log("succcess", res.status);
        
    }, function(error) {
        console.log('FAILED...', error);
     });

     document.getElementById("name").value = " ";
    document.getElementById("email").value = " ";
    document.getElementById("msg").value = " ";
}

