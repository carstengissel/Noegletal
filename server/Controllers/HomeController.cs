using System;
using Microsoft.AspNetCore.Mvc;

namespace Noegletal.Controllers
{
    public partial class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
