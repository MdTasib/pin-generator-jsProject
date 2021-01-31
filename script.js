function generateNumber() {
    const number = (Math.random() * 10000 + '').split('.')[0];
    document.getElementById('generateInput').value = number;
}
const keyButton = document.querySelectorAll('.button');
keyButton.forEach(button => {
    button.addEventListener('click', function () {
        const number = button.innerHTML;
        document.getElementById('calculateInput').value += number.toString();
    })
})

// submit
function submit() {
    const generateInput = document.getElementById('generateInput').value;
    const calculateInput = document.getElementById('calculateInput').value;

    const notifyRight = document.getElementById('notify-right');
    const notifyWrong = document.getElementById('notify-worng');
    if (generateInput == calculateInput) {
        notifyRight.style.display = 'block';
        notifyWrong.style.display = 'none';

    } else {
        notifyWrong.style.display = 'block';
        notifyRight.style.display = 'none';
    }

    document.getElementById('generateInput').value = '';
    document.getElementById('calculateInput').value = '';

}