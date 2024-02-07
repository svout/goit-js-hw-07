document.getElementById('name-input').addEventListener('input', function(){
    let intualValue = this.value.trim();

    let nameOutput = document.getElementById('name-output');

    nameOutput.textContent = intualValue || 'Anonymous';
})

    