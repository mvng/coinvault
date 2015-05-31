function runJSON() {

    var xmlhttp = new XMLHttpRequest();
    var url = "https://www.quandl.com/api/v1/datasets/BUNDESBANK/BBK01_WT5511.json?auth_token=yNHhNn-3_J2TMae97Dza";

    xmlhttp.onreadystatechange = function () {
        console.log("start...");
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var myArr = JSON.parse(xmlhttp.responseText);
            arrGen(myArr);
            console.log("test");
        }
    }
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

};

function arrGen(arr) {

    var i = 0;

    var date = [];
    var price = [];

    // console.log(arr.data.length);
    for (i = 0; i < arr.data.length; i++) {

        // console.log(i);
        console.log(arr.data[i][0] + " " + arr.data[i][1]);


        date[i] = arr.data[i][0];
        price[i] = arr.data[i][1];
    }



    console.log("done");

};