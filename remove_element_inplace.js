/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
   var si = 0;
   var li = nums.length -1;
   while (si <= li) {
    if(nums[si]!=val){
        si+=1;
    }else if(nums[li]==val){
        li-=1;
    }else{
        var temp = nums[si];
        nums[si] = nums[li];
        nums[li] = temp;
        si+=1;
        li-=1;
    }
   }
  return si;
};
