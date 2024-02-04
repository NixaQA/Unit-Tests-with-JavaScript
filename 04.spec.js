import {createCalculator} from './04.js'
import {expect} from 'chai'

describe ("calculator", () => {
    
    it ("should return an object with properties add, subtract, and get functions", () => {
        const calculator = createCalculator();
        expect(calculator).to.be.an('object');
    expect(calculator).to.have.property('add').to.be.a('function');
    expect(calculator).to.have.property('subtract').to.be.a('function');
    expect(calculator).to.have.property('get').to.be.a('function');
    })

    it ("should return 0 if input is empty", () => {
        const calc = createCalculator()
        const result = calc.get()
        expect(result).to.equals(0)
    })

    it ("should return negative if positive numbers are substracted", () => {
        const calc = createCalculator()
        calc.subtract (4)
        calc.subtract (45)

        const result = calc.get()
        expect(result).to.equals(-49)
    })

    it ("should return positive sum if positive numbers are added", () => {
        const calc = createCalculator()
        calc.add(5)
        calc.add(5)

        const result = calc.get()
        expect(result).to.equals(10)
    })

    it ("should parse nums if they are given as string", () => {
        const calc = createCalculator()
        calc.add ('5')
        calc.add ('5')
        calc.subtract ('5')

        const result = calc.get()
        expect(result).to.equals(5)
    })

    it ("should return correct if more than one operiation is executed", () => {
        const calc = createCalculator()
        calc.add (15)
        calc.add (5)
        calc.add (-1)
        calc.subtract (-2)
        calc.subtract (10)

        const result = calc.get()
        expect(result).to.equals(11)
    })
})