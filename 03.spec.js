import {rgbToHexColor} from './03.js'
import { expect } from 'chai'

describe ("rgb", () => {
    it ("should return valid hex format when inout nums are within range", () => {
        const red = 5;
        const green = 1;
        const blue = 15;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.equals('#05010F')
    })

    it ("should return undefined when red is > 0", () => {
        const red = -5;
        const green = 1;
        const blue = 15;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.be.undefined
    })
    it ("should return undefined when green is > 0", () => {
        const red = 5;
        const green = -1;
        const blue = 15;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.be.undefined
    })
    it ("should return undefined when blue is > 0", () => {
        const red = 5;
        const green = 1;
        const blue = -15;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.be.undefined
    })

    it ("should return undefined when red is = 0", () => {
        const red = 0;
        const green = 1;
        const blue = 15;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.equals('#050100')
    })
    it ("should return undefined when green is = 0", () => {
        const red = 5;
        const green = 0;
        const blue = 15;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.equals('#05000F')
    })
    it ("should return undefined when blue is = 0", () => {
        const red = 5;
        const green = 1;
        const blue = 0;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.equals('##050100')
    })
   
    it ("should return undefined when input red is invalid type", () => {
        const red = '5';
        const green = 1;
        const blue = 15;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.be.undefined
    })
    it ("should return undefined when input green is invalid type", () => {
        const red = 5;
        const green = '1';
        const blue = 15;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.be.undefined
    })
    it ("should return undefined when input blue is invalid type", () => {
        const red = 5;
        const green = 1;
        const blue = '15';

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.be.undefined
    })

    it ("should return undefined when input red is out of range", () => {
        const red = 500;
        const green = 1;
        const blue = 15;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.be.undefined
    })
    it ("should return undefined when input green is out of range", () => {
        const red = 5;
        const green = 1000;
        const blue = 15;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.be.undefined
    })
    it ("should return undefined when input blue is out of range", () => {
        const red = 5;
        const green = 1;
        const blue = 1500;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.be.undefined
    })


    it ("should return undefined when input red equals 255", () => {
        const red = 255;
        const green = 1;
        const blue = 15;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.equals('#FF010F')
    })
    it ("should return undefined when input green equals 255", () => {
        const red = 5;
        const green = 255;
        const blue = 15;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.equals('#05FF0F')
    })
    it ("should return undefined when input blue equals 255", () => {
        const red = 5;
        const green = 1;
        const blue = 255;

        const result = rgbToHexColor(red, green,blue);

        expect(result).to.equals('#0501FF')
    })

})