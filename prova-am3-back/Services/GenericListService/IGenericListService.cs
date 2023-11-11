using ProvaPub.Models;

namespace ProvaPub.Services
{
    public interface IGenericListService<T>
    {
        BaseList<T> List(int page);
    }
}
