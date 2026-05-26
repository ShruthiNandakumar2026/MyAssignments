//1. Print Duplicate using sort()
let duplicate = [56,78,90,23,90,76,43,56]
let count = 0
duplicate.sort();
for (let i=0;i<duplicate.length;i++)
    {
        if (duplicate[i] === duplicate[i+1])
        {
            console.log(duplicate[i]);
            count++
        }
    }
console.log(count);

//2. Add index, push & pop
//Add index
duplicate[5] = 'webkit';
console.log(duplicate)
duplicate.pop(4);
console.log(duplicate);
//push
duplicate.push('Firefox');
console.log(duplicate);
//shift
duplicate.shift();
console.log(duplicate);

