import readline from "readline";
import { TaskManager, Status, Priority } from "./taskManager";

// Initialize TaskManager
const manager = new TaskManager("./task.json");

// Create readline interface
const scanner = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to ask input
function ask(question: string): Promise<string> {
  return new Promise(resolve => scanner.question(question, resolve));
}

// Main menu
async function main(): Promise<void> {
  while (true) {
    console.log("\n=== TASK MANAGER ===");
    console.log("1. Add Task");
    console.log("2. View All Tasks");
    console.log("3. Get Task By ID");
    console.log("4. Exit");

    const choice = await ask("Choose option: ");

    switch (choice) {
      case "1":
        await addTask();
        break;

      case "2":
        console.log(manager.getTasks());
        break;

      case "3":
        const id = Number(await ask("Enter task ID: "));
        console.log(manager.getTaskById(id));
        break;

      case "4":
        console.log("Exiting...");
        scanner.close();
        return;

      default:
        console.log("Invalid option");
    }
  }
}

// Add task flow
async function addTask(): Promise<void> {
  const title = await ask("Title: ");
  const description = await ask("Description: ");
  const statusInput = await ask("Status (PEN/COM): ");
  const priorityInput = await ask("Priority (L/M/H): ");
  const dueDateInput = await ask("Due Date (YYYY-MM-DD): ");
  const by = await ask("Created By: ");
  const to = await ask("Assigned To: ");

  const result = manager.addTask(
    title,
    description,
    statusInput === "COM" ? Status.COM : Status.PEN,
    priorityInput === "H"
      ? Priority.H
      : priorityInput === "M"
      ? Priority.M
      : Priority.L,
    new Date(dueDateInput),
    by,
    to
  );

  console.log(result);
}

// Start program
main();
