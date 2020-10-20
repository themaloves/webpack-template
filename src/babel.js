async function start() {
  return await Promise.resolve('async is working');
}

start().then(console.log)

const unesed = 42;

class Util {
  static id = Date.now()
}

console.log('Util ID:', Util.id)