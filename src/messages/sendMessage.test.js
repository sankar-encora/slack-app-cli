const sendMessages = require('./sendMessage')

describe("Send message function need to pass here", () => {
    it('Should return true if message was sent', () => {
        const sent = sendMessages.handlerSendMessage('test message');
        const expectedResult = true;
        expect(sent).toEqual(expectedResult);
    })
})