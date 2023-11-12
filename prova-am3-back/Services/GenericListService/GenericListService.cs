using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using ProvaPub.Models;
using ProvaPub.Repository;

namespace ProvaPub.Services
{
    public class GenericListService<T> : IGenericListService<T>
        where T : class
    {
        private readonly TestDbContext _ctx;
        private readonly DbSet<T> _dbSet;
        private readonly int _pageSize = 10;

        public GenericListService(TestDbContext ctx, DbSet<T> dbSet)
        {
            _ctx = ctx;
            _dbSet = dbSet;
        }

        public BaseList<T> List(int page)
        {
            var totalCount = _dbSet.Count();
            var data = _dbSet.Skip((page - 1) * _pageSize).Take(_pageSize).ToList();
            var hasNext = (page * _pageSize) < totalCount;

            return new BaseList<T>
            {
                HasNext = hasNext,
                TotalCount = totalCount,
                Data = data
            };
        }

        public BaseList<T> GetWithFilter(int page, FilterDto<T> filters)
        {
            var query = _dbSet.AsQueryable();

            if (filters.Name != null && filters.Id != 0)
            {
                query = query.Where(e => EF.Property<int?>(e, "Id") == filters.Id);
            }
            else if (filters.Name != null)
            {
                query = query.Where(e => EF.Property<string>(e, "Name").Contains(filters.Name));
            }
            else if (filters.Id != 0)
            {
                query = query.Where(e => EF.Property<int?>(e, "Id") == filters.Id);
            }

            var totalCount = query.Count();
            var data = query.Skip((page - 1) * _pageSize).Take(_pageSize).ToList();
            var hasNext = (page * _pageSize) < totalCount;

            return new BaseList<T>
            {
                HasNext = hasNext,
                TotalCount = totalCount,
                Data = data
            };
        }
    }
}
