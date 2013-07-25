jQuery.githubUser = function(username, callback) {
  jQuery.getJSON("https://api.github.com/users/" + username + "/repos", callback);
}