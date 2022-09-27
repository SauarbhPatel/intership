// Step 1: Fill in these three consts by selecting the right nodes by their HTML ID's
const name = document.getElementById("name"); // Fill this in
const age = document.getElementById("age"); // Fill this in.
const dogYears = document.getElementById("dogyears"); // Fill this in.

// Step 2. Set the values.
// Example: myNode.innerText = "something"
// Set `name` and `age` in here
name.innerText = "Saurabh";
age.innerText = 22;

function showDogYears(age) {
  // Step 3. Cast `age` as a number
  var age = Number(age.innerText);
  dogYears.innerText = age * 7;
  return age * 7;
}

// Step 4. Set the parameter of showDogyears()
dogYears.innerText = showDogYears(age);

// Step 5. Select all the .fake-input classes and give them the class of .real-input. This may take a little "googling" to find the solution, but that's half of what web development is all about.
const fakeInputs = document.querySelectorAll(".fake-input");
fakeInputs.forEach((node) => {
  node.classList.add("real-input");
  node.classList.remove("fake-input");
});





// fun: This code for fun
/*
const btn = document.getElementById("btn");
console.log(btn);
var cli = 0;
const stuck = () => {
  console.log("hahaaha you was stuck here");
  let time = 10;
  const timeLoog =setInterval(() => {
    time = time - 1;
    btn.innerText = time + "sec";
    // ? when count equals to 0, stop the function
    if (time === 0) {
      btn.innerText = "Button";
      clearInterval(timeLoog);

    }
  }, 1000);
};

btn.addEventListener("click", () => {
  cli = cli + 1;
  if (cli < 4) {
    console.log("hello saurabh");
  } else {
    cli = 0
    return stuck();
  }
});
*/
