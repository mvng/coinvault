//this will track the addition of a coin to the stack
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