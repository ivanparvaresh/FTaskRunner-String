var assert = require('chai').assert;
var ftask=require("ftaskrunner");
var ftaskMyString=require("./../index.js");

describe('FTaskRunner-String', function() {


    describe('Tasks', function () {
        
        it('#string/Simple', function (done) {
            ftask().load(ftaskMyString).build("test",function(root){
                
                root.string("hello world");
                
            }).run(null,function(branches){
                
                assert.isNotNull(branches.test);
                assert.isNotNull(branches.test.err);
                assert.equal(branches.test.result[0],"hello world");
                
                done();
            });	
        });
        
        it('#string/replace', function (done) {
            ftask().load(ftaskMyString).build("test",function(root){
                
                root
                    .string("hello")
                    .addParam("param1")
                    .string("world")
                    .string("{param1} {$$input}");
                
            }).run(null,function(branches){
                
                assert.isNotNull(branches.test);
                assert.isNotNull(branches.test.err);
                assert.equal(branches.test.result[0],"hello world");
                done();
            });	
        });
        
        it('#stringReplace', function (done) {
            ftask().load(ftaskMyString).build("test",function(root){
                
                root
                    .string("hello your friend")
                    .stringReplace("your","my");
                
            }).run(null,function(branches){
                
                assert.isNotNull(branches.test);
                assert.isNotNull(branches.test.err);
                assert.equal(branches.test.result[0],"hello my friend");
                done();
            });	
        });
        
        it('#stringSplit', function (done) {
            ftask().load(ftaskMyString).build("test",function(root){
                
                root
                    .string("hello my friend")
                    .stringSplit(" ");
                
            }).run(null,function(branches){
                
                assert.isNotNull(branches.test);
                assert.isNotNull(branches.test.err);
                assert.equal(branches.test.result[0][0],"hello");
                assert.equal(branches.test.result[0][1],"my");
                assert.equal(branches.test.result[0][2],"friend");
                done();
            });	
        });
        it('#stringSubstr', function (done) {
            ftask().load(ftaskMyString).build("test",function(root){
                
                root
                    .string("hello my friend")
                    .stringSubstr(0,5);
                
            }).run(null,function(branches){
                
                assert.isNotNull(branches.test);
                assert.isNotNull(branches.test.err);
                assert.equal(branches.test.result[0],"hello");
                done();
            });	
        });
        it('#stringToLowerCase', function (done) {
            ftask().load(ftaskMyString).build("test",function(root){
                
                root
                    .string("HELLO My Friend")
                    .stringToLowerCase(0,5);
                
            }).run(null,function(branches){
                
                assert.isNotNull(branches.test);
                assert.isNotNull(branches.test.err);
                assert.equal(branches.test.result[0],"hello my friend");
                done();
            });	
        });
        it('#stringToUpperCase', function (done) {
            ftask().load(ftaskMyString).build("test",function(root){
                
                root
                    .string("HELLO My Friend")
                    .stringToUpperCase(0,5);
                
            }).run(null,function(branches){
                
                assert.isNotNull(branches.test);
                assert.isNotNull(branches.test.err);
                assert.equal(branches.test.result[0],"HELLO MY FRIEND");
                done();
            });	
        });
        
         it('#stringTrim', function (done) {
            ftask().load(ftaskMyString).build("test",function(root){
                
                root
                    .string("   hello ")
                    .stringTrim();
                
            }).run(null,function(branches){
                
                assert.isNotNull(branches.test);
                assert.isNotNull(branches.test.err);
                assert.equal(branches.test.result[0],"hello");
                done();
            });	
        });
        
    });
});