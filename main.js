//functionready
$(function() {
  //form on submit
  $('#calculator').on('submit', function(evnt){
    //keeps page from reloading
    evnt.preventDefault();
    //stores form elements values
    let gender = $('#gender').val();
    let inputheight = $('#height').val();
    let inputweight = $('#weight').val();
    let inputage = $('#age').val();
    let gl = $('#gainorlose').val();
    let active = $('#activity').val();
    //stores calculations for shorter syntax referencing
    let converted = calculateBMR(gender,inputheight,inputweight,inputage);
    let recalculate = activity();
    //fixes the decimals to 2 decimal places
    let d = converted;
    let decimal = d.toFixed(2);
    let d2 = recalculate;
    let decimalfix = d2.toFixed(2);
    //BMR Calculation 
    function calculateBMR(gender,height,weight,age){
      if (gender === 'female'){
        return(655 + (4.3 * weight) + (4.3 * height) - (4.7 * age));
      }else if (gender === 'male'){
        return(65 + (6.2 * weight) + (12.7 * height) - (6.8 * age));
      }
  };
     function activity(){
      if (active === 'active' && gl === 'gain'){
        return( converted + 800);
      }else if (active === 'active' && gl === 'lose'){
        return(converted + 500);
      }else if (active === 'inn' && gl === 'gain'){
        return( converted + 300);
      }else if (active === 'inn' && gl === 'lose'){
        return(converted - 500);
      } 
  };
  //function for Calorie Calculator output
      function messageToUser() {
        document.getElementById("calorie-output").innerHTML =  
          'You currently weigh ' + inputweight + ' pounds.' + ' Your current height is ' + inputheight + ' inches.' + ' your current age is ' + inputage + ' years. ' + ' Based on Your BMR(Basic Metabolic Rate), You should consume   ' + decimal + ' calories daily. '+ 
          ' Based on your selection to gain or lose weight and how active you are. Your suggested calorie intake will be ' + decimalfix + ' calories. ';
      };

  //calls function for Calorie Calculator output
      messageToUser();


});

});





