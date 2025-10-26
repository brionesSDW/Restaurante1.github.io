export function agregarCategoria(nombreCategoria, idCategoria) {
    const contenedor = document.getElementById("menu-container");

    if (!contenedor) {
        console.error('No se encontró el contenedor con id "menu-container".');
        return;
    }

    if (document.getElementById(idCategoria)) {
        console.warn(`Ya existe una categoría con el id "${idCategoria}".`);
        return;
    }

    const seccion = document.createElement("section");
    seccion.className = "main-section-p";
    seccion.setAttribute("aria-label", nombreCategoria);
    seccion.id = idCategoria;

    const titulo = document.createElement("h2");
    titulo.textContent = nombreCategoria;

    seccion.appendChild(titulo);
    contenedor.appendChild(seccion);
}

export function agregarProducto(categoriaId, datosProducto) {
    const seccion = document.getElementById(categoriaId);

    if (!seccion) {
        console.error(`No se encontró la categoría con ID "${categoriaId}"`);
        return;
    }

    const articulo = document.createElement("article");
    articulo.className = "Producto";

    articulo.innerHTML = `
        <img src="${datosProducto.imagen}" alt="${datosProducto.nombre}" title="${datosProducto.titulo}" loading="lazy">
        <h3>${datosProducto.nombre}</h3>
        <strong>${datosProducto.precio}</strong>
        <p>${datosProducto.descripcion}</p>
        <ul>
            ${datosProducto.opciones.map(op => `<li>${op}</li>`).join('')}
        </ul>
    `;

    seccion.appendChild(articulo);
}

