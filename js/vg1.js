Survey.Survey.cssType = "bootstrap";

var json = {surveyId: 'df3ef603-9c14-4e62-a464-0b77f376c074'
};

function sendDataToServer(survey) {
    survey.sendResult('8648518a-5e74-47dc-8eac-52313fd92f29');
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
          options.text = 'You have 30 seconds for every question. There are '  + (30-survey.currentPage.timeSpent) + ' seconds left.';
    });

$("#surveyElement").Survey({model: survey});


//You should get the Guid for storing survey data in surveyjs.io service storage
survey.surveyPostId = '23592e96-95bc-48b7-8a5d-4bb6bb77e749';
//You may call survey.sendResult function as another option.
function sendDataToServer(survey) {
  survey.sendResult('23592e96-95bc-48b7-8a5d-4bb6bb77e749');
}