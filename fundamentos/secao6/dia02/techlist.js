const techList = (techs, person) => {
  if (techs.length === 0) return 'Vazio!';

  const techsSorted = techs.sort();
  const techsListed = [];

  for (let index = 0; index < techsSorted.length; index += 1) {
    techsListed.push({ 
        tech: techsSorted[index],
        name: person,
    });
  }

  return techsListed;
};

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
module.exports = techList;