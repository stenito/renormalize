export const fontAdjust = (nodeTypes) => {
    const defaultNodeType = "[data-font-adjust-size]";
    if (!nodeTypes) {
        nodeTypes = defaultNodeType;
    } else {
        nodeTypes = defaultNodeType + ", " + nodeTypes;
    }
    const elementsToResize = document.querySelectorAll(nodeTypes);
    elementsToResize.forEach((element) => {
        let elementFontSize = getComputedStyle(element).fontSize.slice(0, -2);
        if (element.scrollWidth > element.clientWidth) {
            while (element.scrollWidth > element.clientWidth) {
                elementFontSize = elementFontSize - 2;
                element.style.fontSize = elementFontSize + "px";
            }
        }
    });
};
