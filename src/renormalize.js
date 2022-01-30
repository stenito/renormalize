import { direction, correctCode } from "./js/bidi";
import { correctFloat } from "./js/float";
import { setAspect } from "./js/aspect";
import { fontAdjust } from "./js/font-adjust";

fontAdjust("h1, h2, h3, h4, h5, h6");
correctFloat("figure, img, picture", direction);
correctCode();
setAspect();

