function raiz(){
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);
    let c = parseFloat(document.getElementById("num3").value);
    ans = document.getElementById('resposta');

    let delta = (b*b) - 4*a*c;

    if (delta>0){
     raiz1 = (-b + Math.sqrt(delta) )/(2*a);
     raiz2 = (-b - Math.sqrt(delta) )/(2*a);

     ans.innerHTML = "Raiz 1: " + raiz1 + "<br/>" +"Raiz 2: " + raiz2;
    }else{
     if (delta==0){
      raiz = (-b + Math.sqrt(delta) )/(2*a);
      ans.innerHTML="Raiz dupla: " + raiz;
     }else{
      real = (-b)/(2*a);
      img1  = Math.sqrt(-delta)/(2*a);
      img2  = - Math.sqrt(-delta)/(2*a);

      ans.innerHTML = "Raiz 1: " + real + "+" + img1+"i"+"<br/>" +
          "Raiz 2: " + real + "+" + img2+"i"
     }
    }
  }