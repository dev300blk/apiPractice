let endPoint = 'http://jsonplaceholder.typicode.com/users';

const getData = (endPoint)=>{
const request = new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{
if (request.readyState === 4 && request.status === 200){
    console.log(request.responseText);
} else if(request.readyState === 4){
    console.log('error, could not retieve data');
}
});


request.open('GET', endPoint)
request.send();
}


getData(endPoint);

