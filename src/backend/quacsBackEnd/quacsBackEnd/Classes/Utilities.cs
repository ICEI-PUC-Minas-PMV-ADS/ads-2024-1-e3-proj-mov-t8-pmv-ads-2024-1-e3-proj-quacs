using System;
using System.Security.Cryptography;
using System.Text;

namespace quacsBackEnd.Utilities
{
    public static class PasswordUtility
    {
        public static string EncryptPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
            return Convert.ToBase64String(hashedBytes);
        }

        public static bool VerifyPassword(string enteredPassword, string storedHash)
        {
            var hashedEnteredPassword = EncryptPassword(enteredPassword);
            return storedHash.Equals(hashedEnteredPassword);
        }
    }
}
