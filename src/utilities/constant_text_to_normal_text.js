function constantTextToNormalText (text) {
    return text[0]
    .toUpperCase()
    .concat(
        text.slice(1)
        .replaceAll("_", " ")
        .toLowerCase()
    );
}

export default constantTextToNormalText;