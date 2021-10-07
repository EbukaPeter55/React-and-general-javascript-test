const googleSearch = require('./script');

dbMock = [
    'dog.com',
    'cheesepuff.com',
    'dogpictures.com'
];

it('Is a silly test', ()=>{
    expect('hello').toBe('hello')
    
})

it('is searching google', () => {
    expect(googleSearch('test', dbMock)).toEqual([])
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictures.com'])
})