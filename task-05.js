const checkForSpam = function(message) {
    const words = message.split(' ');
    const word1 = 'sale';
    const word2 = 'spam';

    if ((message.toLowerCase().includes(word1)) || (message.toLowerCase().includes(word2))) {
       return true;
    } else {
        return false;
      }
};

console.log(checkForSpam('Latest technology news'));

console.log(checkForSpam('JavaScript weekly newsletter'));

console.log(checkForSpam('Get best sale offers now!'));

console.log(checkForSpam('[SPAM] How to earn fast money?'));