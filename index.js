console.log('This is project');


const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('number');
let validUserName = false;
let validPhone = false;
let validEmail = false;
// console.log(name, email, phone);

// validating the usernmae email and phone 


username.addEventListener('blur', ()=>{
    console.log('name is blured');

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;  // here ^means should be started from and {0, 10} means should cotain characters between 0 and 10 $means is used to must end with;
    
    let str = username.value 
    console.log(regex, str);
    
    if(regex.test(str)){
        console.log('matched');
        // const username  = document.getElementById('username');
        username.classList.remove('is-invalid');
        validUserName = true;
    }
    else{
        console.log('does not matched');
        // const username  = document.getElementById('username');
        username.classList.add('is-invalid');
        validUserName = false;

    }

    
})



email.addEventListener('blur', ()=>{
    console.log('email is blured');

    let regex = /^([_\.\-a-zA-Z0-9]+)@([_\.\-a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;  // here ^means should be started from and {0, 10} means should cotain characters between 0 and 10 $means is used to must end with;
    
    let str = email.value 
    console.log(regex, str);
    
    if(regex.test(str)){
        console.log('matched');
        // const name  = document.getElementById('username');
        email.classList.remove('is-invalid');
        validEmail = true;
        
    }
    else{
        console.log('does not matched');
        // const name  = document.getElementById('username');
        email.classList.add('is-invalid');
        validEmail = false;
    }
    
})




phone.addEventListener('blur', ()=>{
    console.log('phone is blured');

    let regex = /^([0-9]){10}$/;  // here ^means should be started from and {0, 10} means should cotain characters between 0 and 10 $means is used to must end with;
    
    let str = phone.value 
    console.log(regex, str);
    
    if(regex.test(str)){
        console.log('matched');
        // const name  = document.getElementById('username');
        phone.classList.remove('is-invalid');
        validPhone = true;
        
    }
    else{
        console.log('does not matched');
        // const name  = document.getElementById('username');
        phone.classList.add('is-invalid');
        validPhone = false;

    }

    console.log('current values' + validPhone);
    
    
})



// document.getElementById('success').classList.remove('show');
// document.getElementById('failure').classList.remove('show');

let submit =  document.getElementById('submitbtn');
submit.addEventListener('click', (e)=>{
    console.log('current values' + validPhone);

    e.preventDefault();
    console.log('You clicked on submit');

    if(validEmail==true && validPhone==true && validUserName==true){
        console.log('we are in if ');
        
        document.getElementById('section2').innerHTML = '';
        document.getElementById('section1').innerHTML =  `  <div id="success" class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Success!</strong> form submitted succesfully
        <button  type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        // document.getElementById('failure').classList.remove('show');
    }
    else{
        document.getElementById('section1').innerHTML = '';

        document.getElementById('section2').innerHTML = `  <div id="failure" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> Something went wrong please try again
        <button  type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`
        // document.getElementById('success').classList.remove('show');


    }





})




