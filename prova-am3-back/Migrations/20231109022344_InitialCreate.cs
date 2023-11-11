using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ProvaPub.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Customers",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Shane Lind" },
                    { 2, "Regina Zemlak" },
                    { 3, "Miguel Rowe" },
                    { 4, "Marsha Prosacco" },
                    { 5, "Cedric Welch" },
                    { 6, "Rogelio Rolfson" },
                    { 7, "Rose Hackett" },
                    { 8, "Eula Gulgowski" },
                    { 9, "Noah Leannon" },
                    { 10, "Lewis Konopelski" },
                    { 11, "Pamela Moore" },
                    { 12, "Mattie Kerluke" },
                    { 13, "Brett Buckridge" },
                    { 14, "Julia Willms" },
                    { 15, "Felicia Bahringer" },
                    { 16, "Marsha Kuvalis" },
                    { 17, "Alonzo Wyman" },
                    { 18, "Dewey Kihn" },
                    { 19, "Jose Haag" },
                    { 20, "Pete Kiehn" }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Practical Steel Ball" },
                    { 2, "Intelligent Metal Shirt" },
                    { 3, "Generic Wooden Car" },
                    { 4, "Practical Wooden Chips" },
                    { 5, "Small Metal Bike" },
                    { 6, "Small Concrete Bike" },
                    { 7, "Rustic Granite Soap" },
                    { 8, "Rustic Steel Shoes" },
                    { 9, "Incredible Fresh Gloves" },
                    { 10, "Handcrafted Metal Pants" },
                    { 11, "Ergonomic Steel Chicken" },
                    { 12, "Licensed Fresh Computer" },
                    { 13, "Tasty Fresh Chicken" },
                    { 14, "Ergonomic Plastic Towels" },
                    { 15, "Handmade Fresh Salad" },
                    { 16, "Handmade Granite Pants" },
                    { 17, "Gorgeous Plastic Car" },
                    { 18, "Awesome Rubber Bike" },
                    { 19, "Fantastic Metal Sausages" },
                    { 20, "Rustic Fresh Fish" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
