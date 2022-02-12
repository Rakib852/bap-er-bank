document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText)

    const depositTotal = document.getElementById('deposit-total');
    const previwsText = depositTotal.innerText;
    const previwsAmount = parseFloat(previwsText);
    const newDepositTotal = previwsAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    depositInput.value = '';


    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previwsBalanceTotal = parseFloat(balanceTotalText)
    const newBalanceTotal = previwsBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
})






document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input')
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

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


})