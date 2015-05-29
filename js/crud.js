//Objects to edit in Parse
//Type, unitPrice, premium Total createdAt, metal
Parse.initialize("uuMKgtd7piSYYS1OIicbKekLesPHKKerHp21X3Zk", "J10xkBbtYfn4EPD9TQzp0BNJI7sQ2UXmJqY0Dkgu");


function get(objectId) {
     //event.preventDefault();
    // window.localStorage.setItem("option", optionch);
    var objectId2 = objectId;


     //window.location.href = 'myitem.html';
   //  event.preventDefault();

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
            console.log("Fucking Errors");

            console.log(error.message);
        }
    });


};



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
            alert('New object created with objectId: ' + thing.id);
            location.reload();
        },
        error: function (thing, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            alert('Failed to create new object, with error code: ' + error.message);
            location.reload();

        }
    });
};

function update(objectId) {

    var Item = Parse.Object.extend("item");
    //var query = new Parse.Query(Item);
    var thing = new Item();







    /*
    
     thing.set("objectId", objectId);
          thing.set("metal", document.getElementById("metalField").innerHTML);
        thing.set("type", document.getElementById("typeField").innerHTML);
      thing.set("unitPrice", document.getElementById("unitPriceField").innerHTML);
      thing.set("premium", document.getElementById("premiumField").innerHTML);
      thing.set("total", document.getElementById("totalField").innerHTML); 
      thing.set("qty", document.getElementById("qtyField").innerHTML); 
      
      thing.set("purchaseDate", document.getElementById("purchaseDateField").innerHTML); 
          
          */
    thing.set("objectId", objectId);
    thing.set("metal", "ROAWR");
    thing.save();






};

function delet(objectId) {



    var Item = Parse.Object.extend("item");

    var THING = new Parse.Object("item");
    THING.id = objectId;
    THING.destroy({
        success: function () {},
        error: function (error) {}
    });

};




function generateGold(objectId) {
    var data = [];
    var table = [];
    var id;
    var temp = {};

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

                    $('#goldTable').append(tr);
                      $(tr).click(function(){ 
                          
                        var a = $(this).closest('tr').find('td:first').text();
                           set(a);
                        
                        
                          window.location.href = 'myitem.html';
                          
                          //console.log(a);
                      
                      
                      
                      });

                }
                
                      
                
                
            });

        },
        error: function (error) {
            console.log(error);
        }
    });



};







function set(objectId) {

    console.log("hey " + objectId);
    
    document.cookie = objectId;


}

function getId(){

    
        return document.cookie;
    
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