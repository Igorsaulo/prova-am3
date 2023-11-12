using ProvaPub.Models;

namespace ProvaPub.Services
{
    public interface ICustomerService
    {
        BaseList<Customer> ListCustomers(int page);
        BaseList<Customer> GetWithFilter(int page, FilterDto<Customer> filters);
    }
}
