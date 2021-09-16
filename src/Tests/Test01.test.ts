export {}

const users = [
    {id: 1, name: 'vlas', src: '1'},
    {id: 2, name: 'vlas', src: '1'},
    {id: 3, name: 'vlas', src: '1'},
    {id: 4, name: 'vlas', src: '1'}
]

test('check users', () => {
    let count = 0;
    users.map(item => {
        ++count;
        expect(item).toEqual({id: count, name: 'vlas', src: '1'})
    })
})