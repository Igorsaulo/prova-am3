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
    public class CustomersController : ControllerBase
    {
        private readonly ICustomerService _customerService;
        private readonly IMapper _mapper;
        private readonly TestDbContext _ctx;

        public CustomersController(
            ICustomerService customerService,
            IMapper mapper,
            TestDbContext ctx
        )
        {
            _customerService = customerService;
            _mapper = mapper;
            _ctx = ctx;
        }

        [HttpGet]
        public ActionResult<CustomerList> ListCustomers(int page, string? filters)
        {
            var baseList =
                filters == null
                    ? _customerService.List(page)
                    : _customerService.GetWithFilter(
                        page,
                        JsonConvert.DeserializeObject<FilterDto<Customer>>(filters)
                    );

            return Ok(_mapper.Map<CustomerList>(baseList));
        }
    }
}
