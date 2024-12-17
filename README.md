🌍 Travel List App
A simple and interactive Travel List App built using React. Add, delete, and manage your packing list efficiently to ensure you never forget essentials on your trips! 🚀

📋 Features
Add Items: Add any item to your packing list with ease.
Mark as Packed: Toggle an item as "packed" or "unpacked" using checkboxes.
Delete Items: Remove individual items from your list.
Clear List: Delete the entire list after confirmation.
Interactive UI: React-based components for a clean and modular design.
🚀 How to Run

Clone the Repository:
git clone https://github.com/YourUsername/Travel-List.git
cd Travel-List

Install Dependencies: Ensure you have Node.js and npm installed, then run:
npm install

Run the App: Start the development server:
npm start
The app will open at http://localhost:3000.

🛠 Code Explanation
The app consists of modular components:

App.js: Main component that manages state and handles all functions:
handleAddItems: Adds a new item to the list.
handleDeleteItems: Deletes a specific item using its ID.
handleCheckedItems: Toggles the "packed" status of an item.
handleClearList: Clears the entire list with a confirmation prompt.

Components:
Logo.js: Displays the app logo.
Form.js: Handles adding items through user input.
PackingList.js: Lists items and manages actions like delete and toggle.
Stats.js: Displays statistics like the total number of items and packed items.
CSS: Styling is handled in index.css.
