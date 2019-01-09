using System.Reflection;
using System.Linq;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;

using Noegletal.Models.NoegleTal;

namespace Noegletal.Data
{
  public partial class NoegleTalContext : Microsoft.EntityFrameworkCore.DbContext
  {
    public NoegleTalContext(DbContextOptions<NoegleTalContext> options):base(options)
    {
    }

    public NoegleTalContext()
    {
    }

    partial void OnModelBuilding(ModelBuilder builder);

    protected override void OnModelCreating(ModelBuilder builder)
    {
        base.OnModelCreating(builder);


        this.OnModelBuilding(builder);
    }


    public DbSet<Noegletal.Models.NoegleTal.NoegleTalReport> NoegleTalReports
    {
      get;
      set;
    }
  }
}
