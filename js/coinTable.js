Parse.initialize("uuMKgtd7piSYYS1OIicbKekLesPHKKerHp21X3Zk", "J10xkBbtYfn4EPD9TQzp0BNJI7sQ2UXmJqY0Dkgu");


function name(){
  
    var table = [];
    
    var item = Parse.Object.extend("item");
    var query = new Parse.Query(item);
    item.equalTo("userObjId","XfP9iownzq");
    console.log("sup");
    query.find({
        success: function(results){
                console.log(results);

            for(var i = 0; i < results.length; i++){
                
                table.push({
                    objectId: results[i].objectId,
                    type: results[i].type,
                    metal: results[i].metal,
                    qty: results[i].qty,
                    value: results[i].total
                });
                
                //console.log(results.length);
                                                   // console.log(table);

            }
                                   console.log(table);

                    
    
};