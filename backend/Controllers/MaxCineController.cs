using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MaxCineController
    {
        [HttpPost]
        public void Inserir(Models.TbCliente request)
        {

        }


        [HttpGet]
        public void Listar()

    }
}