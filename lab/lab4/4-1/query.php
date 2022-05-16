<html>

<head>
    <title>Table Output</title>
</head>

<body>
    <?php
    $server = 'localhost';
    $user = 'hoihoi';
    $pass = 'hoihoi';
    $mydb = 'test4';
    $table_name = 'Products';
    $connect = mysqli_connect($server, $user, $pass, $mydb);
    if (!$connect) {
        die("Cannot connect to $server using $user");
    } else {
        print '<h1>Products Data</h1>';
        $SQLcmd = "SELECT * from $table_name";
        print "<div>The Query is $SQLcmd</div>";
        $result = mysqli_query($connect, $SQLcmd);
        print "<table border='1'>";
        print "<tr>
            <th>Num</th>
            <th>Product</th>
            <th>Cost</th>
            <th>Weight</th>
            <th>Count</th>
            </tr>";
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                print "<tr>
                    <td>" . $row['ProductID'] . "</td>
                    <td>" . $row['Product_desc'] . "</td>
                    <td>" . $row['Cost'] . "</td>
                    <td>" . $row['Weight'] . "</td>
                    <td>" . $row['Numb'] . "</td>
                   </tr>";
            }
        }
        print "</table>";
        mysqli_close($connect);
    }
    ?>
</body>

</html>