import { TaskCollection, adi } from './TaskCollection';

console.log(adi);

new TaskCollection([
    'Go to the store',
    'Watch a movie',
    'Cook dinner'
]).dump();