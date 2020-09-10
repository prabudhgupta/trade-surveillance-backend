
from flask import Flask, request,jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://postgres:admin@localhost:5432/db1"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models import Trade
from models import Security

@app.route("/")
def hello():
    return "Hello World!"


@app.route("/getall")
def get_all():
    try:
        trades=Trade.query.all()
        return  jsonify([e.serialize() for e in trades])
    except Exception as e:
	    return(str(e))

@app.route("/get/<id_>")
def get_by_id(id_):
    try:
        trade=Trade.query.filter_by(tradeid=id_).first()
        return jsonify(trade.serialize())
    except Exception as e:
	    return(str(e))

if __name__ == '__main__':
    app.run()
