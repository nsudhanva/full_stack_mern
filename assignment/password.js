let passwords = [ 'Password123', 'dct@academy', 'qwerty'];
let str = 'qwert';
function authenticate(passwords, str)
{
	for(let i = 0;i <= passwords.length;i++)
	{
		if(passwords[i] === str)
		{
			return a;
		}
	}
	return b;
}

let a = 'authenticated';
let b = 'not authenticated';
console.log(authenticate(passwords,str));