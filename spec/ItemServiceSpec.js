
describe('jasmine-node', function(){
   var itemService = require("../routes/service/itemService").itemService;
  
  it('should save items', function(done){
     itemService.save([{name:"test1"}], function(saved){
         expect(saved).not.toBeNull();
         expect(saved.name).toEqual("test1");
         itemService.find({name:"test1"},function(items){
            expect(items.length).toEqual(1);
            done();
         });
         
     });
  });



  afterEach(function(){
  	var mongo = require("mongojs");
    var databaseUrl = "angularjs-node-demo"; 
    var collections = ["items"];
    var db = mongo.connect(databaseUrl, collections);
    db.items.remove({name:/.*/g});
  });
    

});