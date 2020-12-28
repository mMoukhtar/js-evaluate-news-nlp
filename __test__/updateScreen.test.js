import { updateScreen, clearResult, addResult, showHideFormResults } from '../src/client/js/updateScreen';

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe('Testing the functions', () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test('Testing the handleSubmit() function', () => {
        expect(updateScreen).toBeDefined();
        expect(clearResult).toBeDefined();
        expect(addResult).toBeDefined();
        expect(showHideFormResults).toBeDefined();
    });
});
