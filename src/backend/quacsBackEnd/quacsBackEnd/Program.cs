using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using quacsBackEnd.Data;
using quacsBackEnd.Models;
using quacsBackEnd.Utilities;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = "localhost",
            ValidAudience = "localhost",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("%^M6QGzCs%i^KP%H&&%Q%$3Y&zd^5Pe7H$LGz$i#8#C^%###^8@K%&6y$y^4uo3Lax"))
        };
    });

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();

app.MapPost("/register", async (User user, [FromServices] ApplicationDbContext dbContext) =>
{
    var existingUser = await dbContext.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
    if (existingUser != null)
    {
        return Results.BadRequest("O email já está cadastrado.");
    }

    user.Password = PasswordUtility.EncryptPassword(user.Password);

    dbContext.Users.Add(user);
    await dbContext.SaveChangesAsync();

    return Results.Created($"/user/{user.Id}", user);
});


app.MapPost("/login", async (UserLogin userLogin, [FromServices] ApplicationDbContext dbContext) =>
{
    var existingUser = await dbContext.Users.FirstOrDefaultAsync(u => u.Email == userLogin.Email);
    if (existingUser == null || !PasswordUtility.VerifyPassword(userLogin.Password, existingUser.Password))
    {
        return Results.BadRequest("Credenciais inválidas.");
    }
    var token = GenerateJwtToken(existingUser);
    var userWithoutPassword = new
    {
        existingUser.Id,
        existingUser.Email,
        existingUser.Name,
        existingUser.ProfileSelfie,
        existingUser.Description,
        existingUser.BirthDate,
        existingUser.Gender
    };

    return Results.Ok(new { Token = token, User = userWithoutPassword });
});


app.MapPost("/passwordForgotten", async (string email, [FromServices] ApplicationDbContext dbContext) =>
{
    var user = await dbContext.Users.FirstOrDefaultAsync(u => u.Email == email);
    if (user == null)
    {
        return Results.BadRequest("E-mail não encontrado.");
    }

    var decryptedPassword = PasswordUtility.DecryptPassword(user.Password);

    await PasswordUtility.SendPasswordRecoveryEmail(email, decryptedPassword);

    return Results.Ok("E-mail de recuperação de senha enviado com sucesso.");
});



string GenerateJwtToken(User user)
{
    var tokenHandler = new JwtSecurityTokenHandler();
    var key = Encoding.ASCII.GetBytes("%^M6QGzCs%i^KP%H&&%Q%$3Y&zd^5Pe7H$LGz$i#8#C^%###^8@K%&6y$y^4uo3Lax");
    var tokenDescriptor = new SecurityTokenDescriptor
    {
        Subject = new ClaimsIdentity(new Claim[]
        {
            new Claim(ClaimTypes.Name, user.Email)
        }),
        Expires = DateTime.UtcNow.AddDays(7),
        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
    };
    var token = tokenHandler.CreateToken(tokenDescriptor);
    return tokenHandler.WriteToken(token);
}


app.Run();
