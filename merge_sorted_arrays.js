/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   let li = m+n-1;
   let i = m>0 ? m-1: m;
   let j = n>0 ? n-1: n;  
   if (n==0) return;
   while(i >= 0 && j >= 0 ){
    if (nums2[j] > nums1[i]){
        nums1[li] = nums2[j];
        j-=1;
        li-=1;
    }else{
        nums1[li] = nums1[i];
        i-=1;
        li-=1;
    }
   }

   while(j>=0){
    nums1[j] = nums2[j];
    j-=1;
   }
};
