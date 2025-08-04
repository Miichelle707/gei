document.addEventListener('DOMContentLoaded', function() {
    const accountLink = document.querySelector('.account-link');
    const profileDropdown = document.querySelector('.profile-dropdown');

    accountLink.addEventListener('click', function(e) {
        e.preventDefault();
        profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function(e) {
        if (!accountLink.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileDropdown.style.display = 'none';
        }
    });
});
