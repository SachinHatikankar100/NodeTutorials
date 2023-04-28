const os = require("os"); // Here we will not have ./ because we are importing a built in module

//info about current user

const user = os.userInfo();
console.log(user);

//System uptime in seconds
const systemuptime = os.uptime();
console.log(`System uptime: ${systemuptime} seconds`);

// OS details
const currentOS = {
  name: os.type(),
  freeMem: os.freemem(),
  totalMem: os.totalmem(),
  release: os.release(),
};

console.log(currentOS);
