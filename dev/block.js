const sha256 = require("sha256");

function Block(height, pendingTransactions, previousHash) {
    //fixed area
    this.previousBlockHash = previousHash,
    this.merkleRoot = "",
    this.timestamp = Date.now(),
    this.height = height,
    this.transactions = pendingTransactions,
    this.nextCreator = NaN,
    this.nextVoters = [],
    
    //variable area
    this.receiptTree = null,
    this.coSignature = NaN,
    this.hash = NaN     //this.hashBlock(previousHash, {index: this.index, transactions: this.transactions})
};

Block.prototype.hashBlock = function(previousBlockHash, currentBlockData){
    const dataAsString = previousBlockHash + JSON.stringify(currentBlockData);
    const hash = sha256(dataAsString);
    return hash;
};

// dummy for now
Block.prototype.Genesis = function() {
    return Block(0, [], "0")
}

module.exports = Block;