<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>Title</title>
    <link href="css/bootstrap.css" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script src="validate.js"></script>
</head>
<body>

<div class="container">
    <h2>Registration</h2>
    <form class="form-horizontal" action="/action_page.php">
        <div class="form-group">
            <label class="control-label col-sm-2" for="Username">Username*</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="username" name="username" onchange="emptyCheck('username',username)" onclick="emptyCheck('username',username)">
                <label class="control-label text-info">Username can contain any letters or numbers, without spaces</label>

            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="Email">Email*</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="Email" name="Email">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="NIC">NIC*</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="NIC" name="NIC" onchange="nicValidation(this,NIC)" onclick="nicValidation(this,NIC)">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="Mobile">Mobile*</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="Mobile"  name="Mobile"  onclick="mobileValidation(document.getElementById('Mobile').value,Mobile)">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="Password">Password*</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="Password"  name="Password">
            </div>
        </div>
        <div class="form-group">
            <label class="control-label col-sm-2" for="Passwordconfirm">Password(confirm)*</label>
            <div class="col-sm-10">
                <input type="password" class="form-control" id="Passwordconfirm" name="Passwordconfirm">
            </div>
        </div>

        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="button" onclick="validateForm()" class="btn btn-success">Submit</button>
            </div>
        </div>
    </form>
</div>
</body>

</html>