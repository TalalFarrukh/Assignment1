var a = 2, b = 1;

var result = --a;
document.write("Stage 1: <br>");
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br><br>");

var result = --a - --b;
document.write("Stage 2: <br>");
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br><br>");

var result = --a - --b + ++b;
document.write("Stage 3: <br>");
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br><br>");

var result = --a - --b + ++b + b--;
document.write("Stage 4: <br>");
document.write("a is: " + a + "<br>");
document.write("b is: " + b + "<br>");
document.write("result is: " + result + "<br><br>");