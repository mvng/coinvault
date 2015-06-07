Parse.initialize("uuMKgtd7piSYYS1OIicbKekLesPHKKerHp21X3Zk", "J10xkBbtYfn4EPD9TQzp0BNJI7sQ2UXmJqY0Dkgu");

storage();

addEvent(window, 'load', storage);

tempGoldValue = JSON.parse(localStorage["tempGoldValue"]);
tempSilverValue = JSON.parse(localStorage["tempSilverValue"]);
tempPlatinumValue = JSON.parse(localStorage["tempPlatinumValue"]);



var optionsNoAnimation = {
    animation: false,
    ///Boolean - Whether grid lines are shown across the chart
    scaleShowGridLines: true,

    //String - Colour of the grid lines
    scaleGridLineColor: "rgba(104, 206, 222, 0.1)",

    //Number - Width of the grid lines
    scaleGridLineWidth: 1,

    //Boolean - Whether to show horizontal lines (except X axis)
    scaleShowHorizontalLines: true,

    //Boolean - Whether to show vertical lines (except Y axis)
    scaleShowVerticalLines: true,

    //Boolean - Whether the line is curved between points
    bezierCurve: true,

    //Number - Tension of the bezier curve between points
    bezierCurveTension: 0.4,

    //Boolean - Whether to show a dot for each point
    pointDot: true,

    //Number - Radius of each point dot in pixels
    pointDotRadius: 4,

    //Number - Pixel width of point dot stroke
    pointDotStrokeWidth: 1,

    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
    pointHitDetectionRadius: 20,

    //Boolean - Whether to show a stroke for datasets
    datasetStroke: true,

    //Number - Pixel width of dataset stroke
    datasetStrokeWidth: 2,

    //Boolean - Whether to fill the dataset with a colour
    datasetFill: true,

    //String - A legend template
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

    responsive: true,

    maintainAspectRatio: false,

};


function addEvent(element, eventName, fn) {
    if (element.addEventListener)
        element.addEventListener(eventName, fn, false);
    else if (element.attachEvent)
        element.attachEvent('on' + eventName, fn);
}


function loadTopNav() {

    if (Parse.User.current() === null) {
        return window.location.href = "../index.html";
    }
    var user = Parse.User.current().get("username");

    
    // Applies the theme if the browser allows it
    if(typeof(Storage) !== "undefined") {
        setTheme(getTheme());
    }

    document.write("    <nav>");
    document.write("        <svg class=\"icon-spinner2\">");
    document.write("            <symbol id=\"icon-spinner2\" viewBox=\"0 0 1024 1024\">");
    document.write("                <title>spinner2<\/title>");
    document.write("                <path class=\"path1\" d=\"M1024 384h-384l143.53-143.53c-72.53-72.526-168.96-112.47-271.53-112.47s-199 39.944-271.53 112.47c-72.526 72.53-112.47 168.96-112.47 271.53s39.944 199 112.47 271.53c72.53 72.526 168.96 112.47 271.53 112.47s199-39.944 271.528-112.472c6.056-6.054 11.86-12.292 17.456-18.668l96.32 84.282c-93.846 107.166-231.664 174.858-385.304 174.858-282.77 0-512-229.23-512-512s229.23-512 512-512c141.386 0 269.368 57.326 362.016 149.984l149.984-149.984v384z\"><\/path>");
    document.write("            <\/symbol>");
    document.write("            <use xlink:href=\"#icon-spinner2\"><\/use>");
    document.write("        <\/svg>");
    document.write("        <a href=\"dashboard.html\">" + user + "<\/a>");
    document.write("                <a onclick=\"logout()\" id=\"logout\">Logout<\/a>");
    document.write("        <svg class=\"icon-cog\">");
    document.write("            <symbol id=\"icon-cog\" viewBox=\"0 0 1024 1024\"onclick=\"changeTheme()\">");
    document.write("                <title>cog<\/title>");
    document.write("                <path class=\"path1\" d=\"M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z\"><\/path>");
    document.write("            <\/symbol>");
    document.write("            <use xlink:href=\"#icon-cog\"><\/use>");
    document.write("        <\/svg>");
    document.write("    <\/nav>");
}

function loadTopNavPersist() {
    var user = Parse.User.current().get("username");

    // Applies the theme if the browser allows it
    if(typeof(Storage) !== "undefined") {
        setTheme(getTheme());
    }

    document.write("    <nav style='display: block; visibility: visible;'>");
    document.write("        <svg class=\"icon-spinner2\">");
    document.write("            <symbol id=\"icon-spinner2\" viewBox=\"0 0 1024 1024\">");
    document.write("                <title>spinner2<\/title>");
    document.write("                <path class=\"path1\" d=\"M1024 384h-384l143.53-143.53c-72.53-72.526-168.96-112.47-271.53-112.47s-199 39.944-271.53 112.47c-72.526 72.53-112.47 168.96-112.47 271.53s39.944 199 112.47 271.53c72.53 72.526 168.96 112.47 271.53 112.47s199-39.944 271.528-112.472c6.056-6.054 11.86-12.292 17.456-18.668l96.32 84.282c-93.846 107.166-231.664 174.858-385.304 174.858-282.77 0-512-229.23-512-512s229.23-512 512-512c141.386 0 269.368 57.326 362.016 149.984l149.984-149.984v384z\"><\/path>");
    document.write("            <\/symbol>");
    document.write("            <use xlink:href=\"#icon-spinner2\"><\/use>");
    document.write("        <\/svg>");
    document.write("        <a href=\"dashboard.html\">" + user + "<\/a>");
    document.write("				<a onclick=\"logout()\" id=\"logout\">Logout<\/a>");
    document.write("        <svg class=\"icon-cog\">");
    document.write("            <symbol id=\"icon-cog\" viewBox=\"0 0 1024 1024\"onclick=\"changeTheme()\">");
    document.write("                <title>cog<\/title>");
    document.write("                <path class=\"path1\" d=\"M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z\"><\/path>");
    document.write("            <\/symbol>");
    document.write("            <use xlink:href=\"#icon-cog\"><\/use>");
    document.write("        <\/svg>");
    document.write("    <\/nav>");
}

