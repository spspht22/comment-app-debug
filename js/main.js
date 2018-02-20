function todoList() {
	var username = document.getElementById("name").value
	var comment = document.getElementById("comment").value

	var userNameText = document.createTextNode("Username: " + username)
	var commentText = document.createTextNode("Comment: " + comment)

	var newListItem = document.createElement("li")
	newListItem.className = "list-group-item"
	var newUserName = document.createElement("h3")
	newUserName.appendChild(userNameText)
	var newComment = document.createElement("p")
	newComment.appendChild(commentText)

	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	document.getElementById("commentList").appendChild(newListItem)
}