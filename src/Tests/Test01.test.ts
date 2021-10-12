export {}
import axios from 'axios'

//
// test('the data is peanut butter', () => {
//     return axios.get(`https://jsonplaceholder.typicode.com/users`).then(data => {
//         expect(data.data[0].email).toMatch("ozi");
//     });
// });

// test('the data is peanut butter', async () => {
//     const data = await axios.get(`https://jsonplaceholder.typicode.com/users`);
//     expect(data.data[0].id).toBe(1);
// });

test('the fetch fails with an error', () => {
    expect.assertions(2);
    return axios.get(`https://jsonplaceholder.typicode.com/users`).catch(e => expect(e).toMatch('201 Created'));
});