function actualizarSubmenu() {
    const submenu = document.querySelector(".submenu");
    if (!submenu) return;

    submenu.innerHTML = "";

    const categorias = document.querySelectorAll(".main-section-p");
    categorias.forEach(categoria => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = `#${categoria.id}`;
        a.textContent = categoria.querySelector("h2").textContent;
        
        a.addEventListener("click", () => {
            if (window.innerWidth < 768) {
                submenu.classList.remove("submenu-abierto");
                document.querySelector(".hd-nav").classList.remove("nav-abierto");
                document.querySelector(".hd-bn-hamburguesa").classList.remove("activo");
            }
        });
        
        li.appendChild(a);
        submenu.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const toggleModeBtn = document.querySelector(".hd-bn-modos");
    const toggleMenuBtn = document.querySelector(".hd-bn-hamburguesa");
    const nav = document.querySelector(".hd-nav");

    function applyTheme(theme) {
        if (theme === "dark") {
            body.classList.add("dark");
        } else {
            body.classList.remove("dark");
        }
    }

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    applyTheme(initialTheme);

    toggleModeBtn.addEventListener("click", () => {
        const isDark = body.classList.contains("dark");
        const newTheme = isDark ? "light" : "dark";

        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    });

    toggleMenuBtn.addEventListener("click", () => {
        nav.classList.toggle("nav-abierto");
        toggleMenuBtn.classList.toggle("activo");
    });

    const categoriasItem = document.querySelector(".hd-nav-ul-li:nth-child(2)");
    const submenu = categoriasItem.querySelector(".submenu");
    const categoriasLink = categoriasItem.querySelector(".hd-nav-ul-li-a");

    categoriasLink.addEventListener("click", (e) => {
        if (window.innerWidth < 768) {
            e.preventDefault();
            submenu.classList.toggle("submenu-abierto");
        }
    });

    document.addEventListener("click", (e) => {
        if (window.innerWidth < 768) {
            if (!categoriasItem.contains(e.target) && !toggleMenuBtn.contains(e.target)) {
                submenu.classList.remove("submenu-abierto");
            }
            if (!nav.contains(e.target) && !toggleMenuBtn.contains(e.target)) {
                nav.classList.remove("nav-abierto");
                toggleMenuBtn.classList.remove("activo");
            }
        }
    });

    agregarCategoria("Categoría 1", "C1");
    agregarCategoria("Categoría 2", "C2");
    agregarCategoria("Categoría 3", "C3");

    agregarProducto("C1", {
        imagen: "Public/assets/images/Img-Ejempl.jpg",
        nombre: "Platillo Especial",
        titulo: "Platillo Especial",
        precio: "$12.500",
        descripcion: "Delicioso platillo con ingredientes frescos y sabor casero.",
        opciones: ["Opción 1", "Opción 2", "Opción 3"]
    });

    agregarProducto("C1", {
        imagen: "Public/assets/images/Img-Ejempl.jpg",
        nombre: "Platillo Especial",
        titulo: "Platillo Especial",
        precio: "$12.500",
        descripcion: "Delicioso platillo con ingredientes frescos y sabor casero.",
        opciones: ["Opción 1", "Opción 2", "Opción 3"]
    });

    agregarProducto("C1", {
        imagen: "Public/assets/images/Img-Ejempl.jpg",
        nombre: "Platillo Especial",
        titulo: "Platillo Especial",
        precio: "$12.500",
        descripcion: "Delicioso platillo con ingredientes frescos y sabor casero.",
        opciones: ["Opción 1", "Opción 2", "Opción 3"]
    });

    agregarProducto("C1", {
        imagen: "Public/assets/images/Img-Ejempl.jpg",
        nombre: "Platillo Especial",
        titulo: "Platillo Especial",
        precio: "$12.500",
        descripcion: "Delicioso platillo con ingredientes frescos y sabor casero.",
        opciones: ["Opción 1", "Opción 2", "Opción 3"]
    });

    agregarProducto("C2", {
        imagen: "Public/assets/images/Img-Ejempl.jpg",
        nombre: "Platillo Especial",
        titulo: "Platillo Especial",
        precio: "$12.500",
        descripcion: "Delicioso platillo con ingredientes frescos y sabor casero.",
        opciones: ["Opción 1", "Opción 2", "Opción 3"]
    });

    agregarProducto("C2", {
        imagen: "Public/assets/images/Img-Ejempl.jpg",
        nombre: "Platillo Especial",
        titulo: "Platillo Especial",
        precio: "$12.500",
        descripcion: "Delicioso platillo con ingredientes frescos y sabor casero.",
        opciones: ["Opción 1", "Opción 2", "Opción 3"]
    });

    agregarProducto("C2", {
        imagen: "Public/assets/images/Img-Ejempl.jpg",
        nombre: "Platillo Especial",
        titulo: "Platillo Especial",
        precio: "$12.500",
        descripcion: "Delicioso platillo con ingredientes frescos y sabor casero.",
        opciones: ["Opción 1", "Opción 2", "Opción 3"]
    });

    agregarProducto("C2", {
        imagen: "Public/assets/images/Img-Ejempl.jpg",
        nombre: "Platillo Especial",
        titulo: "Platillo Especial",
        precio: "$12.500",
        descripcion: "Delicioso platillo con ingredientes frescos y sabor casero.",
        opciones: ["Opción 1", "Opción 2", "Opción 3"]
    });

    agregarProducto("C3", {
        imagen: "Public/assets/images/Img-Ejempl.jpg",
        nombre: "Platillo Especial",
        titulo: "Platillo Especial",
        precio: "$12.500",
        descripcion: "Delicioso platillo con ingredientes frescos y sabor casero.",
        opciones: ["Opción 1", "Opción 2", "Opción 3"]
    });

    agregarProducto("C3", {
        imagen: "Public/assets/images/Img-Ejempl.jpg",
        nombre: "Platillo Especial",
        titulo: "Platillo Especial",
        precio: "$12.500",
        descripcion: "Delicioso platillo con ingredientes frescos y sabor casero.",
        opciones: ["Opción 1", "Opción 2", "Opción 3"]
    });

    agregarProducto("C3", {
        imagen: "Public/assets/images/Img-Ejempl.jpg",
        nombre: "Platillo Especial",
        titulo: "Platillo Especial",
        precio: "$12.500",
        descripcion: "Delicioso platillo con ingredientes frescos y sabor casero.",
        opciones: ["Opción 1", "Opción 2", "Opción 3"]
    });

    agregarProducto("C3", {
        imagen: "Public/assets/images/Img-Ejempl.jpg",
        nombre: "Platillo Especial",
        titulo: "Platillo Especial",
        precio: "$12.500",
        descripcion: "Delicioso platillo con ingredientes frescos y sabor casero.",
        opciones: ["Opción 1", "Opción 2", "Opción 3"]
    });

    actualizarSubmenu();
});
