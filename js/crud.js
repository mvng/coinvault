//Objects to edit in Parse
//Type, unitPrice, premium Total createdAt, metal
Parse.initialize("uuMKgtd7piSYYS1OIicbKekLesPHKKerHp21X3Zk", "J10xkBbtYfn4EPD9TQzp0BNJI7sQ2UXmJqY0Dkgu");


function update() {
    
var Item = Parse.Object.extend("item");
var query = new Parse.Query(Item);

    
    query.get("PYkufjJxYF", {
  success: function(item) {

    console.log(item.get("metal"));
          console.log(item.get("type"));
          console.log(item.get("unitPrice"));

          console.log(item.get("premium"));

          console.log(item.get("Total"));
    console.log(item.get("createdAt"));


  
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and message.
      
      console.log("Failed to update");
  }
});
    
    
   
};
