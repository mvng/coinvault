Parse.initialize("uuMKgtd7piSYYS1OIicbKekLesPHKKerHp21X3Zk", "J10xkBbtYfn4EPD9TQzp0BNJI7sQ2UXmJqY0Dkgu");

// Registers a User in the Parse database
function register() {
    var username = document.getElementById('signup-user').value;
    var mail = document.getElementById('email').value;
    var pw = document.getElementById('signup-password').value;
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

// Attempts to login User
function login() {
    var username = document.getElementById('login-user').value;
    var pw = document.getElementById('login-password').value;

    Parse.User.logIn(username, pw, {
      success: function(user) {
        console.log("Successful login");
        window.location.assign("src/dashboard.html");
      },
      error: function(user, error) {
        console.log("Failed login");
      }
    });
};

function signupButton() {
    // Items on page that need to disappear
    var iphone = document.getElementById("iphone");
    var left = document.getElementById("w1-left");
    var loginUser = document.getElementById("login-user");
    var loginPass = document.getElementById("login-password");
    var loginButton = document.getElementById("loginButton");
    var loginText = document.getElementById("login-text");
    var loginUserText = document.getElementById("login-username-text");
    var loginEmailText = document.getElementById("login-email-text");

    // Disables certain buttons
    $("#su").attr("onclick", "return false;");
    $("#lo").attr("onclick", "return false;");
    $("#loginButton").attr("onclick", "return false;");

    if(iphone){
        setTimeout(function () {
            $(iphone)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
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
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(loginUser){
        setTimeout(function () {
            $(loginUser)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(loginPass){
        setTimeout(function () {
            $(loginPass)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(loginButton){
        setTimeout(function () {
            $(loginButton)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(loginText){
        setTimeout(function () {
            $(loginText)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(loginUserText){
        setTimeout(function () {
            $(loginUserText)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(loginEmailText){
        setTimeout(function () {
            $(loginEmailText)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    // Items on page that need to appear
    var signup = document.getElementById("signup");
    var signupUser = document.getElementById("signup-user");
    var signupEmail = document.getElementById("signup-email");
    var signupPass = document.getElementById("signup-password");
    var signupButton = document.getElementById("signup-button");
    var signupText = document.getElementById("signup-text");
    var signupUserText = document.getElementById("signup-username-text");
    var signupEmailText = document.getElementById("signup-email-text");
    var signupPassText = document.getElementById("signup-password-text");

    // Re-enables button
    $("#signup-button").attr("onclick", "register()");

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
        $(signupUser)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupEmail)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupPass)
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

    setTimeout(function () {
        $(signupText)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupUserText)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);


    setTimeout(function () {
        $(signupEmailText)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupPassText)
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
    var signupUser = document.getElementById("signup-user");
    var signupEmail = document.getElementById("signup-email");
    var signupPass = document.getElementById("signup-password");
    var signupButton = document.getElementById("signup-button");
    var signupText = document.getElementById("signup-text");
    var signupUserText = document.getElementById("signup-username-text");
    var signupEmailText = document.getElementById("signup-email-text");
    var signupPassText = document.getElementById("signup-password-text");

    // Disables certain tags
    $("#su").attr("onclick", "return false;");
    $("#lo").attr("onclick", "return false;");
    $("#signup-button").attr("onclick", "return false;");

    if(iphone){
        setTimeout(function () {
            $(iphone)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
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
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signup){
        setTimeout(function () {
            $(signup)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
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
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signupUser){
        setTimeout(function () {
            $(signupUser)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signupEmail){
        setTimeout(function () {
            $(signupEmail)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signupPass){
        setTimeout(function () {
            $(signupPass)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signupUserText){
        setTimeout(function () {
            $(signupUserText)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signupEmailText){
        setTimeout(function () {
            $(signupEmailText)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signupPassText){
        setTimeout(function () {
            $(signupPassText)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    // Items on page that need to appear
    var login = document.getElementById("login");
    var loginUser = document.getElementById("login-user");
    var loginPass = document.getElementById("login-password");
    var loginButton = document.getElementById("loginButton");
    var loginText = document.getElementById("login-text");
    var loginUserText = document.getElementById("login-username-text");
    var loginEmailText = document.getElementById("login-email-text");

    // Re-eneables button
    $("#loginButton").attr("onclick", "login()");

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
        $(loginUser)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginPass)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginButton)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

    if(loginText){
        setTimeout(function () {
            $(loginText)
                .velocity({
                    opacity: 1
                }, {
                    duration: 750,
                    display: "block"
                })
        }, 0);
    }

    if(loginUserText){
        setTimeout(function () {
            $(loginUserText)
                .velocity({
                    opacity: 1
                }, {
                    duration: 750,
                    display: "block"
                })
        }, 0);
    }

    if(loginEmailText){
        setTimeout(function () {
            $(loginEmailText)
                .velocity({
                    opacity: 1
                }, {
                    duration: 750,
                    display: "block"
                })
        }, 0);
    }
};

function homeButton() {
    // Items on page that need to disappear
    var login = document.getElementById("login");
    var loginUser = document.getElementById("login-user");
    var loginPass = document.getElementById("login-password");
    var loginButton = document.getElementById("loginButton");
    var loginText = document.getElementById("login-text");
    var loginUserText = document.getElementById("login-username-text");
    var loginEmailText = document.getElementById("login-email-text");
    var iphone = document.getElementById("iphone");
    var left = document.getElementById("w1-left");
    var signup = document.getElementById("signup");
    var signupUser = document.getElementById("signup-user");
    var signupEmail = document.getElementById("signup-email");
    var signupPass = document.getElementById("signup-password");
    var signupButton = document.getElementById("signup-button");
    var signupText = document.getElementById("signup-text");
    var signupUserText = document.getElementById("signup-username-text");
    var signupEmailText = document.getElementById("signup-email-text");
    var signupPassText = document.getElementById("signup-password-text");

    // Disables certain buttons
    $("#signup-button").attr("onclick", "return false;");
    $("#loginButton").attr("onclick", "return false;");

    if(iphone){
        setTimeout(function () {
            $(iphone)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signup){
        setTimeout(function () {
            $(signup)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
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
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signupUser){
        setTimeout(function () {
            $(signupUser)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signupEmail){
        setTimeout(function () {
            $(signupEmail)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signupPass){
        setTimeout(function () {
            $(signupPass)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signupUserText){
        setTimeout(function () {
            $(signupUserText)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signupEmailText){
        setTimeout(function () {
            $(signupEmailText)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(signupPassText){
        setTimeout(function () {
            $(signupPassText)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(loginUser){
        setTimeout(function () {
            $(loginUser)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(loginPass){
        setTimeout(function () {
            $(loginPass)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(loginButton){
        setTimeout(function () {
            $(loginButton)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(loginText){
        setTimeout(function () {
            $(loginText)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(loginUserText){
        setTimeout(function () {
            $(loginUserText)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    if(loginEmailText){
        setTimeout(function () {
            $(loginEmailText)
                .velocity({
                    opacity: 0
                }, {
                    duration: 0,
                    display: "block"
                })
        }, 0);
    }

    // Items on page that need to appear
    var left = document.getElementById("w1-left");

    // Re-enables certain buttons
    $("#su").attr("onclick", "signupButton()");
    $("#lo").attr("onclick", "loginButton()");

    setTimeout(function () {
        $(left)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);
};