// =========================================
//  TechRepair — Main JS
// =========================================

// --- Modal ---
const ALL_VIEWS = ['login', 'register', 'register-empresa'];

function openModal(view) {
  document.getElementById('auth-modal').classList.add('open');
  switchModal(view);
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('auth-modal').classList.remove('open');
  document.body.style.overflow = '';
}

function closeModalOutside(e) {
  if (e.target === e.currentTarget) closeModal();
}

function switchModal(view) {
  ALL_VIEWS.forEach(function (v) {
    var el = document.getElementById('modal-' + v);
    if (el) el.classList.toggle('hidden', v !== view);
  });
}

// --- Auth handlers (placeholder — conectar con backend) ---
function handleLogin(e) {
  e.preventDefault();
  var email = document.getElementById('login-email').value;
  var pass  = document.getElementById('login-pass').value;
  console.log('Login:', { email: email, pass: pass });
  alert('Inicio de sesión simulado. Conectar con backend.');
  closeModal();
}

function handleRegister(e) {
  e.preventDefault();
  var name        = document.getElementById('reg-name').value;
  var email       = document.getElementById('reg-email').value;
  var pass        = document.getElementById('reg-pass').value;
  var passConfirm = document.getElementById('reg-pass-confirm').value;

  if (pass !== passConfirm) {
    alert('Las contraseñas no coinciden.');
    return;
  }
  console.log('Register persona:', { name: name, email: email, pass: pass });
  alert('Registro simulado. Conectar con backend.');
  closeModal();
}

function handleRegisterEmpresa(e) {
  e.preventDefault();
  var razon       = document.getElementById('reg-emp-razon').value;
  var cuit        = document.getElementById('reg-emp-cuit').value;
  var email       = document.getElementById('reg-emp-email').value;
  var pass        = document.getElementById('reg-emp-pass').value;
  var passConfirm = document.getElementById('reg-emp-pass-confirm').value;

  if (pass !== passConfirm) {
    alert('Las contraseñas no coinciden.');
    return;
  }
  console.log('Register empresa:', { razon: razon, cuit: cuit, email: email, pass: pass });
  alert('Registro de empresa simulado. Conectar con backend.');
  closeModal();
}

// --- Mobile menu toggle ---
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menu-toggle');
  var navbar = document.getElementById('navbar');

  toggle.addEventListener('click', function () {
    toggle.classList.toggle('active');
    navbar.classList.toggle('mobile-open');
  });

  // Cerrar menú al hacer click en un link
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
      toggle.classList.remove('active');
      navbar.classList.remove('mobile-open');
    });
  });

  // Cerrar modal con Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
});
