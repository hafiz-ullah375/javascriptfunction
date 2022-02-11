
// handle deposit button event
document.getElementById('diposit-button').addEventListener('click', function () {
    // get the amount deposited
    const dipositInput = document.getElementById('diposit-input');
    const newDepositValue = dipositInput.value;
    const newDepositAmount = parseFloat(newDepositValue)

    const depositTotal = document.getElementById('deposit-total');
    const previousDipoitText = depositTotal.innerText;
    const previousDipoitAmount = parseFloat(previousDipoitText)

    const newdepositTotal = previousDipoitAmount + newDepositAmount;
    depositTotal.innerText = newdepositTotal;

    // uodete balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear the deposite input field
    dipositInput.value = '';
    console.log()
})

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawValue = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawValue);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    withdrawInput.value = '';
    console.log(newWithdrawAmount)
})

