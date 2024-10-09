test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  return fetchData().catch(error => expect(error).toMatch('error'));
});

test('the data resolves to peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails rejects with an error', async () => {
  await expect(fetchData()).rejects.toMatch('error'); // Fails
});

const fetchData = () => { 
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("peanut butter");
          // reject("error")
      }, 300);
  });
};