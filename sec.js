//function for extra memory cost
function updateMemorycost(product, cost, verify) {
    const memorycost = document.getElementById('extraMemorycost');
    const totalMemoryCost = cost;
    memorycost.value = totalMemoryCost;

    const extraMemorycost = document.getElementById('extraMemorycost');
    extraMemorycost.innerText = memorycost.value;

    calculateTotal();

}

//function for extra stirage cost
function updateStorageCost(cost) {
    const storageCost = document.getElementById('extraStoragecost');
    const totalStorageCost = cost;
    storageCost.value = totalStorageCost;

    const extraStorageCost = document.getElementById('extraStoragecost');
    extraStorageCost.innerText = storageCost.value;
    calculateTotal();
}

//function for delivary cost
function updateDelivaryCost(cost) {
    const delivaryCost = document.getElementById('delivaryCost');
    const totalDelivaryCost = cost;
    delivaryCost.value = totalDelivaryCost;

    const extraDelivaryCost = document.getElementById('delivaryCost');
    extraDelivaryCost.innerText = delivaryCost.value;
    calculateTotal();

}



// extra memory costttttt
document.getElementById('8-gb').addEventListener('click', function () {
    updateMemorycost('8', 0, false);
});
document.getElementById('16-gb').addEventListener('click', function () {
    updateMemorycost('16', 180, true);
});

//extra storage costttttt
document.getElementById('256-gb').addEventListener('click', function () {
    updateStorageCost(0);
});
document.getElementById('512-gb').addEventListener('click', function () {
    updateStorageCost(100);
});
document.getElementById('1-tb').addEventListener('click', function () {
    updateStorageCost(180);
});

//delivary cost
document.getElementById('free-delivary').addEventListener('click', function () {
    updateDelivaryCost(0);
});
document.getElementById('paid-delivary').addEventListener('click', function () {
    updateDelivaryCost(20);
});

//    promocode


//Total
//stevekaku
function calculateTotal() {
    const extramemory = document.getElementById('extraMemorycost');
    const extraMemoryTotal = parseInt(extramemory.innerText);

    const extraStorage = document.getElementById('extraStoragecost');
    const extraStorageTotal = parseInt(extraStorage.innerText);

    const extraDelivary = document.getElementById('delivaryCost');
    const extraDelivaryTotal = parseInt(extraDelivary.innerText);

    const Total = 1299 + extraMemoryTotal + extraStorageTotal + extraDelivaryTotal;
    const subTotal = document.getElementById('totalPrice');
    subTotal.innerText = Total;

    const totalCost = document.getElementById('total');
    totalCost.innerText = Total;
}

//discount promo function
function promocode() {
    const promoCode = document.getElementById('discount').value;
    if (promoCode === 'stevekaku') {
        const afterdiscount = document.getElementById('total');
        const prevTotal = parseFloat(afterdiscount.innerText);
        const totalValue = (prevTotal * 20) / 100;
        const updateTotal = prevTotal - totalValue;
        afterdiscount.innerText = updateTotal;
        discount.value = '';
    }
}


