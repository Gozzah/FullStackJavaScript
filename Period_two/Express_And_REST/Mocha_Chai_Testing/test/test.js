var expect = require('chai').expect;
var tools = require("../lib/tools")
var nock = require('nock')

describe("Tools", function(){


describe("printName()", function(){

    it("Should print the last name first", function(){

        var results = tools.printName({first: "Rune", last:"Jensen"});
        expect(results).to.equal("Rune, Jensen");

    });

});



describe("Load wiki", function(){

    // Mocking a fake wikipedias-server for get requests
before(function(){
    nock("https://en.wikipedia.org")
    .get("/wiki/Abraham_Lincoln")
    .reply(200, "Mock Abraham Lincoln Page");





});
it("Loads Abraham Lincoln-s wikipedia page", function(done){


    tools.loadWiki({first: "Abraham", last: "Lincoln"}, function(html){




        expect(html).to.equal("Mock Abraham Lincoln Page");
        done();
    })
})


})

});