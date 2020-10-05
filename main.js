
function handleSplitBox(choice){
    if(choice.value == 'No'){
        document.getElementById('splittingBox').style.display = 'none';
    }else{
        document.getElementById('splittingBox').style.display = 'block';
    }
}

function calculatePrice(){
    let bill = document.getElementById("billAmt").value;
    let tip = document.getElementById("tipAmt").value;
    let ppl = document.getElementById('sharingPpl').value
    total = bill * tip;
    document.getElementById('price').style.display = 'block';
    document.getElementById('total').innerHTML = total.toFixed(2);
    document.getElementById('finalTip').innerHTML = total.toFixed(2) - bill;
    if(ppl > 0){
        document.getElementById('splitPrice').style.display = 'block';
        document.getElementById('splitAmt').innerHTML = (total / ppl).toFixed(2);
        document.getElementById('splitTip').innerHTML = ((total.toFixed(2) - bill) / ppl).toFixed(2);
    }else{
        document.getElementById('splitPrice').style.display = 'none';
    }
};

document.getElementById('price').style.display = 'none';
document.getElementById('splitPrice').style.display = 'none';
document.getElementById('splittingBox').style.display = 'none';