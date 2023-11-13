using Microsoft.EntityFrameworkCore;
using ProvaPub.Models;
using ProvaPub.Repository;

namespace ProvaPub.Services
{
    public class CustomerService : GenericListService<Customer>, ICustomerService
    {
        public CustomerService(TestDbContext ctx) : base(ctx)
        {
        }
    }
}
