import {filterEmptyStrings, isEmpty} from "./utils";

test('filtered array should contain two element', () => {
    const array = ['first', '', 'second'];
    expect(filterEmptyStrings(array).length).toBe(2);
});

test('the object is empty', () => {
    const obj = {};
    expect(isEmpty(obj)).toBeTruthy();
});

test('the object is not empty', () => {
    const obj = {id: 2};
    expect(isEmpty(obj)).toBeFalsy();
});