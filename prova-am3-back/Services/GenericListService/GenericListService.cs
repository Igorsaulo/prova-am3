using Microsoft.EntityFrameworkCore;
using ProvaPub.Models;
using ProvaPub.Repository;

namespace ProvaPub.Services
{
    public class GenericListService<T> : IGenericListService<T> where T : class
    {
        private readonly TestDbContext _ctx;
        private readonly DbSet<T> _dbSet;

        public GenericListService(TestDbContext ctx, DbSet<T> dbSet)
        {
            _ctx = ctx;
            _dbSet = dbSet;
        }

        public BaseList<T> List(int page)
        {
            const int pageSize = 10;
            var totalCount = _dbSet.Count();
            var data = _dbSet.Skip((page - 1) * pageSize).Take(pageSize).ToList();
            var hasNext = (page * pageSize) < totalCount;

            return new BaseList<T>
            {
                HasNext = hasNext,
                TotalCount = totalCount,
                Data = data
            };
        }
        
    }
}