// JS to set an spect ratio to an element. Use with data-reno-aspect="<aspect ratio>"
// COMMENT remove from renormalize?

const aspects = {
    // A
    AP: 1.4142857143,
    AL: 0.7070707071,

    // B
    BP: 1.4163424125,
    BL: 0.706043956,

    // 4:3
    43: 0.75,
    34: 1.3333333333,

    // Letter
    LP: 1.2941176471,
    LW: 0.7727272727

    // Legal
    // TODO: Legal and other aspect ratios
};

export const setAspect = () => {
    const elementsToSetASpect = document.querySelectorAll("[data-reno-aspect]");
    elementsToSetASpect.forEach((elementToSetAspect) => {
        elementToSetAspect.style.height =
            getComputedStyle(elementToSetAspect).width.slice(0, -2) *
                aspects[elementToSetAspect.dataset.renoAspect] +
            "px";
    });
};
