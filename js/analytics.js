//this will track the addition of a coin to the stack
function trackViews(){
 
    
    $(document).ready(function(){

                //Configure the jQuery cookie plugin to use JSON.
                $.cookie.json = true;

                //Set the amount of time a session should last.
                var sessionExpireTime = new Date();
                sessionExpireTime.setMinutes(sessionExpireTime.getMinutes()+30);

                //Check if we have a session cookie:
                var session_cookie = $.cookie("session_cookie");

                //If it is undefined, set a new one.
                if(session_cookie == undefined){
                    $.cookie("session_cookie", {
                        id: Math.uuid()
                    }, {
                        expires: sessionExpireTime,
                        path: "/" //Makes this cookie readable from all pages
                    });
                }
                //If it does exist, delete it and set a new one with new expiration time
                else{
                    $.removeCookie("session_cookie", {
                        path: "/"
                    });
                    $.cookie("session_cookie", session_cookie, {
                        expires: sessionExpireTime,
                        path: "/"
                    });
                }

                var permanent_cookie = $.cookie("permanent_cookie");

                //If it is undefined, set a new one.
                if(permanent_cookie == undefined){
                    $.cookie("permanent_cookie", {
                        id: Math.uuid()
                    }, {
                        expires: 3650, //10 year expiration date
                        path: "/" //Makes this cookie readable from all pages
                    });
                }

                //Add a pageview event in Keen IO
                var fullUrl = window.location.href;
                var parsedUrl = $.url(fullUrl);
                var parser = new UAParser();

                var eventProperties = {
                    session_id: $.cookie("session_cookie")["id"],
                    url: {
                        source: parsedUrl.attr("source"),
                        protocol: parsedUrl.attr("protocol"),
                        domain: parsedUrl.attr("host"),
                        port: parsedUrl.attr("port"),
                        path: parsedUrl.attr("path"),
                        anchor: parsedUrl.attr("anchor")
                    },
                    user_agent: {
                        browser: parser.getBrowser(),
                        engine: parser.getEngine(),
                        os: parser.getOS()
                    },
                    permanent_tracker: $.cookie("permanent_cookie")["id"]
                };

                /*
                //If you know that the user is currently logged in, add information about the user.
                eventProperties["user"] = {
                    id: "",
                    signupDate: ""
                    etc: ".."
                };
                */

                //Add information about the referrer of the same format as the current page
                var referrer = document.referrer;
                referrerObject = null;

                if(referrer != undefined){
                    parsedReferrer = $.url(referrer);

                    referrerObject = {
                        source: parsedReferrer.attr("source"),
                        protocol: parsedReferrer.attr("protocol"),
                        domain: parsedReferrer.attr("host"),
                        port: parsedReferrer.attr("port"),
                        path: parsedReferrer.attr("path"),
                        anchor: parsedReferrer.attr("anchor")
                    }
                }

                eventProperties["referrer"] = referrerObject;

                Keen.addEvent("pageviews", eventProperties)

            });
    
    
    
    
}



function trackAdd() {

    var client = new Keen({
        projectId: "557394d290e4bd53cbd6a0ac", // String (required always)
        writeKey: "8854fab116eb7321e99786458de3aeaa88153b4379dce0458e5014817e2f1cb254834351e2e2e74c0eedf3a6929e34122b1e101dd30997fbe0313a6a09ddb6fb8a1dd0e48fed70aabf22c36a17bdf9386b362b4ea83368ab65da0ef2b07b84d1a26510bfc0bf4b21b1fe27a2ba74608b", // String (required for sending data)

    });

    var e = document.getElementById("metalField");
    var metal = e.options[e.selectedIndex].text;

    var x = document.getElementById("typeField");
    var type = x.options[x.selectedIndex].text;


    //we will categorize each coin by type and metal
    client.addEvent("metalType", {

        metal: metal

    });

    client.addEvent("coinType", {

        type: type

    });




};


function trackSum() {
    
    var client = new Keen({
        projectId: "557394d290e4bd53cbd6a0ac", // String (required always)
        writeKey: "8854fab116eb7321e99786458de3aeaa88153b4379dce0458e5014817e2f1cb254834351e2e2e74c0eedf3a6929e34122b1e101dd30997fbe0313a6a09ddb6fb8a1dd0e48fed70aabf22c36a17bdf9386b362b4ea83368ab65da0ef2b07b84d1a26510bfc0bf4b21b1fe27a2ba74608b", // String (required for sending data)

    });
    
    
    
    var sum = document.getElementById("dashboardTotalValue");
    client.addEvent("totalStackSum", {

        sum: sum

    });
    
    
};