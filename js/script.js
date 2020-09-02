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
    const design = document.getElementById('design');
    const color = document.querySelector('option[value="cornflowerblue"]');
    window.onload = (e) => {
        color.hidden = true
    }
};




//register of activities 



//payment info 

setFocus();
shirtInfo();