function loadSideNav(selected) {



    
    document.write("    <aside>");
    document.write("        <a href=\"dashboard.html\">");
    if (selected === 0)
        document.write("        <figure class='nav-selected'>");
    else
        document.write("        <figure>");
    document.write("            <br\/>");
    document.write("              <svg class=\"icon-home2\">");
    document.write("                    <symbol id=\"icon-home2\" viewBox=\"0 0 1024 1024\">");
    document.write("                        <title>home2<\/title>");
    document.write("                        <path class=\"path1\" d=\"M426.667 853.333v-256h170.667v256h213.333v-341.333h128l-426.667-384-426.667 384h128v341.333z\"><\/path>");
    document.write("                    <\/symbol>");
    document.write("                    <use xlink:href=\"#icon-home2\"><\/use>");
    document.write("                <\/svg>");
    document.write("");
    document.write("            <figcaption>Home<\/figcaption>");
    document.write("        <\/figure>       ");
    document.write("        <\/a> ");
    document.write("        <a href=\"goldoverview.html\">");
    if (selected == 1)
        document.write("        <figure class='nav-selected'>");
    else
        document.write("        <figure>");
    document.write("            Au");
    document.write("            <figcaption>My Gold<\/figcaption>");
    document.write("        <\/figure>       ");
    document.write("        <\/a> ");
    document.write("        <a href=\"silveroverview.html\">");
    if (selected == 2)
        document.write("        <figure class='nav-selected'>");
    else
        document.write("        <figure>");
    document.write("            Ag");
    document.write("            <figcaption>My Silver<\/figcaption>");
    document.write("        <\/figure>       ");
    document.write("        <\/a> ");
    document.write("        <a href=\"platinumoverview.html\">");
    if (selected == 3)
        document.write("        <figure class='nav-selected'>");
    else
        document.write("        <figure>");
    document.write("            Pt");
    document.write("            <figcaption>My Platinum<\/figcaption>");
    document.write("        <\/figure>");
    document.write("        <\/a> ");
    document.write("    <\/aside>");
    
        
}

function loadFooter() {
    document.write("    <footer>");
    document.write("        &copy; 2015 Coin Vault");
    document.write("    <\/footer> ");
}


    
function storage() {

getDateRange();
    var data = Parse.Object.extend("graph");
    var query = new Parse.Query(data);



    var graph = Parse.Object.extend("graph");
    var query = new Parse.Query(graph);
    query.get("PlycS4oIZR", {
        success: function (query) {

            var tempGoldValue = query.get("goldValue");
            var tempSilverValue = query.get("silverValue");
            var tempPlatinumValue = query.get("platinumValue");


            localStorage["tempGoldValue"] = JSON.stringify(tempGoldValue);
            localStorage["tempSilverValue"] = JSON.stringify(tempSilverValue);
            localStorage["tempPlatinumValue"] = JSON.stringify(tempPlatinumValue);
            
            


        },
        error: function (object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
        }
    });



}


function setBidAskChange() {

    
    var gb, ga, gc;
    var sb, sa, sc;
    var pb, pa, pc;

    
var data = Parse.Object.extend("graph");
var query = new Parse.Query(data);
query.get("PlycS4oIZR", {
  success: function(query) {
      
      
      
            gb = query.get("gbid");
            ga = query.get("gask");
            gc = query.get("gchange").toFixed(2);

            
            sb = query.get("sbid");
            sa = query.get("sask");
            //sc = query.get("schange").toFixed(2);
            
            sc = (sb-sa).toFixed(2);

            pb = query.get("pbid");
            pa = query.get("pask");
            pc = query.get("pchange").toFixed(2);

    
    var path = window.location.pathname;
    var page = path.split("/").pop();


    if (page == "dashboard.html") {
        console.log("dashboard.html");
        document.getElementById("gbid").innerHTML = gb;
        document.getElementById("gask").innerHTML = ga;
        document.getElementById("gchange").innerHTML = gc;

        document.getElementById("sbid").innerHTML = sb;
        document.getElementById("sask").innerHTML = sa;
        document.getElementById("schange").innerHTML = sc;


        document.getElementById("pbid").innerHTML = pb;
        document.getElementById("pask").innerHTML = pa;
        document.getElementById("pchange").innerHTML = pc;


        
    }
    if (page == "goldoverview.html") {


        document.getElementById("bid").innerHTML = gb;
        document.getElementById("ask").innerHTML = ga;
        document.getElementById("change").innerHTML = gc;


    }

    if (page == "silveroverview.html") {




        document.getElementById("bid").innerHTML = sb;
        document.getElementById("ask").innerHTML = sa;
        document.getElementById("change").innerHTML = sc;

    }


    if (page == "platinumoverview.html") {

        document.getElementById("bid").innerHTML = pb;
        document.getElementById("ask").innerHTML = pa;
        document.getElementById("change").innerHTML = pc;




    }


  },
    error: function(error){
        
     console.log("SetBidAskChange" + error );
        
    }
});

}
    

 // executes when complete page is fully loaded, including all frames, objects and images
