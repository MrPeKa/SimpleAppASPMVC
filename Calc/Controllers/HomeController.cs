using System.Web.Mvc;
using Calc.Models;

namespace Calc.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        [HttpGet]
        public ActionResult Calculator()
        {
            var sOperation = new SingleOperationModel();
            return View(sOperation);
        }

        [HttpPost]
        public double Calculator(SingleOperationModel sOperation)
        {
            sOperation.Count();
            return sOperation.Result;
        }
    }
}