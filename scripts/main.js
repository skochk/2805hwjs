

    document.getElementById("but").addEventListener('click', function change(){
        let sosnya = document.querySelector(".lighter1");
        let color11 = sosnya.style.backgroundColor;
        // alert(color11);

        if(color11 == 'red'){
            document.querySelector(".lighter2").style.backgroundColor = 'red';
            document.querySelector(".lighter3").style.backgroundColor = 'red';
            document.querySelector(".lighter1").style.backgroundColor = 'green';
            document.querySelector(".lighter4").style.backgroundColor = 'green';
            document.querySelector(".ver5").style.backgroundColor ='green';
            document.querySelector(".ver1").style.backgroundColor ='green';
            document.querySelector(".ver3").style.backgroundColor ='green';
            
            document.querySelector(".ver2").style.backgroundColor ='black';
            document.querySelector(".ver4").style.backgroundColor ='black';

       
        }else{
            document.querySelector(".lighter1").style.backgroundColor = 'red';
            document.querySelector(".lighter4").style.backgroundColor = 'red';
            document.querySelector(".lighter2").style.backgroundColor = 'green';
            document.querySelector(".lighter3").style.backgroundColor = 'green';

            
            document.querySelector(".ver5").style.backgroundColor ='black';
            document.querySelector(".ver1").style.backgroundColor ='black';
            document.querySelector(".ver3").style.backgroundColor ='gteen';
            
            document.querySelector(".ver2").style.backgroundColor ='green';
            document.querySelector(".ver4").style.backgroundColor ='green';
        }
    })