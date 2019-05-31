Survey.Survey.cssType = "bootstrap";

var json = {surveyId: '8af37842-9329-4479-b152-d0ee88fce96d'
};

function sendDataToServer(survey) {
    survey.sendResult('6820d107-e8d4-4de4-8c91-1a5d28bb0901');
}

window.survey = new Survey.Model(json);

$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .innerHTML = "result: " + JSON.stringify(result.data);
    });


survey.onTimerPanelInfoText.add((sender, options) => {
          options.text = 'You have 15 seconds for every question. There are '  + (15-survey.currentPage.timeSpent) + ' seconds left.';
    });


//Create showdown mardown converter
var converter = new showdown.Converter();
survey
    .onTextMarkdown
    .add(function (survey, options) {
        //convert the mardown text to html
        var str = converter.makeHtml(options.text);
        //remove root paragraphs <p></p>
        str = str.substring(3);
        str = str.substring(0, str.length - 4);
        //set html
        options.html = str;
    });

$("#surveyElement").Survey({model: survey});


//You should get the Guid for storing survey data in surveyjs.io service storage
survey.surveyPostId = 'b24167bb-ca8a-4f7a-ba20-fbfbd14a05ac';
//You may call survey.sendResult function as another option.
function sendDataToServer(survey) {
  survey.sendResult('b24167bb-ca8a-4f7a-ba20-fbfbd14a05ac');
}