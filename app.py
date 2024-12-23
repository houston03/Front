from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
@app.route('/home')
def scroll():
    return render_template('scroll.html')


@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/wiki')
def wiki():
    return render_template('wiki.html')


@app.route('/modern')
def modern():
    return render_template('modern.html')



if __name__ == '__main__':
    app.run()
