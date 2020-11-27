let task = "";

document.querySelector('#todoList').addEventListener("submit", function (event) {
  //console.log("test");
  event.preventDefault();

  task = document.querySelector("#task").value;
  console.log(task);


})