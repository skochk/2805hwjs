

    document.getElementById("but").addEventListener('click', function change(){
        let sosnya = document.querySelector(".lighter1");
        let color11 = sosnya.style.backgroundColor;
        // alert(color11);

        if(color11 == 'red'){
            document.querySelector(".lighter2").style.backgroundColor = 'red';
            document.querySelector(".lighter3").style.backgroundColor = 'red';
            document.querySelector(".lighter1").style.backgroundColor = 'green';
            document.querySelector(".lighter4").style.backgroundColor = 'green';
            document.querySelector("").style.backgroundColor = 'white';
       
        }else{
            document.querySelector(".lighter1").style.backgroundColor = 'red';
            document.querySelector(".lighter4").style.backgroundColor = 'red';
            document.querySelector(".lighter2").style.backgroundColor = 'green';
            document.querySelector(".lighter3").style.backgroundColor = 'green';
        }
    })