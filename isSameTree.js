var isSameTree = function(p, q) {
    if (!p && !q) 
        return true;
    if (!p || !q || (p.val !== q.val))
        return false;
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };
console.log(isSameTree([1,2,3],[1,2,3]));
console.log(isSameTree([1,2],[1,null,2]));
console.log(isSameTree([1,2,1],[1,1,2]));

