
/// need to getting ratings to show
/// new buttons don't work (VAR MOVIE vs. MOVIENAME)

var topics = [
  "iron man",
  "the incredible hulk",
  "thor",
  "captain america",
  "avengers",
  "ant-man",
  "doctor strange",
  "spider-man",
  "black panther",
  "guardians of the galaxy"
];
$( document ).ready(function() {
// This function handles events where one button is clicked
function renderButtons() {
  $("#buttons-view").empty();

  for (var i = 0; i < topics.length; i++) {
    var a = $("<button>");

    // Adding a class
    a.addClass("movie");
    // Adding a data-attribute with a value of the topics at index i
    a.attr("data-name", topics[i]);
    // Providing the button's text with a value of the topics at index i
    a.text(topics[i]);
    // Adding the button to the HTML
    $("#buttons-view").append(a);
  }
}

// Calling the renderButtons function at least once to display the initial list of movies
renderButtons();

// listening event for movie search button
$("#find-movie").on("click", function(event) {
  event.preventDefault();

  // This line will grab the text from the input box
  var movie = $("#movie-input").val().trim();

  // The movie from the textbox is then added to our array
  topics.push(movie);

  // calling renderButtons which handles the processing of our movie array
  renderButtons();
});
  // URL for Giphy API with API Key and input

  $('.movie').click(function() {
    AjaxCall($(this).attr("data-name"))

  });

function AjaxCall(moviename){
  var queryURL =
    "https://api.giphy.com/v1/gifs/search?api_key=H1mX0F3xxg41kBcYQwvID9p3WRj6b694&q=" +
    moviename + "&limit=10&offset=0&rating=G&lang=en";

  // AJAX call from API
  $.ajax({
    url: queryURL,
    method: "GET"
    //
  }).then(function(response) {
    var giffys = response.data;
    for (var i = 0; i < giffys.length; i++) {
      var giffy = $("#movie-view").prepend(`<div class='showGif'>
        <img src='${response.data[i].images.fixed_height_small.url}'>
        </div>
        `);
    }

    // Log the queryURL
    console.log(queryURL);
    // Log the resulting object
    console.log(response);
  });

};

});
