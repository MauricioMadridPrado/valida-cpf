import elementsInnerText from "./elementsInnerText.js";
import cleamElementsNaN from "./cleamElementsNaN.js";
import constroiCpf from "./constroiCpf.js";
export default function cpfsFormatados(cpfs){
const arrayElements = elementsInnerText(cpfs);
const cpfsLimpos = cleamElementsNaN(arrayElements);
return constroiCpf(cpfsLimpos);
}