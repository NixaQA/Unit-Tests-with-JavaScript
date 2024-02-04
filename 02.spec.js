import {isSymmetric} from './02.js'
import {expect} from 'chai'

describe ("", () => {
    it ("should return false for non-array input", () => {
       const input = "chai with chocolate"
       const result = isSymmetric(input)
       expect(result).to.be.false
    })
    
    it ("should return true when array input is empty", () => {
        const input = []
        const result = isSymmetric(input)
        expect(result).to.be.true
     })

     it ("should return true when array input has one element", () => {
        const input = [5]
        const result = isSymmetric(input)
        expect(result).to.be.true
     })

     it ("should return false when array input has two non-symmetric elements", () => {
        const input = [5, 8]
        const result = isSymmetric(input)
        expect(result).to.be.false
     })

     it ("should return true when array input has symmetric elements", () => {
        const input = [5, 8, 8, 5]
        const result = isSymmetric(input)
        expect(result).to.be.true
     })

     it ("should return false  when array input has symmetric elements  ut one is not a numm", () => {
        const input = [5, 8, "8", 5]
        const result = isSymmetric(input)
        expect(result).to.be.false
     })
     
     it ("should return false  when array input is null", () => {
        const input = null
        const result = isSymmetric(input)
        expect(result).to.be.false
     })
    

})