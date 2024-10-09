test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

const fetchData = () => { 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("peanut butter");
            // reject("error")
        }, 300);
    });
};