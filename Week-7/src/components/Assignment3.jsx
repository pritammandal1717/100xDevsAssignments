import { useEffect } from "react"

const anchorElement = {
    tag : 'a',
    attributes : {
        href : "https://www.google.co.in/",
        target : "_blank",
        innerText : "Click me to Visit Google",
    },
    styles : {
        color : "blue",
        text_decoration : "underline",
    }
}

const generateHtml = (element) => {
    const attributes = Object.keys(element.attributes).map((attr) => {
        return `${attr} = "${element.attributes[attr]}"`
    }).join(" ")

    let style = Object.keys(element.styles).map((style) => {
        return `${style}: ${element.styles[style]};`
    }).join(" ")

    if(style.includes("_")){
        style = style.replace("_", "-")
     }

    return `<${element.tag} ${attributes} style="${style}">${element.attributes.innerText}</${element.tag}>`
}

const customRender = (element, targetSelector) => {
    const html = generateHtml(element);
    const selector = document.querySelector(targetSelector);
  
    selector.innerHTML = html;
  }

function Assignment3() {
    useEffect(() => {
        const root = document.getElementById("root");
        const element = document.createElement("div");
        element.id = "anchor"
        root.appendChild(element)
        const targetSelector = '#anchor';
        customRender(anchorElement, targetSelector);

        return () => {
            const selector = document.querySelector(targetSelector);
            console.log(selector);
            
            if (selector) {
                selector.innerHTML = ""; 
            }
        };
    }, []);

    return null;
}

export default Assignment3

