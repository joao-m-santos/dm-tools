export const setLoader = (state: boolean) =>
    document.dispatchEvent(new CustomEvent("loader-" + state ? "on" : "off"));

export const generatePlaceholder = () =>
    fetch("/assets/placeholders.json")
        .then(list => list.json())
        .then(
            json => json.placeholders[Math.floor(Math.random() * (json.placeholders.length - 1))]
        );
