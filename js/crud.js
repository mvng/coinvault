//Objects to edit in Parse
//Type, unitPrice, premium Total createdAt, metal
Parse.initialize("uuMKgtd7piSYYS1OIicbKekLesPHKKerHp21X3Zk", "J10xkBbtYfn4EPD9TQzp0BNJI7sQ2UXmJqY0Dkgu");


function get() {
    
var Item = Parse.Object.extend("item");
var query = new Parse.Query(Item);

    
    query.get("PYkufjJxYF", {
  success: function(item) {
      
      
      document.getElementById("metalField").innerHTML = item.get("metal"); 
      document.getElementById("typeField").innerHTML = item.get("type"); 
      document.getElementById("unitPriceField").innerHTML = item.get("unitPrice"); 
      document.getElementById("premiumField").innerHTML = item.get("premium"); 
      document.getElementById("totalField").innerHTML = item.get("total"); 
      document.getElementById("qtyField").innerHTML = item.get("qty"); 
      
   //   document.getElementById("purchaseDateField").innerHTML = item.get("purchaseDate"); 

      


    console.log(item.get("purchaseDate"));


  
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
      
      console.log("Failed to update");
  }
});
    
    
   
};



function creat() {
    
var Item = Parse.Object.extend("item");
var thing = new Item();
    /*
    thing.set("metal", document.getElementById("metalField").innerHTML);
        thing.set("type", document.getElementById("typeField").innerHTML);
      thing.set("unitPrice", document.getElementById("unitPriceField").innerHTML);
      thing.set("premium", document.getElementById("premiumField").innerHTML);
      thing.set("total", document.getElementById("totalField").innerHTML); 
      thing.set("qty", document.getElementById("qtyField").innerHTML); 
   */
    
    thing.set("type", "GUCCI DOE");
    thing.save();
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
          thing.set("objectId",objectId);
          thing.set("metal", "ROAWR");
          thing.save();



    
    
   
};

function delet(objectId){
    
    
    
    var Item = Parse.Object.extend("item");

    var THING = new Parse.Object("item");
    THING.id = objectId;
    THING.destroy({success: function(){
    },
                  error: function(error){
                  }
                 });

};









function name(){
    var data = [];
    var table = [];
    var id;
    var temp = {};
    
    // Generates the array of objects
    
    var item = Parse.Object.extend("item");
    var query = new Parse.Query(item);
    query.equalTo("userObjId","XfP9iownzq");
    //console.log("sup");
    query.find({
        success: function(results){

           // console.log(results[0].attributes);

            

            for(var i = 0; i < results.length; i++){
                temp = results[i].attributes;
                id = results[i].id
                data[i] = {
                    "objectId": id,
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
    for(var i = 0; i< data.length; i++){
        
        tr = $('<tr/>');
        tr.append("<td>" + data[i].type + "</td>");
        tr.append("<td>" + data[i].metal + "</td>");
        tr.append("<td>" + data[i].qty + "</td>");
        $('table').append(tr);
    }

                                   

                    
    
    
                    
});
            
        },
        error: function(error){
            console.log(error);
        }
    });
    
       

};