using Microsoft.AspNetCore.Mvc;
using ProvaPub.Models;

namespace ProvaPub.Services
{
    public interface IGenericListService<T>
    {
        BaseList<T> List(int page);
        BaseList<T> GetWithFilter(int page, FilterDto<T> filters);
    }
}
