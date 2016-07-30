// Bubblesort algorithm.
// the old-fashioned bubble sort.
// 
// Javascript
// Adam Shechter

function bubblesortArray(arrayIn)
{
	var isSorted = false;
	var temp;

	while (isSorted == false)
	{
		isSorted = true;

		for (var i = 0; i < arrayIn.length - 1; i += 1)
		{
			if (arrayIn[i] > arrayIn[i+1])
			{
				temp = arrayIn[i];
				arrayIn[i] = arrayIn[i+1];
				arrayIn[i+1] = temp;
				isSorted = false;
			}
		}
	}

	return arrayIn;
}