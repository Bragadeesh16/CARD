function myfunction() {
    let email = document.querySelector("input").value;
    let rejects = /.+@.+\..+$/;
    if (rejects.test(email))
    {
        window.location.href = "./index2.html";
    }
    else{
        document.querySelector("input").classList.add('error');
    }
}