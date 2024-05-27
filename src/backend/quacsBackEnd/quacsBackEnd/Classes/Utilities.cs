using System;
using System.Net.Mail;
using System.Net;
using System.Security.Cryptography;
using System.Text;

namespace quacsBackEnd.Utilities
{
    public static class PasswordUtility
    {
        private static readonly string EncryptionKey = "%^M6QGzCs%i^KP%H&&%Q%$3Y&zd^5Pe7H$LGz$i#8#C^%###^8@K%&6y$y^4uo3Lax";

        public static string EncryptPassword(string password)
        {
            using var sha256 = SHA256.Create();
            var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
            return Convert.ToBase64String(hashedBytes);
        }

        public static string DecryptPassword(string encryptedPassword)
        {
            try
            {
                byte[] data = Convert.FromBase64String(encryptedPassword);

                using Aes aes = Aes.Create();
                aes.Key = Encoding.UTF8.GetBytes(EncryptionKey);
                aes.IV = new byte[16];

                using ICryptoTransform decryptor = aes.CreateDecryptor(aes.Key, aes.IV);

                byte[] decryptedBytes = decryptor.TransformFinalBlock(data, 0, data.Length);

                return Encoding.UTF8.GetString(decryptedBytes);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao descriptografar senha: {ex.Message}");
                return null;
            }
        }


        public static bool VerifyPassword(string enteredPassword, string storedHash)
        {
            var hashedEnteredPassword = EncryptPassword(enteredPassword);
            return storedHash.Equals(hashedEnteredPassword);
        }

        public static async Task SendPasswordRecoveryEmail(string email, string password)
        {
            var smtpServer = "smtp.gmail.com";
            var port = 587;
            var username = "quacssuportrecovery@gmail.com";
            var googlePassword = "xvsdtgezxusktbdc";

            var fromAddress = new MailAddress(username, "Quacs Support");
            var toAddress = new MailAddress(email);

            var subject = "Informação de Senha - Quacs";
            var body = $"Olá,\n\nEste é um e-mail da rede social Quacs.\nSua senha é: {password}";

            using (var smtpClient = new SmtpClient(smtpServer, port))
            {
                smtpClient.UseDefaultCredentials = false;
                smtpClient.Credentials = new NetworkCredential(username, googlePassword);
                smtpClient.EnableSsl = true;

                try
                {
                    using (var message = new MailMessage(fromAddress, toAddress)
                    {
                        Subject = subject,
                        Body = body
                    })
                    {
                        await smtpClient.SendMailAsync(message);
                    }
                }
                catch (SmtpException ex)
                {
                    Console.WriteLine($"Erro ao enviar e-mail: {ex.Message}");
                    throw;
                }
            }
        }

    }
}
