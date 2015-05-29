Parse.initialize("uuMKgtd7piSYYS1OIicbKekLesPHKKerHp21X3Zk", "J10xkBbtYfn4EPD9TQzp0BNJI7sQ2UXmJqY0Dkgu");

function register() {
    var username = document.getElementById('user').value;
    var mail = document.getElementById('email').value;
    var pw = document.getElementById('password').value;
    var person = new Parse.User();

    person.set("username", username);
    person.set("password", pw);
    person.set("email", mail);

    person.signUp(null, {success: function(user){
        console.log("Sign up Success");
        login();
    },
    error: function(user,error){
        console.log(error);
    }});
    
     event.preventDefault(); 
};

function login() {
    var username = document.getElementById('user').value;
    var pw = document.getElementById('password').value;

    Parse.User.logIn(username, pw, {
      success: function(user) {
        console.log("Successful login");
        window.location.assign("dashboard.html");
      },
      error: function(user, error) {
        console.log("Failed login");
      }
    });
};

function signup() {
    console.log("what");
    var x = document.getElementById("login-user");
    var y = document.getElementById("iphone");
    var z = document.getElementById("login-pass");
    var zc = document.getElementById("login-cpass");

    // $.Velocity.animate(document.x, "scroll", 1000);

if(y){
y.remove();
    
}
    setTimeout(function () {
        $(x)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);
    setTimeout(function () {
        $(z)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);
    setTimeout(function () {
        $(zc)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);
};

function loginButton() {
    console.log("what");
    var x = document.getElementById("login-user");
    var y = document.getElementById("iphone");
    var z = document.getElementById("login-pass");
    var zc = document.getElementById("login-cpass");


    // $.Velocity.animate(document.x, "scroll", 1000);
if(y){
document.getElementById("w1-right").remove();

y.remove();
    
}

    setTimeout(function () {
        $(zc)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "hidden"
            })
    }, 0);
    setTimeout(function () {
        $(x)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);
    setTimeout(function () {
        $(z)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

};