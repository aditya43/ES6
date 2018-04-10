////////////////////////////////////////////////////////////////
// Exporting multiple items.. class, variable, functions etc. //
////////////////////////////////////////////////////////////////

export class TaskCollection
{
    constructor(tasks = [])
    {
        this.tasks = tasks;
    }

    dump()
    {
        console.log(this.tasks);
    }
}

export let adi = 'Test Variable';