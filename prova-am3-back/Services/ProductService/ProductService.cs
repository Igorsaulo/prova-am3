using ProvaPub.Models;
using ProvaPub.Repository;

namespace ProvaPub.Services
{
    public class ProductService : IProductService
    {
        TestDbContext _ctx;

        public ProductService(TestDbContext ctx)
        {
            _ctx = ctx;
        }

        public ProductList ListProducts(int page)
        {
            const int pageSize = 10;
            var totalCount = _ctx.Products.Count();
            var products = _ctx.Products.Skip((page - 1) * pageSize).Take(pageSize).ToList();
            var hasNext = (page * pageSize) < totalCount;

            return new ProductList
            {
                HasNext = hasNext,
                TotalCount = totalCount,
                Data = products
            };
        }
    }
}
