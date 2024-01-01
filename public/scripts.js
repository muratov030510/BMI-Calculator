$(document).ready(function() {
    $('#bmiForm').submit(function(e) {
      e.preventDefault();
      const formData = {
        height: $('#height').val(),
        weight: $('#weight').val(),
        age: $('#age').val(),
        gender: $('#gender').val(),
        unit: $('#unit').val()
      };
      const bmi = calculateBMI(formData.height, formData.weight);
      const interpretation = interpretBMI(bmi);
      displayResult(bmi, interpretation);
    });
  
    function calculateBMI(height, weight) {
      const heightMeters = height / 100;
      return (weight / (heightMeters * heightMeters)).toFixed(2);
    }
  
    function interpretBMI(bmi) {
      if (bmi < 18.5) {
        return 'Underweight';
      } else if (bmi >= 18.5 && bmi < 25) {
        return 'Normal weight';
      } else if (bmi >= 25 && bmi < 30) {
        return 'Overweight';
      } else {
        return 'Obese';
      }
    }
  
    function displayResult(bmi, interpretation) {
      const resultSection = $('#resultSection');
      resultSection.html(`<h4>Your BMI: ${bmi}</h4><p>Interpretation: ${interpretation}</p>`);
    }
  });
  