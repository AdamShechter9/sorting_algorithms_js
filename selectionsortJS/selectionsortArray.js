// Selection sort algorithm.
// the old-fashioned selection sort.
// Selecting maximum and minimum values every iteration.
// 
// Javascript
// Adam Shechter

function selectionsortArray(arrayIn)
{
	var min = arrayIn[0],
		max = arrayIn[arrayIn.length - 1],
		minindex = 0,
		maxindex = arrayIn.length - 1;

	var temp;

	for(var i = 0; i < Math.floor((arrayIn.length - 1) / 2); i += 1)
	{
		min = arrayIn[i];
		minindex = i;
		max = arrayIn[arrayIn.length - 1 - i];
		maxindex = arrayIn.length - 1 - i;
		for(var j = i + 1; j < (arrayIn.length - i); j += 1)
		{
			if (arrayIn[j] < min)
			{
				min = arrayIn[j];
				minindex = j;
			}
			else if (arrayIn[j] > max)
			{
				max = arrayIn[j];
				maxindex = j;
			}
		}
		if (minindex > i)
		{
			temp = arrayIn[i];
			arrayIn[i] = arrayIn[minindex];
			arrayIn[minindex] = temp;
		}
		if (maxindex < arrayIn.length - 1 - i)
		{
			temp = arrayIn[arrayIn.length - 1 - i];
			arrayIn[arrayIn.length - 1 - i] = arrayIn[maxindex];
			arrayIn[maxindex] = temp;
		}
	}
	return arrayIn;
}