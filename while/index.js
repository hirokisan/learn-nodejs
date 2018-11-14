(async () => {
  let flag = true;
  let count=0;

  try {
    while(flag) {
      try {
        console.log(count);

        if(count == 10) {
          flag = false;
        }

        await sample()
          .then((result) => {
            console.log(result);
          });

        count++;

      } catch (err) {
        throw err;
      }
    }
  } catch (err) {
    console.log(err);
  }
})();

async function sample() {
  let result = false;
  let randnum = Math.floor( Math.random() * 100 );

  if(randnum > 20) {
    return result;
  } else {
    throw new Error(400);
  }
}
