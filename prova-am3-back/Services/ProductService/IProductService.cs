using ProvaPub.Models;

namespace ProvaPub.Services
{
    public interface IProductService
    {
        BaseList<Product> List(int page);
        BaseList<Product> GetWithFilter(int page, FilterDto<Product> filters);
    }
}
