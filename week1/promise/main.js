// import { SyncPromise as Promise } from './sync-promise.js';
import { AsyncPromise as Promise } from './async-promise.js';

console.log('<<< starting >>>');

Promise.resolve()
  .then(() => {
    console.log('  then 1');
  })
  .then(() => {
    console.log('  then 2');
  })
  .catch(() => {
    console.log('  catch 3');
  })
  .catch(() => {
    console.log('  catch 4');
  })
  .then(() => {
    console.log('  then 5');
  });

console.log('<<< ending >>>');
