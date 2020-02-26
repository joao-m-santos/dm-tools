export const setLoader = (state: boolean) =>
    document.dispatchEvent(new CustomEvent("loader-" + state ? "on" : "off"));

export const generatePlaceholder = () => {
    console.log("Generating...");
    return fetch("/assets/placeholders.json")
        .then(list => list.json())
        .then(
            json => json.placeholders[Math.floor(Math.random() * (json.placeholders.length - 1))]
        );
};

export const arrayMoveMutate = (array: Array<any>, from: number, to: number) => {
    const startIndex = to < 0 ? array.length + to : to;
    const item = array.splice(from, 1)[0];
    array.splice(startIndex, 0, item);
};

export const arrayMove = (array: Array<any>, from: number, to: number) => {
    array = array.slice();
    arrayMoveMutate(array, from, to);
    return array;
};
