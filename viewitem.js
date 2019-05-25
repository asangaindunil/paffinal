$(function () {

	getItems();
	var xhttp = new XMLHttpRequest();

});

function getItems() {
	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/shopping/items',
		headers: {
			"accept": "application/json",
			"content-type": "application/x-www-form-urlencoded"
		},
		dataType: 'json',
		async: true,
		success: function (data) {
			console.log(data);

		},
		error:function (error) {
			console.log('error ${error}')
			
		}

	});
}
function setStudents(students) {
	// if ($.fn.DataTable.isDataTable('#tblStudent')) {
	//     $('#tblStudent').DataTable().destroy();
	// }
	$('#tblStudent tbody').empty();
	var textToInsert = '';
	for (var item in students) {
		textToInsert += addRowToSearchStudent(students[item]);
	}
	$('#tblStudent > tbody:last-child').append(textToInsert);
	$('#tblStudent').dataTable({
		order: [[0, "asc"]],
		select: true

	});
}
function addRowToSearchStudent(item) {
	var baseurl = document.getElementById('baseurl').value;
//    console.log(item.ItemCode);
	var row =
		'<tr id="' + item.id + '" class="openPane">'
		+ '<td>' + item.id + '</td>'
		+ '<td>' + item.name + '</td>'
		+ '<td>' + item.faculty + '</td>'
		+ '<td>' + item.tel + '</td>'
		+ '<td>' + item.nic + '</td>'
		+ '<td>'
		+ '<a href="' + baseurl + 'student/newstudent?id=' + item.id + '"><button type="button" class="btn btn-info btn-xs">Edit</button></a>'
		+ '</td>'
		+ '</tr>';
	return row;
}