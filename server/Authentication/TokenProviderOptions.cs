using System;
using System.Text;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;

namespace Noegletal.Authentication
{
    public class TokenProviderOptions
    {
        public static string Audience { get; } = "NoegletalAudience";
        public static string Issuer { get; } = "Noegletal";
        public static SymmetricSecurityKey Key { get; } = new SymmetricSecurityKey(Encoding.ASCII.GetBytes("NoegletalSecretSecurityKeyNoegletal"));
        public static TimeSpan Expiration { get; } = TimeSpan.FromMinutes(5);
        public static SigningCredentials SigningCredentials { get; } = new SigningCredentials(Key, SecurityAlgorithms.HmacSha256);
    }
}
