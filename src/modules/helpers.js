const createElement = (tag, attributes) => {
    const element = document.createElement(tag, { attributes });

    if (attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }

    return element;
}

export { createElement }