<html>

<head>
    <title>Category Administration</title>
</head>

<body style="width:100vh">
    <h1><b>Category Administration</b></h1>
    <form action="admin.php" method="post">
        <?php
        $server = 'localhost';
        $user = 'root';
        $pass = '123456';
        $mydb = 'business_service';
        $table_name = 'categories';
        $connect = mysqli_connect($server, $user, $pass, $mydb);
        if (!$connect) {
            die("Cannot connect to $server using $user");
        } else {
            print '<br>';
            $catid = $_POST['CatID'];
            $title = $_POST['Title'];
            $description = $_POST['Description'];
            $SQLcmd = "INSERT INTO $table_name (CategoryID, Title, Description) VALUES('$catid', '$title', '$description')";
            echo $SQLcmd;
            if (mysqli_query($connect, $SQLcmd)) {
                print "<div>Insert into $table_name was succesful!</div>";
            } else {
                print "<div>Insert into $table_name failed</div>";
            }
            mysqli_close($connect);
            print '<input type="submit" value="Back">';
        }
        ?>
    </form>
</body>

</html>