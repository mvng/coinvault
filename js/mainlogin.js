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
    // Items on page that need to disappear
    var iphone = document.getElementById("iphone");
    var left = document.getElementById("w1-left");
    var login = document.getElementById("login");
    var button = document.getElementById("loginButton");

    if(iphone){
        iphone.remove();
    }

    if(left){
        left.remove();
    }
    /*if(iphone){
        setTimeout(function () {
            $(iphone)
                .velocity({
                    opacity: 0
                }, {
                    duration: 100,
                    display: "block"
                })
        }, 0);
    }

    if(left){
        setTimeout(function () {
            $(left)
                .velocity({
                    opacity: 0
                }, {
                    duration: 100,
                    display: "block"
                })
        }, 0);
    }*/

    if(login){
        setTimeout(function () {
            $(login)
                .velocity({
                    opacity: 0
                }, {
                    duration: 100,
                    display: "block"
                })
        }, 0);
    }

    if(button){
        setTimeout(function () {
            $(button)
                .velocity({
                    opacity: 0
                }, {
                    duration: 100,
                    display: "block"
                })
        }, 0);
    }

    // Items on page that need to appear
    var signup = document.getElementById("signup");
    var signupButton = document.getElementById("signup-button");

    setTimeout(function () {
        $(signup)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupButton)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);
};

function loginButton() {
    // Items on page that need to disappear
    var iphone = document.getElementById("iphone");
    var left = document.getElementById("w1-left");
    var signup = document.getElementById("signup");
    var signupButton = document.getElementById("signup-button");

    if(iphone){
        iphone.remove();
    }

    if(left){
        left.remove();
    }

    if(signup){
        setTimeout(function () {
            $(signup)
                .velocity({
                    opacity: 0
                }, {
                    duration: 100,
                    display: "block"
                })
        }, 0);
    }

    if(signupButton){
        setTimeout(function () {
            $(signupButton)
                .velocity({
                    opacity: 0
                }, {
                    duration: 100,
                    display: "block"
                })
        }, 0);
    }

    // Items on page that need to appear
    var login = document.getElementById("login");
    var button = document.getElementById("loginButton");

    setTimeout(function () {
        $(login)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(button)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);
};