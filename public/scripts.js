window.onload = function(){
  likeLinks = document.getElementsByTagName("A");
  for (var i = 0; i < likeLinks.length; i++){
    likeLinks[i].addEventListener("click", likePost);
  }
}


var likePost = function(event){
  event.preventDefault();
  var request = new XMLHttpRequest();
  request.open("get", this.href);
  request.send();
  request.addEventListener("load", sinatraResponse);
}

var sinatraResponse = function(event){
  var response = JSON.parse(this.response);
  var likeDiv = document.getElementById(response.post_id);
  var newChild = document.createElement("IMG");
  newChild.src = "images/star.jpg";
  newChild.width = "20"
  likeDiv.replaceChild(newChild, likeDiv.children[0]);
  likeDiv.children[1].children[0].innerHTML = response.new_number_of_likes;
}