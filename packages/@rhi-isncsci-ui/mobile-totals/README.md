## &lt;rhi-isncsci-ui-mobile-totals&gt;

### Install
`npm install --save @rhi-isncsci-ui/mobile-totals`

### Basic usage

```html
<rhi-isncsci-ui-mobile-totals ais="A"
                              comments="my two cents"
                              completeIncomplete="C"
                              dap="NT"
                              leftLowerMotor="C5"
                              leftMotorNl="T5"
                              leftMotorNlZpp="T9"
                              leftPrick="T1"
                              leftSensoryNl="T3"
                              leftSensoryNlZpp="T7"
                              leftTouch="C7"
                              leftUpperMotor="C3"
                              nli="T6"
                              on-comments-change="commentsChangeHandler"
                              on-dap-change="dapChangeHandler"
                              on-interactive-cell-clicked="interactiveCellClickHandler"
                              rightLowerMotor="C4"
                              rightMotorNl="T4"
                              rightMotorNlZpp="T8"
                              rightPrick="C8"
                              rightSensoryNl="T2"
                              rightSensoryNlZpp="T6"
                              rightTouch="C6"
                              rightUpperMotor="C2"
                              vac="Yes"></rhi-isncsci-ui-mobile-tot  ls>
```

### Properties

| Property               | Type   | Suggested values      |
|------------------------|:------:|----------------------:|
| ais                    | String | A, B, C, D, E         |
| comments               | String |                       |
| completeIncomplete     | String | C, I                  |
| dap                    | String | Yes, No, NT           |
| leftLowerMotor         | String | C2 - S4_5, UD         |
| leftMotorNl            | String | C2 - S4_5, UD         |
| leftMotorNlZpp         | String | C2 - S4_5, UD         |
| leftPrick              | String | C2 - S4_5, UD         |
| leftSensoryNl          | String | C2 - S4_5, UD         |
| leftSensoryNlZpp       | String | C2 - S4_5, UD         |
| leftTouch              | String | C2 - S4_5, UD         |
| leftUpperMotor         | String | C2 - S4_5, UD         |
| nli                    | String | C2 - S4_5, UD         |
| rightLowerMotor        | String | C2 - S4_5, UD         |
| rightMotorNl           | String | C2 - S4_5, UD         |
| rightMotorNlZpp        | String | C2 - S4_5, UD         |
| rightPrick             | String | C2 - S4_5, UD         |
| rightSensoryNl         | String | C2 - S4_5, UD         |
| rightSensoryNlZpp      | String | C2 - S4_5, UD         |
| rightTouch             | String | C2 - S4_5, UD         |
| rightUpperMotor        | String | C2 - S4_5, UD         |
| textAis                | String |                       |
| textComments           | String |                       |
| textCompleteIncomplete | String |                       |
| textDap                | String |                       |
| textDapDescription     | String |                       |
| textLeft               | String |                       |
| textLightTouch         | String |                       |
| textLowerMotor         | String |                       |
| textMotorNl            | String |                       |
| textMotorNlZpp         | String |                       |
| textNli                | String |                       |
| textOptionNo           | String |                       |
| textOptionNt           | String |                       |
| textOptionYes          | String |                       |
| textPinPrick           | String |                       |
| textRight              | String |                       |
| textSensoryNl          | String |                       |
| textSensoryNlZpp       | String |                       |
| textUpperMotor         | String |                       |
| textVac                | String |                       |
| textVacDescription     | String |                       |
| vac                    | String | Yes, No, NT           |

### Style customizaton

| CSS variables                    | Default |
|:---------------------------------|:--------|
| --isncsci-cell-color             | #F2F2F2 |
| --isncsci-interactive-cell-color | #DCDCDC |
| --isncsci-primary-color          | #999    |
| --isncsci-primary-text-color     | #000    |
| --isncsci-secondary-text-color   | #666    |

### Events

| Event Name                    | Event detail       |
|:------------------------------|:-------------------|
| on-comments-change            | {comments: String} |
| on-dap-change                 | {dap: String}      |
| on-interactive-cell-clicked   | {name: String}     |
| on-vac-change                 | {vac: String}      |