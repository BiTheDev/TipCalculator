function initState(){
    document.getElementById('price').style.display = 'none';
    document.getElementById('splitPrice').style.display = 'none';
    document.getElementById('splittingBox').style.display = 'none';
}
function handleSplitBox(choice){
    if(choice.value == 'No'){
        document.getElementById('splittingBox').style.display = 'none';
    }else{
        document.getElementById('splittingBox').style.display = 'block';
    }
}

function calculatePrice(){
    let bill = document.getElementById("billBeforeTax").value;
    let tip = document.getElementById("tipAmt").value;
    let ppl = document.getElementById('sharingPpl').value;
    let billAfterTax = document.getElementById('billAfterTax').value;
    let finalTip = (bill * tip);
    total = (parseFloat(finalTip) + parseFloat(billAfterTax));
    document.getElementById('price').style.display = 'block';
    document.getElementById('total').innerHTML = total.toFixed(2);
    document.getElementById('finalTip').innerHTML = finalTip.toFixed(2);
    if(document.getElementById('splittingBox').style.display == 'block'){
        calculateSplitPrice(ppl,total,finalTip);
    }
};

function calculateSplitPrice(ppl, total, finalTip){
    if(ppl > 0){
        document.getElementById('splitPrice').style.display = 'block';
        document.getElementById('splitAmt').innerHTML = (total / ppl).toFixed(2);
        document.getElementById('splitTip').innerHTML = (finalTip / ppl).toFixed(2);
    }else{
        document.getElementById('splitPrice').style.display = 'none';
    }
}

function windowReload(){
    location.reload();
}

window.onload = initState();

