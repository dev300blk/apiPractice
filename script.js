

// const getData = (callBack)=>{
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange',()=>{
//     if (request.readyState === 4 && request.status === 200){
//        callBack(undefined, request.responseText);
//     } else if(request.readyState === 4){
//         callBack('could not fetch data', undefined);
//     }
//     });
    
    
//     request.open('GET','test.json');
//     request.send();
//     }
    
    
//     getData((err,data)=>{
//         if(err){
//             console.log(err);
//         } else if(data){
//             console.log(data);
//             const obj = JSON.parse(data);
//             console.log(obj);
//         }
//     });

const getData = (rescource)=>{
    return new Promise((resolve,reject)=>{
        const request = new XMLHttpRequest();
            request.addEventListener('readystatechange',()=>{
            if (request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText)
               resolve(data);
            } else if(request.readyState === 4){
                reject('error');
            }
            });
            
            
            request.open('GET',rescource);
            request.send();
        //     }
    }
)};

getData('test.json').then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})