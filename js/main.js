Parse.initialize("uuMKgtd7piSYYS1OIicbKekLesPHKKerHp21X3Zk", "J10xkBbtYfn4EPD9TQzp0BNJI7sQ2UXmJqY0Dkgu");



var goldDate = [];
var goldValue = [];



var silverDate = [];
var silverValue = [];


var platinumDate = [];
var platinumValue = [];


var tempGoldDate = [];
var tempGoldValue = [];

var testingDate = [];

var userGoldTotal = [];




function loadTopNav() {

    if (Parse.User.current() == null) {

        return window.location.href = "../index.html";

    }


    console.log("GOLD DATES " + goldDate);




    document.write("    <nav>");
    document.write("        <svg class=\"icon-spinner2\">");
    document.write("            <symbol id=\"icon-spinner2\" viewBox=\"0 0 1024 1024\">");
    document.write("                <title>spinner2<\/title>");
    document.write("                <path class=\"path1\" d=\"M1024 384h-384l143.53-143.53c-72.53-72.526-168.96-112.47-271.53-112.47s-199 39.944-271.53 112.47c-72.526 72.53-112.47 168.96-112.47 271.53s39.944 199 112.47 271.53c72.53 72.526 168.96 112.47 271.53 112.47s199-39.944 271.528-112.472c6.056-6.054 11.86-12.292 17.456-18.668l96.32 84.282c-93.846 107.166-231.664 174.858-385.304 174.858-282.77 0-512-229.23-512-512s229.23-512 512-512c141.386 0 269.368 57.326 362.016 149.984l149.984-149.984v384z\"><\/path>");
    document.write("            <\/symbol>");
    document.write("            <use xlink:href=\"#icon-spinner2\"><\/use>");
    document.write("        <\/svg>");
    document.write("        <a href=\"dashboard.html\">COIN VAULT<\/a>");
    document.write("                <a onclick=\"logout()\" id=\"logout\">Logout<\/a>");
    document.write("        <svg class=\"icon-cog\">");
    document.write("            <symbol id=\"icon-cog\" viewBox=\"0 0 1024 1024\">");
    document.write("                <title>cog<\/title>");
    document.write("                <path class=\"path1\" d=\"M933.79 610.25c-53.726-93.054-21.416-212.304 72.152-266.488l-100.626-174.292c-28.75 16.854-62.176 26.518-97.846 26.518-107.536 0-194.708-87.746-194.708-195.99h-201.258c0.266 33.41-8.074 67.282-25.958 98.252-53.724 93.056-173.156 124.702-266.862 70.758l-100.624 174.292c28.97 16.472 54.050 40.588 71.886 71.478 53.638 92.908 21.512 211.92-71.708 266.224l100.626 174.292c28.65-16.696 61.916-26.254 97.4-26.254 107.196 0 194.144 87.192 194.7 194.958h201.254c-0.086-33.074 8.272-66.57 25.966-97.218 53.636-92.906 172.776-124.594 266.414-71.012l100.626-174.29c-28.78-16.466-53.692-40.498-71.434-71.228zM512 719.332c-114.508 0-207.336-92.824-207.336-207.334 0-114.508 92.826-207.334 207.336-207.334 114.508 0 207.332 92.826 207.332 207.334-0.002 114.51-92.824 207.334-207.332 207.334z\"><\/path>");
    document.write("            <\/symbol>");
    document.write("            <use xlink:href=\"#icon-cog\"><\/use>");
    document.write("        <\/svg>");
    document.write("    <\/nav>");



}

