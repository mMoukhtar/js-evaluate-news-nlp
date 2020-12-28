import { MeaningCloud, MeaningCloudApiLangEnum } from '../src/server/meaningcloudApi';

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe('Testing the Meaning Cloud API functionality', () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test('Testing the analyze() function', () => {
        // Arrange
        var text = 'Java Script is awesome!';
        var outputStatusCode = '0';
        var outputStatusMsg = 'OK';
        var outputModel = 'general_en';

        //ACT
        const api = new MeaningCloud(text, MeaningCloudApiLangEnum.English);
        return api.analyze().then((data) => {
            //ASSERT
            // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
            //toBe() uses Object.is to test exact equality. If you want to check the value of an object, use toEqual() instead
            expect(data.status.code).toEqual(outputStatusCode);
            expect(data.status.msg).toEqual(outputStatusMsg);
            expect(data.model).toEqual(outputModel);
            expect(data.sentence_list.length).not.toEqual(0);
        });
    });
});
