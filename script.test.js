const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'dogpictures.com'
];

it('Is a silly test', ()=>{
    expect('hello').toBe('hello')
    
})

// Testing the search google function
it('is searching google', () => {
    expect(googleSearch('test', dbMock)).toEqual([]);
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com']);
})

// Test that the function logic works with undefined and null inputs
it('work with undefined and null input', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
})

// Testing that our search does not return more than 3 matches
it('It does not return more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
    // expect(googleSearch(null, dbMock)).toEqual([])
})