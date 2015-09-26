using Microsoft.AspNet.Builder;

namespace NetPonto_ES2015
{
    public class Startup
    {
        public void Configure(IApplicationBuilder app)
        {
            // Add static files to the request pipeline.
            app.UseStaticFiles();
        }
    }
}
