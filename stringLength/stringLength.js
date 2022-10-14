const stringLength = (string) => {
    if(stringLength.length === 0 || stringLength.length > 10){
        return false;
    }
    return string.length;
}



module.exports = stringLength;
