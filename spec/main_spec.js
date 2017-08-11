"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var main = require("../lib/main.js");


describe("测试描述", function(){
    //sinon.spy(console, 'log');

    it("Return a lyric when input 0", function(){

        var result = main(0);
        var expect_string = 'No more bottles of beer on the wall, no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles of beer on the wall.\n';
        
        expect(expect_string).to.equal(result);
    });

    it("Return a lyric when input 1", function(){

        var result = main(1);
        var expect_string = '1 bottle of beer on the wall, 1 bottle of beer.\n' +
            'Take one down and pass it around, no more bottles of beer on the wall.\n'+
            'No more bottles of beer on the wall, no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles of beer on the wall.\n';

        expect(expect_string).to.equal(result);
    });

    it("Return a lyric when input 2", function(){

        var result = main(2);
        var expect_string = '2 bottles of beer on the wall, 2 bottles of beer.\n' +
            'Take one down and pass it around, 1 bottle of beer on the wall.\n' +
            '1 bottle of beer on the wall, 1 bottle of beer.\n' +
            'Take one down and pass it around, no more bottles of beer on the wall.\n'+
            'No more bottles of beer on the wall, no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles of beer on the wall.\n';

        expect(expect_string).to.equal(result);
    });


    it("Return a lyric when input 15", function(){

        var result = main(5);
        var expect_string = '5 bottles of beer on the wall, 5 bottles of beer.\n' +
            'Take one down and pass it around, 4 bottles of beer on the wall.\n' +
            '4 bottles of beer on the wall, 4 bottles of beer.\n' +
            'Take one down and pass it around, 3 bottles of beer on the wall.\n' +
            '3 bottles of beer on the wall, 3 bottles of beer.\n' +
            'Take one down and pass it around, 2 bottles of beer on the wall.\n' +
            '2 bottles of beer on the wall, 2 bottles of beer.\n' +
            'Take one down and pass it around, 1 bottle of beer on the wall.\n' +
            '1 bottle of beer on the wall, 1 bottle of beer.\n' +
            'Take one down and pass it around, no more bottles of beer on the wall.\n'+
            'No more bottles of beer on the wall, no more bottles of beer.\n' +
            'Go to the store and buy some more, 99 bottles of beer on the wall.\n';

        expect(expect_string).to.equal(result);
    });

});