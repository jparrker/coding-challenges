// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

// describe("Two Sum", () => {
//  it("Should implement two sum", () => {
//   assert.deepEqual(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]]);
//  });
// });
// ```

// 4-1 = 3. Does three exist in the hashmap? If not, put in in map. 

function twoSum(arr, sum) {
    let pairs = []
    let nums = {}
  
    for(const num1 of arr) {
      const num2 = sum - num1
      if(nums[num2]) {
        pairs.push([num1, num2])
      }
      else {
        nums[num1] = 1
      }
    }
    return pairs
  }
  
  console.log(twoSum([1, 2, 2, 3, 4], 4), [[2, 2], [3, 1]])