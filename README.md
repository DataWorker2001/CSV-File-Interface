# CSV-File-Interface

## Welcome All to CSV File Manager Interface (API)

![image](https://github.com/DataWorker2001/CSV-File-Interface/assets/123379937/b7d8d42c-fecd-448d-9134-bdc1e7a40579)

This project is a CSV file manager that allows you to upload CSV files, view the uploaded files, and display their data in a table on the front end. It also includes search functionality to filter the table rows based on user input.

Setup
To set up the project on your local system, follow the steps below:

Clone the repository or download the project files.

Make sure you have Node.js installed on your system.

Open a terminal and navigate to the project directory.

Install the dependencies by running the following command:

$shell</br>
npm install</br>
Start the server by running the following command:

$shell</br>
node server.js</br>
Open your web browser and visit http://localhost:3000 to access the application.

Folder Structure:- </br>
The project follows a scalable folder structure to separate the models, controllers, and routes. Here's an overview of the folder structure:

models: Contains the logic for parsing and manipulating CSV in index.ejs.
routes: Defines the API routes for CSV-related operations using server.js.
views: Stores the HTML templates for rendering the front-end interface. These consists of:- 
 a) index.ejs: Displays the list of uploaded CSV files and allows file selection.
 b) csv.ejs: Shows the data of the selected CSV file in a table and provides search functionality.
server.js is the controller and controls the routing and csv file manager website content rendering.
 
Usage:- </br>

1) Upload a CSV file:</br>
Click on the "Upload CSV" button on the homepage.
Select a CSV file from your local system and click "Upload".
The file will be uploaded and saved on the server.</br>

2) View uploaded CSV files:</br>
On the homepage, you will see a list of all uploaded CSV files.
Click on a file name to view its data in a table.</br>

3) Search functionality:</br>
On the CSV file view page, there is a search box.
Enter a search query in the box to filter the table rows based on the specified column.
The table will dynamically update to display only the matching rows.
Leaving the search box empty and clicking on search Button will display all the data.</br>

Extra Features:- </br>
The project includes additional features for enhanced functionality:

1) File Validation:</br>
Both on the front end and server side, there are validations to ensure that only CSV files can be uploaded.
The application checks the file extension and content type to prevent uploading invalid files.

2) Pagination (Super Extra Points):</br>
The table data is paginated, with a maximum of 100 records per page.
Pagination controls are displayed at the bottom of the table, allowing the user to navigate between different pages.</br>

3) Chart Integration (Super Duper Extra Points):</br>
The project integrates a charting library (e.g., Google Charts, D3.js).
You can select a column from the CSV data and visualize it using the charting library.
Please note that the sorting feature is not covered in this README, but it can be implemented by adding buttons or icons for each column header and implementing JavaScript code to handle the sorting functionality.</br>

Feel Free to contribute to this Repository and make any modifications by creating a new Fork Request. Any contributions or modifications are openly welcomed. Happy Coding!
