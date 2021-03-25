module.exports = function getData(param) {
  let data;
  if (param === 'Progressive Web App') {
      data = {
          lecturer: ["Joost", "Declan"]
      };
      return data;
  } else if (param === 'Browser Technologies') {
      data = {
          lecturer: ["PPK", "Koop"]
      };
      return data;
  } else if (param === 'CSS To The Rescue') {
      data = {
          lecturer: ["Docent_1", "Docent_2"]
      };
      return data;
  } else if (param === 'Web App From Scratch') {
      data = {
          lecturer: ["Docent_1", "Docent_2", "Docent_3"]
      };
      return data;
  } else if (param === 'Real-Time Web') {
      data = {
          lecturer: ["Docent_1", "Docent_2"]
      };
      return data;
  } else if (param === 'Human Centered Design') {
      data = {
          lecturer: ["Docent_1", "Docent_2"]
      };
      return data;
  } else if (param === 'Meesterproef') {
      data = {
          lecturer: ["Docent_1", "Docent_2"]
      };
      return data;
  }
}