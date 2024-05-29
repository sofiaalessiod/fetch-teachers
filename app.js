"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

window.addEventListener("load", initApp); // When the page is loaded, run initApp function

// Function to initialize the Web App
async function initApp() {
  console.log("initApp: app.js is running 🎉"); // Log to the console that the app is running
  const teachers = await getTeachers();
  console.log(teachers);
  displayTeachers(teachers);
}

async function getTeachers() {
  const response = await fetch(
    "https://headless.sofiaalessiod.dk/wp-json/wp/v2/teacher?acf_format=standard"
  ); //Fetch data from the API
  const data = await response.json();
  return data;
}

getTeachers(); //need this - calls the function so it shows up on the browser

function displayTeachersGrid(teachers) {
  const teachersList = document.querySelector("#teachers-grid");

  for (const teacher of teachers) {
    teachersGrid.insertAdjacentHTML(
      "beforeend",
      `
        <article class="grid-item">
        <img scr="$teacher.acf.image}" alt="${teacher.acf.name}" />
        <h2>${teacher.acf.name}</h2>
        <p>${teacher.acf.title}</p>
        <a href="mailto:${teacher.acf.mail}">${teacher.acf.mail}</a>
        </article>
      `
    );
  }
}
