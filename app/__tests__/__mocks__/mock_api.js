// this is just a fake module to simulate interacting with a server

// simulate the network request time...
const sleep = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

async function loginRequest() {
  await sleep(1000);
  return { data: { access_token: `fake_token` } };
}

export { loginRequest };
