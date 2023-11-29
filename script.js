function clearName() {
    if (document.getElementById('nameField').value == 'Give a suggestion') {
        document.getElementById('nameField').value = '';
    }
}
function resetName() {
    if (document.getElementById('nameField').value == '') {
        document.getElementById('nameField').value = 'Give a suggestion';
    }
}
function clearEmail() {
    if (document.getElementById('emailField').value == 'youremail@gmail.com') {
        document.getElementById('emailField').value = '';
    }
}
function resetEmail() {
    if (document.getElementById('emailField').value == '') {
        document.getElementById('emailField').value = 'youremail@gmail.com';
    }
}