$(window).load(function () {

        setBidAskChange();
    overallDaily();

    
   
     var path = window.location.pathname;
    var page = path.split("/").pop();
    
 
    
drawGraph = function (){

    var user = Parse.User.current();

    if (Parse.User.current() == null) {

        
        

    }


    

            dateRanges = JSON.parse(localStorage["dateRanges"]);
            userGoldTotal = JSON.parse(localStorage["userGoldTotal"]);
            userSilverTotal = JSON.parse(localStorage["userSilverTotal"]);
            userPlatinumTotal = JSON.parse(localStorage["userPlatinumTotal"]);
            tempGoldValue = JSON.parse(localStorage["tempGoldValue"]);
            tempSilverValue = JSON.parse(localStorage["tempSilverValue"]);
            tempPlatinumValue = JSON.parse(localStorage["tempPlatinumValue"]);





            var pointStroke = "rgba(255,255,255,0.6)";
            var pointHighlightFill = "#fff";
            var pointHighlightStroke = "#fff";

            if (page == "dashboard.html") {


                var data = {
                    labels: dateRanges,
                    datasets: [
                        {
                            label: "Gold Total",
                            fillColor: "rgba(104, 206, 222, 0.05)",
                            strokeColor: "#FF6D67",
                            pointColor: "#FF6D67",
                            pointStrokeColor: pointStroke,
                            pointHighlightFill: pointHighlightFill,
                            pointHighlightStroke: pointHighlightStroke,
                            data: userGoldTotal

                        }, {
                            label: "Platinum Total",
                            fillColor: "rgba(104, 206, 222, 0.05)",
                            strokeColor: "#FFA859",
                            pointColor: "#FFA859",
                            pointStrokeColor: pointStroke,
                            pointHighlightFill: pointHighlightFill,
                            pointHighlightStroke: pointHighlightStroke,
                            data: userPlatinumTotal
                        },
                        {
                            label: "Silver Total",
                            fillColor: "rgba(104, 206, 222, 0.05)",
                            strokeColor: "#F3FF88",
                            pointColor: "#F3FF88",
                            pointStrokeColor: pointStroke,
                            pointHighlightFill: pointHighlightFill,
                            pointHighlightStroke: pointHighlightStroke,
                            data: userSilverTotal
                        },
                        {
                            label: "1oz Gold",
                            fillColor: "rgba(104, 206, 222, 0.05)",
                            strokeColor: "#9FFF98",
                            pointColor: "#9FFF98",
                            pointStrokeColor: pointStroke,
                            pointHighlightFill: pointHighlightFill,
                            pointHighlightStroke: pointHighlightStroke,
                            data: tempGoldValue
                        }, {
                            label: "1oz Platinum",
                            fillColor: "rgba(104, 206, 222, 0.05)",
                            strokeColor: "#BBF5FF",
                            pointColor: "#BBF5FF",
                            pointStrokeColor: pointStroke,
                            pointHighlightFill: pointHighlightFill,
                            pointHighlightStroke: pointHighlightStroke,
                            data: tempPlatinumValue
                        },
                        {
                            label: "1oz Silver",
                            fillColor: "rgba(104, 206, 222, 0.05)",
                            strokeColor: "#C29FFF",
                            pointColor: "#C29FFF",
                            pointStrokeColor: pointStroke,
                            pointHighlightFill: pointHighlightFill,
                            pointHighlightStroke: pointHighlightStroke,
                            data: tempSilverValue
                        }
                        ]
                };

                var options = {

                    ///Boolean - Whether grid lines are shown across the chart
                    scaleShowGridLines: true,

                    //String - Colour of the grid lines
                    scaleGridLineColor: "rgba(104, 206, 222, 0.1)",

                    //Number - Width of the grid lines
                    scaleGridLineWidth: 1,

                    //Boolean - Whether to show horizontal lines (except X axis)
                    scaleShowHorizontalLines: true,

                    //Boolean - Whether to show vertical lines (except Y axis)
                    scaleShowVerticalLines: true,

                    //Boolean - Whether the line is curved between points
                    bezierCurve: true,

                    //Number - Tension of the bezier curve between points
                    bezierCurveTension: 0.4,

                    //Boolean - Whether to show a dot for each point
                    pointDot: true,

                    //Number - Radius of each point dot in pixels
                    pointDotRadius: 4,

                    //Number - Pixel width of point dot stroke
                    pointDotStrokeWidth: 1,

                    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                    pointHitDetectionRadius: 20,

                    //Boolean - Whether to show a stroke for datasets
                    datasetStroke: true,

                    //Number - Pixel width of dataset stroke
                    datasetStrokeWidth: 2,

                    //Boolean - Whether to fill the dataset with a colour
                    datasetFill: true,

                    //String - A legend template
                    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

                    responsive: true,

                    maintainAspectRatio: false,

                };

                var ctx = document.getElementById("total-chart").getContext("2d");
                var coinChart = new Chart(ctx).Line(data, options);
                coinChart.update();

                setInterval(function () {
                    //storage();
   // updateData(data);
            var ctx = document.getElementById("total-chart").getContext("2d");
                var coinChart = new Chart(ctx).Line(data, optionsNoAnimation);
                coinChart.update();        console.log("upodated :) ");
}, 2000);


            }
            if (page == "goldoverview.html") {

                
                
               
                var data = {
                    labels: dateRanges,
                    datasets: [
                        {
                            label: "Gold Total",
                            fillColor: "rgba(104, 206, 222, 0.05)",
                            strokeColor: "#FF6D67",
                            pointColor: "#FF6D67",
                            pointStrokeColor: pointStroke,
                            pointHighlightFill: pointHighlightFill,
                            pointHighlightStroke: pointHighlightStroke,
                            data: userGoldTotal

                        },
                        {
                            label: "1oz Gold",
                            fillColor: "rgba(104, 206, 222, 0.05)",
                            strokeColor: "#9FFF98",
                            pointColor: "#9FFF98",
                            pointStrokeColor: pointStroke,
                            pointHighlightFill: pointHighlightFill,
                            pointHighlightStroke: pointHighlightStroke,
                            data: tempGoldValue

                        }
                        ]
                };

                var options = {

                    ///Boolean - Whether grid lines are shown across the chart
                    scaleShowGridLines: true,

                    //String - Colour of the grid lines
                    scaleGridLineColor: "rgba(104, 206, 222, 0.1)",

                    //Number - Width of the grid lines
                    scaleGridLineWidth: 1,

                    //Boolean - Whether to show horizontal lines (except X axis)
                    scaleShowHorizontalLines: true,

                    //Boolean - Whether to show vertical lines (except Y axis)
                    scaleShowVerticalLines: true,

                    //Boolean - Whether the line is curved between points
                    bezierCurve: true,

                    //Number - Tension of the bezier curve between points
                    bezierCurveTension: 0.4,

                    //Boolean - Whether to show a dot for each point
                    pointDot: true,

                    //Number - Radius of each point dot in pixels
                    pointDotRadius: 4,

                    //Number - Pixel width of point dot stroke
                    pointDotStrokeWidth: 1,

                    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                    pointHitDetectionRadius: 20,

                    //Boolean - Whether to show a stroke for datasets
                    datasetStroke: true,

                    //Number - Pixel width of dataset stroke
                    datasetStrokeWidth: 2,

                    //Boolean - Whether to fill the dataset with a colour
                    datasetFill: true,

                    //String - A legend template
                    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

                    responsive: true,

                    maintainAspectRatio: false,


                };

                var ctx = document.getElementById("total-chart").getContext("2d");
                var coinChart = new Chart(ctx).Line(data, options);
                coinChart.update();

                
                /*
               setInterval(function () {
                   //storage();
                   // updateData(data);
                   var ctx = document.getElementById("total-chart").getContext("2d");
                   var coinChart = new Chart(ctx).Line(data, optionsNoAnimation);
                   coinChart.update();
                   console.log("Updated :) ");
               }, 2000);
               
               */

            }

            if (page == "silveroverview.html") {

                
                var data = {
                    labels: dateRanges,
                    datasets: [
                        {
                           label: "Silver Total",
                            fillColor: "rgba(104, 206, 222, 0.05)",
                            strokeColor: "#F3FF88",
                            pointColor: "#F3FF88",
                            pointStrokeColor: pointStroke,
                            pointHighlightFill: pointHighlightFill,
                            pointHighlightStroke: pointHighlightStroke,
                            data: userSilverTotal

                        },
                        {
                            label: "1oz Silver",
                            fillColor: "rgba(104, 206, 222, 0.05)",
                            strokeColor: "#C29FFF",
                            pointColor: "#C29FFF",
                            pointStrokeColor: pointStroke,
                            pointHighlightFill: pointHighlightFill,
                            pointHighlightStroke: pointHighlightStroke,
                            data: tempSilverValue

                        }
                        ]
                };

                var options = {

                    ///Boolean - Whether grid lines are shown across the chart
                    scaleShowGridLines: true,

                    //String - Colour of the grid lines
                    scaleGridLineColor: "rgba(104, 206, 222, 0.1)",

                    //Number - Width of the grid lines
                    scaleGridLineWidth: 1,

                    //Boolean - Whether to show horizontal lines (except X axis)
                    scaleShowHorizontalLines: true,

                    //Boolean - Whether to show vertical lines (except Y axis)
                    scaleShowVerticalLines: true,

                    //Boolean - Whether the line is curved between points
                    bezierCurve: true,

                    //Number - Tension of the bezier curve between points
                    bezierCurveTension: 0.4,

                    //Boolean - Whether to show a dot for each point
                    pointDot: true,

                    //Number - Radius of each point dot in pixels
                    pointDotRadius: 4,

                    //Number - Pixel width of point dot stroke
                    pointDotStrokeWidth: 1,

                    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                    pointHitDetectionRadius: 20,

                    //Boolean - Whether to show a stroke for datasets
                    datasetStroke: true,

                    //Number - Pixel width of dataset stroke
                    datasetStrokeWidth: 2,

                    //Boolean - Whether to fill the dataset with a colour
                    datasetFill: true,

                    //String - A legend template
                    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

                    responsive: true,

                    maintainAspectRatio: false,


                };

                var ctx = document.getElementById("total-chart").getContext("2d");
                var coinChart = new Chart(ctx).Line(data, options);
                coinChart.update();

            }

            if (page == "platinumoverview.html") {

                
                var data = {
                    labels: dateRanges,
                    datasets: [
                        {
                            label: "Platinum Total",
                            fillColor: "rgba(104, 206, 222, 0.05)",
                            strokeColor: "#FFA859",
                            pointColor: "#FFA859",
                            pointStrokeColor: pointStroke,
                            pointHighlightFill: pointHighlightFill,
                            pointHighlightStroke: pointHighlightStroke,
                            data: userPlatinumTotal

                        },
                        {
                            label: "1oz Platinum",
                            fillColor: "rgba(104, 206, 222, 0.05)",
                            strokeColor: "#BBF5FF",
                            pointColor: "#BBF5FF",
                            pointStrokeColor: pointStroke,
                            pointHighlightFill: pointHighlightFill,
                            pointHighlightStroke: pointHighlightStroke,
                            data: tempPlatinumValue

                        }
                        ]
                };

                var options = {

                    ///Boolean - Whether grid lines are shown across the chart
                    scaleShowGridLines: true,

                    //String - Colour of the grid lines
                    scaleGridLineColor: "rgba(104, 206, 222, 0.1)",

                    //Number - Width of the grid lines
                    scaleGridLineWidth: 1,

                    //Boolean - Whether to show horizontal lines (except X axis)
                    scaleShowHorizontalLines: true,

                    //Boolean - Whether to show vertical lines (except Y axis)
                    scaleShowVerticalLines: true,

                    //Boolean - Whether the line is curved between points
                    bezierCurve: true,

                    //Number - Tension of the bezier curve between points
                    bezierCurveTension: 0.4,

                    //Boolean - Whether to show a dot for each point
                    pointDot: true,

                    //Number - Radius of each point dot in pixels
                    pointDotRadius: 4,

                    //Number - Pixel width of point dot stroke
                    pointDotStrokeWidth: 1,

                    //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
                    pointHitDetectionRadius: 20,

                    //Boolean - Whether to show a stroke for datasets
                    datasetStroke: true,

                    //Number - Pixel width of dataset stroke
                    datasetStrokeWidth: 2,

                    //Boolean - Whether to fill the dataset with a colour
                    datasetFill: true,

                    //String - A legend template
                    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>",

                    responsive: true,

                    maintainAspectRatio: false,


                };

                var ctx = document.getElementById("total-chart").getContext("2d");
                var coinChart = new Chart(ctx).Line(data, options);
                coinChart.update();

setInterval(function () {
   // updateData(data);
    coinChart.update();
        console.log("upodated :) ");
}, 2000);



    
}

}

drawGraph();
    /* * * * * * * * * * * * * *
     *                         *
     *        GENERAL          *
     *                         *
     * * * * * * * * * * * * * */

    $('.icon-spinner2').click(function () {
        location.reload();
    });
    
        

    /* * * * * * * * * * * * * *
     *                         *
     *        GRAPHING         *
     *                         *
     * * * * * * * * * * * * * */
    // graph for dashboard page



    /* * * * * * * * * * * * * *
     *                         *
     *     MOBILE HANDLING     *
     *                         *
     * * * * * * * * * * * * * */

    $('.mtb-1').click(function () {
        $('.graph-panel').removeClass('graph-panel-show');
        $('.market-status').fadeIn(0);
        $('.market-list').fadeIn(0);
        if (page == "goldoverview.html")
            $('.my_stack').fadeIn(0);
        $('.mtb-2').removeClass('mobile-toggle-selected');
        $('.mtb-1').addClass('mobile-toggle-selected');

    });

    $('.mtb-2').click(function () {
        $('.market-status').fadeOut(0);
        $('.market-list').fadeOut(0);
        if (page == "goldoverview.html")
            $('.my_stack').fadeOut(0);
        $('.mtb-1').removeClass('mobile-toggle-selected');
        $('.mtb-2').addClass('mobile-toggle-selected');
        $('.graph-panel').addClass('graph-panel-show');
          drawGraph();
    });

    var resizer = function () {
        winWidth = $(window).width();
        winHeight = $(window).height();

        if (winWidth > 999) {
            $('.graph-panel').removeClass('graph-panel-show');
            $('.market-status').fadeIn(0);
            $('.market-list').fadeIn(0);
            if (page == "goldoverview.html")
                $('.my_stack').fadeIn(0);
            $('.mtb-2').removeClass('mobile-toggle-selected');
            $('.mtb-1').addClass('mobile-toggle-selected');
        }
    };

    $(window).resize(resizer);

});


