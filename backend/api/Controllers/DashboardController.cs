using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]

public class DashboardController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            pedidosHoje = 32,
            faturamento = 1280,
            clientes = 18
        });
    }
}