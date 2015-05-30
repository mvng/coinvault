//Objects to edit in Parse
//Type, unitPrice, premium Total createdAt, metal
Parse.initialize("uuMKgtd7piSYYS1OIicbKekLesPHKKerHp21X3Zk", "J10xkBbtYfn4EPD9TQzp0BNJI7sQ2UXmJqY0Dkgu");

function set(objectId) {
    "use strict";


    // console.log("attempting");
    //deleteAllCookies();


    // console.log("hey " + objectId);

    //  document.cookie = "id=" + objectId;

    localStorage.id = objectId;


}

function getId() {
    "use strict";


    /*
    var allcookies = document.cookie;
    
    cookiearray = allcookies.split(";");
    
    for( var i = 0; i< cookiearray.length; i++){
              id = cookiearray[i].split('=')[0];
              value = cookiearray[i].split('=')[1];


                //console.log(id); 
        
    }*/

    return localStorage.getItem("id");
}

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function get(objectId) {
    //event.preventDefault();
    // window.localStorage.setItem("option", optionch);


    //window.location.href = 'myitem.html';
    //  event.preventDefault();
    "use strict";
    console.log("ayy lmao" + objectId);

    //  console.log("ayy lmao");

    var Item = Parse.Object.extend("item");
    var query = new Parse.Query(Item);


    query.get(objectId, {
        success: function (item) {

            //  event.preventDefault();

            document.getElementById("metalField").innerHTML = item.get("metal");
            document.getElementById("typeField").innerHTML = item.get("type");
            document.getElementById("unitPriceField").innerHTML = item.get("unitPrice");
            document.getElementById("premiumField").innerHTML = item.get("premium");
            document.getElementById("totalField").innerHTML = item.get("total");
            document.getElementById("qtyField").innerHTML = item.get("qty");

            //   document.getElementById("purchaseDateField").innerHTML = item.get("purchaseDate"); 

            // location.reload();



            console.log(item.get("total"));



        },
        error: function (object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
            // location.reload();
            //console.log("Fucking Errors");

            console.log(error.message);
        }
    });


}

function getEdit(objectId) {


    "use strict";

    console.log("invoking edit");
    //event.preventDefault();
    // window.localStorage.setItem("option", optionch);
    //   var objectId2 = objectId;


    //window.location.href = 'myitem.html';
    //  event.preventDefault();

    console.log("ayy lmao " + objectId);

    //  console.log("ayy lmao");

    var Item = Parse.Object.extend("item");
    var query = new Parse.Query(Item);


    query.get(objectId, {
        success: function (item) {

            //  event.preventDefault();

            document.getElementById("metalField").placeholder = item.get("metal");
            document.getElementById("typeField").placeholder = item.get("type");
            document.getElementById("unitPriceField").value = item.get("unitPrice");
            document.getElementById("premiumField").value = item.get("premium");
            document.getElementById("totalField").value = item.get("total");
            document.getElementById("qtyField").value = item.get("qty");

            //   document.getElementById("purchaseDateField").innerHTML = item.get("purchaseDate"); 

            // location.reload();


            console.log(item.get("total"));



        },
        error: function (object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and message.
            // location.reload();
            //console.log("Fucking Errors");

            console.log(error.message);
        }
    });

}