function creat() {
        event.preventDefault();

    
    var user = Parse.User.current();
    var userObjId = user.id;


    var metal = document.getElementById("metalField");
    var type = document.getElementById("typeField");
    var purchaseDate = document.getElementById("datepicker");
    var qty = document.getElementById("qtyField");
    var premium = document.getElementById("premiumField");
    var unitPrice = document.getElementById("unitPriceField");
    var total = document.getElementById("totalField").textContent;
    var weightg;
    var weightau;

    var page = "dashboard.html";

    if (metal.options[metal.selectedIndex].text == "Gold") {
        weightg = 1.244;
        weightau = 0.917;
        page = "goldoverview.html";
     addGraph(purchaseDate.value, total, "Gold");
          
    }

    if (metal.options[metal.selectedIndex].text == "Silver") {
        weightg = 2.48;
        weightau = 2.260416;
        page = "silveroverview.html";

        addGraph(purchaseDate.value, total, "Silver");

    }


    if (metal.options[metal.selectedIndex].text == "Platinum") {
        weightg = 28.3495;
        weightau = 0.911;
        page = "platinumoverview.html";

        addGraph(purchaseDate.value, total, "Platinum");

    }

    var Item = Parse.Object.extend("item");
    var thing = new Item();

    thing.set("userObjId", userObjId);
    thing.set("metal", metal.options[metal.selectedIndex].text);
    thing.set("type", type.options[type.selectedIndex].text);

    thing.set("qty", Number(qty.value));
    thing.set("premium", Number(premium.value));
    thing.set("unitPrice", Number(unitPrice.value));
    thing.set("total", Number(total));

    thing.set("purchaseDate", purchaseDate.value);
    thing.set("weightg", weightg);
    thing.set("weightau", weightau);


    console.log("HI");
  thing.save(null).then(function (thing) {
      // Execute any logic that should take place after the object is saved.
      //    alert('New object created with objectId: ' + thing.id);
      // total = yield total;

      console.log("Finishg Save on Parse");

      location.reload();
          window.location.replace(page);


    },
      function (error) {
          // Execute any logic that should take place if the save fails.
          // error is a Parse.Error with an error code and message.
          // location.reload();
            trackJs.track('Failed to save in create' + error.message);

          console.log('Failed to save in creat  ' + error.message);
          //   window.location.href = "dashboard.html";



      });


    //THIS WINDOW.LOCATION.REPLACE IS FUCKING SHIT UP.
    
};


