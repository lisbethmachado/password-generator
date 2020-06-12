# password-generator

WHEN user clicks "generate password" button

PROMPT user for password length
INIT length := user input from prompt

IF length IS BETWEEN 8 and 128
    THEN
    INIT useSpecial := confirm special characters
    INIT useNums := confirm numeric characters
    INIT useLower: = confirm lowercase characters
    INIT useUpper: = confirm uppercase characters

IF useSpecial OR useNUMS or useLower or useUpper

// set arrays for specialchar, numeric, lower, upper //

random Math

THEN generate password



END
ELSE
    ALERT password length error message