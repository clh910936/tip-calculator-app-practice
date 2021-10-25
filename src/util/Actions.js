
function onTipSelected(tip, dispatch) {
    console.log(tip);
    dispatch({ type: "setTip", value: tip});
}

function onBillEntered(bill, dispatch) {
    dispatch({ type: "setBill", value: bill });
}

function onPeopleCountUpdate(numPeople, dispatch) {
    dispatch({ type: "setPeopleCount", value: numPeople });
}

export { onTipSelected, onBillEntered, onPeopleCountUpdate };