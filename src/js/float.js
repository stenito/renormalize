// JS to correct float behavior and margins on floated elements

const correctFloat = (nodeTypes, direction) => {
    const elements = document.querySelectorAll(nodeTypes);

    elements.forEach((element) => {
        if (!direction) {
            direction = document.querySelector("html").getAttribute("dir");
        }
        if (direction == "rtl") {
            if (getComputedStyle(element).float == "left") {
                element.style.float = "right";
            } else if (getComputedStyle(element).float == "right") {
                element.style.float = "left";
            }
        } else if (getComputedStyle(element).float != "none") {
            element.style.float = getComputedStyle(element).float;
        }
    });
};

export { correctFloat };
