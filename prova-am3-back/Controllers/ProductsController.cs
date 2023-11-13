using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ProvaPub.Models;
using ProvaPub.Repository;
using ProvaPub.Services;

namespace ProvaPub.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly IMapper _mapper;
        private readonly TestDbContext _ctx;

        public ProductsController(IProductService productService, IMapper mapper, TestDbContext ctx)
        {
            _productService = productService;
            _mapper = mapper;
            _ctx = ctx;
        }

        [HttpGet]
        public ActionResult<ProductList> ListProducts(int page, string? filters)
        {
            var baseList =
                filters == null
                    ? _productService.List(page)
                    : _productService.GetWithFilter(
                        page,
                        JsonConvert.DeserializeObject<FilterDto<Product>>(filters)
                    );

            return Ok(_mapper.Map<ProductList>(baseList));
        }
    }
}
