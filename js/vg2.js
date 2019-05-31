Survey.Survey.cssType = "bootstrap";

var json = {surveyId: '08daaa62-2df6-4dfa-9b3f-d9bd1200cf7f'};

function sendDataToServer(survey) {
    survey.sendResult('da5f6953-2951-4770-a493-8fd75d90d7af');
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
survey.surveyPostId = '47c7cf8c-58b4-473e-89e8-cad07eb26aec';
//You may call survey.sendResult function as another option.
function sendDataToServer(survey) {
  survey.sendResult('47c7cf8c-58b4-473e-89e8-cad07eb26aec');
}