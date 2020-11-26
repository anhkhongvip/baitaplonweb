var check_phone = /^\d{2,4}\d{3}\d{3}$/;
var check_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
var check_username = /^[A-Za-z0-9_]{1,20}$/;
var check_password = /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;
function checknull(txt){
    if(txt.value.length==0)
        return true;
    else 
        return false;
}
function isInteger(txt)
{
    if((!isNaN(txt.value)) && (parseInt(txt.value)==Number(txt.value)))
        return true;
    else
        return false;
}
function StringMatch(txt,reg)
{
    return reg.test(txt.value);
}
function guingay(f)
{
    if(checknull(f.Name))
    {
        alert("Tên của bạn không được để trống");
        f.Name.focus();
        return;
    }
    if(!StringMatch(f.Email,check_email))
    {
        if(checknull(f.Email))
        {
           alert("Email của bạn không được để trống");
           f.Email.focus();
           return;
        }
        else
        {
            alert("Email không hợp lệ");
            f.Email.value="";
            f.Email.focus();
            return;
        }
    }
    if(checknull(f.Topic))
    {
        alert("Chủ đề của bạn không được để trống");
        f.Topic.focus();
        return;
    }
    if(checknull(f.About))
    {
        alert("Nội dung phản hồi của bạn không được để trống");
        f.About.focus();
        return;
    }
    alert("Cảm ơn bạn đã phản hồi");
}