export class IsncsciSummary{
  constructor(summary) {
    this.AsiaImpairmentScale = summary ? summary.AsiaImpairmentScale : '';
    this.Completeness = summary ? summary.Completeness : '';
    this.LeftLowerMotorTotal = summary ? summary.LeftLowerMotorTotal : '';
    this.LeftMotor = summary ? summary.LeftMotor : '';
    this.LeftMotorZpp = summary ? summary.LeftMotorZpp : '';
    this.LeftMotorTotal = summary ? summary.LeftMotorTotal : '';
    this.LeftPrickTotal = summary ? summary.LeftPrickTotal : '';
    this.LeftSensory = summary ? summary.LeftSensory : '';
    this.LeftSensoryZpp = summary ? summary.LeftSensoryZpp : '';
    this.LeftTouchTotal = summary ? summary.LeftTouchTotal : '';
    this.LeftUpperMotorTotal = summary ? summary.LeftUpperMotorTotal : '';
    this.LowerMotorTotal = summary ? summary.LowerMotorTotal : '';
    this.NeurologicalLevelOfInjury = summary ? summary.NeurologicalLevelOfInjury : '';
    this.PrickTotal = summary ? summary.PrickTotal : '';
    this.RightLowerMotorTotal = summary ? summary.RightLowerMotorTotal : '';
    this.RightMotor = summary ? summary.RightMotor : '';
    this.RightMotorZpp = summary ? summary.RightMotorZpp : '';
    this.RightMotorTotal = summary ? summary.RightMotorTotal : '';
    this.RightPrickTotal = summary ? summary.RightPrickTotal : '';
    this.RightSensory = summary ? summary.RightSensory : '';
    this.RightSensoryZpp = summary ? summary.RightSensoryZpp : '';
    this.RightTouchTotal = summary ? summary.RightTouchTotal : '';
    this.RightUpperMotorTotal = summary ? summary.RightUpperMotorTotal : '';
    this.TouchTotal = summary ? summary.TouchTotal : '';
    this.UpperMotorTotal = summary ? summary.UpperMotorTotal : '';
  }
}