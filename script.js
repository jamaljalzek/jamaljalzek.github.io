"use strict";


// Initial webpage load script:
var accordionParameters = {collapsible : true,
                           heightStyle : "content",
                           classes : {"ui-accordion-header-active" : "activeHeaderDisplayMinusInsteadOfPlus"}};
$(".innerAccordion").accordion(accordionParameters);
$("#outerAccordion").accordion(accordionParameters);


// Form submission script:
function processContactFormSubmission()
{
  var formSubmissionJsonObject = extractContactFormSubmissionInformationIntoJsonObject();
  deliverFormSubmissionToEmailSender(formSubmissionJsonObject);
  $("#contactForm").trigger("reset"); // Clear all fields in the contact form.
  displayFormSubmissionSuccessMessage();
  return false; // Normally, the post function call will always be interrupted before completion due to the contact form automatically refreshing the page upon submission. However, by returning false here, and having onsubmit="return processContactFormSubmission();" in the form header, we avoid this issue.
}


function extractContactFormSubmissionInformationIntoJsonObject()
{
  var firstName = $("#firstNameField").val();
  var lastName = $("#lastNameField").val();
  var emailAddress = $("#emailAddressField").val();
  var message = $("#messageField").val();
  var currentDateAndTime = new Date().toString();
  return {"firstName" : firstName,
          "lastName" : lastName,
          "emailAddress" : emailAddress,
          "message" : message,
          "dateAndTime" : currentDateAndTime};
}


function deliverFormSubmissionToEmailSender(formSubmissionJsonObject)
{
  var emailSenderAppScriptURL = "https://script.google.com/macros/s/AKfycbw7jDiUpggyDfGBkDBXFTrxtpVohLNi9TlFKI4FeufI51Xic66J08Cm/exec";
  $.post(emailSenderAppScriptURL, formSubmissionJsonObject, null, "JSON");
}


function displayFormSubmissionSuccessMessage()
{
  var formSubmissionSuccessfulMessage =
  "<p margin='1em'>Thanks for your message!<br>" +
  "It has been sent to Jamal's email inbox.</p>";
  $("#contactForm").html(formSubmissionSuccessfulMessage);
}
