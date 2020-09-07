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
        //this will make sure if you click option1 then option2 then want to go back to option1 the colors will still display in the form 
        for(let i = 0; i < colors.length; i++){
            colors[i].style.display = 'flex'
        }
        //figure out what option the user clicked
        if(e.target.value === 'js puns'){
            //loop over the color list as add a display of none to options that have a index of 4 or more 
            for(let i = 0; i < colors.length; i++){
                //set the display
                if (i > 3){
                    let hiddenColor = colors[i]
                    hiddenColor.style.display = 'none'
                    option.style.display = 'none'
                } 
            }
        } else if (e.target.value === 'heart js') { 
            
            //this is a copy from the top just the if is a little different 
              for(let i = 0; i < colors.length; i++){
                //set the display
                if (i < 4){
                    let hiddenColor = colors[i]
                    console.log(hiddenColor)
                    hiddenColor.style.display = 'none'
                    option.style.display = 'none'
                } 
              }

        } else {
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
        const clickedAtt = e.target.getAttribute('data-day-and-time');

        //looping over the the length of the list 
        for (let i = 0; i < checkboxes.length; i ++) {

            //getting the checkboxes attributes
            let checkboxAtt = checkboxes[i].getAttribute('data-day-and-time');

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
    //get the payment option select and all the divs well will need ;
    let payment = document.getElementById('payment');
    let select = document.querySelector('option[value="select method"]')
    let creditCard = document.getElementById('credit-card');
    let paypal = document.getElementById('paypal');
    let bitcoin = document.getElementById('bitcoin');
    //loop over the options
    for (let i = 0; i < payment.length; i++){
        //set option at index 1 to 'focus'
        payment.selectedIndex = 1;
        paypal.style.display = 'none'
        bitcoin.style.display = 'none'
        select.style.display = 'none'
    }
    payment.addEventListener('change', (e)=>{
        //if option 1 display credit card
        if (e.target.value === 'credit card'){
            creditCard.style.display = 'block'
            bitcoin.style.display = 'none'
            paypal.style.display = 'none'
        //else if option 2 display paypal
        } else if(e.target.value === 'paypal'){
            paypal.style.display = 'flex'
            creditCard.style.display = 'none'
            bitcoin.style.display = 'none'
        //else if option 3 display bitcoin
        } else if(e.target.value === 'bitcoin'){
            bitcoin.style.display = 'flex'
            creditCard.style.display = 'none'
            paypal.style.display = 'none'
        }
    })
}

//get the register button
const regButton = document.querySelector('button');
regButton.setAttribute('type', 'button');
//add an event listener
regButton.addEventListener('click', (e) => {
    e.preventDefault;

    //check if name has a value
    const name = document.querySelector('#name')
    const basicInfo = document.querySelector('fieldset legend')
    if(name.value){
        basicInfo.style.color = 'black';
        console.log('we have a name');
    } else {
        basicInfo.style.color = 'red';
        console.log('no name');
        
    }

    //check if email has a value 
    const email = document.querySelector('#mail')
    console.log(email.value);
    if(email.value){
        console.log('email has a value');
        //if it has a value check if the value passes the regex
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //this will test if the emails value will pass the regex
        if(regex.test(String(email.value).toLowerCase())){
            console.log('email passes regex')
            basicInfo.style.color = 'black';
        } else {
            //if email has a value but wont pass the regex 
            basicInfo.style.color = 'red';
            console.log('email didnt pass regex')
        }
    }else{
        //if email has no value
        console.log('email has no value ');
        basicInfo.style.color = 'red';
    }

    //check any of the check boxes are click 
    //get a list of the check boxes 
    const activity = document.querySelectorAll('.activities input');
    const activityLabel = document.querySelector('.activities legend');
    console.log(activity[0]);
    //loop over the boxes to is if any are checked
    for (let i = 0; i < activity.length; i++){
        console.log(activity[i]);
        //if one or more are checked run \/
        if(activity[i].checked){
            console.log('something was picked');
            console.log('color is black');
            activityLabel.style.color = 'black'
           
        }else{
            //else \/
            console.log('nothing was picked');
            console.log('color is red ');
            activityLabel.style.color = 'red'
        }
        
        
    }
    
    
})



//calling functions \
setFocus();
roleSelection();
shirtInfo();
register();
payment();