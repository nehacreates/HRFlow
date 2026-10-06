$(document).ready(function () {

    // LOGIN FLIP
    $('#showLoginBtn').on('click', function (e) {
        e.preventDefault();
        $('#portalCard').addClass('flipped');
    });

    // BACK TO WELCOME
    $('#backToWelcome').on('click', function () {
        $('#portalCard').removeClass('flipped');
    });

    // OPEN REGISTER POPUP
    $('#welcomeRegisterBtn, #registerLink').on('click', function (e) {
        e.preventDefault();
        $('#registerModal').addClass('active');
        $('body').addClass('modal-open');
    });

    // OPEN FORGOT PASSWORD POPUP
    $('#forgotPassLink').on('click', function (e) {
        e.preventDefault();
        $('#forgotPassModal').addClass('active');
        $('body').addClass('modal-open');
    });

    // CLOSE POPUP
    $(document).on('click', '.closeModalBtn', function (e) {
        e.preventDefault();
        e.stopPropagation();

        $(this).closest('.modal-overlay').removeClass('active');

        if (!$('.modal-overlay.active').length) {
            $('body').removeClass('modal-open');
        }
    });

    // CLOSE ON OUTSIDE CLICK
    $('.modal-overlay').on('click', function (e) {
        if (e.target === this) {
            $(this).removeClass('active');

            if (!$('.modal-overlay.active').length) {
                $('body').removeClass('modal-open');
            }
        }
    });

    // CLOSE WITH ESC
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
            $('.modal-overlay.active').removeClass('active');
            $('body').removeClass('modal-open');
        }
    });

    // PASSWORD SHOW / HIDE
    $('.toggle-password').on('click', function () {
        const input = $(this).siblings('input');

        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            $(this).removeClass('fa-eye').addClass('fa-eye-slash');
        } else {
            input.attr('type', 'password');
            $(this).removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });

    // LOGIN  ⭐ FIXED — ab "return" page kholta hai (jahan se aaya tha)
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        const username = $('#loginId').val().trim();
        const password = $('#password').val();
        const captchaChecked = $('#captcha').is(':checked');

        if (!captchaChecked) {
            $('#captchaError').text("Please verify you're not a robot.");
            return;
        }

        $('#captchaError').text('');

        if (!username || !password) {
            return;
        }

        // Login karne wale ka naam save hoga
        localStorage.setItem('loggedInUser', username);

        // login se pehle jis page pe tha, wahi wapas kholo
        var params = new URLSearchParams(location.search);
        var to = params.get('return');
        to = (to && to.endsWith('.html')) ? to : 'dashboard.html';

        showToast(
            'Login Successful',
            'Redirecting to your dashboard...',
            'success'
        );

        setTimeout(function () {
            window.location.href = to;
        }, 1200);
    });

    // REGISTER
    $('#registerForm').on('submit', function (e) {
        e.preventDefault();

        const modal = $('#registerModal');

        modal.removeClass('active');
        $('body').removeClass('modal-open');

        showToast(
            'Registration Successful',
            'Your account has been created. Please login.',
            'success'
        );

        this.reset();
    });

    // RESET PASSWORD
    $('#resetForm').on('submit', function (e) {
        e.preventDefault();

        const modal = $('#forgotPassModal');

        modal.removeClass('active');
        $('body').removeClass('modal-open');

        showToast(
            'Reset Link Sent',
            'Please check your email for the password reset link.',
            'success'
        );

        this.reset();
    });

    // PROFESSIONAL TOAST
    function showToast(title, message, type = 'success') {

        const icon = type === 'error'
            ? 'fa-circle-exclamation'
            : 'fa-circle-check';

        const toast = $(`
            <div class="toast-card ${type}">
                <div class="toast-icon">
                    <i class="fa-solid ${icon}"></i>
                </div>

                <div class="toast-body">
                    <div class="toast-title">${title}</div>
                    <p class="toast-msg">${message}</p>
                </div>

                <button class="toast-close" type="button">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `);

        $('#toastContainer').append(toast);

        setTimeout(function () {
            toast.addClass('show');
        }, 50);

        toast.find('.toast-close').on('click', function () {
            toast.removeClass('show');

            setTimeout(function () {
                toast.remove();
            }, 500);
        });

        setTimeout(function () {
            toast.removeClass('show');

            setTimeout(function () {
                toast.remove();
            }, 500);
        }, 4000);
    }

});
