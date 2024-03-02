# 👉 Working with API 
# Introduction 

<div style=" margin-right:20px">
<ul>
  <li> It can extend the functionality of the browser</li>
  <li>It can greatly simplify complex functions </li>
  <li> It can provide easy syntax to complex code</li>
  
</ul>   
</div>

#  👉 Forms API 


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<input id="id1" type="number" min="100" max="300" required>
 <button onclick="myFunction()">ok</button>
    <div id="demo">

    </div>
    
    <script src="form.js"></script>
</body>

</html>

```



```
function myFunction() {
    const inputObj = document.getElementById("id1");

    // Assuming checkValidity is the correct method
    if (!inputObj.checkValidity()) {
        document.getElementById("demo").innerHTML = inputObj.validationMessage;
    }
}


```

#  👉 History API 


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body> main page 
    
    <a href="one.html">page one</a>
 <script src="index.js"></script>

 
</body>
</html>

```

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a  href="two.html"></a>
    <button onclick="back()">
       goBACK
    </button>
    <button onclick="f()">FORWORD</button>
    <script src="index.js"></script>
</body>
</html>

```
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    page two 
    <button onclick="go(-2)"> go back </button>
    <script src="index.js"></script>

</body>
</html>

```
```
function back(){

    window.history.back();

}
function f(){
    window.history.forward();

}
function go(n){

    window.history.go(n);

}
```









