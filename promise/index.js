// use promise
function promise(flag) {
  return new Promise((resolve, reject) => {
    if(flag){
      resolve('resolved');
    }else{
      reject('rejected');
    }
  });
}

// use async function
async function async(flag) {
  if(flag){
    return 'resolved';
  }else{
    throw new Error('rejected');
  }
}

(async () => {
  await promise(false)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

  await async(false)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
})();
