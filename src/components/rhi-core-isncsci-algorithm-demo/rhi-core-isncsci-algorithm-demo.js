
import { RhiIsncsciValidationTests } from './isncsci-tests.js';
import { IsncsciExam } from '../../algorithm/isncsciExam.js';
import { BinaryObservation } from '../../algorithm/binaryObservation.js';

export class RhiCoreIsncsciAlgorithmDemo {
    constructor(){
        this.tests = new RhiIsncsciValidationTests().all
    }
  loadRandomTest() {
      if (!this.tests || !this.tests.length)
          return;

      let randomTest = this.tests[Math.floor((Math.random() * this.tests.length))];
      this.isncsciExam = new IsncsciExam();

      this.bindExamToTest(this.isncsciExam, randomTest);
    //   this.$.demoExam.setExam(isncsciExam, randomTest.comments);
    //   this.$.demoExam.setTotals(Algorithm.getTotalsFor(isncsciExam));
    return {id:randomTest.id,exam:this.isncsciExam,totals:randomTest.totals};
  }

  bindExamToTest(isncsciExam, test) {
      var keys = ['C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8',
                  'T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12',
                  'L1', 'L2', 'L3', 'L4', 'L5', 'S1', 'S2', 'S3', 'S4_5'];
      var dermatomes = test.dermatomes;
      isncsciExam.analContraction = this.getBinaryObservationFor(test.analContraction);
      isncsciExam.analSensation = this.getBinaryObservationFor(test.analSensation);
      
      if (test.rightLowestNonKeyMuscleWithMotorFunction
              && test.rightLowestNonKeyMuscleWithMotorFunction.length > 1)
          isncsciExam.setRightLowestNonKeyMuscleWithMotorFunction(test.rightLowestNonKeyMuscleWithMotorFunction);
      
      if (test.leftLowestNonKeyMuscleWithMotorFunction
              && test.leftLowestNonKeyMuscleWithMotorFunction.length > 1)
          isncsciExam.setLeftLowestNonKeyMuscleWithMotorFunction(test.leftLowestNonKeyMuscleWithMotorFunction);
      
      for (var i=0; i<keys.length; i++) {
          var key = keys[i];
          var dermatome = dermatomes[key];
          isncsciExam.updateLevelByName(key, dermatome.rightTouch, dermatome.leftTouch, dermatome.rightPrick, dermatome.leftPrick, dermatome.rightMotor, dermatome.leftMotor);
      }
  }

  getBinaryObservationFor(value) {
      var valueToLower = value ? value.toLowerCase() : 'none';
          
      if (valueToLower === 'yes')
          return BinaryObservation.yes;
          
      if (valueToLower === 'no')
          return BinaryObservation.no;
          
      if (valueToLower === 'nt')
          return BinaryObservation.nt;
      
      return BinaryObservation.none;
  }

  loadTest_clicked() {
      this.loadRandomTest();
  }
}
// customElements.define('rhi-core-isncsci-algorithm-demo', RhiCoreIsncsciAlgorithmDemo);