using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using ProvaPub.Models;
using ProvaPub.Repository;
using ProvaPub.Services;

namespace ProvaPub.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Parte2Controller : ControllerBase
    {
        private readonly IProductService _productService;
        private readonly ICustomerService _customerService;
        private readonly IMapper _mapper;

        /// <summary>
        /// Precisamos fazer algumas alterações:
        /// 1 - Não importa qual page é informada, sempre são retornados os mesmos resultados. Faça a correção.
        /// 2 - Altere os códigos abaixo para evitar o uso de "new", como em "new ProductService()". Utilize a Injeção de Dependência para resolver esse problema
        /// 3 - Dê uma olhada nos arquivos /Models/CustomerList e /Models/ProductList. Veja que há uma estrutura que se repete.
        /// Como você faria pra criar uma estrutura melhor, com menos repetição de código? E quanto ao CustomerService/ProductService. Você acha que seria possível evitar a repetição de código?
        ///
        /// </summary>
        TestDbContext _ctx;

        public Parte2Controller(
            TestDbContext ctx,
            IProductService productService,
            ICustomerService customerService,
            IMapper mapper
        )
        {
            _ctx = ctx;
            _productService = productService;
            _customerService = customerService;
            _mapper = mapper;
        }

        [HttpGet("products")]
        public ActionResult<ProductList> ListProducts(int page)
        {
            var baseList = _productService.ListProducts(page);
            return Ok(_mapper.Map<ProductList>(baseList));
        }

        [HttpGet("customers")]
        public ActionResult<CustomerList> ListCustomers(int page)
        {
            var baseList = _customerService.ListCustomers(page);
            return Ok(_mapper.Map<CustomerList>(baseList));
        }

        [HttpGet("products/filter")]
        public ActionResult<ProductList> GetProductsWithFilter(int page, string filters)
        {
            var filterObject = JsonConvert.DeserializeObject<FilterDto<Product>>(filters);
            var baseList = _productService.GetWithFilter(page, filterObject);
            return Ok(_mapper.Map<ProductList>(baseList));
        }

        [HttpGet("customers/filter")]
        public ActionResult<CustomerList> GetCustomersWithFilter(int page, string filters)
        {
            var filterObject = JsonConvert.DeserializeObject<FilterDto<Customer>>(filters);
            var baseList = _customerService.GetWithFilter(page, filterObject);
            return Ok(_mapper.Map<CustomerList>(baseList));
        }
    }
}
