let name = "AbdulHadi";
document.getElementById("name").innerHTML = name;

//function is called, return value will end up in ans
let ans = myFunction(15, 4);
document.write(ans);

//function returns the product of a and b
function myFunction(a, b) {
    return a * b;
}

const images = document.querySelectorAll("img");
let i = 0;

setInterval(function () {

    if (i == 0) {
        images[i].style.display = 'block';
    }

    else if (i == 1 || i == 2) {
        images[i - 1].style.display = 'none';
        images[i].style.display = 'block';
    }

    else {
        images[i - 1].style.display = 'none';
        images[0].style.display = 'block';
        i = 0;
    }

    i++;
}, 5000
);
