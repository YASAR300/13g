document.addEventListener('DOMContentLoaded', () => {
    const userInfoForm = document.getElementById('userInfoForm');

    userInfoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();

        if (name && email) {
            
            const userInfo = {
                name: name,
                email: email
            };

            
            localStorage.setItem('userInfo', JSON.stringify(userInfo));

            
            userInfoForm.reset();

            
            alert('User  information saved successfully!');
        } else {
            alert('Please fill in all fields.');
        }
    });
});