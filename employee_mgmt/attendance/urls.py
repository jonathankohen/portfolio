from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),
    path('employee_dash', views.employee_dash),
    path('punch', views.punch),
    path('employer_dash', views.employer_dash),
    path('which_dash/<int:emp_id>', views.which_dash),
    path('add_employee', views.add_employee),
    path('employees/view/<int:emp_id>', views.show_emp),
    path('employees/delete_punch/<int:att_id>', views.delete_punch),
    path('employees/delete_emp/<int:emp_id>', views.delete_emp),
]
