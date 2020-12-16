function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function login(email, password) {

  await sleep(2000);

  if (email === "amanda@ciobanu.org") {
    return {
      firstName: "Amanda",
      lastName: "Ciobanu",
      email: "amanda@ciobanu.org"
    };
  }

  return null;
}

async function register(firstName, lastName, email, password) {

  await sleep(2000);

  if (email === "amanda@ciobanu.org") {
    return null;
  }

    return {
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
}


async function requestPasswordReset(email) {
  await sleep(2000);
}

export  {
  login,
  requestPasswordReset,
  register
}