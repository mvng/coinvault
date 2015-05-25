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

function login() {
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