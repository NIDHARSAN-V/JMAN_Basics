import * as fs from "fs"
import * as path from "path"

enum Status {
    PEN = "Pending",
    COM = "Completed"
}

enum Priority {
    L = "Low",
    M = "Medium",
    H = "High",
}


interface Task {
    id: number,
    title: string,
    description: string,
    status: Status,
    priority: Priority,
    dueDate: Date,
    by: string,
    to: string
};



class TaskManager {
    private tasks: Task[] = [];
    private filepath: string;


    constructor(filepath: string) {
        this.filepath = path.join(__dirname, filepath);
        this.loadTasks();

    }



    private loadTasks(): void {

        if (fs.existsSync(this.filepath)) {
            const data = fs.readFileSync(this.filepath, "utf-8");

            this.tasks = JSON.parse(data);

        }


    }




    private saveTasks(): void {

        fs.writeFileSync(this.filepath, JSON.stringify(this.tasks, null), "utf-8");

    }




    //add method

    public addTask(title: string,
        description: string,
        status: Status,
        priority: Priority,
        dueDate: Date,
        by: string,
        to: string): unknown {

        const x = this.tasks.length;

        const newTask: Task = {
            id: x > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1,
            title: title,
            description: description,
            status: status,
            priority: priority,
            dueDate: dueDate,
            by: by,
            to: to
        }

        this.tasks.push(newTask);
        this.saveTasks();
        return { ...newTask, message: "Task added successfully!" };
    }





    // get methods

    public getTasks(): Task[] {
        return this.tasks;
    }


    public getTaskById(id: number): Task | null {
        const task = this.tasks.find(t => t.id == id);
        return task ? task : null;
    }


    public getTasksByStatus(status: Status): Task[] {
        return this.tasks.filter(t => t.status == status);
    }


    public getTasksByPriority(priority: Priority): Task[] {
        return this.tasks.filter(t => t.priority == priority);
    }

    public getTasksByDueDate(dueDate: Date): Task[] {
        return this.tasks.filter(t => t.dueDate.toString() == dueDate.toString());
    }


    //update method

    public updateTask(id: number, updates: Partial<Task>): { task: Task, message: string } | null {
        const taskIndex = this.tasks.findIndex(t => t.id == id);
        if (taskIndex == -1) return null;

        const updatedTask = { ...this.tasks[taskIndex], ...updates };
        this.tasks[taskIndex] = updatedTask;
        this.saveTasks();
        return { task: updatedTask, message: "Task updated successfully!" };
    }



    public deleteTask(id: number): boolean {
        {
            const taskIndex = this.tasks.findIndex(t => t.id == id);

            if (taskIndex != -1) {
                return false;
            }

            this.tasks.splice(taskIndex, 1);
            this.saveTasks();

            return true;

        }


    }

}


export { TaskManager, Status, Priority, Task };