function addGraph(purchaseDate, value, metal) {


    dateRanges = JSON.parse(localStorage["dateRanges"]);

    if (purchaseDate == "")
        return;
    
    //FOR SOME REASON ADDING A DATE BEFORE ERQUIRES EXTRA REFRESH CYCLE.
     if(purchaseDate <= dateRanges[0]){
        //console.log("early date");
        purchaseDate = dateRanges[0];
    }
    
   // alert(metal + " " + purchaseDate + " " + value);
    purchaseDate = String(purchaseDate);

    var user = Parse.User.current();
    var userMetalTotal = [];
    

    
    
    //getting array slots.
    
    if(metal == "Gold"){
        userMetalTotal = JSON.parse(localStorage["userGoldTotal"]);
        
    }
    if(metal == "Silver"){
        userMetalTotal = JSON.parse(localStorage["userSilverTotal"]);
       // console.log("What am i here? " + userMetalTotal);
    }  
    if(metal == "Platinum"){
        userMetalTotal = JSON.parse(localStorage["userPlatinumTotal"]);
    }
    
    
    
    //console.log("PRE" + userMetalTotal);

    var i = 0;
   

    for (i = 0; i < dateRanges.length; i++) {


       // console.log(i + " " + purchaseDate + " " + dateRanges[i] + " ");

        if (purchaseDate === dateRanges[i]) {

      //      console.log("MATCHED BITCHES");
            
            // When date is entered before the oldest date on graph set the date entered
            
            var k = i;
            
            for (k; k< dateRanges.length; k++){
            
            userMetalTotal[k] = Number(userMetalTotal[k]) + Number(value);
            }
        }
        
    }
    
       // console.log("AFTER " + userMetalTotal);

    
    if(metal == "Gold"){
        
        //SAVING TO HTML5 STORAGE.
        
        
        
                    localStorage["userGoldTotal"] = JSON.stringify(userMetalTotal);

        
   
        
        
        user.set("goldValueTotal", userMetalTotal);
        
        
        console.log("attempting to save TotalGoldValue" + userMetalTotal);
        console.log(user);
        user.save(null).then(
            function (user) {
             
            
                return;
         },
             function (error) {
                 location.reload();
                console.log("Failed to Update Gold Graph " + error.message);
                trackJs.track('Failed to Update Gold Graph' + error.message);

            
        });
    }
    

    
        if(metal == "Silver"){
            
                        localStorage["userSilverTotal"] = JSON.stringify(userMetalTotal);

        user.set("silverValueTotal", userMetalTotal);
        user.save(null, {
         success: function (user) {
             
           //  console.log("Im saving this..." + userMetalTotal);
         },
            error: function (user, error) {
                console.log("Failed to Update Silver Graph");
                trackJs.track('Failed to Update Silver Graph' + error.message);

            }
        });
    }
    
    if(metal == "Platinum"){
        
                            localStorage["userPlatinumTotal"] = JSON.stringify(userMetalTotal);

        user.set("platinumValueTotal", userMetalTotal);
        user.save(null, {
         success: function (user) {
             

             
            // console.log("Im saving this..." + userMetalTotal);
         },
            error: function (user, error) {
                console.log("Failed to Update Platinum Graph");
                                trackJs.track('Failed to Update Platinum Graph' + error.message);

            }
        });
    }
    
    return 0;
    
};


