using Microsoft.EntityFrameworkCore;
using ProvaPub.Models;
using ProvaPub.Repository;

namespace ProvaPub.Services
{
    public class ProductService : GenericListService<Product>, IProductService
    {
        public ProductService(TestDbContext ctx)
            : base(ctx) { }
    }
}
