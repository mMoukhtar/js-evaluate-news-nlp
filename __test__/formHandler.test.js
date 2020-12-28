import { handleSubmit } from '../src/client/js/formHandler';

// The describe() function takes two arguments - a string description, and a test suite as a callback function.
// A test suite may contain one or more related tests
describe('Testing the formHandler', () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.
    test('Testing the handleSubmit() function', () => {
        expect(handleSubmit).toBeDefined();
    });
});
