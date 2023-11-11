using Microsoft.EntityFrameworkCore;
using ProvaPub.Models;
using ProvaPub.Repository;

namespace ProvaPub.Services
{
    public class CustomerService : ICustomerService
    {
        TestDbContext _ctx;

        public CustomerService(TestDbContext ctx)
        {
            _ctx = ctx;
        }

        public CustomerList ListCustomers(int page)
        {
            const int pageSize = 10;
            var totalCount = _ctx.Customers.Count();
            var customers = _ctx.Customers.Skip((page - 1) * pageSize).Take(pageSize).ToList();
            var hasNext = (page * pageSize) < totalCount;

            return new CustomerList
            {
                HasNext = hasNext,
                TotalCount = totalCount,
                Data = customers
            };
        }
    }
}
