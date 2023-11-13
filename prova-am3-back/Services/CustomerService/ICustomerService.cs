using ProvaPub.Models;

namespace ProvaPub.Services
{
    public interface ICustomerService
    {
        BaseList<Customer> List(int page);
        BaseList<Customer> GetWithFilter(int page, FilterDto<Customer> filters);
    }
}
