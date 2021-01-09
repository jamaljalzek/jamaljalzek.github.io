// This is the Google Apps Script that runs on Google's servers as a web application. Each time someone sends a message through the portfolio website, it gets sent via a POST request to the Apps Script, which then immediately executes the code below to send that message as an email directly to Jamal's Gmail inbox. Having the message sent to the Apps Script allows the use of Google's MailApp API, which simplifies the emailing process.
function doPost(data)
{
  var formSubmission = data.parameter;
  var emailBody =
      "Date and time of submission: " + formSubmission.dateAndTime + "\n" +
      "First name: " + formSubmission.firstName + "\n" +
      "Last name: " + formSubmission.lastName + "\n" +
      "Email address: " + formSubmission.emailAddress + "\n\n" +
      formSubmission.message;
  MailApp.sendEmail("jamaljalzek@gmail.com", "New Email From Your Porfolio Website!", emailBody);
}
