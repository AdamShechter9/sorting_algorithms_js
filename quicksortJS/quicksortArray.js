// Quicksort algorithm.
// This performs sorting in place.
// Javascript
// Adam Shechter

function quicksortArray(arrayIn, pivotIdx, lastIdx)
{
	if ((pivotIdx == null) || (lastIdx ==  null))
	{
		pivotIdx = 0;
		lastIdx = arrayIn.length - 1;
	}

	var pivotIndex = pivotIdx;
	var pivot = arrayIn[pivotIndex]

	if (pivotIdx >= lastIdx)
	{
		return ;
	}
	for (var i = pivotIndex + 1; i <= lastIdx; i += 1)
	{
		if (arrayIn[i] < pivot)
		{
			arrayIn[pivotIndex] = arrayIn[i];
			for (var j = i; j > pivotIndex; j -= 1)
			{
				arrayIn[j] = arrayIn[j-1];
			}
			pivotIndex += 1;
			arrayIn[pivotIndex] = pivot;
		}
	}
	quicksortArray(arrayIn, pivotIdx, pivotIndex - 1);
	quicksortArray(arrayIn, pivotIndex + 1, lastIdx);
	return arrayIn;
}