function deleteItem() {

    event.preventDefault();

    //Delete needs ot be able to handle redirect to the previous page,
    //currently just goes back to dashboard.
    "use strict";
var oldURL = document.referrer;
    var objectId;
    var user = Parse.User.current();
    var userMetalTotal = [];

    objectId = getId();

    var Item = Parse.Object.extend("item");

    var stuff = new Item();
    var THING = new Parse.Object("item");

    THING.id = objectId;
    var obId = objectId;
    console.log(obId);
    var query = new Parse.Query("item");
    
        var page = "dashboard.html";



    query.get(obId,{
        success: function(object){
            stuff = object.get("purchaseDate")


            var value = object.get("total");
            var metal = object.get("metal");
            console.log(stuff);
            var dateRanges = getDateRange();

            deletGraph(stuff,value, metal, dateRanges);
            
        },
        error: function(object,error){
            console.log(error);
        }
    });

    THING.destroy({
        success: function () {
            window.location.href = oldURL;
        },
        error: function (error) {
            console.log(error.message);
             trackJs.track( error.message);

        }
    });

};

function deletGraph(purchaseDate, value, metal, dateRanges) {


    if (purchaseDate == "")
        return;
    
    //FOR SOME REASON ADDING A DATE BEFORE ERQUIRES EXTRA REFRESH CYCLE.
     if(purchaseDate <= dateRanges[0]){
       // console.log("early date");
        purchaseDate = dateRanges[0];
    }
    
   // alert(metal + " " + purchaseDate + " " + value);
    purchaseDate = String(purchaseDate);

    var user = Parse.User.current();
    var userMetalTotal = [];
    
    
    
    
    //getting array slots.
    
    if(metal == "Gold"){
        userMetalTotal = JSON.parse(localStorage["userGoldTotal"]);
        
    }
    if(metal == "Silver"){
        userMetalTotal = JSON.parse(localStorage["userSilverTotal"]);
       // console.log("What am i here? " + userMetalTotal);
    }  
    if(metal == "Platinum"){
        userMetalTotal = JSON.parse(localStorage["userPlatinumTotal"]);
    }
    
    
    

    var i = 0;
   

    for (i = 0; i < dateRanges.length; i++) {


      //  console.log(i + " " + purchaseDate + " " + dateRanges[i] + " ");

        if (purchaseDate === dateRanges[i]) {

            //TODO
            
            // When date is entered before the oldest date on graph set the date entered
            
            var k = i;
            
            for (k; k< dateRanges.length; k++){
            
            userMetalTotal[k] = Number(userMetalTotal[k]) - Number(value);
            }
          //  alert("Updating Graph ... ");
        }
        
    }
    
    if(metal == "Gold"){
        user.set("goldValueTotal", userMetalTotal);
        
                            localStorage["userGoldTotal"] = JSON.stringify(userMetalTotal);

        console.log("attempting to save TotalGoldValue" + userMetalTotal);
        console.log(user);
        user.save(null).then(
            function (user) {
             
            
                return;
         },
             function (error) {
                 location.reload();
                console.log("Failed to Update Gold Graph " + error.message);
                              trackJs.track( error.message);

            
        });
    }
    

    
        if(metal == "Silver"){
            
            
        localStorage["userSilverTotal"] = JSON.stringify(userMetalTotal);

        user.set("silverValueTotal", userMetalTotal);
        user.save(null, {
         success: function (user) {
             

             
           //  console.log("Im saving this..." + userMetalTotal);
         },
            error: function (user, error) {
                console.log("Failed to Update Silver Graph");
                             trackJs.track( error.message);

            }
        });
    }
    
    if(metal == "Platinum"){
        
                                                localStorage["userPlatinumTotal"] = JSON.stringify(userMetalTotal);

        user.set("platinumValueTotal", userMetalTotal);
        user.save(null, {
         success: function (user) {
             

             
            // console.log("Im saving this..." + userMetalTotal);
         },
            error: function (user, error) {
                console.log("Failed to Update Platinum Graph");
                             trackJs.track( error.message);

            }
        });
    }
    
    return 0;
    
};



function metal(value) {

    "use strict";

    if (value == 1) {
        //  console.log("gold");
        return "Gold %";
    }
    if (value == 2) {
        // console.log("silver");
        return "Silver %";
    }
    if (value == 3) {
        // console.log("platinum");
        return "Platinum %";
    }


    // console.log("Error: Selector tag not returning any value");

};

function metalgu(value) {

    "use strict";

    if (value == 1) {
        //   console.log("gold gu");
        return "Gold g/u";
    }
    if (value == 2) {
        //console.log("silver gu");
        return "Silver g/u";
    }
    if (value == 3) {
        //console.log("platinum gu");
        return "Platinum g/u";
    }


    console.log("Error: G/U Selector tag not returning any value");            
    trackJs.track( "Error: G/U Selector tag not returning any value");

    

};

function metaloz(value) {

    "use strict";

    if (value == 1) {
        //  console.log("gold oz");
        return "Gold ozt/u";
    }
    if (value == 2) {
        // console.log("silver oz");
        return "Silver ozt/u";
    }
    if (value == 3) {
        //console.log("platinum oz");
        return "Platinum ozt/u";
    }


    console.log("Error: OZ Selector tag not returning any value");
    trackJs.track('Error: OZ Selector tag not returning any value');

};

