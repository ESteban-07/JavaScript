// const getData = fetch('https://api.escuelajs.co/api/v1/products')
//   .then((resp) => {
//     if (!resp.ok) {
//       throw new Error('Network response was not ok');
//     }

//     return resp.json();
//   })
//   .then((data) => {
//     const only10Elements = data.filter((item, idx) => idx < 10);
//     const firstElement = only10Elements[0];

//     return firstElement;
//   })
//   .catch((error) => {
//     console.error('There was a problem with the fetch operation: ', error);
//   });

const getResponse = async () => {
  try {
    const resp = await fetch('https://api.escuelajs.co/api/v1/products');

    if (!resp.ok) {
      throw new Error(`HTTP error! status: ${resp.status}`);
    }

    const data = await resp.json(); // Need to await for JSON parsing
    console.log(data);
    return data;
  } catch (error) {
    console.log('second error: ', error);
  }
};

getResponse();
