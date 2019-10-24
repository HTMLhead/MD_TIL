#include <cs50.h>
#include <stdio.h>
#include <ctype.h>
#include <string.h>

int checkFirstArg(string argv[]);
int checkArgsFit(string argv[]);
int checkArgExist(string argv[]);
int printErrorMsg(string input);
int changeNum(int plainletter, int shiftNum);
int shift(char c);
void printBcyrptWord(string argv[], string plaintext);

int main(int argc, string argv[])
{
  if (checkArgExist(argv))
  {
    printErrorMsg(argv[0]);
    return 1;
  }
  if (checkFirstArg(argv) == 1 || checkArgsFit(argv) == 1)
  {
    printErrorMsg(argv[0]);
    return 1;
  }
  else
  {
    string plaintext = get_string("plaintext: ");
    printf("ciphertext: ");
    printBcyrptWord(argv, plaintext);
  }
}

void printBcyrptWord(string argv[], string plaintext)
{
  for (int i = 0, countNum = 0; i < strlen(plaintext); i++)
  {
    if (isalpha(plaintext[i]) == 0)
    {
      printf("%c", plaintext[i]);
      continue;
    }
    int arglen = countNum % strlen(argv[1]);
    int shiftNum = shift(argv[1][arglen]);
    int changed = changeNum(plaintext[i], shiftNum);
    printf("%c", changed);
    countNum++;
  }
  printf("\n");
}

int changeNum(int plainletter, int shiftNum)
{
  if (islower(plainletter) == 0)
  {
    int letter = plainletter + shiftNum;
    if (letter > 90)
    {
      letter -= 26;
    }
    return letter;
  }
  else
  {
    int letter = plainletter + shiftNum;
    if (letter > 122)
    {
      letter -= 26;
    }
    return letter;
  }
}

int shift(char c)
{
  if (islower(c))
  {
    return c - 97;
  }
  else
  {
    return c - 65;
  }
}

int checkFirstArg(string argv[])
{
  for (int i = 0; i < strlen(argv[1]); i++)
  {
    // check is alphabet
    if (!isalpha(argv[1][i]))
    {
      return 1;
    }
  }
  return 0;
}

int checkArgsFit(string argv[])
{
  // check it has another value
  if (argv[2])
  {
    return 1;
  }
  return 0;
}

int printErrorMsg(string input)
{
  printf("Usage: %s key\n", input);
  return 1;
}

int checkArgExist(string argv[])
{
  if (argv[1])
  {
    return 0;
  }
  return 1;
}