function run() {

    //  console.log("invoking run");
    initialMetal = document.getElementById("metalField").value;
    document.getElementById("metalDetails").innerHTML = metal(initialMetal);
    document.getElementById("gu").innerHTML = metalgu(initialMetal);
    document.getElementById("oz").innerHTML = metaloz(initialMetal);
    
    
var data = Parse.Object.extend("graph");
var query = new Parse.Query(data);
query.get("PlycS4oIZR", {
  success: function(data) {

  
    var currentGold = data.get("goldValue");
      var currentSilver = data.get("silverValue");
      var currentPlatinum = data.get("platinumValue");
  
      

      if (initialMetal == 1){
          document.getElementById("unitPriceField").defaultValue = currentGold[currentGold.length - 1];
       
          console.log("attempting to set gold prices");
          
          document.getElementById("numberweight").innerHTML = 1.244;
          document.getElementById("numbergu").innerHTML = 0.917;
          document.getElementById("numberozt").innerHTML = 0.0400;
          document.getElementById("numberozt2").innerHTML = 0.0400;

          
      }
      if (initialMetal == 2){
          document.getElementById("unitPriceField").defaultValue = currentSilver[currentSilver.length - 1];
      
      
          
          
                    document.getElementById("numberweight").innerHTML = 2.48;
          document.getElementById("numbergu").innerHTML = 2.260;
          document.getElementById("numberozt").innerHTML =  31.10;
          document.getElementById("numberozt2").innerHTML =  31.10;


      }
      if (initialMetal == 3){
          document.getElementById("unitPriceField").defaultValue = currentPlatinum[currentPlatinum.length - 1];
          
       
           
          document.getElementById("numberweight").innerHTML = 28.3495;
          document.getElementById("numbergu").innerHTML = 28.35;
          document.getElementById("numberozt").innerHTML = 31.10;
          document.getElementById("numberozt2").innerHTML = 31.10;


          
      }

      },
  error: function(object, error) {
 
      
      
      console.log(error);
      trackJs.track(error);
  }
});
    
    
    
    
};


