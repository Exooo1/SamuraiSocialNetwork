export {}
//
//
// const user = {
//     name: 'vlas',
//     surname: 'maskal',
//     arr: []
// }
// const addArray = (mass: any) => {
//     mass.arr.push(2, 3, 4, 5, 6)
// }
//
// const upperCaseName = (us: any) => {
//     us.name = us.name[0].toUpperCase() + us.name.slice(1)
// }
//
//
// test('check object', () => {
//     expect(user.arr.length).toBe(0)
//     addArray(user)
//     expect(user.arr.length).toBe(5)
//     upperCaseName(user)
//     expect(user.name).toBe('Vlas')
// })

const user = {
    name: 'vlas',
    age: 22
}

const changeName = () => {
    user.name = user.name[0].toUpperCase() + user.name.slice(1)
}

const a = ['serafim', 'vlas', 'sergey']


test('simple test', () => {
    changeName()
    expect(user.name).toBe('Vlas')

})