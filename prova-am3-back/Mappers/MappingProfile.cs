using AutoMapper;
using ProvaPub.Models;

namespace ProvaPub.Mappers
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap(typeof(BaseList<>), typeof(ProductList))
                .ForMember("Data", opt => opt.MapFrom("Data"))
                .ForMember("TotalCount", opt => opt.MapFrom("TotalCount"))
                .ForMember("HasNext", opt => opt.MapFrom("HasNext"));

            CreateMap(typeof(BaseList<>), typeof(CustomerList))
                .ForMember("Data", opt => opt.MapFrom("Data"))
                .ForMember("TotalCount", opt => opt.MapFrom("TotalCount"))
                .ForMember("HasNext", opt => opt.MapFrom("HasNext"));
        }
    }
}
