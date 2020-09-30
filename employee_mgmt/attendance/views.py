from django.shortcuts import render, redirect
from .models import Employee, Attendance
from django.contrib import messages
import bcrypt


def index(req):
    return render(req, 'index.html')


def register(req):
    errors = Employee.objects.regValidator(req.POST)
    if len(errors) > 0:
        for value in errors.values():
            messages.error(req, value)
        return redirect("/")
    else:
        pw_hash = bcrypt.hashpw(
            req.POST['pw'].encode(), bcrypt.gensalt()).decode()
        newUser = Employee.objects.create(
            first_name=req.POST['first_name'], last_name=req.POST['last_name'], email=req.POST['email'], password=pw_hash)
        req.session['logged_in_id'] = newUser.id

        if req.POST['email'] == "employer@company.com":
            return redirect('/employer_dash')
        elif 'logged_in_id' in req.session:
            return redirect('/employer_dash')
        else:
            return redirect('/employee_dash')


def login(req):
    errors = Employee.objects.loginValidator(req.POST)
    if len(errors) > 0:
        for value in errors.values():
            messages.error(req, value)
        return redirect("/")
    else:
        print(errors)
        email_filter = Employee.objects.filter(
            email=req.POST['email'])
        req.session['logged_in_id'] = email_filter[0].id
        if req.POST['email'] == "employer@company.com":
            return redirect('/employer_dash')
        else:
            return redirect('/employee_dash')


def logout(req):
    req.session.clear()
    return redirect("/")


def employer_dash(req):
    if 'logged_in_id' not in req.session:
        messages.error(req, "You must log in to see the dashboard.")
        return redirect("/")
    context = {
        'all_attendance': Attendance.objects.all(),
        'all_employees': Employee.objects.all(),
        'logged_in_employee': Employee.objects.get(id=req.session['logged_in_id']),

    }
    return render(req, 'employer_dash.html', context)

def add_employee(req):
    errors = Employee.objects.regValidator(req.POST)
    if len(errors) > 0:
        for value in errors.values():
            messages.error(req, value)
        return redirect("/employer_dash")
    else:
        pw_hash = bcrypt.hashpw(
            req.POST['pw'].encode(), bcrypt.gensalt()).decode()
        new_emp = Employee.objects.create(
            first_name=req.POST['first_name'], last_name=req.POST['last_name'], email=req.POST['email'], password=pw_hash)
        req.session['logged_in_id'] = new_emp.id
        return redirect('/employer_dash')


def employee_dash(req):
    if 'logged_in_id' not in req.session:
        messages.error(req, "You must log in to see the dashboard.")
        return redirect("/")
    context = {
        'logged_in_employee': Employee.objects.get(id=req.session['logged_in_id']),
    }
    return render(req, 'punch.html', context)


def punch(req):
    new_punch = Attendance.objects.create(employee=Employee.objects.get(
        id=req.session['logged_in_id']))

    context = {
        'date_time': new_punch.updated_at,
        'logged_in_employee': Employee.objects.get(id=req.session['logged_in_id']),
    }
    return render(req, 'thanks.html', context)


def show_emp(req, emp_id):
    context = {
        'emp': Employee.objects.get(id=emp_id),
        'emp_attendance': Attendance.objects.filter(employee=Employee.objects.get(
            id=emp_id)),
        'logged_in_employee': Employee.objects.get(id=req.session['logged_in_id']),
    }
    return render(req, 'show_emp.html', context)

def delete_punch(req, att_id):
    print(att_id)
    Attendance.objects.get(id=att_id).delete()
    return redirect('/employer_dash')


def delete_emp(req, emp_id):
    Employee.objects.get(id=emp_id).delete()
    return redirect('/employer_dash')


def which_dash(req, emp_id):
    emp = Employee.objects.get(id=emp_id)
    if emp.id == 1:
        return redirect('/employer_dash')
    elif emp.id != 1:
        return redirect('/employee_dash')
