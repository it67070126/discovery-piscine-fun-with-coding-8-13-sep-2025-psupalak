function toggleDescription(logoId, descId) {
    const logo = document.getElementById(logoId);
    const desc = document.getElementById(descId);

    logo.addEventListener("click", () => {
        desc.classList.toggle("show");
    });
}

// ใช้งานกับ Python
toggleDescription("python-logo", "python-desc");

// ใช้งานกับ Java
toggleDescription("java-logo", "java-desc");

toggleDescription("c-logo", "c-desc");

toggleDescription("html-logo", "html-desc");