console.log(`The uptime in seconds is ${os.uptime()}`);

// info about current OS

const currentOS = {
  name: os.type(),
  release: os.release(),
  freeMemory: os.freemem(),
  totalMemory: os.totalmem(),
}

console.log(currentOS);