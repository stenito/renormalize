// page.js only has code specific to this page or website
const d = document,
    w = window,
    urlParams = new URLSearchParams(w.location.search);

// FUTURE: Move removing stored info to a separate page that does only that?
// FUTURE: Show the stored key/value pair on the page by clicking a button.
const loadScreen = () => {
    const loadScreenElement = document.querySelector("[data-loadscreen]");
    if (loadScreenElement) {
        document.fonts.ready.then(function () {
            document.body.classList.remove("noscroll");
            loadScreenElement.classList.add("hidden");
        });
    } else {
        console.error("No element with attribute [data-loadscreen] found.");
    }
};
loadScreen();

if (urlParams.get("clear")) {
    localStorage.clear();
}
const result = () => {
    return Math.random().toString(36).substring(2, 10);
};

// eslint-disable-next-line
const setLSO = () => {
    localStorage.setItem(result(), result());
};

if (localStorage.length > 0) {
    const banner = d.getElementById("banner");
    if (banner) {
        if (!banner.classList.contains("hide")) {
            banner.classList.add("hide");
        }
    }
}

// eslint-disable-next-line
const closeElement = (element, callback) => {
    if (element) {
        let elementToClose = element.closest("[data-cloasr-closing]");
        elementToClose
            ? (elementToClose.style.display = "none")
            : console.warn(
                  'Missing class="[data-cloasr-closing]" in parent node up to root.'
              );
        if (callback) {
            callback;
        } else {
            return;
        }
    }
};

const dummyH1 = () => {
    const hOnes = d.querySelectorAll("[data-reno-h1]"),
        hOneTemp = d.createElement("h1");
    d.body.appendChild(hOneTemp);
    const hOneTempLineHeight = getComputedStyle(hOneTemp).lineHeight,
        hOneTempFontWeight = getComputedStyle(hOneTemp).fontWeight,
        hOneTempFontSize = getComputedStyle(hOneTemp).fontSize,
        hOneTempMargin = getComputedStyle(hOneTemp).margin,
        hOneTempLetterSpacing = getComputedStyle(hOneTemp).letterSpacing,
        hOneTempBorderBottom = getComputedStyle(hOneTemp).borderBottom,
        hOneTempPaddingBottom = getComputedStyle(hOneTemp).paddingBottom;
    d.body.removeChild(hOneTemp);

    hOnes.forEach((hOne) => {
        hOne.style.lineHeight = hOneTempLineHeight;
        hOne.style.fontWeight = hOneTempFontWeight;
        hOne.style.fontSize = hOneTempFontSize;
        hOne.style.margin = hOneTempMargin;
        hOne.style.letterSpacing = hOneTempLetterSpacing;
        hOne.style.borderBottom = hOneTempBorderBottom;
        hOne.style.paddingBottom = hOneTempPaddingBottom;
    });
};
dummyH1();
