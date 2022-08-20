const getWeather = function(){
    return new Promise((resolve,reject)=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1');
    resolve('Success');
    reject('error');
})
}


getWeather.then((resolve)=>{
    console.log('success');
}).catch((reject)=>{
    console.log('error');
});