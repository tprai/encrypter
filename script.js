function output(output) {
  var texted = document.getElementById('terminal');
  texted.innerHTML += '<br>== ' + output;
  texted.scrollTop = texted.scrollHeight;
}
function run(inputRaw) {
  input = inputRaw.trim().toLowerCase();
  if (input.slice(0,3) == 'run') {
    input = input.slice(3).trim();
    if (input.indexOf("death") == 0) {
      output('You died lol');
    }
  }
}
