using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
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

        public GenericListService(TestDbContext ctx)
        {
            _ctx = ctx;
            _dbSet = _ctx.Set<T>();
        }

        private Expression<Func<T, bool>> BuildFilterExpression(FilterDto<T> filters = null)
        {
            if (filters == null)
                return null;

            Expression<Func<T, bool>> filterExpression = null;

            if (filters.Name != null)
            {
                Expression<Func<T, bool>> nameFilter = e =>
                    EF.Property<string>(e, "Name").Contains(filters.Name);
                filterExpression =
                    filterExpression == null
                        ? nameFilter
                        : CombineExpressions(filterExpression, nameFilter);
            }

            if (filters.Id != 0)
            {
                Expression<Func<T, bool>> idFilter = e => EF.Property<int?>(e, "Id") == filters.Id;
                filterExpression =
                    filterExpression == null
                        ? idFilter
                        : CombineExpressions(filterExpression, idFilter);
            }

            return filterExpression;
        }

        private Expression<Func<T, bool>> CombineExpressions(
            Expression<Func<T, bool>> expr1,
            Expression<Func<T, bool>> expr2
        )
        {
            var parameter = Expression.Parameter(typeof(T));
            var combined = Expression.AndAlso(
                Expression.Invoke(expr1, parameter),
                Expression.Invoke(expr2, parameter)
            );
            return Expression.Lambda<Func<T, bool>>(combined, parameter);
        }

        private BaseList<T> DbConsult(int page, FilterDto<T> filters = null)
        {
            var filterExpression = BuildFilterExpression(filters);

            var query = filterExpression != null ? _dbSet.Where(filterExpression) : _dbSet;

            var totalCount = query.Count();
            var totalPages = (int)System.Math.Ceiling((double)totalCount / _pageSize);
            var data = query.Skip((page - 1) * _pageSize).Take(_pageSize).ToList();
            var hasNext = (page * _pageSize) < totalCount;

            return new BaseList<T>
            {
                HasNext = hasNext,
                TotalCount = totalPages,
                Data = data
            };
        }

        public BaseList<T> GetWithFilter(int page, FilterDto<T> filters)
        {
            return DbConsult(page, filters);
        }

        public BaseList<T> List(int page)
        {
            return DbConsult(page);
        }
    }
}
