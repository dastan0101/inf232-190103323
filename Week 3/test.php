<?php 

function connection() {
	return mysqli_connect("localhost", "root", "", "web_programming_back_end");
}

if (isset($_GET['first_name'])) {
	$mysql=connection();
	$gender = (int)$_GET['gender'];
	$statement = $mysql->prepare("insert into users(firdt_name, date_of_birth, gender) values(?,?,?)")
	$statement->bind_param("ssi", 
		($_GET['first_name']), 
		($_GET['date_of_birth']), 
		($gender));
	$statement->execute();

	$statement->close();
	$mysql->close();

	echo $_GET['first_name'];
}
?>