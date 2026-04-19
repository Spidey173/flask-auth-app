// Password strength meter (only on signup page)
document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
        const strengthDiv = document.querySelector('.password-strength');
        const bar = document.createElement('div');
        bar.className = 'strength-bar';
        strengthDiv.appendChild(bar);

        passwordInput.addEventListener('input', function() {
            const val = passwordInput.value;
            let strength = 0;
            if (val.length >= 6) strength++;
            if (val.match(/[a-z]+/)) strength++;
            if (val.match(/[A-Z]+/)) strength++;
            if (val.match(/[0-9]+/)) strength++;
            if (val.match(/[$@#&!]+/)) strength++;

            let width = (strength / 5) * 100;
            let color;
            switch(strength) {
                case 0:
                case 1: color = '#ef4444'; break; // red
                case 2: color = '#f59e0b'; break; // amber
                case 3: color = '#eab308'; break; // yellow
                case 4: color = '#84cc16'; break; // lime
                case 5: color = '#22c55e'; break; // green
                default: color = '#e2e8f0';
            }
            bar.style.width = width + '%';
            bar.style.background = color;
        });
    }

    // Simple client-side validation for signup (optional)
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            const pwd = document.getElementById('password').value;
            if (pwd.length < 6) {
                e.preventDefault();
                alert('Password must be at least 6 characters long.');
            }
        });
    }
});