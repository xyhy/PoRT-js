const fs = require('fs');
/**
 * Generate & Initialize CSV_data Class
 * @class This class is used to manipulate CSV data
 */
function CSV_data() {
    this.data = null;
};
/**
 * Manipulate data from csv files
 * @param  {Number} num
 * @return {string[][]} data derived from csv files
 */
CSV_data.prototype.getData = function(num) {
    if(num == 1) {
        this.data = fs.readFileSync('./data/block1.csv')
            .toString() // convert Buffer to string
            .split('\n') // split string to lines
            .map(e => e.trim()) // remove white spaces for each line
            .map(e => e.split(',').map(e => e.trim())); // split each line to array
        return this.data;
    }
    else if(num == 2) {
        this.data = fs.readFileSync('./data/block2.csv')
            .toString() // convert Buffer to string
            .split('\n') // split string to lines
            .map(e => e.trim()) // remove white spaces for each line
            .map(e => e.split(',').map(e => e.trim())); // split each line to array
        return this.data;
    }
    else if(num == 3) {
        this.data = fs.readFileSync('./data/block3.csv')
            .toString() // convert Buffer to string
            .split('\n') // split string to lines
            .map(e => e.trim()) // remove white spaces for each line
            .map(e => e.split(',').map(e => e.trim())); // split each line to array
        return this.data;
    }
    else console.log("block DNE");
}
module.exports = CSV_data;