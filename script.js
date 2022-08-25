const getData = (rescource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText)
                resolve(data);
            } else if (request.readyState === 4) {
                reject('some error')
            }
        });

        request.open('GET', rescource);
        request.send();
    });
}


getData('test0.json').then((data) => {
    console.log('promise 1 resolved', data);
    return getData('test1.json');
}).then(data =>{
    console.log('promise 2 resolved', data);
    return getData('test2.json');
}).then(data=>{
    console.log('promise 3 resolved', data);
    return getData('test3.json');
}).catch(err => {console.log(err)})
