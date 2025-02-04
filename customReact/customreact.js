// function customRender(reactElement, container) {
//   /*const domElement = document.createElement(reactElement.type)
//     domElement.innerHTML=reactElement.Children
//     domElement.setAttribute('href',reactElement.props.href)
//     domElement.setAttribute('target',reactElement.props.target)
//     container.appendChild(domElement)
//     */

//   const domElement = document.createElement(reactElement.type);
//   document.createElement(reactElement.type);
//   domElement.innerHTML = reactElement.Children;
//   for (const prop in reactElement.props) {
//     if (prop === 'Children') continue;
//     domElement.setAttribute(prop, reactElement.props[prop]);
//   }
//   container.appendChild(domElement);
// }
// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   Children: "Click me to visit google",
// };
// const mainContainer = document.querySelector("#root");

// customRender(reactElement, mainContainer);

const mainContainer = document.getElementById("root");

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank",
    },
    childern: "Click me to visit google",
};

const customRender = (reactElement, mainContainer) => {
    // not suitable for multiple attributes of an element
    /*
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML = reactElement.childern
  domElement.setAttribute('href',reactElement.props.href)
  domElement.setAttribute('target',reactElement.props.target)
  mainContainer.appendChild(domElement)
  */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.childern;
    for (const prop in reactElement.props) {
        if (prop === 'childern') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);
};
customRender(reactElement, mainContainer);
