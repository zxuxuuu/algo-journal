/**
 * 实现一个大数相加函数
 */

function sum(n1, n2) {
  const maxLen = Math.max(n1.length, n2.length);
  n1 = n1.padStart(maxLen, "0");
  n2 = n2.padStart(maxLen, "0");

  let carry = 0;
  let res = [];
  for (let i = maxLen - 1; i >= 0; i--) {
    let total = Number(n1[i]) + Number(n2[i]) + carry;
    carry = Math.floor(total / 10);
    res[i] = total % 10;
  }
  if (carry) res.unshift(carry);
  return res.join("");
}

console.log(sum("12345678901234567890", "98765432109876543210"));
console.log(sum("11111111111111111111", "99999999999999999999"));
console.log(sum('999999999999999999999999999999', '222222222222222222222222222222'))

/**
 * 思路
 * 1. 将两个字符串长度补齐
 * 2. 从右往左遍历，逐位相加，记录进位
 * 3. 最后如果还有进位，则添加到最前面
 * 4. 最后将结果数组拼接成字符串返回
 */
