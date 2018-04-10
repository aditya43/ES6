// export default class TaskCollection // We can also export like this
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

let adi = 'Test Variable';

////////////////////////////////////////////////////////////////
// Exporting multiple items.. class, variable, functions etc. //
////////////////////////////////////////////////////////////////
export default
{
    TaskCollection: TaskCollection,
    adi: adi
};