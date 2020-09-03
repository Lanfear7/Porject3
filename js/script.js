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
    let activities = document.getElementsByClassName('activities');
    console.log(activities);
    activities.addEventListener('change', (e) =>{
        
    });
}


//payment info 

setFocus();
roleSelection();
shirtInfo();
register();