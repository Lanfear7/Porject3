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
    //this wil set the display of the colors to nothing after the index of 1
    for(let i = 1; i < colors.length; i++){
        colors[i].style.display = 'none'
    }
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
    let total = 0;
    let costBox = document.createElement('h3');
    const activityMain = document.querySelector('.activities');
    costBox.innerHTML = `Total: 0`;
    activityMain.appendChild(costBox);

    //adding the change event listener
    document.querySelector('.activities').addEventListener('change', (e) => {

        //getting the event target(clicked box) and the the event targets attribute 
        const clicked = e.target;
        const clickedAtt = e.target.getAttribute('data-day-and-time');
        const clickedPrice = e.target.getAttribute('data-cost');

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
        //calculate the price
        if(clicked.checked){
            //parseInt will turns the text into a int 
            total = total + parseInt(clickedPrice);
        }else{
            total = total - parseInt(clickedPrice);
        }
        //update the innerHTML every time a new class is added or taken away 
         costBox.innerHTML = `<p> Total: ${total}</p>`
        

    })
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
    } else {
        basicInfo.style.color = 'red';
        
    }

    //check if email has a value 
    const email = document.querySelector('#mail')
    if(email.value){
        //if it has a value check if the value passes the regex
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //this will test if the emails value will pass the regex
        if(regex.test(String(email.value).toLowerCase())){
            basicInfo.style.color = 'black';
        } else {
            //if email has a value but wont pass the regex 
            basicInfo.style.color = 'red';
        }
    }else{
        //if email has no value
        basicInfo.style.color = 'red';
    }

    //check any of the check boxes are click 
    //get a list of the check boxes 
    const activity = document.querySelectorAll('.activities input');
    const activityLabel = document.querySelector('.activities legend');
    //loop over the boxes to is if any are checked
    for (let i = 0; i < activity.length; i++){
        //if one or more are checked run \/
        if(activity[i].checked){
            activityLabel.style.color = 'black'
           
        }else if (activity[0].checked){
            activityLabel.style.color = 'black'
        }else{
            //else \/
            activityLabel.style.color = 'red'
        }
        
    }
    

    //payment validation 
    const ccNum = document.querySelector('#cc-num');
    const zipNum = document.querySelector('#zip');
    const cvvNum = document.querySelector('#cvv');
    let payment = document.querySelector('#payment');
    const paymentInfo = document.querySelector('#payment-section legend')
    //card regex
    let cardRegex = /^\d{13,16}$/; 
    let zipRegex = /^\d{6}$/;
    let cvvRegex = /^\d{3}$/;

    //if the user picks credit card
    if(payment.value === 'credit card'){ 
        //test the card number
        if(cardRegex.test(ccNum.value)){
            paymentInfo.style.color = 'black'
        }else {
            console.log('need a valid card')
            paymentInfo.style.color = 'red'
        }
        //test the zip
        if(zipRegex.test(zipNum.value)){
            paymentInfo.style.color = 'black'
        }else {
            paymentInfo.style.color = 'red'
        }
        //test the cvv
        if(cvvRegex.test(cvvNum.value)){
            paymentInfo.style.color = 'black'
        }else {
            paymentInfo.style.color = 'red'
        }
        //this will act as a extra check to make sure everything is correct
        if (payment.value === 'credit card' && cardRegex.test(ccNum.value) && zipRegex.test(zipNum.value) &&cvvRegex.test(cvvNum.value)){
            paymentInfo.style.color = 'black'
        }else{
            paymentInfo.style.color = 'red'
        }
    }
    if(basicInfo.style.color = 'black' && activityLabel.style.color == 'black' && paymentInfo.style.color == 'black'){
       window.location.reload(true); 
    }
    
})



//calling functions \
setFocus();
roleSelection();
shirtInfo();
register();
payment();