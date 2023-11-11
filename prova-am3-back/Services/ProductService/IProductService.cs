using ProvaPub.Models;

namespace ProvaPub.Services
{
    public interface IProductService
    {
        BaseList<Product> ListProducts(int page);
    }
}
