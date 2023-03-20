let myPromise = new Promise((resolve,reject)=>{
    console.log("Wait for your data");
    setTimeout(()=>{
        try{
        let data = filtering(users);
        resolve(data);
    }catch(err){
        reject(err)
    }
    },2000)
})
myPromise.then((message)=>{
    console.log(`Your data is:${message}`);
},(err)=>console.log("Zebiiiii"))
let users = {
    username: "Salaheddine",
    username: "Pause"
}
const filtering = (data)=>{
    for(var i=0;i<2;i++){
        if(data[i].username=== 'Salaheddine'){
            return true;
        }
    }
}