const answer = document.querySelector("input");
count = 1;
num = Math.floor(Math.random()*100);

console.log(num);
function display() {
    if (answer.value < 999) {
        document.getElementById("guess"+count).innerHTML = answer.value;
        if(num>answer.value) 
        {
            document.getElementById("guess"+count).parentElement.style.backgroundColor= 'red';
        }
        if(num<answer.value) 
        {
            document.getElementById("guess"+count).parentElement.style.backgroundColor= 'yellow';
        }
        if(num == answer.value) {
            document.getElementById("guess"+count).parentElement.style.backgroundColor= 'green';
            alert("you win");
            location.reload();
        }

        count++;
    }
    else alert("enter a different number less than 1000")
}
