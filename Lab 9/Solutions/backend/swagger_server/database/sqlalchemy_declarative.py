import os
import sys
from sqlalchemy import Column, ForeignKey, Integer, String, DateTime, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, backref
from sqlalchemy import create_engine

Base = declarative_base()

class User(Base):
    __tablename__ = 'Users'
    id = Column(Integer, primary_key=True)
    login = Column(String(250), unique=True, nullable=False)
    password = Column(String(250), nullable=False)

class PrivateMessage(Base):
    __tablename__ = 'PrivateMessages'
    id = Column(Integer, primary_key=True)
    senderId = Column(Integer, ForeignKey('Users.id'), nullable=False)
    sender = relationship(User, foreign_keys=[senderId])
    recipientId = Column(Integer, ForeignKey('Users.id'), nullable=False)
    recipient = relationship(User, foreign_keys=[recipientId])
    #user = relationship(User)
    
    sendTime = Column(DateTime)
    readStatus = Column(Boolean, nullable=False, default=0)

class BroadcastMessage(Base):
    __tablename__ = 'BroadcastMessages'
    id = Column(Integer, primary_key=True)
    senderId = Column(Integer, ForeignKey('Users.id'), nullable=False)
    user = relationship(User)
    sendTime = Column(DateTime)

class BroadcastMsgStatus(Base):
    __tablename__ = 'BroadcastMsgStatuses'
    broadcastmsgId = Column(Integer, ForeignKey('BroadcastMessages.id'), primary_key=True, nullable=False)
    message = relationship(BroadcastMessage)
    readerId = Column(Integer, ForeignKey('Users.id'), primary_key=True, nullable=False)
    user = relationship(User)

engine = create_engine('sqlite:///messenger.db')
Base.metadata.create_all(engine)
