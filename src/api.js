export const loadImage = (data) =>
  fetch(data)
    .then((r) => {
      if (r.status === 200) return r;
      else throw new Error(r);
    })
    .catch((err) => console.log(err));
