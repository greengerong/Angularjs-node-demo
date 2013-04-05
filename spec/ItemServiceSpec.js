//run test must open mongodb.

describe('Items Service Spec', function(){
   var itemService = require("../../routes/service/itemService").itemService;
  var log =function(e){console.log(e)};

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


 it('should update items', function(done){
     itemService.save([{name:"test1"}], function(saved){
         expect(saved).not.toBeNull();
         expect(saved.name).toEqual("test1");
         itemService.update(saved._id,{name:"test2"},function(item){  
            expect(item).toEqual(1);
            itemService.find({name:"test2"},function(items){
              expect(items.length).toEqual(1);
              done();
          });
         },log);
         
     });
  });

 it('should remove items', function(done){
     itemService.save([{name:"test1"}], function(saved){
         expect(saved).not.toBeNull();
         expect(saved.name).toEqual("test1");
         itemService.remove(saved._id,function(item){  
            expect(item).toEqual(1);
            itemService.find({name:"test1"},function(items){
              expect(items.length).toEqual(0);
              done();
          });
         },log);
         
     });
  });

  it('should find items', function(done){
     itemService.save([{name:"test1"}], function(saved){
         expect(saved).not.toBeNull();
         expect(saved.name).toEqual("test1");
         itemService.find({name:"test1"},function(items){
            expect(items).not.toBeNull(); 
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