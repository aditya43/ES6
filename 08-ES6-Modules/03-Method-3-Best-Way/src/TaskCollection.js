/**
 * Best Practices :
 *
 * 1. Try to export single thing from each file (for cleaner code).
 * 2. Write 'export default' at the end of the file (for cleaner code).
 */

class TaskCollection
{
    constructor(tasks = [])
    {
        this.tasks = tasks;
    };

    dump()
    {
        console.log(this.tasks);
    };
};

export default TaskCollection;