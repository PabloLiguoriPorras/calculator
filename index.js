const display = document.getElementById('display');
let expression = '';

function append(char) 
{
  if (display.innerText === '0' && char !== '.') expression = '';
  expression += char;
  display.innerText = expression;
}

function clearDisplay() 
{
  expression = '';
  display.innerText = '0';
}

function deleteE() 
{
  expression = expression.slice(0, -1);
  display.innerText = expression || '0';
}

function calculate() 
{
  try 
  {
    expression = eval(expression).toString();
    display.innerText = expression;
  } 
  catch 
  {
    display.innerText = 'Error';
    expression = '';
  }
}