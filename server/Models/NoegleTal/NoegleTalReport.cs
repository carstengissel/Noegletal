using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Noegletal.Models.NoegleTal
{
  [Table("Reports", Schema = "dbo")]
  public partial class NoegleTalReport
  {
    [Key]
    public Guid ReportId
    {
      get;
      set;
    }
    public string ReportName
    {
      get;
      set;
    }
    public string ShortDescription
    {
      get;
      set;
    }
    public string Type
    {
      get;
      set;
    }
    public Guid ExternalId
    {
      get;
      set;
    }
    public string WebUrl
    {
      get;
      set;
    }
    public string Parent
    {
      get;
      set;
    }
    public bool ShowUpdate
    {
      get;
      set;
    }
    public DateTime Updated
    {
      get;
      set;
    }
    public string RouteUrl
    {
      get;
      set;
    }
    public Guid Dataset
    {
      get;
      set;
    }
    public Guid GroupId
    {
      get;
      set;
    }
    public DateTime RegTid
    {
      get;
      set;
    }
    public string RegInit
    {
      get;
      set;
    }
    public string LongDescription
    {
      get;
      set;
    }
    public string System
    {
      get;
      set;
    }
    public string ReportOwner
    {
      get;
      set;
    }
  }
}
