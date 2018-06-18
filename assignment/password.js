var passwords = [ 'Password123', 'dct@academy', 'qwerty'];
var str = 'qwert';
function authenticate(passwords, str)
{
	for(var i = 0;i <= passwords.length;i++)
	{
		if(passwords[i] === str)
		{
			return a;
		}
	}
	return b;
}

var a = 'authenticated';
var b = 'not authenticated';
console.log(authenticate(passwords,str));