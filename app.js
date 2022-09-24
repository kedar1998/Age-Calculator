const ele = document.createElement("span");
document.querySelector("#dob").addEventListener('change', function(){
    let userdob = this.value;
    let arr = userdob.split("-");

    // Current date
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth();
    let year = now.getFullYear();

    // Calculations
    let calcyear = year - arr[0];
    ele.textContent = calcyear;
    document.querySelector(".desc").append(ele);
    document.querySelector("#years").innerHTML = calcyear;
    
    let calcmonth = month - arr[1];
    document.querySelector("#months").innerHTML = calcmonth+1;
    
    let calcdays = day - arr[2];
    document.querySelector("#days").innerHTML = calcdays;


})