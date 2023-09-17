document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const proyectos = document.querySelectorAll(".proyecto");
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
        
        proyectos.forEach((proyecto) => {
          const categories = proyecto.classList;
          if (filter === "all" || categories.contains(filter)) {
            proyecto.style.display = "block";
          } else {
            proyecto.style.display = "none";
          }
        });
      });
    });
  });
  