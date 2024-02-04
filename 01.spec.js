import {sum} from './01.js'
import {expect} from 'chai'

describe ("sum", () => {
    it("should return 0 if an empty array is given", () => {
       const input = [];
       const result = sum(input);
       expect(result).to.equals(0);
    })

    it("should return single elememt as a sum if input is single element", () => {
        const input = [3];
        const result = sum(input);
        expect(result).to.equals(3);
     })

     it("should return sum when the input consists of mutiple elements", () => {
        const input = [10, 10, 5];
        const result = sum(input);
        expect(result).to.equals(25);
     })
})