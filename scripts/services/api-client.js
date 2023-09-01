/*
    Network Talk 
    HTTP/HTTPS
    Async Call, Promise
    a) then b) catch

*/
// makeNEtworkCall("https://raw.githubusercontent.com/brainmentorspvtltd/DIT_FullStack/main/pizza.json");

async function makeNEtworkCall(URL){
    try{
    const response = await fetch(URL);
    const data = await response.json();
    console.log('Data is ',data);
    return data;
    }
    catch(err){
        console.log('Error is ',err);
        throw err;
    }
    // const promise = fetch(URL);   //ES6 (2015)
    // promise.then(()=>{
    //     // Header + Body
    //     const promise2 = response.json();
    //     promise2.then(data => {

    //     }).catch(err=>{});
    // }).catch((err)=>{});
}

export default makeNEtworkCall;

// export default to return as it is only one
// export give them a bag to return all 


