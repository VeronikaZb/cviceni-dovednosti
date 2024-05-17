
function updateSkill(idElement, hodnota) {
    const element = document.querySelector(`#${idElement}`);
    const progressElement = element.querySelector('.skill__progress');
    progressElement.style.width = `${hodnota / 100}%`;
    element.querySelector('.skill__value').textContent = `${hodnota} / 100`;
  }
  
  const htmlUroven = prompt('Zadejte svou úroveň dovednosti HTML (0-100):');
  const cssUroven = prompt('Zadejte svou úroveň dovednosti CSS (0-100):');
  const javascriptUroven = prompt('Zadejte svou úroveň dovednosti JavaScript (0-100):');
  
  updateSkill('skill1', htmlUroven);
  updateSkill('skill2', cssUroven);
  updateSkill('skill3', javascriptUroven);

  console.log('funguju!');