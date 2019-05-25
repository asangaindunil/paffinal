$(function () {

	getItems();

});

function getItems() {
	$.ajax({
		type: 'GET',
		url: 'http://localhost:8080/shopping/items',
		dataType: 'json',
		async: true,
		success: function (data) {
			console.log(data);
			setItems(data)
		},
		error:function (error) {
			console.log('error ${error}')
			
		}

	});
}
function setItems(items) {
	// if ($.fn.DataTable.isDataTable('#tblStudent')) {
	//     $('#tblStudent').DataTable().destroy();
	// }
	$('#tblItems tbody').empty();
	var textToInsert = '';
	for (var item in items) {
		textToInsert += addRowToItems(items[item]);
	}
	$('#tblItems > tbody:last-child').append(textToInsert);

}
function addRowToItems(item) {
//    console.log(item.ItemCode);
	var row =
		'<tr id="' + item.item_id + '" class="openPane">'
		+ '<td>' + item.item_id + '</td>'
		+ '<td>' + item.name + '</td>'
		+ '<td>' + item.description + '</td>'
		+ '<td>' + item.sup_id + '</td>'
		+ '<td>' + item.qty + '</td>'
		+ '<td>' + item.unit_price + '</td>'
		+ '<td>' + item.visibility + '</td>'
		+ '</tr>';
	return row;
}