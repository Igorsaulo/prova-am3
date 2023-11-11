using ProvaPub.Models;

namespace ProvaPub.Services
{
    public interface ICustomerService
    {
        BaseList<Customer> ListCustomers(int page);
    }
}
