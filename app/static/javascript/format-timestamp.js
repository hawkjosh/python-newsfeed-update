function formatTimestamp(timestamp) {
	const options = {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	}

	const date = new Date(timestamp)
	const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date)

	return formattedDate
}

document.addEventListener('DOMContentLoaded', function () {
	const timestampElement = document.getElementById('timestamp')
	const timestamp = timestampElement.textContent
	const formattedTimestamp = formatTimestamp(timestamp)
	timestampElement.textContent = formattedTimestamp
})
