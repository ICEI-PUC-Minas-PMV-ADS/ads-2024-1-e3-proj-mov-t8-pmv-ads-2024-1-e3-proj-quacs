using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using quacsBackEnd.Data;
using quacsBackEnd.Models;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddAuthentication("BasicAuthentication")
    .AddScheme<AuthenticationSchemeOptions, BasicAuthenticationHandler>("BasicAuthentication", null);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapPost("/register", async (ApplicationDbContext dbContext, User user) =>
{
    var existingUser = await dbContext.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
    if (existingUser != null)
    {
        return Results.BadRequest("O email já está cadastrado.");
    }
    user.Password = EncryptPassword(user.Password);

    dbContext.Users.Add(user);
    await dbContext.SaveChangesAsync();
    return Results.Created($"/user/{user.Id}", user);
});

app.MapPost("/login", async (HttpContext context, ApplicationDbContext dbContext, User user) =>
{
    var existingUser = await dbContext.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
    if (existingUser == null || existingUser.Password != EncryptPassword(user.Password))
    {
        context.Response.StatusCode = StatusCodes.Status401Unauthorized;
        return;
    }

    var claims = new[]
    {
        new Claim(ClaimTypes.Name, existingUser.Email),
    };
    var identity = new ClaimsIdentity(claims, "Basic");
    var principal = new ClaimsPrincipal(identity);
    await context.SignInAsync(principal);

    context.Response.StatusCode = StatusCodes.Status200OK;
});

app.Run();

string EncryptPassword(string password)
{
    using var sha256 = SHA256.Create();
    var hashedBytes = sha256.ComputeHash(Encoding.UTF8.GetBytes(password));
    var sb = new StringBuilder();
    foreach (var b in hashedBytes)
    {
        sb.Append(b.ToString("x2"));
    }
    return sb.ToString();
}