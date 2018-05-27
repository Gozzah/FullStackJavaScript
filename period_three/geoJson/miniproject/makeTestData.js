require("./dbSetup.js").connect();

var User = require("./models/user");
var LocationBlog = require("./models/locationBlog");
var Position = require("./models/position");

 function userCreate(firstName,lastName,userName,password,type,company,companyUrl){
  var job = [{type,company,companyUrl},{type,company,companyUrl}];
  var userDetail = {firstName,lastName,userName,password,job};
  var user = new User(userDetail);
  return user.save();
} 

function positionCreator(lon, lat, userId, keep){
  var posDetail = {user:userId,loc:{coordinates:[lon,lat]}};
  if(keep){
    posDetail.created = "2022-09-25T20:40:21.899Z"
    
  }
  var position = new Position(posDetail);
  return position.save();
}

function LocationBlogCreator(info, author, longitude, latitude) {
  var LocationBlogDetail = { info, pos: { longitude, latitude }, author };
  var blog = new LocationBlog(LocationBlogDetail);
  return blog.save()
}
async function createLocationUsers(){
  await User.remove({});
  await Position.remove({});
  await LocationBlog.remove({});
  
  var userPromises = [
    userCreate("Kurt","Wonnegut","Swimmer1","test","xxx","comp","comp.url"),
    userCreate("Bo","sfsdf","Swimmer2","test","xxx","comp","comp.url"),
    userCreate("Lis","sfsdf","Runner1","test","xxx","comp","comp.url"),
    userCreate("Engelberth","Runner10","sfsfs","test","xxx","comp","comp.url"),
    userCreate("aaafasffa","fsf","Tester","test","xxx","comp","comp.url")
  ]

  var users = await Promise.all(userPromises);
  var posPromises = [
    positionCreator(12.565269470214842,55.70080738536962,users[0]._id, true),
    positionCreator(12.547416687011719,55.74450654680055,users[1]._id, true),
    positionCreator(12.648353576660156,55.62121140152134,users[2]._id, true),
    positionCreator(12.514114379882812,55.76826917386254,users[3]._id, true)];
    
  var positions = await Promise.all(posPromises);

  var blogPromises = [
    LocationBlogCreator("Cool Place",users[0]._id,26,148),
    LocationBlogCreator("Another Cool Place",users[0]._id,56,56),
    LocationBlogCreator("Yet Another Cool Place",users[0]._id,156,56),
    LocationBlogCreator("The coolest Place",users[3]._id,156,56),
  ];
  var blogs = await Promise.all(blogPromises);
  //console.log(users);
  //console.log(positions);
  console.log(blogs);
}

async function createUsers(){
  await User.remove({});
  await Position.remove({});
  await LocationBlog.remove({});
  
  var userPromises = [
    userCreate("Kurt","Wonnegut","Swimmer1","test","xxx","comp","comp.url"),
    userCreate("Bo","sfsdf","Swimmer2","test","xxx","comp","comp.url"),
    userCreate("Lis","sfsdf","Runner1","test","xxx","comp","comp.url"),
    userCreate("Engelberth","Runner10","sfsfs","test","xxx","comp","comp.url"),
    userCreate("aaafasffa","fsf","Tester","test","xxx","comp","comp.url")
  ]

  var users = await Promise.all(userPromises);
  var posPromises = [
    positionCreator(123,123,users[0]._id),
    positionCreator(123,123,users[1]._id),
    positionCreator(123,123,users[2]._id),
    positionCreator(123,123,users[3]._id),
    positionCreator(123,123,users[4]._id)];
    
  var positions = await Promise.all(posPromises);
  }
  createLocationUsers();