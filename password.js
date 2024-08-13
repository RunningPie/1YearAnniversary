function checkPassword() {
    const correctPassword = '365DaysWithYouAndCounting'; // Change this to your desired password
    const passwordInput = document.getElementById('password-input').value;
    const errorMessage = document.getElementById('error-message');

    if (passwordInput === correctPassword) {
        window.location.href = 'https://bit.ly/365DaysWithYouAndCounting'; // Redirect to homepage if password is correct
    } else {
        errorMessage.style.display = 'block';
    }
}
