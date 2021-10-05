function showValue(inpt){
    let scroll_interest = document.getElementById("interest").value;
    document.getElementById("rest").innerHTML= (inpt/10) ;
}

function compute()
{
    let amount = parseFloat(document.getElementById("principal").value);
    let interest = parseFloat(document.getElementById("interest").value)/10;
    let years = parseInt(document.querySelector("#yrs").value);
    let p_years = new Date().getFullYear()+parseInt(years);
    let p_interest = (amount*interest*years)/100;
    let p_amount = amount+p_interest;

    


    if(amount&&amount !=0&&amount>0){
         document.getElementById('result').innerHTML = 
    `<p>If you deposit <span class="fig">${amount}</span>,</p>
    <p>at an interest rate of <span class="fig">${interest}%</span></p>
    <p>You will recive an amount of <span class="fig">${p_interest}</span></p>
    <p>In Year <span class="fig">${p_years}</span></p>
    `;
    let highlight=document.querySelectorAll('span.fig');
    let i;
    for(i=0;i<highlight.length;i++){
        highlight[i].style.backgroundColor = "orange";
    }
       
    }else{
        window.alert("Enter a valid positive value for Amount !");
    }
    
}
        