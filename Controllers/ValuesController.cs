using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace DotNetAngularSPA.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {

        [HttpPost]
        [Route("EncodeCharacter")]
        public async Task<IActionResult> Encode([FromBody] object Characters)
        {

            IActionResult response = Unauthorized();
            

            try
            {
                var data = JsonConvert.DeserializeObject<model>(Characters.ToString());

                Storage storage = new Storage();
                var result = await Task.Run(() => storage.EncodeCharacter(data));  //await execute.RegisterCustmer(data);



                List<model> str = new List<model>();
                string[] ConfigObj = new string[1];

                if (string.IsNullOrEmpty(HttpContext.Session.GetString("data") as string))
                {
                    str.Add(new model { Encoded = result });
                    string array1 = JsonConvert.SerializeObject(str);
                    HttpContext.Session.SetString("data", array1);
                }
                else
                {
                    str.Add(new model { Encoded = result });
                    string datas = HttpContext.Session.GetString("data");
                    var array = JsonConvert.DeserializeObject<model[]>(datas);

                    foreach (var p in array)
                    {
                        ///do array
                        str.Add(new model { Encoded = p.Encoded });
                    }

                    string array2 = JsonConvert.SerializeObject(str);
                    HttpContext.Session.SetString("data", array2);
                }
                //var results = JsonConvert.DeserializeObject<model>(str.ToString());
                response = Ok(new { results = str });
            }
            catch (Exception e)
            {
                response = StatusCode(419);
            }


            return response;
        }

    }



}
