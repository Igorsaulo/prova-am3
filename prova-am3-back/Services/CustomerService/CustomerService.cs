using Microsoft.EntityFrameworkCore;
using ProvaPub.Models;
using ProvaPub.Repository;

namespace ProvaPub.Services
{
    public class CustomerService : ICustomerService
    {
        private readonly TestDbContext _ctx;
        private readonly IGenericListService<Customer> _customerListService;

        public CustomerService(TestDbContext ctx)
        {
            _ctx = ctx;
            _customerListService = new GenericListService<Customer>(_ctx, _ctx.Customers);
        }

        public BaseList<Customer> ListCustomers(int page)
        {
            return _customerListService.List(page);
        }
    }
}
