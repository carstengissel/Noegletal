using System;
using System.Net;
using System.Data;
using System.Linq;
using System.Data.SqlClient;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNet.OData;
using Microsoft.AspNet.OData.Routing;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.AspNet.OData.Query;



namespace Noegletal.Controllers.NoegleTal
{
  using Models;
  using Data;
  using Models.NoegleTal;

  [ODataRoutePrefix("odata/NoegleTal/NoegleTalReports")]
  [Route("mvc/odata/NoegleTal/NoegleTalReports")]
  public partial class NoegleTalReportsController : ODataController
  {
    private Data.NoegleTalContext context;

    public NoegleTalReportsController(Data.NoegleTalContext context)
    {
      this.context = context;
    }
    // GET /odata/NoegleTal/NoegleTalReports
    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet]
    public IEnumerable<Models.NoegleTal.NoegleTalReport> GetNoegleTalReports()
    {
      var items = this.context.NoegleTalReports.AsQueryable<Models.NoegleTal.NoegleTalReport>();
      this.OnNoegleTalReportsRead(ref items);

      return items;
    }

    partial void OnNoegleTalReportsRead(ref IQueryable<Models.NoegleTal.NoegleTalReport> items);

    [EnableQuery(MaxExpansionDepth=10,MaxNodeCount=1000)]
    [HttpGet("{ReportId}")]
    public SingleResult<NoegleTalReport> GetNoegleTalReport(Guid key)
    {
        var items = this.context.NoegleTalReports.Where(i=>i.ReportId == key);
        return SingleResult.Create(items);
    }
    partial void OnNoegleTalReportDeleted(Models.NoegleTal.NoegleTalReport item);

    [HttpDelete("{ReportId}")]
    public IActionResult DeleteNoegleTalReport(Guid key) 
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            var item = this.context.NoegleTalReports
                .Where(i => i.ReportId == key)
                .FirstOrDefault();

            if (item == null)
            {
                return BadRequest();
            }                

            this.OnNoegleTalReportDeleted(item);
            this.context.NoegleTalReports.Remove(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnNoegleTalReportUpdated(Models.NoegleTal.NoegleTalReport item);

    [HttpPut("{ReportId}")]
    public IActionResult PutNoegleTalReport(Guid key, [FromBody]Models.NoegleTal.NoegleTalReport newItem)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (newItem == null || (newItem.ReportId != key))
            {
                return BadRequest();
            }

            this.OnNoegleTalReportUpdated(newItem);
            this.context.NoegleTalReports.Update(newItem);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    [HttpPatch("{ReportId}")]
    public IActionResult PatchNoegleTalReport(Guid key, [FromBody]Delta<Models.NoegleTal.NoegleTalReport> patch)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var item = this.context.NoegleTalReports.Where(i=>i.ReportId == key).FirstOrDefault();
            
            if (item == null)
            {
                return BadRequest();
            }

            patch.Patch(item);

            this.OnNoegleTalReportUpdated(item);
            this.context.NoegleTalReports.Update(item);
            this.context.SaveChanges();

            return new NoContentResult();
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }

    partial void OnNoegleTalReportCreated(Models.NoegleTal.NoegleTalReport item);

    [HttpPost]
    public IActionResult Post([FromBody] Models.NoegleTal.NoegleTalReport item)
    {
        try
        {
            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (item == null)
            {
                return BadRequest();
            }

            this.OnNoegleTalReportCreated(item);
            this.context.NoegleTalReports.Add(item);
            this.context.SaveChanges();

            return Created($"odata/NoegleTal/NoegleTalReports/{item.ReportId}", item);
        }
        catch(Exception ex) 
        {
            ModelState.AddModelError("", ex.Message);
            return BadRequest(ModelState);
        }
    }
  }
}
