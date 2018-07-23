const expect = require('expect');
const utils = require('./utils');

describe('Utils', ()=>{

    describe('Async', ()=>{
        it('should async square a number', (done)=>{
            utils.asyncSquare(5, (res)=>{
                expect(res).toBe(25).toBeA('number');
                done();
            });
        
        });
        
        it('should async add two numbers', (done)=> {
            utils.asyncAdd(4, 3, (sum)=>{
                expect(sum).toBe(7).toBeA("number");
                done();
            });
        });
    });

    describe('Sync', ()=>{
        it('should add two numbers', ()=>{
            var res = utils.add(33,11);
        
            expect(res).toBe(44).toBeA('number');
            // if(res !== 44){
            //     throw new Error(`Expected 44 but got ${res}`)
            // }
        });
        
        it('should square a number', ()=>{
            var res = utils.square(5)
            expect(res).toBe(25).toBeA('number');
        });
        
        
        
        it('should verfiy first name and last name are set', ()=>{
            var res = utils.setName({}, "Bharat Jain");
            // expect(res.firstName).toNotEqual("").toEqual("Bharat");
            // expect(res.lastName).toNotEqual("").toEqual("Jain");
        
            expect(res).toInclude({
                firstName: "Bharat",
                lastName: "Jain"
            });
        });
    });
});



// it('should expect some values', ()=>{
//     expect(12).toNotBe(11);
//     expect({name: 'Bharat'}).toEqual({name: 'Bharat'});
//     expect([2,3,4]).toExclude(5);
//     expect({
//         name: 'Bharat',
//         age: 22,
//         location: 'India'
//     }).toInclude({
//         age: 22
//     })
// });