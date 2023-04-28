const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
    const collapsibleButton = collapsible.querySelector("button");
   
    const toggle = () => {
        if (collapsibleButton.getAttribute("aria-expanded") == "true") {
            closeDropdown();
        } else {
            collapsibleButton.setAttribute("aria-expanded", "true");
            document.addEventListener("click", handleClose);
        }
    };
    

    const handleClose = (event) => {
        if (event.target == collapsibleButton) {
            return;
        }

        closeDropdown();
    };

    const closeDropdown = () => {
        document.removeEventListener("click", handleClose);
        collapsibleButton.setAttribute("aria-expanded", "false");
    };

    collapsibleButton.addEventListener("click", () => toggle());
});