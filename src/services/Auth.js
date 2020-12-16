function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function login(username, password) {

  await sleep(2000);

  if (username === "amanda@ciobanu.org") {
    return {
      firstName: "Amanda",
      lastName: "Ciobanu",
      email: "amanda@ciobanu.org"
    };
  }

  return null;
}


async function requestPasswordReset(email) {
  await sleep(2000);
}

export  {
  login,
  requestPasswordReset
}