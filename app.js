"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const teachers = await getTeachers();
  console.log (teachers);
  displayTeachers(teachers);
}

async function getTeachers() {
  const response = await fetch("https://raw.githubusercontent.com/cederdorff/race/master/data/users.json"); //Fetch data from the API
  const data = await response.json();
  return data;
}

getTeachers(); //need this - calls the function so it shows up on the browser

function displayTeachers(teachers) {
  console.log(teachers);

  const teachersList = document.querySelector("#teachers-list");
  
  for (const teacher of teachers) {
    teachersList.insertAdjacentHTML("beforeend", `<li>${teacher.name}</li>`);
  }
}