//Method Assigns Gold Date with Gold Value --
function runGoldJSON() {

    //Determing many points to plot on the graph
    var FREQUENCY = 31;
    var goldValue = [];


    var xmlhttp = new XMLHttpRequest();

    //URL for Gold Data
    var url = "https://www.quandl.com/api/v1/datasets/BUNDESBANK/BBK01_WT5511.json?auth_token=yNHhNn-3_J2TMae97Dza&sort_order=asc";

    xmlhttp.onreadystatechange = function () {
        //  console.log("start...");

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            var arr = JSON.parse(xmlhttp.responseText);

            var i = arr.data.length - FREQUENCY;
            var c = 0;

            for (i; i < arr.data.length; i++) {


               // goldDate[c] = arr.data[i][0];
                goldValue[c] = arr.data[i][1];
                c++;
            }
            
            


            var golddates = Parse.Object.extend("graph");

            var date = new golddates();

            date.set("objectId", "PlycS4oIZR");
            date.set("goldValue", goldValue);

            date.save(null, {
                success: function (date) {

                    // console.log("success");


                },
                error: function (date, error) {

                    console.log(error + "GOLD DATE LENGTH" + goldValue.length);
                    trackJs.track(error);

                }
            });

        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

};


function runGoldJSONBid() {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.quandl.com/api/v1/datasets/CHRIS/MX_SXA1.json?auth_token=yNHhNn-3_J2TMae97Dza";


    xmlhttp.onreadystatechange = function () {
        console.log("start...");
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            arrGenGoldBid(myArr);

        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

};

function arrGenGoldBid(arr) {

    var i = 0;


    bid = arr.data[0][1];
    ask = arr.data[0][2];
    change = bid - arr.data[1][1];


    // console.log(arr.data[1][1] + " eyy " + arr.data[1][2]);
    var chg = change.toFixed(2);



    if (document.getElementById("bid") == null) {} else {
        document.getElementById("bid").innerHTML = bid;
        document.getElementById("ask").innerHTML = ask;
        document.getElementById("change").innerHTML = chg;

    }

    //  console.log("" + bid + "" + ask + "" + chg);

    var golddates = Parse.Object.extend("graph");

    var date = new golddates();

    date.set("objectId", "PlycS4oIZR");
    date.set("gbid", bid);
    date.set("gask", ask);
    date.set("gchange", Number(chg));

    date.save(null, {
        success: function (date) {},
        error: function (date, error) {

            console.log(error);
        }
    });

};


function runSilverJSON() {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.quandl.com/api/v1/datasets/WSJ/AG_EIB.json?auth_token=yNHhNn-3_J2TMae97Dza&sort_order=asc";

    var FREQUENCY = 31;
            var silverValue = [];


    xmlhttp.onreadystatechange = function () {
        console.log("start...");
      
        
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            var arr = JSON.parse(xmlhttp.responseText);

            var i = arr.data.length - FREQUENCY;
            var c = 0;

            for (i; i < arr.data.length; i++) {


               // goldDate[c] = arr.data[i][0];
                silverValue[c] = arr.data[i][1];
                c++;
            }

            var silverdates = Parse.Object.extend("graph");

            var date = new silverdates();

            date.set("objectId", "PlycS4oIZR");
            date.set("silverValue", silverValue);

              
                         // localStorage["tempSilverValue"] = JSON.stringify(silverValue);

            date.save(null, {
                success: function (date) {

                     console.log("Silver Data Updated");


                },
                error: function (date, error) {

                    console.log(error + silverValue);
                    trackJs.track(error);

                }
            });

        }  

        }
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

};



function runPlatinumJSON() {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.quandl.com/api/v1/datasets/WSJ/PL_MKT.json?auth_token=yNHhNn-3_J2TMae97Dza&sort_order=asc";

    
    var FREQUENCY = 31;
    var platinumValue = [];

    
    xmlhttp.onreadystatechange = function () {
        console.log("start...");
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var arr = JSON.parse(xmlhttp.responseText);
            
    
            var i = arr.data.length - FREQUENCY;
            var c = 0;

            for (i; i < arr.data.length; i++) {


               // goldDate[c] = arr.data[i][0];
                platinumValue[c] = arr.data[i][1];
                c++;
            }

            var platinumdates = Parse.Object.extend("graph");

            var date = new platinumdates();

            date.set("objectId", "PlycS4oIZR");
            date.set("platinumValue", platinumValue);

            
            
                        //localStorage["tempPlatinumValue"] = JSON.stringify(platinumValue);

            date.save(null, {
                success: function (date) {
                     console.log("Platinum Data Updated");

                },
                error: function (date, error) {

                    console.log(error + platinumValue);
                    trackJs.track(error);

                }
            });


        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

};


function runSilverJSONBid() {


    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.quandl.com/api/v1/datasets/WSJ/AG_EIB.json?auth_token=yNHhNn-3_J2TMae97Dza&sort_order=asc";


    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            arrGenSilverBid(myArr);

        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

};

function arrGenSilverBid(arr) {

    var i = 0;


    bid = arr.data[0][5];
    ask = arr.data[0][6];
    change = bid - ask;

    var chg = change.toFixed(2);

    var silver = Parse.Object.extend("graph");

    var date = new silver();

    date.set("objectId", "PlycS4oIZR");
    date.set("sbid", bid);
    date.set("sask", ask);
    date.set("schange", Number(chg));

    date.save(null, {
        success: function (date) {},
        error: function (date, error) {

            console.log(error);
            trackJs.track(error);
        }
    });

};

function runPlatinumJSONBid() {


    console.log("RUNNING JSON");
    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.quandl.com/api/v1/datasets/PERTH/PLAT_USD_D.json?auth_token=yNHhNn-3_J2TMae97Dza";


    xmlhttp.onreadystatechange = function () {
        console.log("start...");
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            arrGenPlatinumBid(myArr);

        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

};

function arrGenPlatinumBid(arr) {

    var i = 0;

    bid = arr.data[0][5];
    ask = arr.data[0][6];
    change = bid - arr.data[1][6];

    var chg = change.toFixed(2);



    console.log("Platinum Details " + bid + " " + ask + " " + chg);

    var plat = Parse.Object.extend("graph");

    var date = new plat();

    date.set("objectId", "PlycS4oIZR");
    date.set("pbid", bid);
    date.set("pask", ask);
    date.set("pchange", Number(chg));

    date.save(null, {
        success: function (date) {},
        error: function (date, error) {

            console.log(error);
            trackJs.track(error);
        }
    });

};


function getDateRange() {

    var today = new Date();
    var mm = today.getMonth();
    var dd = today.getDate();
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    var d = new Date();

    d.setDate(d.getDate() - 30);

    var dmm = d.getMonth();
    var ddd = d.getDate();
    var dyyyy = d.getFullYear();

    if (ddd < 10) {
        ddd = '0' + ddd;
    }

    if (dmm < 10) {
        dmm = '0' + dmm;
    }
    var startDate = new Date(dyyyy, dmm, ddd);

    var endDate = new Date(yyyy, mm, dd);

    var newDate = startDate;
    var dateStrings = [];


    while (newDate <= endDate) {

        var tempMonth = newDate.getMonth() + 1;
        if (tempMonth < 10) {
            tempMonth = '0' + tempMonth;
        }


        var tempDay = newDate.getDate();

        if (tempDay < 10) {
            tempDay = '0' + tempDay;
        }

        str = String(newDate.getFullYear() + "-" + tempMonth + "-" + tempDay);
        dateStrings.push(str);
        newDate.setDate(newDate.getDate() + 1);
    }


    //console.log(dateStrings);
localStorage["dateRanges"] = JSON.stringify(dateStrings);

    
    
    var graph = Parse.Object.extend("graph");

    var graphObject = new graph();

    graphObject.set("objectId", "PlycS4oIZR");
    graphObject.set("dateRange", dateStrings);
    graphObject.save(null, {
        success: function (graphObject) {
            console.log("Date Range: Success");

            // console.log(dateStrings.length);
        },
        error: function (graphObject, error) {
            console.log("Date Range: error" + error);
            trackJs.track(error);
        }
    });
    
    return dateStrings;
}

function changeTheme() {
    if(typeof(Storage) !== "undefined") {
        var temp = document.getElementById("main");

        if (new String (temp.getAttribute("href")) == "../style/style.css") {
            setTheme("../style/altstyle.css");
        } else if (temp.getAttribute("href") == "../style/altstyle.css") {
            setTheme("../style/style.css");
        }
    } else {
        alert ("The browser is unable to change themes because it does not support local storage.");
        trackJs.track("theme change error");
    }
}

function getTheme() {
    return localStorage.getItem("css");
}

function setTheme(href) {
    if (href != null) {
        var theme = document.getElementById("main");
        localStorage.setItem("css", href);
        theme.href = href;
    }
}

function arraySum(array){
 
    var count = 0;
    
    
    for (var i=array.length; i--;) {
     count+=array[i];
   }
    
    return count;
    
}

function overallDaily() {

    var path = window.location.pathname;
    var page = path.split("/").pop();



    if (page == "goldoverview.html" || page == "silveroverview.html" || page == "platinumoverview.html") {



        var user = Parse.User.current();

        var userGoldTotal = user.get("goldValueTotal");
        var userSilverTotal = user.get("silverValueTotal");
        var userPlatinumTotal = user.get("platinumValueTotal");
        var mark;
        var overall;
        var metalType;
        
        if (page == "goldoverview.html") {

            metalType = userGoldTotal;

        }
        if (page == "silveroverview.html") {

            metalType = userSilverTotal;
        }

        if (page == "platinumoverview.html") {


            metalType = userPlatinumTotal;
        }


        console.log(metalType[metalType.length - 1]);
        var daily =
            (metalType[metalType.length - 1] - metalType[metalType.length - 2]) / metalType[metalType.length - 1];

        if (metalType[metalType.length - 1] <= 0) {
            daily = 0;
        }



        if (metalType[metalType.length - 1] >= metalType[metalType.length - 2])
            mark = "+";
        else
            mark = "-";

        document.getElementById("daily").innerHTML = mark + (daily.toFixed(2) * 100) + "%";

        overall = metalType[metalType.length - 1] / arraySum(metalType);
        if (arraySum(metalType) <= 0) {
            overall = 0;
        }

        document.getElementById("overall").innerHTML = mark + (overall.toFixed(2) * 100) + "%";

    }

}