function loadTopNavPersist() {
    document.write("    <nav style='display: block; visibility: visible;'>");
    document.write("        <svg class=\"icon-spinner2\">");
    document.write("            <symbol id=\"icon-spinner2\" viewBox=\"0 0 1024 1024\">");
    document.write("                <title>spinner2<\/title>");
    document.write("                <path class=\"path1\" d=\"M1024 384h-384l143.53-143.53c-72.53-72.526-168.96-112.47-271.53-112.47s-199 39.944-271.53 112.47c-72.526 72.53-112.47 168.96-112.47 271.53s39.944 199 112.47 271.53c72.53 72.526 168.96 112.47 271.53 112.47s199-39.944 271.528-112.472c6.056-6.054 11.86-12.292 17.456-18.668l96.32 84.282c-93.846 107.166-231.664 174.858-385.304 174.858-282.77 0-512-229.23-512-512s229.23-512 512-512c141.386 0 269.368 57.326 362.016 149.984l149.984-149.984v384z\"><\/path>");
    document.write("            <\/symbol>");
    document.write("            <use xlink:href=\"#icon-spinner2\"><\/use>");
    document.write("        <\/svg>");
    document.write("        <a href=\"dashboard.html\">COIN VAULT<\/a>");
    document.write("				<a onclick=\"logout()\" id=\"logout\">Logout<\/a>");
    document.write("        <svg class=\"icon-cog\">");
    document.write("            <symbol id=\"icon-cog\" viewBox=\"0 0 1024 1024\">");
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
    if (selected == 0)
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

function drawDashboardGraph() {




    var pointStroke = "rgba(255,255,255,0.6)";
    var pointHighlightFill = "#fff";
    var pointHighlightStroke = "#fff";

    var user = Parse.User.current();
    var userGoldTotal = user.get("goldValueTotal");

    var data = {
        labels: tempGoldDate.reverse(),
        datasets: [
            {
                label: "Gold Total",
                fillColor: "rgba(104, 206, 222, 0.05)",
                strokeColor: "#FF6D67",
                pointColor: "#FF6D67",
                pointStrokeColor: pointStroke,
                pointHighlightFill: pointHighlightFill,
                pointHighlightStroke: pointHighlightStroke,
                data: userGoldTotal.reverse()

     },			{
 					label: "Platinum Total",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#FFA859",
 					pointColor: "#FFA859",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: [467, 555, 490, 550, 555, 560, 660]
 				},
 				{
 					label: "Silver Total",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#F3FF88",
 					pointColor: "#F3FF88",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: [200, 350, 300, 389, 330, 400, 488]

 				},
            {
                label: "1oz Gold",
                fillColor: "rgba(104, 206, 222, 0.05)",
                strokeColor: "#9FFF98",
                pointColor: "#9FFF98",
                pointStrokeColor: pointStroke,
                pointHighlightFill: pointHighlightFill,
                pointHighlightStroke: pointHighlightStroke,
                data: tempGoldValue.reverse()

            },{
 					label: "1oz Platinum",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#BBF5FF",
 					pointColor: "#BBF5FF",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: tempPlatinumValue.reverse()
 				},
 				{
 					label: "1oz Silver",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#C29FFF",
 					pointColor: "#C29FFF",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: tempSilverValue.reverse()
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

};


function addCoinGraph ( purchaseDate, value){
    
    alert("adding");
    purchaseDate = String(purchaseDate);
    
    var user = Parse.User.current();
    
 

    console.log("Parameters = " + purchaseDate  +" "+ value);
    

    
var i =0;
    for( i = 0; i < tempGoldDate.length; i++){
        
        
        console.log(i+" "  + purchaseDate +"  " + tempGoldDate[i] );
        
        
        if(strcmp (purchaseDate ,tempGoldDate[i]) == 0)
        {
        
            userGoldTotal[i] =Number(userGoldTotal[i]) +  Number(value);
                        console.log("MATCHED" +  userGoldTotal[i]);
            
            alert("matched");

        }
        
    }
    
    
    user.set("totalGoldValue",userGoldTotal);
    user.save(null,{
        success: function(user){
            
            console.log(userGoldTotal);
        },
        error: function(user,error){
        }
    });
    
    
    
    
    
};


function strcmp(a, b) {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}function drawGoldGraph() {



    var pointStroke = "rgba(255,255,255,0.6)";
    var pointHighlightFill = "#fff";
    var pointHighlightStroke = "#fff";

    var user = Parse.User.current();
    var userGoldTotal = user.get("goldValueTotal");

    var data = {
        labels: tempGoldDate.reverse(),
        datasets: [
            {
                label: "Gold Total",
                fillColor: "rgba(104, 206, 222, 0.05)",
                strokeColor: "#FF6D67",
                pointColor: "#FF6D67",
                pointStrokeColor: pointStroke,
                pointHighlightFill: pointHighlightFill,
                pointHighlightStroke: pointHighlightStroke,
                data: userGoldTotal.reverse()

     },
            {
                label: "1oz Gold",
                fillColor: "rgba(104, 206, 222, 0.05)",
                strokeColor: "#9FFF98",
                pointColor: "#9FFF98",
                pointStrokeColor: pointStroke,
                pointHighlightFill: pointHighlightFill,
                pointHighlightStroke: pointHighlightStroke,
                data: tempGoldValue.reverse()

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


};

function drawSilverGraph() {
    
    
    console.log("drawing silver graph");


    var pointStroke = "rgba(255,255,255,0.6)";
    var pointHighlightFill = "#fff";
    var pointHighlightStroke = "#fff";

    var user = Parse.User.current();
    var userGoldTotal = user.get("goldValueTotal");

    var data = {
        labels: tempGoldDate.reverse(),
        datasets: [
            {
 					label: "Silver Total",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#F3FF88",
 					pointColor: "#F3FF88",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: [200, 350, 300, 389, 330, 400, 488]

     },
            {
                label: "1oz Silver",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#C29FFF",
 					pointColor: "#C29FFF",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: tempSilverValue.reverse()

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


};


function drawPlatinumGraph() {
    
    
 //   console.log("drawing silver graph");


    var pointStroke = "rgba(255,255,255,0.6)";
    var pointHighlightFill = "#fff";
    var pointHighlightStroke = "#fff";

    var user = Parse.User.current();
    var userGoldTotal = user.get("goldValueTotal");

    var data = {
        labels: tempGoldDate.reverse(),
        datasets: [
            {
 					label: "Platinum Total",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#FFA859",
 					pointColor: "#FFA859",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: [467, 555, 490, 550, 555, 560, 660]

     },
            {
               		label: "1oz Platinum",
 					fillColor: "rgba(104, 206, 222, 0.05)",
 					strokeColor: "#BBF5FF",
 					pointColor: "#BBF5FF",
 					pointStrokeColor: pointStroke,
 					pointHighlightFill: pointHighlightFill,
 					pointHighlightStroke: pointHighlightStroke,
 					data: tempPlatinumValue.reverse()

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


};







$(window).load(function () {
    

    var gb,ga,gc;
    var sb,sa,sc;
    var pb,pa,pc;

    var path = window.location.pathname;
    var page = path.split("/").pop();
    var user = Parse.User.current();
    

        if(Parse.User.current() != null){
     userGoldTotal = user.get("goldValueTotal");

    testingDate = Parse.User.current().get("goldDateTotal");
            
        }
    /*
    var userQuery = new Parse.Query(Parse.User);
    
    userQuery.equalTo("objectId", currentUser.getObjectId);
    userQuery.find({
        success: function(q){
            
            
            testingDate = userQuery.get("goldDateTotal");
            console.log(testingDate + " wat " );
        }
    });
    
    */
    console.log(testingDate + "ayyy");
    
    
    
    

    var data = Parse.Object.extend("graph");
    
    
    var query = new Parse.Query(data);
    

        
    query.get("PlycS4oIZR", {
        success: function (query) {


            //temproraily cache entrys on parse for faster queries in drawing the graph! hell yes =)
            tempGoldDate = query.get("goldDate");
            tempGoldValue = query.get("goldValue");
            tempSilverValue = query.get("silverValue");
            tempPlatinumValue = query.get("platinumValue");
            
            
            
            
            
            
            
            //console.log(testingDate);
            
            gb = query.get("gbid");
            ga = query.get("gask");
            gc = query.get("gchange").toFixed(2);
            
            sb = query.get("sbid");
            sa = query.get("sask");
            sc = query.get("schange").toFixed(2);
            
            pb = query.get("pbid");
            pa = query.get("pask");
            pc = query.get("pchange").toFixed(2);
            
            
            
            if (page == "dashboard.html"){
                drawDashboardGraph();
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
            if (page == "goldoverview.html"){
                drawGoldGraph();
                
                document.getElementById("bid").innerHTML = gb;
                 document.getElementById("ask").innerHTML = ga;
                document.getElementById("change").innerHTML = gc;

                
                
            }
            
            if(page == "silveroverview.html"){
                
                  drawSilverGraph();

                  document.getElementById("bid").innerHTML = sb;
                 document.getElementById("ask").innerHTML = sa;
                document.getElementById("change").innerHTML = sc;
                
            }
            
            if(page == "platinumoverview.html"){
                
                    drawPlatinumGraph();
                    document.getElementById("bid").innerHTML = pb;
                 document.getElementById("ask").innerHTML = pa;
                document.getElementById("change").innerHTML = pc;
                
            }


            //   drawGoldGraph();
        },
        error: function (query, error) {

        }
    });


    /* * * * * * * * * * * * * *
     *                         *
     *        GENERAL          *
     *                         *
     * * * * * * * * * * * * * */

    $('.icon-spinner2').click(function () {
        location.reload();
    });
    /*
    	 $('tr').click(function(){
    	 	$(this).find('a')[0].click();
    	 });
         */

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
      //  drawGraph();
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


/* * * * * * * * * * * * * *
 *                         *
 *    Adding Item          *
 *                         *
 * * * * * * * * * * * * * */

   function creat() {

        
        alert("ur mom");
    var userObjId = Parse.User.current().id;

    event.preventDefault();

  //  console.log("invoking creat");

    var metal = document.getElementById("metalField");
    var type = document.getElementById("typeField");
    var purchaseDate = document.getElementById("purchaseDateField");
    var qty = document.getElementById("qtyField");
    var premium = document.getElementById("premiumField");
    var unitPrice = document.getElementById("unitPriceField");
    var total = document.getElementById("totalField").textContent;
    var weightg;
    var weightau; 
    
    addCoinGraph(purchaseDate.value,total);

    console.log("hello" + purchaseDate.value);
    
    var page = "dashboard.html";

    if (metal.options[metal.selectedIndex].text == "Gold") {
        weightg = 1.244;
        weightau = 0.917;
        page = "goldoverview.html";
        
    }
    
    if (metal.options[metal.selectedIndex].text == "Silver") {
        weightg = 2.48;
        weightau = 2.260416;
        page = "silveroverview.html";
    }

    
      if (metal.options[metal.selectedIndex].text == "Platinum") {
        weightg = 28.3495;
        weightau = 0.911;
        page = "platinumoverview.html";
    }
    
    
    var Item = Parse.Object.extend("item");
    var thing = new Item();

    console.log(premium.value);
    console.log(userObjId);

    thing.set("userObjId", userObjId);
    thing.set("metal", metal.options[metal.selectedIndex].text);
    thing.set("type", type.options[type.selectedIndex].text);

    thing.set("qty", Number(qty.value));
    thing.set("premium", Number(premium.value));
    thing.set("unitPrice", Number(unitPrice.value));
    thing.set("total", Number(total));
       
       
       
       thing.set("purchaseDate",purchaseDate.value);
    thing.set("weightg", weightg);
    thing.set("weightau", weightau);

    
    
    thing.save(null, {
        success: function (thing) {
            // Execute any logic that should take place after the object is saved.
            //    alert('New object created with objectId: ' + thing.id);
                                    location.reload();

   
            window.location.href = page;
            

        },
        error: function (thing, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            location.reload();

            //  alert('Failed to create new object, with error code: ' + error.message);
            window.location.href = "dashboard.html";


        }
    });
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
        console.log("gold gu");
        return "Gold g/u";
    }
    if (value == 2) {
        console.log("silver gu");
        return "Silver g/u";
    }
    if (value == 3) {
        console.log("platinum gu");
        return "Platinum g/u";
    }


    console.log("Error: G/U Selector tag not returning any value");

};

function metaloz(value) {

    "use strict";

    if (value == 1) {
        console.log("gold oz");
        return "Gold ozt/u";
    }
    if (value == 2) {
        console.log("silver oz");
        return "Silver ozt/u";
    }
    if (value == 3) {
        console.log("platinum oz");
        return "Platinum ozt/u";
    }


    console.log("Error: OZ Selector tag not returning any value");

};

function run() {

    console.log("invoking run");
    initialMetal = document.getElementById("metalField").value;
    document.getElementById("metalDetails").innerHTML = metal(initialMetal);
    document.getElementById("gu").innerHTML = metalgu(initialMetal);
    document.getElementById("oz").innerHTML = metaloz(initialMetal);
};


function runGoldJSON() {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.quandl.com/api/v1/datasets/BUNDESBANK/BBK01_WT5511.json?auth_token=yNHhNn-3_J2TMae97Dza";


    xmlhttp.onreadystatechange = function () {
        console.log("start...");
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            arrGenGoldJSON(myArr);

        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

};

function arrGenGoldJSON(arr) {

    var i = 0;

    // console.log(arr.data.length);

    //ASSIGN HOW MANY PLOT POINTS HERE
    for (i = 0; i < 30; i++) {

        // console.log(i);
        console.log(arr.data[i][0] + " " + arr.data[i][1]);


        goldDate[i] = arr.data[i][0];
        goldValue[i] = arr.data[i][1];
    }

    var golddates = Parse.Object.extend("graph");

    var date = new golddates();

    date.set("objectId", "PlycS4oIZR");
    date.set("goldDate", goldDate);
    date.set("goldValue", goldValue);

    date.save(null, {
        success: function (date) {},
        error: function (date, error) {}
    });

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
  
    
    
    if( document.getElementById("bid") == null) {} 
        else {
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
    date.set("gchange",Number(chg));

    date.save(null, {
        success: function (date) {},
        error: function (date, error) {
        
        console.log(error);
        }
    });

};


function runSilverJSON() {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.quandl.com/api/v1/datasets/PERTH/SLVR_USD_D.json?auth_token=MozKdjXWdsbMFLxbDSfr";


    xmlhttp.onreadystatechange = function () {
        console.log("start...");
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            arrGenSilverJSON(myArr);

        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

};

function arrGenSilverJSON(arr) {

    var i = 0;

    // console.log(arr.data.length);

    //ASSIGN HOW MANY PLOT POINTS HERE
    for (i = 0; i < 30; i++) {

        silverValue[i] = arr.data[i][1];
    }

    var golddates = Parse.Object.extend("graph");

    var date = new golddates();

    date.set("objectId", "PlycS4oIZR");
   // date.set("silverDate", silverDate);
    date.set("silverValue", silverValue);

    date.save(null, {
        success: function (date) {},
        error: function (date, error) {}
    });

};



function runPlatinumJSON() {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.quandl.com/api/v1/datasets/PERTH/PLAT_USD_D.json?auth_token=MozKdjXWdsbMFLxbDSfr";


    xmlhttp.onreadystatechange = function () {
        console.log("start...");
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            arrGenPlatJSON(myArr);

        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

};

function arrGenPlatJSON(arr) {

    var i = 0;

    //ASSIGN HOW MANY PLOT POINTS HERE
    for (i = 0; i < 30; i++) {

        platinumValue[i] = arr.data[i][1];
    }

    var golddates = Parse.Object.extend("graph");

    var date = new golddates();

    date.set("objectId", "PlycS4oIZR");
   // date.set("silverDate", silverDate);
    date.set("platinumValue", platinumValue);

    date.save(null, {
        success: function (date) {},
        error: function (date, error) {
        
            console.log(error);
        }
    });

};


function runSilverJSONBid() {

    
    console.log("RUNNING JSON");
    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.quandl.com/api/v1/datasets/PERTH/SLVR_USD_D.json?auth_token=yNHhNn-3_J2TMae97Dza";


    xmlhttp.onreadystatechange = function () {
        console.log("start...");
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
  
  //  document.getElementById("bid").innerHTML = bid;
  //  document.getElementById("ask").innerHTML = ask;
  //  document.getElementById("change").innerHTML = chg;
    
    console.log("Silver Details " + bid + " " + ask + " " + chg);
    
    var silver = Parse.Object.extend("graph");

    var date = new silver();

    date.set("objectId", "PlycS4oIZR");
    date.set("sbid", bid);
    date.set("sask", ask);
    date.set("schange",Number(chg));

    date.save(null, {
        success: function (date) {},
        error: function (date, error) {
        
        console.log(error);
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
  
  //  document.getElementById("bid").innerHTML = bid;
  //  document.getElementById("ask").innerHTML = ask;
  //  document.getElementById("change").innerHTML = chg;
    
    console.log("Platinum Details " + bid + " " + ask + " " + chg);
    
    var plat = Parse.Object.extend("graph");

    var date = new plat();

    date.set("objectId", "PlycS4oIZR");
    date.set("pbid", bid);
    date.set("pask", ask);
    date.set("pchange",Number(chg));

    date.save(null, {
        success: function (date) {},
        error: function (date, error) {
        
        console.log(error);
        }
    });

};



