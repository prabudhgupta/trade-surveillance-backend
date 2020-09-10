
from app import db

class Trade(db.Model):
    __tablename__ = 'trades'

    tradeid = db.Column(db.Integer, primary_key=True)
    tradeby = db.Column(db.String(30))
    tradedate = db.Column(db.DateTime)
    tradetime = db.Column(db.DateTime)
    tradetype = db.Column(db.String(30))
    security = db.Column(db.String(30))
    securitytype = db.Column(db.String(30))
    quantity = db.Column(db.Integer)
    price = db.Column(db.Float,default=0)
    brokername = db.Column(db.String(30))

    def __init__(self, tradeid, tradeby, tradedate,tradetime,tradetype,security,securitytype,quantity,price,brokername):
        self.tradeid = tradeid
        self.tradeby = tradeby
        self.tradedate = tradedate
        self.tradetime=tradetime
        self.tradetype = tradetype
        self.security = security
        self.securitytype = securitytype
        self.quantity = quantity
        self.price = price
        self.brokername = brokername

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'tradeid' : self.tradeid,
            'tradeby':self.tradeby,
            'tradedate':self.tradedate.strftime("%Y-%m-%d"),
            'tradetime':self.tradetime.strftime("%H:%M:%S"),
            'tradetype':self.tradetype,
            'security':self.security,
            'securitytype':self.securitytype,
            'quantity':self.quantity,
            'price':self.price,
            'brokername':self.brokername
        }

class Security(db.Model):
    __tablename__ = 'securities'

    securityid = db.Column(db.Integer, primary_key=True)
    securitytype = db.Column(db.String(30))
    securityname = db.Column(db.String(30))
    initialprice = db.Column(db.Float,default=0)
    currentprice = db.Column(db.Float,default=0)

    def __init__(self,securityid,securitytype,securityname,initialprice,currentprice):
        self.securityid = securityid
        self.securitytype = securitytype
        self.securityname = securityname
        self.initialprice = initialprice
        self.currentprice = currentprice

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self):
        return {
            'securityid':self.securityid,
            'securitytype':self.securitytype,
            'securityname':self.securityname,
            'initialprice':self.initialprice,
            'currentprice':self.currentprice
        }
