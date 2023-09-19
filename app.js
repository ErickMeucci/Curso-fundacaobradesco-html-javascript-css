'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click',function(){
    document.body.ClassList.toggle('dark-theme')


    var className = document.body.className;
    if(className == 'light-theme') {
        this.texContent = "dark"
        console.log('current class name: '+ className);
    }
    else{
        this.texContent = "Light";
    }
});

