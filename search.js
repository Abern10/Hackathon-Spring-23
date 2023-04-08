var search = document.getElementById('search');
var results = document.getElementById('results');

search.addEventListener('keyup', function() {
  var query = search.value.toLowerCase();

  // Clear previous results
  results.innerHTML = '';

  // Loop through all courses
  for (var i = 0; i < courses.length; i++) {
    var course = courses[i];

    // Check if course number matches query
    if (course.number.indexOf(query) !== -1) {
      // Create a new list item to display the course information
      var li = document.createElement('li');
      li.innerHTML = course.number + ': ' + course['course title'];
      results.appendChild(li);
    }
  }
  window.location.href = 'search-results.html?query=' + query;
});