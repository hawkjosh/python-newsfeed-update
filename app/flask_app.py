from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
  return 'what up JW!?!'

app.run()
