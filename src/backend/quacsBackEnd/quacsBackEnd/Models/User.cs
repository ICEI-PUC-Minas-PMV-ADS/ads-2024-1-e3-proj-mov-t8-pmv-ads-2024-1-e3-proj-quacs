using System;
using System.ComponentModel.DataAnnotations;

namespace quacsBackEnd.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 3)]
        public string Name { get; set; }

        [Required]
        public string Password { get; set; }

        public string ProfileSelfie { get; set; }

        [StringLength(200, MinimumLength = 3)]
        public string Description { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateTime BirthDate { get; set; }

        public string Gender { get; set; }
    }
}