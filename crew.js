const crewRoleElement = document.querySelector(".crew-role");
const crewNameElement = document.querySelector(".crew-name");


let crew;


const getCrew = async () => {
  const response = await fetch("crew.json");
  const data = await response.json();
  crew = data.crew;  
    console.group(crew)
};


getCrew();


const displayComanderData = () => {
  crewRoleElement.innerText = crew[0].role;

};