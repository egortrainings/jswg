/**
* Data driven testing
* @param {Array<Object>} testData - test data
* @param {Function<Object>} callback - function to be called to each data item
*/
function outline(testData, callback) {
    for (let data of testData) {
        callback(data);
    }
}

module.exports = outline;