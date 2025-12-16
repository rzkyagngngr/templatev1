document.addEventListener('DOMContentLoaded', () => {
    // ========================================
    // CHART INITIALIZATION
    // ========================================
    const ctx = document.getElementById('mainChart').getContext('2d');

    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(14, 165, 233, 0.5)');
    gradient.addColorStop(1, 'rgba(14, 165, 233, 0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            datasets: [{
                label: 'Revenue',
                data: [12, 19, 15, 25, 22, 30, 28, 35, 20, 40],
                backgroundColor: gradient,
                borderColor: '#0ea5e9',
                borderWidth: 3,
                pointBackgroundColor: '#ffffff',
                pointBorderColor: '#0ea5e9',
                pointBorderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    titleColor: '#111827',
                    bodyColor: '#6B7280',
                    borderColor: '#E5E7EB',
                    borderWidth: 1,
                    padding: 10,
                    boxPadding: 4,
                    usePointStyle: true,
                    titleFont: { family: 'Inter', size: 13 },
                    bodyFont: { family: 'Inter', size: 13 }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { color: '#F3F4F6', drawBorder: false },
                    ticks: { color: '#9CA3AF', font: { family: 'Inter', size: 11 } }
                },
                x: {
                    grid: { display: false },
                    ticks: { color: '#9CA3AF', font: { family: 'Inter', size: 11 } }
                }
            },
            interaction: { mode: 'index', intersect: false }
        }
    });

    // ========================================
    // NAVIGATION - Active State
    // ========================================
    const navBtns = document.querySelectorAll('.nav-btn');

    navBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Remove active from all
            navBtns.forEach(b => b.classList.remove('active'));
            // Add active to clicked
            btn.classList.add('active');

            const target = btn.getAttribute('data-target');
            console.log(`Navigating to: ${target}`);
        });
    });

    // ========================================
    // DROPDOWN - Toggle behavior
    // ========================================
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');

        toggle.addEventListener('click', (e) => {
            e.stopPropagation();
            // Close other dropdowns
            dropdowns.forEach(d => {
                if (d !== dropdown) d.classList.remove('active');
            });
            // Toggle current
            dropdown.classList.toggle('active');
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', () => {
        dropdowns.forEach(d => d.classList.remove('active'));
    });

    // Prevent dropdown menu clicks from closing
    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('click', (e) => e.stopPropagation());
    });

    // Language selector - update display
    document.querySelectorAll('#langDropdown .dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const flag = item.querySelector('.lang-flag').textContent;
            const langText = item.textContent.trim().split(' ')[1] || 'EN';
            const langCode = langText.substring(0, 2).toUpperCase();

            // Update toggle display
            const toggle = document.querySelector('#langDropdown .dropdown-toggle');
            toggle.querySelector('.lang-flag').textContent = flag;
            toggle.querySelector('.lang-code').textContent = langCode;

            // Update active state
            document.querySelectorAll('#langDropdown .dropdown-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Close dropdown
            document.getElementById('langDropdown').classList.remove('active');
        });
    });

    // ========================================
    // SUBMENU - Stay open when hovering submenu panel
    // ========================================
    const allNavBtns = document.querySelectorAll('.nav-btn');

    allNavBtns.forEach(btn => {
        let hideTimeout;
        const submenu = btn.querySelector('.submenu');

        // Function to show submenu
        const showSubmenu = () => {
            clearTimeout(hideTimeout);
            // Close all other submenus immediately
            allNavBtns.forEach(otherBtn => {
                if (otherBtn !== btn) {
                    otherBtn.classList.remove('submenu-active');
                }
            });
            btn.classList.add('submenu-active');
        };

        // Function to hide submenu with delay
        const hideSubmenu = () => {
            hideTimeout = setTimeout(() => {
                btn.classList.remove('submenu-active');
            }, 100);
        };

        // Button events
        btn.addEventListener('mouseenter', showSubmenu);
        btn.addEventListener('mouseleave', hideSubmenu);

        // Submenu events - keep open when hovering submenu
        if (submenu) {
            submenu.addEventListener('mouseenter', () => {
                clearTimeout(hideTimeout);
            });
            submenu.addEventListener('mouseleave', hideSubmenu);
        }
    });

    // ========================================
    // NAV LAYOUT TOGGLE - Smooth fly animation
    // ========================================
    const floatingNav = document.getElementById('floatingNav');
    const toggleBtn = document.getElementById('navToggleBtn');
    let currentLayout = 'bottom'; // 'bottom', 'left', 'right'

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            // Fade out current position
            floatingNav.style.opacity = '0';
            floatingNav.style.transition = 'opacity 0.2s ease, transform 0.3s ease';

            setTimeout(() => {
                // Reset all inline styles first
                floatingNav.style.removeProperty('bottom');
                floatingNav.style.removeProperty('top');
                floatingNav.style.removeProperty('left');
                floatingNav.style.removeProperty('right');
                floatingNav.style.removeProperty('transform');

                // Remove all layout classes
                floatingNav.classList.remove('vertical', 'left', 'right');

                if (currentLayout === 'bottom') {
                    // Move to vertical left
                    floatingNav.classList.add('vertical', 'left');
                    toggleBtn.querySelector('.material-icons-round').textContent = 'view_week';
                    currentLayout = 'left';
                } else if (currentLayout === 'left') {
                    // Move to vertical right
                    floatingNav.classList.add('vertical', 'right');
                    currentLayout = 'right';
                } else {
                    // Move back to bottom
                    toggleBtn.querySelector('.material-icons-round').textContent = 'view_agenda';
                    currentLayout = 'bottom';
                }

                // Fade in at new position
                requestAnimationFrame(() => {
                    floatingNav.style.opacity = '1';
                });
            }, 200);
        });
    }
});
