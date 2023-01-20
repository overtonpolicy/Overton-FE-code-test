// replace __YOUR_API_KEY__ with the API key you were sent when invited to the test
var api_key = "__YOUR_API_KEY__";

// this is the URL that fetches the relevant data from the Overton API
var api_url = "https://app.overton.io/documents.php?query=title%3A%22air+quality%22+or+%22pollution%22&source=govuk&sort=citations&format=json&api_key=" + api_key;
