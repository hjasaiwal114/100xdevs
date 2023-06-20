var FindSumPairs = function(nums1, nums2) {
    this.map2 = new Map();
    
    this.arr1 = nums1;
    this.arr2 = nums2;
    
    for (const num of nums2) {
        if (!this.map2.has(num)) this.map2.set(num, 0);
        this.map2.set(num, this.map2.get(num) + 1);
    }
};

FindSumPairs.prototype.add = function(index, val) {
    const prevVal = this.arr2[index];
   
    this.map2.set(prevVal, this.map2.get(prevVal) - 1);
    if (this.map2.get(prevVal) === 0) this.map2.delete(prevVal);
    
    const newVal = prevVal + val;
    this.arr2[index] = newVal;
    
    if (!this.map2.has(newVal)) this.map2.set(newVal, 0);
    this.map2.set(newVal, this.map2.get(newVal) + 1);
    
    return;
};

FindSumPairs.prototype.count = function(tot) {
    let res = 0;
    
    for (let i = 0; i < this.arr1.length; ++i) {
        const num = this.arr1[i];
        
        if (num >= tot) continue;
        
        const diff = tot - num;
        
        if (!this.map2.has(diff)) continue;
        
        res += this.map2.get(diff);
    }
    
    return res;
};