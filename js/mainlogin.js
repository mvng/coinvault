Parse.initialize("uuMKgtd7piSYYS1OIicbKekLesPHKKerHp21X3Zk", "J10xkBbtYfn4EPD9TQzp0BNJI7sQ2UXmJqY0Dkgu");

// Registers a User in the Parse database
function register() {
    var username = document.getElementById("signup-user").value;
    var mail = document.getElementById("signup-email").value;
    var pw = document.getElementById("signup-password").value;
    var person = new Parse.User();

    person.set("username", username);
    person.set("password", pw);
    person.set("email", mail);
    
    
    person.set("totalGold", 0);
    
        person.set("totalSilver", 0);   
    person.set("totaPlatinum", 0);
    
    
    
        person.set("totaPlatinum", 0);

    
    
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    
    
    month = parseInt(month + 1);
    if(month < 10) month = "0" + month;
     if(day < 10) day = "0" + day;
    
    
    var date = year + "-" + month + "-" + day;
    
    var blankDate = [];
    
    
    blankDate.push(date);
    
    blank = ["0","0","0","0","0","0","0","0","0","0",
             "0","0","0","0","0","0","0","0","0","0",
             "0","0","0","0","0","0","0","0","0","0","0"];
    
    
    person.set("goldDateTotal", blankDate);
    person.set("goldValueTotal", blank);
    person.set("silverValueTotal", blank);
   person.set("platinumValueTotal", blank);

          
     var userGoldTotal = person.get("goldValueTotal");
    var userSilverTotal = person.get("silverValueTotal");
    var userPlatinumTotal = person.get("platinumValueTotal");

        
    localStorage["userGoldTotal"] = JSON.stringify(userGoldTotal);
    localStorage["userSilverTotal"] = JSON.stringify(userSilverTotal);
    localStorage["userPlatinumTotal"] = JSON.stringify(userPlatinumTotal);



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
        //window.location.assign("src/dashboard.html");
        //window.location.assign("https://coinvault.herokuapp.com/src/dashboard.html");
          
          
              
    var user = Parse.User.current();
    
          
     var userGoldTotal = user.get("goldValueTotal");
    var userSilverTotal = user.get("silverValueTotal");
    var userPlatinumTotal = user.get("platinumValueTotal");

        
    localStorage["userGoldTotal"] = JSON.stringify(userGoldTotal);
    localStorage["userSilverTotal"] = JSON.stringify(userSilverTotal);
    localStorage["userPlatinumTotal"] = JSON.stringify(userPlatinumTotal);

                          window.location.assign("./src/dashboard.html");

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
                //alert("User signed up and logged in through Facebook!");
                //window.location.assign("src/dashboard.html");
                //window.location.assign("https://coinvault.herokuapp.com/src/dashboard.html");
                                window.location.assign("./src/dashboard.html");
                
                alert("LOGIN v1.0");
                
                
                
                
                FB.api('/me',function(response){
                    if(!response.error){
                        user.set("displayName", response.name);
                        alert(response.name);
                        user.save(null,{
                            success: function(user){
                            },
                            error: function(user, error){
                                console.log(error);
                            }
                        });
                    }
                }
                       );
            } else {

                    alert("LOGIN v2.0");
                
                window.location.assign("./src/dashboard.html");

            }
        },
        error: function(user, error) {
            alert("User cancelled the Facebook login or did not fully authorize.");
        }
    });
}

// Login through Google account
function googleLogin() {
    alert("I currently do nothing ):");
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
                duration: 350
            })
    }, 0);

    setTimeout(function () {
        $(iphone)
            .velocity({
                opacity: 1
            }, {
                duration: 350
            })
    }, 0);
}

// Hides the elements associated with the signup page
function hideSignup(){
    // Disables Signup buttons
    $("#signup-button").attr("onclick", "return false;");
    $("#su-facebook-login").attr("onclick", "return false;");
    $("#su-google-login").attr("onclick", "return false;");

    // Moves items out
    $("#signup-user").css("top", "0%");
    $("#signup-email").css("top", "0%");
    $("#signup-password").css("top", "0%");
    $("#su-facebook-button").css("top", "0%");
    $("#su-google-button").css("top", "0%");

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
    var sufacebookButton = document.getElementById("su-facebook-login");
    var sugoogleButton = document.getElementById("su-google-login");

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

    setTimeout(function () {
        $(sufacebookButton)
            .velocity({
                opacity: 0
            }, {
                duration: 0,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(sugoogleButton)
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
    $("#su-facebook-login").attr("onclick", "facebookLogin()");
    $("#su-google-login").attr("onclick", "googleLogin()");

    // Moves items back
    $("#signup-user").css("top", "25%");
    $("#signup-email").css("top", "35%");
    $("#signup-password").css("top", "45%");
    $("#su-facebook-button").css("top", "50%");
    $("#su-google-button").css("top", "50%");

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
    var sufacebookButton = document.getElementById("su-facebook-login");
    var sugoogleButton = document.getElementById("su-google-login");

    setTimeout(function () {
        $(signup)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupUser)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupEmail)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupPass)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupButton)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupText)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupUserText)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);


    setTimeout(function () {
        $(signupEmailText)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(signupPassText)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(sufacebookButton)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(sugoogleButton)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
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
    $("#facebook-button").css("top", "0%");
    $("#google-button").css("top", "0%");

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
    $("#facebook-button").css("top", "40%");
    $("#google-button").css("top", "40%");

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
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginUser)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginPass)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginButton)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginText)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginUserText)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(loginEmailText)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(facebookButton)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);

    setTimeout(function () {
        $(googleButton)
            .velocity({
                opacity: 1
            }, {
                duration: 350,
                display: "block"
            })
    }, 0);
}