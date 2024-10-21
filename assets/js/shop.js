


document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link.dropdown-toggle');
        const dropdownContent = dropdown.querySelector('.hero-dropdown');

        dropdownLink.addEventListener('mouseenter', function() {
            dropdownContent.classList.add('show');
        });

        dropdownLink.addEventListener('mouseleave', function() {
            dropdownContent.classList.remove('show');
        });

        // Dropdown içərisində olduğunuz zaman onu açıq saxlayın
        dropdownContent.addEventListener('mouseenter', function() {
            dropdownContent.classList.add('show');
        });

        // Dropdown-dan çıxanda gizlədin
        dropdownContent.addEventListener('mouseleave', function() {
            dropdownContent.classList.remove('show');
        });
    });
});
