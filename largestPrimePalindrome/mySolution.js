function largestPrimePalindrome(start) {
  const isPalindrome = function(num) {
    return (num == num.toString().split('').reverse().join(''));
  };

  const isPrime = function(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  for (i = start; i > 0; i--) {
    if (isPalindrome(i) && isPrime(i)) return i;
  }
}
