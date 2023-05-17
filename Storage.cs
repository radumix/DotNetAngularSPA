namespace DotNetAngularSPA
{
    public class Storage
    {

        public string EncodeCharacter(model encoded)
        {
            string pcode = encoded.Encoded.ToString();
            byte[] encData_byte = new byte[pcode.Length];
            encData_byte = System.Text.Encoding.UTF8.GetBytes(pcode);
            string encodedData = Convert.ToBase64String(encData_byte);
            return encodedData;
        }
    }
}
