using Microsoft.EntityFrameworkCore;
using ProvaPub.Models;
using ProvaPub.Repository;

namespace ProvaPub.Services
{
    public class ProductService : IProductService
    {
        private readonly TestDbContext _ctx;
        private readonly IGenericListService<Product> _productListService;

        public ProductService(TestDbContext ctx)
        {
            _ctx = ctx;
            _productListService = new GenericListService<Product>(_ctx, _ctx.Products);
        }

        public BaseList<Product> ListProducts(int page)
        {
            return _productListService.List(page);
        }
    }
}