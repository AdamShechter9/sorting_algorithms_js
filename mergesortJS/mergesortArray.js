// Mergesort algorithm.
// More memory intensive than quicksort since it creates a new array every time.
// 
// Javascript
// Adam Shechter

function mergesortArray(arrayIn)
{
	var arrayLeft = []; 
	var arrayRight = [];
	var arrayOut = [];
	var midIdx = Math.floor((arrayIn.length - 1) / 2);
	
	// splitting into smaller arrays.

	if ((arrayIn == null) || (arrayIn.length == 0))
	{ return arrayIn; }

	if (arrayIn.length == 1)
	{ return arrayIn; }

	for (var i = 0; i < arrayIn.length; i += 1)
	{
		if (i <= midIdx)
		{  
			arrayLeft.push(arrayIn[i]);  
		}
		else
		{  
			arrayRight.push(arrayIn[i]); 
		}
	}
	// recursive calls
	arrayLeft = mergesortArray(arrayLeft);
	arrayRight = mergesortArray(arrayRight);

	// sorting
	var i = 0, 
		j = 0;
	while ((i < arrayLeft.length) || (j < arrayRight.length))
	{
		if ((i < arrayLeft.length) && (j < arrayRight.length))
		{
			if (arrayLeft[i] < arrayRight[j])
			{
				arrayOut.push(arrayLeft[i]);
				i += 1;
			}
			else
			{
				arrayOut.push(arrayRight[j]);
				j += 1;
			}
		}
		else
		{
			if (i >= arrayLeft.length)
			{
				arrayOut.push(arrayRight[j]);
				j += 1;
			}
			else
			{
				arrayOut.push(arrayLeft[i]);
				i += 1;
			}
		}
	}

	return arrayOut;
}