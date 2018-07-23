const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App' ,() => {

    

    it('should have been called correctly', ()=>{
        var spy = expect.createSpy();
        spy('bharat', 22);
        expect(spy).toHaveBeenCalledWith('bharat', 22);
    });
});