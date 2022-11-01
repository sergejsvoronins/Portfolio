import {ProjectRepo} from "./modules/projectrepo";



let projectContainerEl = document.getElementById("projectsContainer");
projectContainerEl.className = "projects__box";

let copyWebb = new ProjectRepo(
    "Design copy",
    "link",
    "Here I make copy of Sebastian webbpage",
    ["html", "css", "sass", "github"],
    "Sergejs Voronins",
    "2022-10-01"
    );



   let projectList = [copyWebb];

function createProject (project){

        let container = document.createElement("div");       
        let projectHeader = document.createElement("h2");
        let projectImgCont = document.createElement("div")
        let projectImg = document.createElement("img")
        let projectLink = document.createElement("a");     
        let projectDescription = document.createElement("p");       
        let projectTechnique = document.createElement("div");       
        let projectAuthor = document.createElement("h5");
        let projectDate = document.createElement("h5");
    
        projectContainerEl.appendChild(container);
        container.appendChild(projectHeader);
        container.appendChild(projectImgCont);
        projectImgCont.appendChild(projectImg);
        container.appendChild(projectLink);
        container.appendChild(projectDescription);
        container.appendChild(projectTechnique);
        container.appendChild(projectAuthor);
        container.appendChild(projectDate);

        container.className = "projects__box__container";
        projectHeader.className = "projects__box__container__name";
        projectImgCont.className = "projects__box__container__imgBox";
        projectLink.className = "projects__box__container__link";
        projectDescription.className = "projects__box__container__description";
        projectTechnique.className = "projects__box__container__technique";
        projectAuthor.className = "projects__box__container__author";
        projectDate.className = "projects__box__container__date";


        projectHeader.innerHTML = project.name;
        projectLink.innerHTML = project.url;
        projectDescription.innerHTML = project.description;
        for (let i = 0; i < project.technique.length; i++) {
            if(project.technique[i]==="html"){
                projectTechnique.innerHTML += "<i class='fa-brands fa-html5'></i>";
            }
            else if(project.technique[i]==="css"){
                projectTechnique.innerHTML += "<i class='fa-brands fa-css3-alt'></i>";
            }
            else if(project.technique[i]==="js"){
                projectTechnique.innerHTML += "<i class='fa-brands fa-js'></i>";
            }
            else if(project.technique[i]==="sass"){
                projectTechnique.innerHTML += "<i class='fa-brands fa-sass'></i>";
            }
            else if(project.technique[i]==="github"){
                projectTechnique.innerHTML += "<i class='fa-brands fa-github'></i>";
            }            
        }
        projectAuthor.innerHTML = project.author;
        projectDate.innerHTML = project.date;
        
}
for (let i = 0; i < projectList.length; i++) {
    createProject(projectList[i]);
    
}

    
    



