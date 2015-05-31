Parse.initialize("uuMKgtd7piSYYS1OIicbKekLesPHKKerHp21X3Zk", "J10xkBbtYfn4EPD9TQzp0BNJI7sQ2UXmJqY0Dkgu");

window.fbAsyncInit = function() {
    Parse.FacebookUtils.init({
        appId      : '851290008320180', // Facebook App ID
        status     : true,  // check Facebook Login status
        cookie     : true,  // enable cookies to allow Parse to access the session
        xfbml      : true,  // initialize Facebook social plugins on the page
        version    : 'v2.3'
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    // Take out "https:" if not using local files            
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Registers a User in the Parse database
function register() {
    var username = document.getElementById("signup-user").value;
    var mail = document.getElementById("signup-email").value;
    var pw = document.getElementById("signup-password").value;
    var person = new Parse.User();

    person.set("username", username);
    person.set("password", pw);
    person.set("email", mail);

    person.signUp(null, {success: function(user){
        console.log("Successful sign up");
        document.getElementById("login-user").value = username;
        document.getElementById("login-password").value = pw;
        login();
    },
    error: function(user,error){
        alert("" + error.message);
    }});
    
     event.preventDefault(); 
};

// Attempts to login User
function login() {
    var username = document.getElementById("login-user").value;
    var pw = document.getElementById("login-password").value;

    Parse.User.logIn(username, pw, {
      success: function(user) {
        console.log("Successful login");
        window.location.assign("src/dashboard.html");
      },
      error: function(user, error) {
        alert(error.message);
      }
    });
};

// Logs current user out
function logout() {
    Parse.User.logOut();
    window.location.assign("../index.html");
}

// Login through Facebook account
function facebookLogin() {
    Parse.FacebookUtils.logIn(null, {
        success: function(user) {
            if (!user.existed()) {
                alert("User signed up and logged in through Facebook!");
                window.location.assign("src/dashboard.html");
            } else {
                alert("User logged in through Facebook!");
            }
        },
        error: function(user, error) {
            alert("User cancelled the Facebook login or did not fully authorize.");
        }
    });
}

// Login through Google account
function googleLogin() {
    // Does nothing atm
}

// Performs the animations in the home screen when signup is pressed
function signupButton() {
    hideHome();
    hideLogin();
    showSignup();
};

// Performs the animations in the home screen when login is pressed
function loginButton() {
    hideHome();
    hideSignup();
    showLogin();
};

// Performs the animations in the home screen when home is pressed
function homeButton() {
    hideLogin();
    hideSignup();
    showHome();
};

// Hides the elements associated with the home page
function hideHome() {
    // Disables home buttons
    $("#su").attr("onclick", "return false;");
    $("#lo").attr("onclick", "return false;");

    // Parses all home items to hide
    var iphone = document.getElementById("iphone");
    var left = document.getElementById("w1-left");

    setTimeout(function () {
        $(iphone)
            .velocity({
                opacity: 0
            }, {
                duration: 0
            })
    }, 0);

    setTimeout(function () {
        $(left)
            .velocity({
                opacity: 0
            }, {
                duration: 0
            })
    }, 0);
}

// Shows the elements associated with the home page
function showHome() {
    // Re-enables home buttons
    $("#su").attr("onclick", "signupButton()");
    $("#lo").attr("onclick", "loginButton()");

    // Parses all home items to show
    var iphone = document.getElementById("iphone");
    var left = document.getElementById("w1-left");
    
    // To make left and iphone "animated"
    setTimeout(function () {
        $(left)
            .velocity({
                opacity: 0
            }, {
                duration: 0
            })
    }, 0);

    setTimeout(function () {
        $(iphone)
            .velocity({
                opacity: 0
            }, {
                duration: 0
            })
    }, 0);

    setTimeout(function () {
        $(left)
            .velocity({
                opacity: 1
            }, {
                duration: 750
            })
    }, 0);

    setTimeout(function () {
        $(iphone)
            .velocity({
                opacity: 1
            }, {
                duration: 750
            })
    }, 0);
}

// Hides the elements associated with the signup page
function hideSignup(){
    // Disables Signup buttons
    $("#signup-button").attr("onclick", "return false;");

    // Moves items out
    $("#signup-user").css("top", "0%");
    $("#signup-email").css("top", "0%");
    $("#signup-password").css("top", "0%");

    // Parses Signup items to hide
    var signup = document.getElementById("signup");
    var signupUser = document.getElementById("signup-user");
    var signupEmail = document.getElementById("signup-email");
    var signupPass = document.getElementById("signup-password");
    var signupButton = document.getElementById("signup-button");
    var signupText = document.getElementById("signup-text");
    var signupUserText = document.getElementById("signup-username-text");
    var signupEmailText = document.getElementById("signup-email-text");
    var signupPassText = document.getElementById("signup-password-text");

    setTimeout(function () {
        $(signup)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupButton)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupUser)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupEmail)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupPass)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupUserText)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupEmailText)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

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

