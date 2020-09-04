//set focus on the first field 
const setFocus = () => {
  let name = document.getElementById('name');
  name.focus();
  name.scroll();
}
//job role selection 
const roleSelection = () => {
    const jobRole = document.getElementById('title');
    jobRole.addEventListener('change', (e) => {
        let jobInput = document.getElementById('other-title');
        console.log(e.target.value);
        if(e.target.value === 'other'){
            jobInput.style.display = 'inline'
            jobInput.focus();
        }else{
            jobInput.style.display = 'none'
        }
    });
};
    
//T-shirt info
const shirtInfo = () => {
    const designs = document.getElementById('design');
    //this will select the color 'list' and add a new option to it  
    var colors = document.getElementById('color');
    var option = document.createElement("option");
    option.text = "Please select a T-shirt theme";
    colors.add(option, colors.options[0]);
    //this will select the option element with the index of 0
    color.selectedIndex = 0;

    //display certain colors
    designs.addEventListener('change', (e) =>{
        console.log(e.target.value)
        //this will make sure if you click option1 then option2 then want to go back to option1 the colors will still display in the form 
        for(let i = 0; i < colors.length; i++){
            colors[i].style.display = 'flex'
        }
        //figure out what option the user clicked
        if(e.target.value === 'js puns'){
            console.log('1')
            //loop over the color list as add a display of none to options that have a index of 4 or more 
            for(let i = 0; i < colors.length; i++){
                //set the display
                console.log(i)
                if (i > 3){
                    let hiddenColor = colors[i]
                    console.log(hiddenColor)
                    hiddenColor.style.display = 'none'
                    option.style.display = 'none'
                } 
            }
        } else if (e.target.value === 'heart js') { 
            console.log('2')
            
            //this is a copy from the top just the if is a little different 
              for(let i = 0; i < colors.length; i++){
                //set the display
                console.log(i)
                if (i < 4){
                    let hiddenColor = colors[i]
                    console.log(hiddenColor)
                    hiddenColor.style.display = 'none'
                    option.style.display = 'none'
                } 
              }

        } else {
            console.log('other')
        }
    })
    
};

//register of activities 
const register = () =>{

    //this will store all the inputs into a list 
    const checkboxes = document.querySelectorAll('.activities input');

    //adding the change event listener
    document.querySelector('.activities').addEventListener('change', (e) => {

        //getting the event target(clicked box) and the the event targets attribute 
        const clicked = e.target;
        console.log(clicked)
        const clickedAtt = e.target.getAttribute('data-day-and-time');
        console.log(clickedAtt)

        //looping over the the length of the list 
        for (let i = 0; i < checkboxes.length; i ++) {

            //getting the checkboxes attributes
            let checkboxAtt = checkboxes[i].getAttribute('data-day-and-time');
            console.log(checkboxes[i])

            //if the clicked box = a checkbox attribute & the clicked box is NOT = to the current iteration of the looped checkbox -- return true 
            if (clickedAtt === checkboxAtt && clicked !== checkboxes[i]) {

                //if the clicked checkbox is checked apply this \/
                if (clicked.checked) {

                    //the checkbox at the currrent iteration is disabled and the color is changed to red 
                    checkboxes[i].disabled = true;
                    checkboxes[i].parentNode.style.color = 'red'

                //else apply this \/
                } else {

                    //the check box at the current iteration is not disables and the text is black 
                    checkboxes[i].disabled = false;
                    checkboxes[i].parentNode.style.color = 'black'
                }
            }
        }
    });
}


//payment info 
const payment = () => {
    //get the payment option select and all the divs well will need 
    let section = document.getElementById('payment-section');
    let payment = document.getElementById('payment');
    let creditCard = document.getElementById('credit-card');
    let paypal = document.getElementById('paypal');
    let bitcoin = document.getElementById('bitcoin');
    //loop over the options
    for (let i = 0; i < payment.length; i++){
        console.log(payment[i]);
        //set option at index 1 to 'focus'
        payment.selectedIndex = 1;
        paypal.style.display = 'none'
        bitcoin.style.display = 'none'
    }
    payment.addEventListener('change', (e)=>{
        console.log(e.target.value);
        //if option 1 display credit card
        if (e.target.value === 'credit card'){
            creditCard.style.display = 'block'
            bitcoin.style.display = 'none'
            paypal.style.display = 'none'
        //else if option 2 display paypal
        }else if(e.target.value === 'paypal'){
            paypal.style.display = 'flex'
            creditCard.style.display = 'none'
            bitcoin.style.display = 'none'
        //else if option 3 display bitcoin
        }else if(e.target.value === 'bitcoin'){
            bitcoin.style.display = 'flex'
            creditCard.style.display = 'none'
            paypal.style.display = 'none'
        //if no payment method is chosen display this message
        }else{
            let newDiv = document.createElement('div');
            let text = document.createElement('p');
            text.textContent = 'Please select a payment method before proceeding'
            newDiv.appendChild(text);
            paypal.style.display = 'none'
            bitcoin.style.display = 'none'
            creditCard.style.display = 'none'
            console.log(newDiv);
            section.appendChild(newDiv);
        }
    })
}

const validation = () =>{
    let name = document.getElementById('name');
    let email = document.getElementById('mail');
    let emailRegex = '/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
    let emailLower = email.value.toLowerCase();
    console.log(emailLower);
    if (email.value  === ''){
        email.previousElementSibling.style.color = 'red';
        email.style.backgroundColor = '#ff00009f';
    }else {
        email.previousElementSibling.style.color = 'black';
    }
    if (name.value === ''){
        name.previousElementSibling.style.color = 'red';
        name.style.backgroundColor = '#ff00009f';
    }else {
        name.previousElementSibling.style.color = 'black';
    }
}
//calling functions 
setFocus();
roleSelection();
shirtInfo();
register();
payment();
validation();