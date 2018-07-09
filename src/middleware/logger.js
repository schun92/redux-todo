export default store => next => action => {
    // code ES6

    console.log('ACTION:', action)

    next(action);
}


// export default function (store){
//     return function(next){
//         return function(action){
//             // code ES5
//         }
//     }
// }