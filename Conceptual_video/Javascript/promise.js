let completePromise = new Promise (function(resolve, reject){
  let isSent = false;

  if (isSent){
    resolve("Sent")
  }else{
    reject("Err caused")
  }

})

completePromise.then(function(fromResolve){
  console.log("Success: " + fromResolve)
}).catch(function(fromReject){
  console.log("Err: " + fromReject)
})