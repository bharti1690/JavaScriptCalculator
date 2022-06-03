$(document).ready(function() {
  var res = 0;
  var prevValue = 0;
  var operation = null;
  var currentValue = '0';
  $('#display').val(res);
    
$('.btnNum').on('click',function(e){ 
    var val = e.target.value;

    if(!isNaN(val)){
           var displayValue = val.toString();
           if(currentValue === '0')
            {
                currentValue=val;
            }
            else{
                currentValue = currentValue + val;
            }
    }
    else if(isOperator(val)){
       prevValue = parseFloat(currentValue);
       operation = val;
       currentValue = '';
    }
    else if (val === '=') {
      currentValue = operate(prevValue, currentValue, operation);
      currentValue = (currentValue=== undefined || currentValue === null) ? '0':currentValue;
      operation = null;
    }
    else if (val === '%'){
      currentValue = parseFloat(currentValue)/ 100;
    }
    else if(val === 'pi'){
      currentValue = Math.PI
    }
    else if(val === 'cos')
    {
        currentValue = Math.cos(currentValue);
    }
    else if(val === 'sin')
    {
        currentValue = Math.sin(currentValue);
    }
    else if(val === 'tan')
    {
        currentValue = Math.tan(currentValue);
    }
    else if(val === 'exp'){
        currentValue = Math.exp(currentValue);
    }
    else if(val === 'sqrt'){
        currentValue = Math.sqrt(currentValue);
    }
    else if(val === 'x2'){
        currentValue = eval(currentValue) * eval(currentValue);
    }
    else if(val === 'log'){
        currentValue = Math.log(currentValue);
    }
    else if(val=== '.' || val === '(' || val === ')'){
        currentValue += val;
    }
    else if(val === '+-'){
        if(currentValue.substring(0, 1) == "-")
		currentValue = currentValue.substring(1, currentValue.length)
	    else
		currentValue = "-" + currentValue
    }
   
    $('#display').val(currentValue);
})

isOperator = function(value) {
  return value === '/' || value === '*' || value === '+' || value === '-' ;
};
    
operate = function(pVal,cVal,operator){
    pVal = parseFloat(pVal);
    cVal = parseFloat(cVal);
    
    if(operator === '+'){
        return pVal + cVal;
    }else if(operator === '-'){
        return pVal - cVal;
    }else if(operator === '*'){
        return pVal * cVal;
    }else if(operator === '/'){
        return pVal / cVal ;
    }
};
    
 $('.btnTopRow').on('click',function(){  
     currentValue = '0'; 
     $('#display').val(currentValue);
   })
                      
});