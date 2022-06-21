const characters = require('../config').ALPHABET_UPPER_LOWER;
const gender = require('../config').GENDER;

const randomName = (numberOfName = 2) => [...Array(numberOfName).keys()].reduce((prev) => prev + toTitle(getRandomText(5, 6)) + ' ', '')

const randomEamil = () => getRandomText(4, 7) + '@' + getRandomText(4, 5) + '.' + getRandomText(3, 3);

const getRandomGender = () => gender[getRandomNumberInRange(0, gender.length)];

const getRandomNumberInRange = (min = 1, max = 10) => Math.floor((Math.random() * max) + min);

const getRandomAlphaNumeric = () => Math.random().toString(36).slice(2);

const getRandomText = (min = 3, max = 10) => [...Array(getRandomNumberInRange(min, max))].reduce((prev) => prev + characters.charAt(Math.floor(Math.random() * characters.length)), '').toLowerCase();

const toTitle = text => text[0].toUpperCase() + text.slice(1);

const isValidJSON = (jsonString) => {
    try { JSON.parse(jsonString) }
    catch (e) { return false; }
    return true;
}

module.exports = { randomName, randomEamil, getRandomGender, getRandomNumberInRange, getRandomAlphaNumeric, getRandomText, toTitle, isValidJSON };
