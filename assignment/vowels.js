function vowelCount(str)
{
	for(var i = 0;i <= str.length;i++)
	{
		for(var j = 0; j < vowels.length;j++)
		{
            if(str[i] == vowels[j])
            {
                count = count + 1;
            }
		}
    }
    return count;
}

	var count = 0;
	var str = "Good Job";
	var vowels = "aeiouAEIOU";
    console.log(vowelCount(str));
