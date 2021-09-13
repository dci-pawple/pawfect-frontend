const values = { name: "fero", age: "32", kids: "" };

const realValues = Object.keys(values)
  .filter((item) => values[item] !== "")
  .reduce((acc, item) => {
    return { ...acc, [item]: values[item] };
  }, {});

console.log(realValues);
