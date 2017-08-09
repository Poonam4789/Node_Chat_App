var expect = require('expect');
var { generateMessage,generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = "poonam";
        var text = "Hello User";

        var message = generateMessage(from, text);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from, text });
    });
});

describe('CreateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = "poonam";
        var latitude = "19.125303799999998";
        var longitude = "73.013531";
        var url = `https://www.google.com/maps?q=${latitude},${longitude}`;

        var message = generateLocationMessage(from,latitude,longitude);
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({ from,url });
    });
});