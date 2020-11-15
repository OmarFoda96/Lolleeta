function myFunction()
    {
        var input = document.getElementById('fullName')
        var div = document.getElementById('artistName');
        div.innerHTML="";
        div.innerHTML = div.innerHTML + input.value;
    }