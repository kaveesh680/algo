class HashTable{
    constructor(size=53) {
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let primeNumber = 31;
        for (let i = 0; i < Math.min(key.length,100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0);
            total = (total*primeNumber + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let hash = this._hash(key);
        if (!this.keyMap[hash]) {
            this.keyMap[hash] = [];
        }
        this.keyMap[hash].push([key,value]);
        return this;
    }

    get(key) {
        let hash = this._hash(key);
        if (!this.keyMap[hash]) return undefined;
        for (let i = 0; i < this.keyMap[hash].length; i++) {
            if (this.keyMap[hash][i][0] === key) return this.keyMap[hash][i][1];
        }
        return undefined;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}

let hashTable = new HashTable(11);
hashTable.set('red','0fdfdc');
hashTable.set('red','0fdc');
hashTable.set('yellow','0ffdc');
hashTable.set('green','0fcscdfdc');
console.log(hashTable.get('yellw'));
console.log(hashTable.values());
console.log(hashTable.keys());
console.log(hashTable.keyMap);