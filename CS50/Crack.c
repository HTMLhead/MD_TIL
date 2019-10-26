#include <cs50.h>
#include <stdio.h>
#include <crypt.h>
#include <ctype.h>
#include <string.h>

bool is_arg_error(int argc);
string crypt_password(string argv[]);

int main(int argc, string argv[])
{
  if (is_arg_error(argc))
  {
    return 1;
  }
  string crypt_word = crypt_password(argv);
  printf("%s\n", crypt_word);
  return 0;
}

string crypt_password(string argv[])
{
  char saltword[2];
  saltword[0] = argv[1][0];
  saltword[1] = argv[1][1];
  char *crypt_word = crypt(argv[1], saltword);
  return crypt_word;
}
bool is_arg_error(int argc)
{
  if (argc != 2)
  {
    printf("Usage: ./crack hash\n");
    return true;
  }
  return false;
}
