document.addEventListener('DOMContentLoaded', function(){
    var callButton = document.querySelector('button[type="btn"]');
    callButton.addEventListener('click', function(event){
        alert('Call Me!');
    });
});