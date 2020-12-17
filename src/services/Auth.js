const baseApiUrl = "https://assigment-api-1.herokuapp.com";

async function post(body, func) {
  try {
    const response = await fetch(`${baseApiUrl}/${func}`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (response.status === 200) {
      return response.json();
    }

  } catch(e) {
    // catch any error
  }

  return null;
}

async function login(email, password) {

  const body = {
    email, password
  };

  const result = await post(body, 'login');
  return result;
}

async function register(firstName, lastName, email, password) {

  const body = {
    firstName, lastName, email, password
  };

  const result = await post(body, 'register');
  return result;
}


async function requestPasswordReset(email) {

  const body = {
    email
  };

  const result = await post(body, 'reset');
  return result && result.sent;
}

export  {
  login,
  requestPasswordReset,
  register
}