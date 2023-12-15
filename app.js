function swap(){
    var1 = document.getElementById('v1').value;
    var2 = document.getElementById('v2').value;

    document.getElementById("result").innerHTML = "Before Swaping var1 : "+ var1 + " var2 :"+ var2;

    let temp;

    temp = var1;
    var1 = var2;
    var2 = temp;

    document.getElementById("result1").innerHTML = "After Swaping var1 : "+ var1 + " var2 :"+ var2;

}
