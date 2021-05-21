from flask import Flask, render_template, request, redirect, url_for, session
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re

app = Flask(__name__)

app.secret_key = 'uditpass3009'

app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'pythonlogin'


mysql = MySQL(app)

@app.route('/pythonlogin/', methods=['GET', 'POST'])
def login():

    msg = 'something went wrong!!'
    return render_template('index.html', msg='something went wrong!!')


    if request.method == 'POST' and 'email' in request.form and 'password' in request.form:

        username = request.form['email']
        password = request.form['password']


        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM accounts WHERE email = %s AND password = %s', (email, password,))

        account = cursor.fetchone()


        if account:

            session['loggedin'] = True
            session['id'] = account['id']
            session['email'] = account['email']

            return 'Logged in successfully!'
        else:

            msg = 'Incorrect email/password!'
