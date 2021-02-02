namespace surfschool.Controllers{
    public class UserEntity : Model {
        public int Id { get; }
        public string Login { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }
        public string Password2 { get; set; }
        public string Role { get; set; }
        
        
    }
}