function showForm(planName, price) {
    const formContainer = document.getElementById('formContainercus');
    const planSelect = document.getElementById('selectedPlan');
    const priceSelect = document.getElementById('pricePlan');

    document.getElementById('selectedPlan').innerHTML = planName;
    document.getElementById('namePlan').innerHTML = planName;
    document.getElementById('pricePlan').innerHTML = price;

    formContainer.style.display = 'block';
}



function showPayment(formpt2, currentForm){

    const formContainer1 = document.getElementById('formContainercus');
    const formContainer2 = document.getElementById('formContainerpay');

    formContainer1.style.display = 'none';

    formContainer2.style.display = 'block';
    
}



