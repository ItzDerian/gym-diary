const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const date_of_birth  = document.querySelector('#DOB-signup').value.trim();
  const height = document.querySelector('#height-signup').value.trim();
  const weight = document.querySelector('#weight-signup').value.trim();

  if (name && email && password && date_of_birth && height && weight ) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password, date_of_birth , weight, height }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/')
      // document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
