

class ProjectRepo{
    constructor(name, url, description, technique, author, date){
        this.name = name;
        this.url = url;
        this.description = description;
        this.technique = technique;
        this.author = author;
        this.date = date;
    }
}

let projectContainerEl = document.getElementById("projectsContainer");
projectContainerEl.className = "projectContainer";

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
        let projectLink = document.createElement("a");     
        let projectDescription = document.createElement("p");       
        let projectTechnique = document.createElement("div");       
        let projectAuthor = document.createElement("h5");
        let projectDate = document.createElement("h5");
    
        projectContainerEl.appendChild(container);
        container.appendChild(projectHeader);
        container.appendChild(projectLink);
        container.appendChild(projectDescription);
        container.appendChild(projectTechnique);
        container.appendChild(projectAuthor);
        container.appendChild(projectDate);

        container.className = "container";
        projectHeader.className = "container__name";
        projectLink.className = "container__link";
        projectDescription.className = "container__description";
        projectTechnique.className = "container__technique";
        projectAuthor.className = "container__author";
        projectDate.className = "container__date";


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

    
    



