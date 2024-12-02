# project-5
Student Grade Generator

This program calculates and displays a student's grade based on their marks.

How It Works

The gradeGenrator function prompts the user to enter the marks of a student (between 0 and 100). Based on the input, it determines the grade according to the following criteria:

Grade Criteria:

A: Marks greater than 79

B: Marks between 60 and 79

C: Marks between 50 and 59

D: Marks between 40 and 49

E: Marks below 40

Input Validation:

If the entered marks are not within the range of 0 to 100, the function returns an error message: "enter marks between 0 - 100".

Output:

The program logs the calculated grade to the console using the format: "your grade is <grade>".

Car Speed Monitor

This program calculates demerit points based on the speed of a car and determines whether the driver should receive a warning or if their license should be suspended.

How It Works

The carSpeed function takes the car's speed as input and compares it to the predefined speed limit. If the speed exceeds the limit, demerit points are calculated based on how much the limit is exceeded.

Speed Limit Criteria:

If the speed is less than or equal to 70:

Output: "OK"

If the speed exceeds 70:

Calculate demerit points: demeritPoint = Math.floor((speed - speedLimit) / perKm)

If demerit points exceed 12:

Output: "License suspended"

Otherwise, display the number of demerit points.

Net Salary Calculator

This program calculates an employee's net salary by considering their basic salary, benefits, and statutory deductions (PAYE, NHIF, and NSSF).

How It Works

The netSalaryCalculator function prompts the user to enter their basic salary and benefits. Based on these inputs, it calculates the following:

Gross Salary: Sum of the basic salary and benefits.

PAYE (Tax): Calculated based on the gross salary using tax brackets.

NHIF Deduction: Determined based on predefined NHIF rates.

NSSF Deduction: Calculated as 6% of the gross salary, capped at 1800.

Net Salary: Gross salary minus PAYE, NHIF, and NSSF deductions.

Input Validation

The program ensures that the entered values for basic salary and benefits are numeric. If invalid inputs are provided, the program outputs an error message and terminates.