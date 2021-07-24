// promise then/catch
let isPromiseSuccess = false;
const janjian = new Promise((resolve, reject) => {
  let success = true;
  //   console.log("Pending", new Date().getTime());
  //   for (let i = 0; i < 20000; i++) {}
  setTimeout(() => {
    if (!success) return reject(new Error("Gagal"));
    return resolve("Berhasil");
  }, 3000);
});

function delay(actionString, num) {
  setTimeout(() => {
    console.log(actionString, new Date().getTime());
  }, num);
}

delay("aksi a", 2000);
janjian // asynchronous
  .then((res) => {
    isPromiseSuccess = true;
  })
  .catch((err) => console.log(err, new Date().getTime()));
delay("aksi c", 1000);

// async/await try/catch
async function doJanjian() {
  try {
    let result = await janjian; // menunggu hasil dari promise janjian
    if (result) {
      isPromiseSuccess = true;
    }
    console.log("Janjian berhasil", result);
  } catch (error) {
    isPromiseSuccess = false;
    console.log("Janjian gagal", error);
  } finally {
    if (isPromiseSuccess) {
      console.log("Hore");
    } else {
      console.log("Duh");
    }
    console.log("Janjian selesai");
  }
}

doJanjian();

// const getMonth = (callback) => {
//   setTimeout(() => {
//     let error = false;
//     let month = [
//       "January", "February", "March", "April", "May", "June", "July",
//       "August", "September", "October", "November", "December"];
//     if (!error) {
//       callback(null, month);
//     } else {
//       callback(new Error("Sorry Data Not Found"), []);
//     }
//   }, 4000);
// };
