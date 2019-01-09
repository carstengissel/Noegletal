using System;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Extensions;
using Microsoft.AspNetCore.Mvc;

namespace Noegletal.Controllers
{
    public partial class ReportController
    {
        partial void OnReportRequest(ref HttpRequestMessage requestMessage)
        {
            // Customize report parameters
        }
    }
}
