function getFileExtension (fileName="") {
    return fileName.slice((fileName.lastIndexOf("."))).toLocaleLowerCase();
};

export default getFileExtension;