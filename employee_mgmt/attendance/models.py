from django.db import models
from django.contrib import messages
import bcrypt


class EmployeeManager(models.Manager):
    def regValidator(self, postData):
        errors = {}
        email_filter = Employee.objects.filter(email=postData['email'])

        if len(postData['first_name']) == 0:
            errors['reg_first_name'] = "First name is required."

        if len(postData['last_name']) == 0:
            errors['reg_last_name'] = "Last name is required."

        if len(postData['email']) == 0:
            errors['reg_email_req'] = "Email is required."
        elif len(postData['email']) < 3:
            errors['reg_email_len'] = "Email must be at least 3 characters."
        else:
            if len(email_filter) > 0:
                errors['email_taken'] = "This email is already taken. Please try logging in!"

# ! CHANGE BEFORE FINISHING
        if len(postData['pw']) < 3:
            errors['pw_len'] = "Password must be at least 3 characters."
        if postData['pw'] != postData['c_pw']:
            errors['c_pw_match'] = "Passwords must match."
        return errors

    def loginValidator(self, postData):
        errors = {}
        email_filter = Employee.objects.filter(email=postData['email'])

        if len(postData['email']) == 0:
            errors['login_email_req'] = "Email is required to login."
        elif len(email_filter) == 0:
            errors['email_not_found'] = "Email is not found. Please make sure you've registered."
        else:
            if bcrypt.checkpw(postData['pw'].encode(), email_filter[0].password.encode()):
                print("Password matches.")
            else:
                errors['pw_not_match'] = "Password is incorrect."

        if len(postData['pw']) == 0:
            errors['login_pw_req'] = "Password is required to login."
        return errors

class Employee(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = EmployeeManager()


class Attendance(models.Model):
    employee = models.ForeignKey(
        Employee, related_name="punch_ins", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
