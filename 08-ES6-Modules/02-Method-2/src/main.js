import test from './TaskCollection';

console.log(test.adi);

new test.TaskCollection([
    'Go to the store',
    'Watch a movie',
    'Cook dinner'
]).dump();