// Shows the elements associated with the signup page
function showSignup(){
    // Re-enables button
    $("#signup-button").attr("onclick", "register()");

    // Moves items back
    $("#signup-user").css("top", "25%");
    $("#signup-email").css("top", "35%");
    $("#signup-password").css("top", "45%");

    // Parses Signup items to show
    var signup = document.getElementById("signup");
    var signupUser = document.getElementById("signup-user");
    var signupEmail = document.getElementById("signup-email");
    var signupPass = document.getElementById("signup-password");
    var signupButton = document.getElementById("signup-button");
    var signupText = document.getElementById("signup-text");
    var signupUserText = document.getElementById("signup-username-text");
    var signupEmailText = document.getElementById("signup-email-text");
    var signupPassText = document.getElementById("signup-password-text");

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
}

// Hides the elements associated with the login page
function hideLogin() {
    // Disables login buttons
    $("#loginButton").attr("onclick", "return false;");
    $("#facebook-login").attr("onclick", "return false;")
    $("#google-login").attr("onclick", "return false;")

    // Moves items around
    $("#login-user").css("top", "0%");
    $("#login-password").css("top", "0%");
    $("#facebook-login").css("top", "0%");
    $("#google-login").css("top", "0%");

    // Parse all login values to hide them
    var login = document.getElementById("login");
    var loginUser = document.getElementById("login-user");
    var loginPass = document.getElementById("login-password");
    var loginButton = document.getElementById("loginButton");
    var loginText = document.getElementById("login-text");
    var loginEmailText = document.getElementById("login-email-text");
    var loginUserText = document.getElementById("login-username-text");
    var facebookButton = document.getElementById("facebook-login");
    var googleButton = document.getElementById("google-login");

    setTimeout(function () {
        $(login)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginUser)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginPass)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginButton)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginText)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginUserText)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginEmailText)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(facebookButton)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(googleButton)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);
}

// Shows the elements associated with the login page
function showLogin() {
    // Re-enables Login buttons
    $("#loginButton").attr("onclick", "login()");
    $("#facebook-login").attr("onclick", "facebookLogin()");
    $("#google-login").attr("onclick", "googleLogin()");

    // Moves Login objects back
    $("#login-user").css("top", "25%");
    $("#login-password").css("top", "35%");
    $("#facebook-login").css("top", "40%");
    $("#google-login").css("top", "40%");

    // Parses login items to show
    var login = document.getElementById("login");
    var loginUser = document.getElementById("login-user");
    var loginPass = document.getElementById("login-password");
    var loginButton = document.getElementById("loginButton");
    var loginText = document.getElementById("login-text");
    var loginEmailText = document.getElementById("login-email-text");
    var loginUserText = document.getElementById("login-username-text");
    var facebookButton = document.getElementById("facebook-login");
    var googleButton = document.getElementById("google-login");

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

    setTimeout(function () {
        $(loginText)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginUserText)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginEmailText)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(facebookButton)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(googleButton)
            .velocity({
                opacity: 1
            }, {
                duration: 750,
                display: "block"
            })
    }, 0);
}