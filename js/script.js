        // Mobile menu toggle
        document.getElementById('mobile-menu-button').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        });

        // Product modal
        const productModal = document.getElementById('product-modal');
        const closeModal = document.getElementById('close-modal');
        
        // Simulate opening modal when clicking on any "Comprar" button
        const buyButtons = document.querySelectorAll('button:contains("Comprar")');
        buyButtons.forEach(button => {
            button.addEventListener('click', function() {
                productModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeModal.addEventListener('click', function() {
            productModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        // Auth modal
        const authModal = document.getElementById('auth-modal');
        const authButton = document.getElementById('auth-btn');
        const closeAuthModal = document.getElementById('close-auth-modal');
        
        authButton.addEventListener('click', function() {
            authModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
        
        closeAuthModal.addEventListener('click', function() {
            authModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });

        // Auth tabs
        const loginTab = document.getElementById('login-tab');
        const registerTab = document.getElementById('register-tab');
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');
        
        loginTab.addEventListener('click', function(e) {
            e.preventDefault();
            loginTab.classList.add('border-l', 'border-t', 'border-r', 'rounded-t', 'text-blue-700');
            loginTab.classList.remove('text-gray-500', 'hover:text-gray-800');
            registerTab.classList.remove('border-l', 'border-t', 'border-r', 'rounded-t', 'text-blue-700');
            registerTab.classList.add('text-gray-500', 'hover:text-gray-800');
            loginForm.classList.remove('hidden');
            registerForm.classList.add('hidden');
        });
        
        registerTab.addEventListener('click', function(e) {
            e.preventDefault();
            registerTab.classList.add('border-l', 'border-t', 'border-r', 'rounded-t', 'text-blue-700');
            registerTab.classList.remove('text-gray-500', 'hover:text-gray-800');
            loginTab.classList.remove('border-l', 'border-t', 'border-r', 'rounded-t', 'text-blue-700');
            loginTab.classList.add('text-gray-500', 'hover:text-gray-800');
            registerForm.classList.remove('hidden');
            loginForm.classList.add('hidden');
        });
        
        // Form submissions
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            this.reset();
        });

        document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login realizado com sucesso!');
            authModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
            document.getElementById('auth-btn').textContent = 'Minha Conta';
        });

        document.getElementById('register-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Cadastro realizado com sucesso! Faça login para continuar.');
            loginTab.click();
            this.reset();
        });
