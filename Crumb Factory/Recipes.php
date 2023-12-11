<php?

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="signstyle.css">
    <title>Sign In</title>
</head>
<body>
    <div class="container">
        <div class="sign">
            <div class="Navbar">
                <img src="Cookie Crumb Short Logo.png" alt="logo" class="logo">
                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">RECIPES</a></li>
                    <li><a href="#">SUBMIT RECIPES</a></li>
                    <li><a href="#">SIGN IN</a></li>
                    <li><a href="#">CONTACT US</a></li>
                </ul>
            </div>
            <div class="main">
                <div class="signinbox">
                    <h2>Sign In</h2>
                    <form>
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required>
                        
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required>

                        <div class="buttons">
                            <button type="submit">Login</button>
                            <button type="reset">Reset</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="Footer">
                <p class="copyright">&copy; The Crumb Factory 2023</p>
            </div>
        </div>
    </div>
</body>
</html>
