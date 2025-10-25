document.addEventListener("DOMContentLoaded", function() {
  // Active nav link
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    link.classList.toggle('active', currentPath.includes(href));
  });

  // Gallery generation demo
  const galleryItems = [
    { caption: "Window Example", imageUrl: "assets/images/demo1.jpg" },
    { caption: "Door Example", imageUrl: "assets/images/demo2.jpg" },
  ];
  const galleryContainer = document.getElementById('gallery-container');
  galleryItems.forEach(item => {
    const div = document.createElement('div');
    div.className = "gallery-item";
    div.innerHTML = `<img src="${item.imageUrl}" width="180"><p>${item.caption}</p>`;
    galleryContainer.appendChild(div);
  });
});

// Contact form validation demo
function validateForm(event) {
  event.preventDefault();
  let isValid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  if (name.value.trim() === "") {
    nameError.textContent = "Please enter your name.";
    nameError.style.display = "block";
    isValid = false;
  } else nameError.style.display = "none";

  if (!email.value.includes('@')) {
    emailError.textContent = "Please enter a valid email.";
    emailError.style.display = "block";
    isValid = false;
  } else emailError.style.display = "none";

  if (message.value.trim() === "") {
    messageError.textContent = "Message cannot be empty.";
    messageError.style.display = "block";
    isValid = false;
  } else messageError.style.display = "none";

  if (isValid) {
    document.getElementById('form-message-success').style.display = 'block';
  }

  return false;
}
