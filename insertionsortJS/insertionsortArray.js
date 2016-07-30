// Insertion sort algorithm.
// the old-fashioned selection sort.
// Selecting maximum and minimum values every iteration.
// 
// Javascript
// Adam Shechter

function insertionsortArray(arrayIn)
{
	var temp, j;
	for(var i = 1; i < arrayIn.length; i += 1)
	{
		if (arrayIn[i - 1] > arrayIn[i])
		{
			j = i;
			while ((j > 0) && (arrayIn[j - 1] > arrayIn[j]))
			{
				temp = arrayIn[j-1];
				arrayIn[j-1] = arrayIn[j];
				arrayIn[j] = temp;
				j -= 1;
			}
		}
	}
	return arrayIn;
}