'use strict'

// Declaring variables

const planType = document.getElementsByClassName('hover-onmouse');
const showButton = document.getElementsByClassName('hidden');
const showRibbon = document.getElementsByClassName('ribbon');
const changePlanNameColor = document.getElementsByClassName('plan-name');
const changeParaColor = document.getElementsByClassName('small');
const changePriceColor = document.getElementsByClassName('price');
const costColor = document.getElementsByClassName('cost');
const hideSymbol = document.getElementsByClassName('currency');
const choosePlan = document.getElementsByClassName('btn');




for (let i = 0; i <= 2; i++) {

    // Changing the styles dynamically on mouse hover

    planType[i].addEventListener('mouseover', function handleChange() {

        showButton[i].style.visibility = 'visible';
        changePlanNameColor[i].style.color = '#0d6efd';
        changeParaColor[i].style.color = '#000';
        changePriceColor[i].style.color = '#0d6efd';
        costColor[i].style.color = '#000';
        hideSymbol[i].style.visibility = 'hidden';


        //To display the ribbon (Best Seller) 
        if (i === 1) {
            showRibbon[i].style.visibility = 'visible';
        }

        // Changing the styles dynamically or setting them back to default state on mouse out

        planType[i].addEventListener('mouseout', function handleChange() {

            showButton[i].style.visibility = 'hidden';
            changePlanNameColor[i].style.color = '#899499';
            changeParaColor[i].style.color = '#899499';
            changePriceColor[i].style.color = '#899499';
            costColor[i].style.color = '#899499';
            hideSymbol[i].style.visibility = 'visible';
            showRibbon[i].style.visibility = 'hidden';
        });

    });
}





