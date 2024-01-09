document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form");

  form.addEventListener(("submit"), function (e) {
      e.preventDefault();
  
      let task = document.querySelector('input[name="new-task-description"]').value;
      let dataToPost = {
          name:task
      }
      // changes the elements in the DOM by adding a new character 
     let task2 = document.getElementById("tasks");
     task2.innerHTML = task;
  
  })
  

})

