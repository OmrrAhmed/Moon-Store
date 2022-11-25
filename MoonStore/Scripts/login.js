function login()
{
    var user = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;

    if (user == "OmarAhmed" && password == "Oo@42403828") {

        window.location.href = "../Pages/Home.html";
        alert("Login Successfully");
        return false;

    }
    else if (user == "Admin" && password == "Admin")
    {
        window.location.href = "../Pages/Menus.html";
        alert("Login Successfully");
        return false;

    }

    else {
        alert("Please Try Again..")
    }

}