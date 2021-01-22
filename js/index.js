var jobName = document.getElementById("jobName");
var submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  var position = jobName.value;
  var li = document.createElement("li");
  var jobContainer = document.getElementById("job-container");
  li.innerHTML = position;
  jobContainer.appendChild(li);
});
