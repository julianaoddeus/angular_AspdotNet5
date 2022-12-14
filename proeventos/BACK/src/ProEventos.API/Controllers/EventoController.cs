using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProEventos.API.Data;
using ProEventos.API.Models;

namespace ProEventos.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventoController : ControllerBase
    {
        private readonly DataContext _context;
        public EventoController(DataContext context) 
        {
            _context = context;
            
        }
        

        [HttpGet]
        public IEnumerable<Evento> Get()
        {
            return _context.Evento;
        }

        [HttpGet("{id}")]
        public IEnumerable<Evento> Get(int id)
        {
            return _context.Evento.Where(evento => evento.EventoId == id);;
        }

        [HttpPost]
        public string Post()
        {
            return "value Post";
        }

        [HttpPut("{id}")]
        public string Put(int id)
        {
            return $"exemplo de put id ={id}";
        }

        [HttpDelete("{id}")]
        public string Delete(int id)
        {
            return $"exemplo de put id ={id}";
        }
    }
}
