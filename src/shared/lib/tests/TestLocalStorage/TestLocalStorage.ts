// const localStorageMock = (function () {
//     const store = {} as Storage;
//
//     return {
//         getItem(key: string) {
//             console.log(123);
//             return JSON.parse(store[key]);
//         },
//
//         setItem(key: string, value: any) {
//             store[key] = value;
//         },
//
//         clear() {
//             Object.keys(store).forEach((key) => {
//                 delete store[key];
//             });
//         },
//
//         removeItem(key: string) {
//             delete store[key];
//         },
//
//         getAll() {
//             return store;
//         },
//     };
// }());
//
// Object.defineProperty(window, 'localStorage', { value: localStorageMock });
