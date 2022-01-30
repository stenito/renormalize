// REMARK check this wehen doing BIDI

const htmlDirection = document.querySelector("html").getAttribute("dir");
let direction;
if (!htmlDirection) {
    direction = "ltr";
} else {
    direction = htmlDirection;
}

// Render all code as it is supposed to be rendered in RTL mode
// BIDI: check!!!
const correctCode = () => {
    let codeTags = document.querySelectorAll("code");
    codeTags.forEach((codeTag) => {
        codeTag.setAttribute("dir", "ltr");
        codeTag.setAttribute("lang", "en");
    });
};

export { direction, correctCode };
