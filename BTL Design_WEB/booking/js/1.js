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
function validform(f)
{
    if(checknull(f.ten))
            {
                alert("Tên của bạn không được để trống");
                f.ten.focus();
                return;
            }
    if(checknull(f.ho))
            {
                alert("Họ không được để trống");
                f.ho.focus();
                return;
            }
     if(!StringMatch(f.email,check_email))
            {
                if(checknull(f.email))
                  {
                   alert("Email không được để trống");
                   f.email.focus();
                    return;
                  }
                else{
                    alert("Email không hợp lệ");
                    f.email.value="";
                    f.email.focus();
                    return;
                }  
            }
     alert("Đặt phòng thành công ! Cảm ơn bạn "+f.ho.value+" "+f.ten.value+" đã luôn luôn tin tưởng sử dụng dịch vụ của chúng tôi.");                      
}   