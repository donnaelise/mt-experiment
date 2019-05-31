Survey.Survey.cssType = "bootstrap";

var json = {surveyId: '3cc0c366-bf5b-41f3-943c-f2a153d6d042'
};

function sendDataToServer(survey) {
    survey.sendResult('f3809b8f-05a8-41d5-be63-01cc621e9b69');
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

$("#surveyElement").Survey({model: survey});


//You should get the Guid for storing survey data in surveyjs.io service storage
survey.surveyPostId = '53cc3c70-3cac-4c2d-9095-2fe79e8cc83b';
//You may call survey.sendResult function as another option.
function sendDataToServer(survey) {
  survey.sendResult('53cc3c70-3cac-4c2d-9095-2fe79e8cc83b');
}