function creat(userObjId) {
    event.preventDefault();

    console.log("invoking creat");

    var metal = document.getElementById("metalField");
    var type = document.getElementById("typeField");
    var purchaseDate = document.getElementById("purchaseDateField");
    var qty = document.getElementById("qtyField");
    var premium = document.getElementById("premiumField");
    var unitPrice = document.getElementById("unitPriceField");
    var total = document.getElementById("totalField").textContent;
    var weightg;
    var weightau;

    /*
    console.log(metal.options[metal.selectedIndex].text);
    console.log(type.options[type.selectedIndex].text);
   console.log(purchaseDate.value);
    
    console.log(qty.value);
    console.log(premium.value);
    console.log(unitPrice.value);
    console.log(document.getElementById("totalField").textContent);

    */

    if (metal.options[metal.selectedIndex].text == "Gold") {
        weightg = 1.244;
        weightau = 0.917;
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

    thing.set("weightg", weightg);
    thing.set("weightau", weightau);

    thing.save(null, {
        success: function (thing) {
            // Execute any logic that should take place after the object is saved.
        //    alert('New object created with objectId: ' + thing.id);
            location.reload();
            window.location.href = "goldoverview.html";
        },
        error: function (thing, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
                        location.reload();

          //  alert('Failed to create new object, with error code: ' + error.message);
                        window.location.href = "goldoverview.html";


        }
    });
};

function updateItem() {
    console.log("invoking update");


    var objectId = getId();
    event.preventDefault();

    var Item = Parse.Object.extend("item");
    //var query = new Parse.Query(Item);
    var thing = new Item();

    //console.log(thing);

    var metal = document.getElementById("metalField");
    var type = document.getElementById("typeField");
    var purchaseDate = document.getElementById("purchaseDateField");
    var qty = document.getElementById("qtyField");
    var premium = document.getElementById("premiumField");
    var unitPrice = document.getElementById("unitPriceField");
    var total = document.getElementById("totalField").textContent;

    var weightg;
    var weightau;
    if (metal.options[metal.selectedIndex].text == "Gold") {
        weightg = 1.244;
        weightau = 0.917;
    }


    thing.set("objectId", objectId);

    thing.set("metal", metal.options[metal.selectedIndex].text);
    thing.set("type", type.options[type.selectedIndex].text);

    thing.set("qty", Number(qty.value));
    thing.set("premium", Number(premium.value));
    thing.set("unitPrice", Number(unitPrice.value));
    thing.set("total", Number(total));

    thing.set("weightg", weightg);
    thing.set("weightau", weightau);

    thing.save(null, {
        success: function (thing) {
            // Execute any logic that should take place after the object is saved.

            console.log("edit success");

            location.reload();
            window.location.href = "myitem.html";

        },
        error: function (thing, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            console.log("edit fail");

            location.reload();
            window.location.href = "myitem.html";


        }
    });


};

function deleteItem() {

    "use strict";
    //event.preventDefault();

    var objectId;

    objectId = getId();

    var Item = Parse.Object.extend("item");

    var THING = new Parse.Object("item");
    THING.id = objectId;
    THING.destroy({
        success: function () {
            
         //   console.log("success delete");
            //location.reload();
        },
        error: function (error) {
            //console.log(error.message);
            //really why does it even go here????????????????
           // location.reload();
            
        }
    });

};




function generateGold(objectId) {
    var data = [];
    var table = [];
    var id;
    var temp = {};

    
    var totalValue = 0;
    var mydiv = document.getElementById("totalGoldValue");
    
    // Generates the array of objects

    var item = Parse.Object.extend("item");
    var query = new Parse.Query(item);

    query.equalTo("userObjId", objectId);
    //console.log("sup");
    query.find({
        success: function (results) {

            // console.log(results[0].attributes);



            for (var i = 0; i < results.length; i++) {
                temp = results[i].attributes;
                id = results[i].id
                data[i] = {
                    "objectId": id,
                    "type": temp.type,
                    "metal": temp.metal,
                    "qty": temp.qty,
                    "value": temp.total,
                    "weightg": temp.weightg,
                    "weightau": temp.weightau,
                    "total": temp.total

                };
                console.log(data);

            }
            table.push(data);
            // console.log(table);
            //console.log(data);

            var tr;
            $(document).ready(function () {
                for (var i = 0; i < data.length; i++) {


                    tr = $('<tr/>');

                    var id = data[i].objectId;


                    //    tr.append("<a onclick = " + "get('id')" + ">" + id);
                    tr.append("<td>" + id + "</td>");
                    // tr.append("<a  href= " + "../src/myitem.html" + ">" + "<td>" + data[i].objectId + "</td>");
                    tr.append("<td>" + data[i].type + "</td>");
                    tr.append("<td>" + data[i].qty + "</td>");

                    tr.append("<td>" + data[i].weightg + "</td>");
                    tr.append("<td>" + data[i].weightau + "</td>");
                    tr.append("<td>" + data[i].total + "</td>" + "</a>");
                    // tr.onClick = set(123);
                     totalValue = totalValue + data[i].total;
                    console.log(totalValue);

                    $('#goldTable').append(tr);
                    $(tr).click(function () {

                        var a = $(this).closest('tr').find('td:first').text();
                        set(a);


                        window.location.href = 'myitem.html';

                        //console.log(a);



                    });

                }
                
                  var twoPlacedFloat = parseFloat(totalValue).toFixed(2)
                //  console.log( "$$$$$$$$$$$$$" + numberWithCommas(twoPlacedFloat));

                            mydiv.innerHTML = "$" + numberWithCommas(twoPlacedFloat);




            });

        },
        error: function (error) {
            console.log(error);
        }
    });



};









function deleteAllCookies() {


    console.log("deleting cookies...");
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

function name() {
    var data = [];
    var table = [];
    var id;
    var temp = {};

    // Generates the array of objects

    var item = Parse.Object.extend("item");
    var query = new Parse.Query(item);
    query.equalTo("userObjId", "XfP9iownzq");
    //console.log("sup");
    query.find({
        success: function (results) {

            // console.log(results[0].attributes);



            for (var i = 0; i < results.length; i++) {
                temp = results[i].attributes;
                id = results[i].id
                data[i] = {
                    "objectId": temp.id,
                    "type": temp.type,
                    "metal": temp.metal,
                    "qty": temp.qty,
                    "value": temp.total
                };
                console.log(data);

            }
            table.push(data);
            // console.log(table);
            //console.log(data);



            var tr;
            $(document).ready(function () {
                for (var i = 0; i < data.length; i++) {

                    tr = $('<tr/>');

                    tr.append("<td>" + data[i].type + "</td>");
                    tr.append("<td>" + data[i].metal + "</td>");
                    tr.append("<td>" + data[i].qty + "</td>");

                    $('table').append(tr);
                }







            });

        },
        error: function (error) {
            console.log(error);
        }
    });



};

function update() {


    var qty = document.getElementById("qtyField").value;

    var premium = document.getElementById("premiumField").value;

    var unitPrice = document.getElementById("unitPriceField").value;

    if (!qty) qty = 1;
    if (!premium) premium = 47;
    if (!unitPrice) unitPrice = 1250.60;

    var sum = (+qty * (+premium + +unitPrice));

    sum = parseFloat(sum).toFixed(2);


    document.getElementById("totalField").innerHTML = sum;

    //  console.log(qty);
    //  console.log(premium);
    //  console.log(unitPrice);
    //  console.log(sum);
};